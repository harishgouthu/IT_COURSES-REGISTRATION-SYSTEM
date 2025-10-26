


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BatchForm = ({ handleClose }) => {
//     const [courses, setCourses] = useState([]);
//     const [formData, setFormData] = useState({
//         course: '',
//         batch_number: '',
//         start_date: '',
//         end_date: '',
//         status: 'active',
//     });

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/admin-tables/add-course/'); // Adjust the endpoint as necessary
//             setCourses(response.data);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     useEffect(() => {
//         fetchCourses();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // Create new batch
//             await axios.post('http://127.0.0.1:8000/admin-tables/batches/', formData);
//             alert('Batch added successfully!');
//             handleClose(); // Close the form after submission
//         } catch (error) {
//             console.error('Error saving batch:', error);
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">Add New Batch</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-1">
//                     Course:
//                     <select
//                         name="course"
//                         value={formData.course}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     >
//                         <option value="">Select a course</option>
//                         {courses.map(course => (
//                             <option key={course.id} value={course.id}>
//                                 {course.title}
//                             </option>
//                         ))}
//                     </select>
//                 </label>
//                 <label className="block mb-1">
//                     Batch Number:
//                     <input
//                         type="text"
//                         name="batch_number"
//                         value={formData.batch_number}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-1">
//                     Start Date:
//                     <input
//                         type="date"
//                         name="start_date"
//                         value={formData.start_date ? formData.start_date.slice(0, 10) : ''}
//                         onChange={handleChange}
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-1">
//                     End Date:
//                     <input
//                         type="date"
//                         name="end_date"
//                         value={formData.end_date ? formData.end_date.slice(0, 10) : ''}
//                         onChange={handleChange}
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-1">
//                     Status:
//                     <select
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     >
//                         <option value="active">Active</option>
//                         <option value="inactive">Inactive</option>
//                         <option value="completed">Completed</option>
//                     </select>
//                 </label>
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
//                         Save Batch
//                     </button>
//                     <button 
//                         type="button" 
//                         onClick={handleClose} 
//                         className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BatchForm;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const BatchForm = ({ handleClose, batch }) => {
//     const [courses, setCourses] = useState([]);
//     const [formData, setFormData] = useState({
//         course: '',
//         batch_number: '',
//         start_date: '',
//         end_date: '',
//         status: 'active',
//     });
//     const [message, setMessage] = useState(null);

//     useEffect(() => {
//         fetchCourses();
//         if (batch) {
//             setFormData({
//                 course: batch.course,
//                 batch_number: batch.batch_number,
//                 start_date: batch.start_date.slice(0, 10),
//                 end_date: batch.end_date.slice(0, 10),
//                 status: batch.status,
//             });
//         }
//     }, [batch]);

//     const fetchCourses = async () => {
//         try {
//             const response = await axios.get('http://127.0.0.1:8000/admin-tables/add-course/');
//             setCourses(response.data);
//         } catch (error) {
//             console.error('Error fetching courses:', error);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevData => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (batch) {
//                 await axios.put(`http://127.0.0.1:8000/admin-tables/batches/${batch.id}/`, formData);
//                 setMessage({ type: 'success', content: 'Batch updated successfully!' });
//             } else {
//                 await axios.post('http://127.0.0.1:8000/admin-tables/batches/', formData);
//                 setMessage({ type: 'success', content: 'Batch added successfully!' });
//             }
//             handleClose(); // Close the form after submission
//         } catch (error) {
//             console.error('Error saving batch:', error);
//             setMessage({ type: 'error', content: 'Failed to save batch. Please try again.' });
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{batch ? 'Edit Batch' : 'Add New Batch'}</h2>
//             {message && (
//                 <div className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
//                     {message.content}
//                 </div>
//             )}
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-1">
//                     Course:
//                     <select
//                         name="course"
//                         value={formData.course}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     >
//                         <option value="">Select a course</option>
//                         {courses.map(course => (
//                             <option key={course.id} value={course.id}>
//                                 {course.title}
//                             </option>
//                         ))}
//                     </select>
//                 </label>
//                 <label className="block mb-1">
//                     Batch Number:
//                     <input
//                         type="text"
//                         name="batch_number"
//                         value={formData.batch_number}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-1">
//                     Start Date:
//                     <input
//                         type="date"
//                         name="start_date"
//                         value={formData.start_date}
//                         onChange={handleChange}
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-1">
//                     End Date:
//                     <input
//                         type="date"
//                         name="end_date"
//                         value={formData.end_date}
//                         onChange={handleChange}
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-1">
//                     Status:
//                     <select
//                         name="status"
//                         value={formData.status}
//                         onChange={handleChange}
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     >
//                         <option value="active">Active</option>
//                         <option value="inactive">Inactive</option>
//                         <option value="completed">Completed</option>
//                     </select>
//                 </label>
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
//                         {batch ? 'Update Batch' : 'Save Batch'}
//                     </button>
//                     <button 
//                         type="button" 
//                         onClick={handleClose} 
//                         className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default BatchForm;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BatchForm = ({ handleClose, batch }) => {
    const [courses, setCourses] = useState([]);
    const [formData, setFormData] = useState({
        course: '',
        batch_number: '',
        start_date: '',
        end_date: '',
        status: 'active',
    });
    const [message, setMessage] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false); // New state for tracking form submission

    useEffect(() => {
        fetchCourses();
        if (batch) {
            setFormData({
                course: batch.course,
                batch_number: batch.batch_number,
                start_date: batch.start_date.slice(0, 10),
                end_date: batch.end_date.slice(0, 10),
                status: batch.status,
            });
        }
    }, [batch]);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/admin-tables/add-course/');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (batch) {
                await axios.put(`http://127.0.0.1:8000/admin-tables/batches/${batch.id}/`, formData);
                setMessage({ type: 'success', content: 'Batch updated successfully!' });
            } else {
                await axios.post('http://127.0.0.1:8000/admin-tables/batches/', formData);
                setMessage({ type: 'success', content: 'Batch added successfully!' });
            }
            setFormSubmitted(true); // Set formSubmitted to true
        } catch (error) {
            console.error('Error saving batch:', error);
            setMessage({ type: 'error', content: 'Failed to save batch. Please try again.' });
        }
    };

    useEffect(() => {
        if (formSubmitted) {
            const timer = setTimeout(() => {
                handleClose(); // Close the form after the message is displayed
                setMessage(null); // Clear message
                setFormSubmitted(false); // Reset formSubmitted state
            }, 3000); // Show message for 3 seconds

            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [formSubmitted, handleClose]);

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{batch ? 'Edit Batch' : 'Add New Batch'}</h2>
            {message && (
                <div className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {message.content}
                </div>
            )}
            <form onSubmit={handleSubmit}>
                <label className="block mb-1">
                    Course:
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    >
                        <option value="">Select a course</option>
                        {courses.map(course => (
                            <option key={course.id} value={course.id}>
                                {course.title}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="block mb-1">
                    Batch Number:
                    <input
                        type="text"
                        name="batch_number"
                        value={formData.batch_number}
                        onChange={handleChange}
                        required
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                </label>
                <label className="block mb-1">
                    Start Date:
                    <input
                        type="date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                </label>
                <label className="block mb-1">
                    End Date:
                    <input
                        type="date"
                        name="end_date"
                        value={formData.end_date}
                        onChange={handleChange}
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                </label>
                <label className="block mb-1">
                    Status:
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                        <option value="completed">Completed</option>
                    </select>
                </label>
                <div className="mt-4 flex justify-between">
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
                        {batch ? 'Update Batch' : 'Save Batch'}
                    </button>
                    <button 
                        type="button" 
                        onClick={handleClose} 
                        className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BatchForm;
