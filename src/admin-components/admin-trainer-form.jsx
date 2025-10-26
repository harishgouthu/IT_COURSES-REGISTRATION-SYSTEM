




// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.startsWith(name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// };

// const AddTrainerForm = ({ onClose = () => {} }) => {
//     const [formData, setFormData] = useState({
//         trainer_name: '',
//         qualification: '',
//         college_university: '',
//         it_experience: '',
//         training_experience: '',
//         email: '',
//         country_code: '+91', 
//         mobile_number: '',
//     });
//     const [error, setError] = useState('');
//     const [countryCodes, setCountryCodes] = useState([]);
//     const formRef = useRef(null); 

//     useEffect(() => {
//         axios.get('http://localhost:8000/admin-tables/countrycodes/')
//             .then(response => {
//                 setCountryCodes(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching country codes:', error);
//                 setError('Failed to load country codes.');
//             });
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'country_code') {
//             const selectedCountry = countryCodes.find(country => country.code === value);
//             setFormData({ ...formData, [name]: selectedCountry.code });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');

//         if (!formData.email.endsWith('@gmail.com')) {
//             setError('Only Gmail IDs are accepted. Please enter a valid Gmail ID.');
//             return;
//         }
//         if (!/^\d{10}$/.test(formData.mobile_number)) {
//             setError('Mobile number must be a 10-digit number.');
//             return;
//         }

//         axios.post('http://localhost:8000/admin-tables/trainers/', formData, {
//             headers: {
//                 'X-CSRFToken': getCookie('csrftoken')
//             }
//         })
//         .then(response => {
//             console.log('Trainer added:', response.data);
//             setFormData({
//                 trainer_name: '',
//                 qualification: '',
//                 college_university: '',
//                 it_experience: '',
//                 training_experience: '',
//                 email: '',
//                 country_code: '+91', // Reset to default
//                 mobile_number: '',
//             });
//             setError('Trainer added successfully!');
//             setTimeout(() => onClose(), 2000);  // Close the form after 2 seconds
//         })
//         .catch(error => {
//             console.error('Error adding trainer:', error);
//             if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         });
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div ref={formRef} className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
//                 <h2 className="text-lg text-center font-semibold mb-3 text-blue-600">Add Trainer</h2>
//                 <form onSubmit={handleSubmit}>
//                     {/* Trainer Name */}
//                     <label className="block mb-1">
//                         Trainer Name:
//                         <input
//                             type="text"
//                             name="trainer_name"
//                             value={formData.trainer_name}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="25"
//                             pattern="[A-Za-z\s\.]+"
//                             title="Only dots, alphabets, and spaces are allowed."
//                         />
//                     </label>
//                     {/* Qualification */}
//                     <label className="block mb-1">
//                         Qualification:
//                         <input
//                             type="text"
//                             name="qualification"
//                             value={formData.qualification}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="10"
//                         />
//                     </label>
//                     {/* College/University */}
//                     <label className="block mb-1">
//                         College/University:
//                         <input
//                             type="text"
//                             name="college_university"
//                             value={formData.college_university}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="30"
//                         />
//                     </label>
//                     {/* IT Experience */}
//                     <label className="block mb-1">
//                         IT Experience (Years):
//                         <input
//                             type="number"
//                             name="it_experience"
//                             value={formData.it_experience}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             min="3"
//                             max="50"
//                         />
//                     </label>
//                     {/* Training Experience */}
//                     <label className="block mb-1">
//                         Training Experience (Years):
//                         <input
//                             type="number"
//                             name="training_experience"
//                             value={formData.training_experience}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             min="3"
//                             max="50"
//                         />
//                     </label>
//                     {/* Email */}
//                     <label className="block mb-1">
//                         Email:
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="60"
//                         />
//                         <span className="text-gray-500 text-sm">This will be used to communicate with trainers officially by the administrator.</span>
//                     </label>
//                     {/* Country Code */}
//                     <label className="block mb-1">
//                         Country Code:
//                         <select
//                             name="country_code"
//                             value={formData.country_code}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         >
//                             {countryCodes.map((country, index) => (
//                                 <option key={index} value={country.code}>
//                                     {country.code} ({country.name})
//                                 </option>
//                             ))}
//                         </select>
//                     </label>
//                     {/* Mobile Number */}
//                     <label className="block mb-1">
//                         Mobile Number:
//                         <input
//                             type="text"
//                             name="mobile_number"
//                             value={formData.mobile_number}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="10"
//                             pattern="\d{10}"
//                             title="Mobile number must be a 10-digit number."
//                         />
//                         <span className="text-gray-500 text-sm">Mobile number will be used to communicate with the trainer by the administrator over WhatsApp.</span>
//                     </label>
//                     {error && <p className="text-red-500">{error}</p>}
//                     <div className="mt-4">
//                         <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">Submit</button>
//                         <button type="button" onClick={onClose} className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddTrainerForm;



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';

// const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.startsWith(name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// };

// const AddTrainerForm = ({ onClose = () => {}, trainer = null }) => {
//     const [formData, setFormData] = useState({
//         trainer_name: '',
//         qualification: '',
//         college_university: '',
//         it_experience: '',
//         training_experience: '',
//         email: '',
//         country_code: '+91',
//         mobile_number: '',
//     });
//     const [error, setError] = useState('');
//     const [countryCodes, setCountryCodes] = useState([]);
//     const formRef = useRef(null); 

//     useEffect(() => {
//         axios.get('http://localhost:8000/admin-tables/countrycodes/')
//             .then(response => {
//                 setCountryCodes(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching country codes:', error);
//                 setError('Failed to load country codes.');
//             });

//         // Populate form with existing trainer data if available
//         if (trainer) {
//             setFormData({
//                 trainer_name: trainer.trainer_name,
//                 qualification: trainer.qualification,
//                 college_university: trainer.college_university,
//                 it_experience: trainer.it_experience,
//                 training_experience: trainer.training_experience,
//                 email: trainer.email,
//                 country_code: trainer.country_code,
//                 mobile_number: trainer.mobile_number,
//             });
//         }
//     }, [trainer]); // Update when trainer changes

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'country_code') {
//             const selectedCountry = countryCodes.find(country => country.code === value);
//             setFormData({ ...formData, [name]: selectedCountry.code });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');

//         if (!formData.email.endsWith('@gmail.com')) {
//             setError('Only Gmail IDs are accepted. Please enter a valid Gmail ID.');
//             return;
//         }
//         if (!/^\d{10}$/.test(formData.mobile_number)) {
//             setError('Mobile number must be a 10-digit number.');
//             return;
//         }

//         const url = trainer ? `http://localhost:8000/admin-tables/trainers/${trainer.id}/` : 'http://localhost:8000/admin-tables/trainers/';
//         const method = trainer ? 'put' : 'post';

//         axios({
//             method: method,
//             url: url,
//             data: formData,
//             headers: {
//                 'X-CSRFToken': getCookie('csrftoken'),
//                 'Content-Type': 'application/json',
//             },
//         })
//         .then(response => {
//             console.log('Trainer saved:', response.data);
//             setFormData({
//                 trainer_name: '',
//                 qualification: '',
//                 college_university: '',
//                 it_experience: '',
//                 training_experience: '',
//                 email: '',
//                 country_code: '+91', // Reset to default
//                 mobile_number: '',
//             });
//             setError('Trainer added/updated successfully!');
//             setTimeout(() => onClose(), 2000);  // Close the form after 2 seconds
//         })
//         .catch(error => {
//             console.error('Error saving trainer:', error);
//             if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         });
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div ref={formRef} className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
//                 <h2 className="text-lg text-center font-semibold mb-3 text-blue-600">{trainer ? 'Update Trainer' : 'Add Trainer'}</h2>
//                 <form onSubmit={handleSubmit}>
//                     {/* Trainer Name */}
//                     <label className="block mb-1">
//                         Trainer Name:
//                         <input
//                             type="text"
//                             name="trainer_name"
//                             value={formData.trainer_name}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="25"
//                             pattern="[A-Za-z\s\.]+"
//                             title="Only dots, alphabets, and spaces are allowed."
//                         />
//                     </label>
//                     {/* Qualification */}
//                     <label className="block mb-1">
//                         Qualification:
//                         <input
//                             type="text"
//                             name="qualification"
//                             value={formData.qualification}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="10"
//                         />
//                     </label>
//                     {/* College/University */}
//                     <label className="block mb-1">
//                         College/University:
//                         <input
//                             type="text"
//                             name="college_university"
//                             value={formData.college_university}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="30"
//                         />
//                     </label>
//                     {/* IT Experience */}
//                     <label className="block mb-1">
//                         IT Experience (Years):
//                         <input
//                             type="number"
//                             name="it_experience"
//                             value={formData.it_experience}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             min="3"
//                             max="50"
//                         />
//                     </label>
//                     {/* Training Experience */}
//                     <label className="block mb-1">
//                         Training Experience (Years):
//                         <input
//                             type="number"
//                             name="training_experience"
//                             value={formData.training_experience}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             min="3"
//                             max="50"
//                         />
//                     </label>
//                     {/* Email */}
//                     <label className="block mb-1">
//                         Email:
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="60"
//                         />
//                         <span className="text-gray-500 text-sm">This will be used to communicate with trainers officially by the administrator.</span>
//                     </label>
//                     {/* Country Code */}
//                     <label className="block mb-1">
//                         Country Code:
//                         <select
//                             name="country_code"
//                             value={formData.country_code}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         >
//                             {countryCodes.map((country, index) => (
//                                 <option key={index} value={country.code}>
//                                     {country.code} ({country.name})
//                                 </option>
//                             ))}
//                         </select>
//                     </label>
//                     {/* Mobile Number */}
//                     <label className="block mb-1">
//                         Mobile Number:
//                         <input
//                             type="text"
//                             name="mobile_number"
//                             value={formData.mobile_number}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             maxLength="10"
//                             pattern="\d{10}"
//                             title="Mobile number must be a 10-digit number."
//                         />
//                         <span className="text-gray-500 text-sm">Mobile number will be used to communicate with the trainer by the administrator over WhatsApp.</span>
//                     </label>
//                     {error && <p className="text-red-500">{error}</p>}
//                     <div className="mt-4">
//                         <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
//                             {trainer ? 'Update' : 'Submit'}
//                         </button>
//                         <button 
//                             type="button" 
//                             onClick={onClose} 
//                             className="ml-2 bg-gray-300 text-gray-700 px-2 py-1 rounded-md hover:bg-gray-400 transition"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddTrainerForm;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

const AddTrainerForm = ({ onClose = () => {}, trainer = null }) => {
    const [formData, setFormData] = useState({
        trainer_name: '',
        qualification: '',
        college_university: '',
        it_experience: '',
        training_experience: '',
        email: '',
        country_code: '+91',
        mobile_number: '',
    });
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [countryCodes, setCountryCodes] = useState([]);
    const formRef = useRef(null);

    useEffect(() => {
        // Fetch country codes from API
        axios.get('http://localhost:8000/admin-tables/countrycodes/')
            .then(response => {
                setCountryCodes(response.data);
            })
            .catch(error => {
                console.error('Error fetching country codes:', error);
                setError('Failed to load country codes.');
            });

        // Populate form with existing trainer data if available
        if (trainer) {
            setFormData({
                trainer_name: trainer.trainer_name,
                qualification: trainer.qualification,
                college_university: trainer.college_university,
                it_experience: trainer.it_experience,
                training_experience: trainer.training_experience,
                email: trainer.email,
                country_code: trainer.country_code,
                mobile_number: trainer.mobile_number,
            });
        } else {
            // Reset form for adding a new trainer
            setFormData({
                trainer_name: '',
                qualification: '',
                college_university: '',
                it_experience: '',
                training_experience: '',
                email: '',
                country_code: '+91',
                mobile_number: '',
            });
        }
    }, [trainer]); // Update when trainer changes

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccessMessage(''); // Clear previous success message

        // Validation checks
        if (!formData.email.endsWith('@gmail.com')) {
            setError('Only Gmail IDs are accepted. Please enter a valid Gmail ID.');
            return;
        }
        if (!/^\d{10}$/.test(formData.mobile_number)) {
            setError('Mobile number must be a 10-digit number.');
            return;
        }

        const url = trainer ? `http://localhost:8000/admin-tables/trainers/${trainer.id}/` : 'http://localhost:8000/admin-tables/trainers/';
        const method = trainer ? 'put' : 'post';

        axios({
            method: method,
            url: url,
            data: formData,
            headers: {
                'X-CSRFToken': getCookie('csrftoken'),
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log('Trainer saved:', response.data);
            // Reset form data after successful submission
            setFormData({
                trainer_name: '',
                qualification: '',
                college_university: '',
                it_experience: '',
                training_experience: '',
                email: '',
                country_code: '+91',
                mobile_number: '',
            });
            
            // Set success message based on the operation
            setSuccessMessage(trainer ? 'Trainer updated successfully!' : 'Trainer added successfully!');
            
            // Automatically close the form after 2 seconds
            setTimeout(() => onClose(), 2000); 
        })
        .catch(error => {
            console.error('Error saving trainer:', error);
            if (error.response && error.response.status === 403) {
                setError('CSRF token missing or invalid.');
            } else {
                setError('An error occurred. Please try again.');
            }
        });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div ref={formRef} className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-lg text-center font-semibold mb-3 text-blue-600">{trainer ? 'Update Trainer' : 'Add Trainer'}</h2>
                <form onSubmit={handleSubmit}>
                    {/* Trainer Name */}
                    <label className="block mb-1">
                        Trainer Name:
                        <input
                            type="text"
                            name="trainer_name"
                            value={formData.trainer_name}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            maxLength="25"
                            pattern="[A-Za-z\s\.]+"
                            title="Only dots, alphabets, and spaces are allowed."
                        />
                    </label>
                    {/* Qualification */}
                    <label className="block mb-1">
                        Qualification:
                        <input
                            type="text"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            maxLength="10"
                        />
                    </label>
                    {/* College/University */}
                    <label className="block mb-1">
                        College/University:
                        <input
                            type="text"
                            name="college_university"
                            value={formData.college_university}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            maxLength="30"
                        />
                    </label>
                    {/* IT Experience */}
                    <label className="block mb-1">
                        IT Experience (Years):
                        <input
                            type="number"
                            name="it_experience"
                            value={formData.it_experience}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            min="3"
                            max="50"
                        />
                    </label>
                    {/* Training Experience */}
                    <label className="block mb-1">
                        Training Experience (Years):
                        <input
                            type="number"
                            name="training_experience"
                            value={formData.training_experience}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            min="3"
                            max="50"
                        />
                    </label>
                    {/* Email */}
                    <label className="block mb-1">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            maxLength="60"
                        />
                    </label>
                    {/* Country Code */}
                    <label className="block mb-1">
                        Country Code:
                        <select
                            name="country_code"
                            value={formData.country_code}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            {countryCodes.map((country) => (
                                <option key={country.code} value={country.code}>
                                    {country.code} ({country.name})
                                </option>
                            ))}
                        </select>
                    </label>
                    {/* Mobile Number */}
                    <label className="block mb-1">
                        Mobile Number:
                        <input
                            type="text"
                            name="mobile_number"
                            value={formData.mobile_number}
                            onChange={handleChange}
                            required
                            className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            maxLength="10"
                            pattern="\d{10}"
                            title="Mobile number must be a 10-digit number."
                        />
                    </label>
                    {error && <p className="text-red-500">{error}</p>}
                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    <div className="mt-4">
                        <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
                            {trainer ? 'Update Trainer' : 'Add Trainer'}
                        </button>
                        <button type="button" onClick={onClose} className="ml-2 bg-gray-300 px-2 py-1 rounded-md hover:bg-gray-400 transition">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTrainerForm;

