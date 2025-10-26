

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '',
    mobileNumber: '',
    course: '',
    batch: '',
  });

  const [courses, setCourses] = useState([]);
  const [batches, setBatches] = useState([]);
  const [countryCodes, setCountryCodes] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to handle error messages

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/admin-tables/add-course')
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));

    axios.get('http://127.0.0.1:8000/admin-tables/countrycodes/')
      .then(response => setCountryCodes(response.data))
      .catch(error => console.error('Error fetching country codes:', error));
  }, []);

  const handleCourseChange = (e) => {
    const selectedCourseId = e.target.value;
    setFormData({ ...formData, course: selectedCourseId, batch: '' });

    if (selectedCourseId) {
      axios.get(`http://127.0.0.1:8000/admin-tables/batches/?course=${selectedCourseId}`)
        .then(response => setBatches(response.data))
        .catch(error => console.error('Error fetching batches:', error));
    } else {
      setBatches([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        mobile_number: formData.mobileNumber,
      },
      country_code: formData.countryCode,
      course: formData.course,
      batch: formData.batch,
    };

    axios.post('http://127.0.0.1:8000/users/register/', payload)
      .then(response => {
        setSuccessMessage('Registration successful!');
        setErrorMessage(''); // Clear any previous error messages
        
        setTimeout(() => {
          handleClose(); // Close the popup after showing the success message
          resetForm();
        }, 3000);
      })
      .catch(error => {
        if (error.response && error.response.data && error.response.data.user && error.response.data.user.email) {
          setErrorMessage(error.response.data.user.email[0]);
        } else {
          setErrorMessage('An error occurred. Please try again.');
        }
      });
  };

  // Reset form fields
  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '',
      mobileNumber: '',
      course: '',
      batch: '',
    });
    setSuccessMessage('');
    setErrorMessage('');
  };

  // Ensure form fields are reset when popup is closed
  const handleCloseModal = () => {
    resetForm();
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-4 w-80">
        <h2 className="text-xl text-center text-blue-700 font-bold mb-2">Register</h2>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <div className="mb-2">
            <label htmlFor="firstName" className="block text-gray-700 text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              maxLength="40"
              required
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-1 w-full text-black"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="lastName" className="block text-gray-700 text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              maxLength="40"
              required
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-1 w-full text-black"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="block text-gray-700 text-sm">Email</label>
            <input
              type="email"
              name="email"
              maxLength="60"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-1 w-full text-black"
            />
          </div>
          <div className="mb-2 flex">
            <div className="flex-1 mr-1">
              <label htmlFor="countryCode" className="block text-gray-700 text-sm">Country Code</label>
              <select
                name="countryCode"
                required
                value={formData.countryCode}
                onChange={handleInputChange}
                className="border border-gray-300 rounded p-1 w-full text-black"
              >
                <option value="">Select country code</option>
                {countryCodes.map(code => (
                  <option key={code.id} value={code.id}>
                     {code.code} ({code.name})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="mobileNumber" className="block text-gray-700 text-sm">Mobile Number</label>
              <input
                type="text"
                name="mobileNumber"
                maxLength="10"
                required
                value={formData.mobileNumber}
                onChange={handleInputChange}
                pattern="\d{10}"
                className="border border-gray-300 rounded p-1 w-full text-black"
              />
            </div>
          </div>
          <div className="mb-2">
            <label htmlFor="course" className="block text-gray-700 text-sm">Course Name</label>
            <select
              name="course"
              required
              value={formData.course}
              onChange={handleCourseChange}
              className="border border-gray-300 rounded p-1 w-full text-black"
            >
              <option value="">Select a course</option>
              {courses.map(course => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor="batch" className="block text-gray-700 text-sm">Batch Number</label>
            <select
              name="batch"
              required
              value={formData.batch}
              onChange={handleInputChange}
              className="border border-gray-300 rounded p-1 w-full text-black"
              disabled={!formData.course}
            >
              <option value="">Select a batch</option>
              {batches.map(batch => (
                <option key={batch.id} value={batch.id}>
                  {batch.batch_number}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600">
              Submit
            </button>
            <button type="button" onClick={handleCloseModal} className="bg-gray-300 text-gray-700 rounded px-3 py-1 hover:bg-gray-400">
              Cancel
            </button>
          </div>
        </form>
        {errorMessage && (
          <p className="mt-2 text-center text-red-500">{errorMessage}</p>
        )}
        {successMessage && (
          <p className="mt-2 text-center text-green-500">{successMessage}</p>
        )}
      </div>
    </div>
  );
};

export default Register;
