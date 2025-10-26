
// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import './AddTopicForm.css'; // Ensure you have relevant styles in this file

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

// const AddTopicForm = ({ onClose = () => {} }) => {
//     const [formData, setFormData] = useState({
//         topic_name: '',
//         duration: '',
//     });
//     const [existingTopics, setExistingTopics] = useState([]);
//     const [error, setError] = useState('');
//     const topicOptions = [
//         "Python Basics",
//         "Advanced Python",
//         "Regular Expressions",
//         "Database/SQL",
//         "Django",
//         "Data Libraries",
//         "Mathematics",
//         "Machine Learning",
//         "HTML",
//         "CSS",
//         "Bootstrap",
//         "JavaScript",
//         "React JS"
//     ];
//     const formRef = useRef(null); // Create a ref for the popup

//     useEffect(() => {
//         // Fetch existing topics from the API
//         axios.get('http://localhost:8000/admin-tables/topics/')
//             .then(response => setExistingTopics(response.data))
//             .catch(error => console.error('Error fetching existing topics:', error));
//     }, []);

//     const closePopup = () => {
//         onClose(); // Close the popup
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setError('');

//         const duration = parseInt(formData.duration, 10);
//         const isTopicNameExisting = existingTopics.some(
//             topic => topic.topic_name.toLowerCase() === formData.topic_name.toLowerCase()
//         );

//         if (!topicOptions.includes(formData.topic_name)) {
//             setError('Please select a valid topic.');
//             return;
//         }
//         if (isNaN(duration) || duration < 1 || duration > 80) {
//             setError('Duration must be a positive integer between 1 and 80.');
//             return;
//         }
//         if (isTopicNameExisting) {
//             setError('This topic name is already added.');
//             return;
//         }

//         axios.post('http://localhost:8000/admin-tables/topics/', formData, {
//             headers: {
//                 'X-CSRFToken': getCookie('csrftoken')
//             }
//         })
//         .then(response => {
//             console.log('Topic added:', response.data);
//             setFormData({
//                 topic_name: '',
//                 duration: '',
//             });
//             setError('Topic added successfully!');
//             setTimeout(() => closePopup(), 2000); // Close the form after 2 seconds
//         })
//         .catch(error => {
//             console.error('Error adding topic:', error);
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
//                 <h2 className="text-lg text-center font-semibold mb-3 text-blue-600">Add Topic</h2>
//                 <form onSubmit={handleSubmit}>
//                     <label className="block mb-1">
//                         Topic Name:
//                         <select
//                             name="topic_name"
//                             value={formData.topic_name}
//                             onChange={handleChange}
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         >
//                             <option value="">Select a topic</option>
//                             {topicOptions.map((topic, index) => (
//                                 <option key={index} value={topic}>
//                                     {topic}
//                                 </option>
//                             ))}
//                         </select>
//                     </label>
//                     <label className="block mb-1">
//                         Duration:
//                         <input
//                             type="number"
//                             name="duration"
//                             value={formData.duration}
//                             onChange={handleChange}
//                             min="1"
//                             max="80"
//                             required
//                             className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//                         />
//                         <span className="text-gray-500 text-sm">days</span>
//                     </label>
//                     {error && <p className="text-red-500">{error}</p>}
//                     <div className="mt-4">
//                         <button type="submit" className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">Submit</button>
//                         <button type="button" onClick={closePopup} className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">Cancel</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AddTopicForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddTopicForm = ({ handleClose, topic = null }) => {
//     const [formData, setFormData] = useState({
//         topic_name: '',
//         duration: '',
//     });
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     useEffect(() => {
//         // Populate form with existing topic data if available
//         if (topic) {
//             setFormData({
//                 topic_name: topic.topic_name,
//                 duration: topic.duration,
//             });
//         } else {
//             // Reset form for adding a new topic
//             setFormData({
//                 topic_name: '',
//                 duration: '',
//             });
//         }
//     }, [topic]); // Update when topic changes

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccessMessage(''); // Clear previous success message

//         // Validation checks (if any)
//         if (!formData.topic_name.trim()) {
//             setError('Topic Name is required.');
//             return;
//         }
//         if (formData.duration <= 0) {
//             setError('Duration must be a positive number.');
//             return;
//         }

//         const url = topic ? `http://127.0.0.1:8000/admin-tables/topics/${topic.id}/` : 'http://127.0.0.1:8000/admin-tables/topics/';
//         const method = topic ? 'put' : 'post';

//         try {
//             await axios({
//                 method: method,
//                 url: url,
//                 data: formData,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Set success message based on the operation
//             setSuccessMessage(topic ? 'Topic updated successfully!' : 'Topic added successfully!');
//             handleClose(); // Close the form after submission
//         } catch (error) {
//             console.error('Error saving topic:', error);
//             if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{topic ? 'Update Topic' : 'Add New Topic'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                     Topic Name:
//                     <input
//                         type="text"
//                         name="topic_name"
//                         value={formData.topic_name}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Duration (days):
//                     <input
//                         type="number"
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 {error && <p className="text-red-500">{error}</p>}
//                 {successMessage && <p className="text-green-500">{successMessage}</p>}
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                         {topic ? 'Update Topic' : 'Save Topic'}
//                     </button>
//                     <button 
//                         type="button" 
//                         onClick={handleClose} 
//                         className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition ml-2">
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddTopicForm;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddTopicForm = ({ handleClose, topic = null }) => {
//     const [formData, setFormData] = useState({
//         topic_name: '',
//         duration: '',
//     });
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     useEffect(() => {
//         // Populate form with existing topic data if available
//         if (topic) {
//             setFormData({
//                 topic_name: topic.topic_name,
//                 duration: topic.duration,
//             });
//         } else {
//             // Reset form for adding a new topic
//             setFormData({
//                 topic_name: '',
//                 duration: '',
//             });
//         }
//     }, [topic]); // Update when topic changes

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccessMessage(''); // Clear previous success message

//         // Validation checks (if any)
//         if (!formData.topic_name.trim()) {
//             setError('Topic Name is required.');
//             return;
//         }
//         if (formData.duration <= 0) {
//             setError('Duration must be a positive number.');
//             return;
//         }

//         const url = topic ? `http://127.0.0.1:8000/admin-tables/topics/${topic.id}/` : 'http://127.0.0.1:8000/admin-tables/topics/';
//         const method = topic ? 'put' : 'post';

//         try {
//             await axios({
//                 method: method,
//                 url: url,
//                 data: formData,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Clear error message and set success message
//             setError('');
//             setSuccessMessage(topic ? 'Topic updated successfully!' : 'Topic added successfully!');

//             // Close the form after a short delay to allow the user to see the success message
//             setTimeout(() => handleClose(), 1000);
//         } catch (error) {
//             console.error('Error saving topic:', error);
//             if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{topic ? 'Update Topic' : 'Add New Topic'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                     Topic Name:
//                     <input
//                         type="text"
//                         name="topic_name"
//                         value={formData.topic_name}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Duration (days):
//                     <input
//                         type="number"
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 {error && <p className="text-red-500">{error}</p>}
//                 {successMessage && <p className="text-green-500">{successMessage}</p>}
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                         {topic ? 'Update Topic' : 'Save Topic'}
//                     </button>
//                     <button 
//                         type="button" 
//                         onClick={handleClose} 
//                         className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition ml-2">
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddTopicForm;


// //AddTopicForm.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddTopicForm = ({ handleClose, topic = null }) => {
//     const [formData, setFormData] = useState({
//         topic_name: '',
//         duration: '',
//     });
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     useEffect(() => {
//         if (topic) {
//             setFormData({
//                 topic_name: topic.topic_name,
//                 duration: topic.duration,
//             });
//         } else {
//             setFormData({
//                 topic_name: '',
//                 duration: '',
//             });
//         }
//     }, [topic]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccessMessage('');

//         if (!formData.topic_name.trim()) {
//             setError('Topic Name is required.');
//             return;
//         }
//         if (formData.duration <= 0) {
//             setError('Duration must be a positive number.');
//             return;
//         }

//         const url = topic ? `http://127.0.0.1:8000/admin-tables/topics/${topic.id}/` : 'http://127.0.0.1:8000/admin-tables/topics/';
//         const method = topic ? 'put' : 'post';

//         try {
//             await axios({
//                 method: method,
//                 url: url,
//                 data: formData,
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             setError('');
//             setSuccessMessage(topic ? 'Topic updated successfully!' : 'Topic added successfully!');
//             setTimeout(() => handleClose(), 1000);
//         } catch (error) {
//             console.error('Error saving topic:', error);
//             if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{topic ? 'Update Topic' : 'Add New Topic'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                     Topic Name:
//                     <input
//                         type="text"
//                         name="topic_name"
//                         value={formData.topic_name}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Duration (days):
//                     <input
//                         type="number"
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 {error && <p className="text-red-500">{error}</p>}
//                 {successMessage && <p className="text-green-500">{successMessage}</p>}
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                         {topic ? 'Update Topic' : 'Save Topic'}
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddTopicForm;




// import React, { useState, useEffect } from 'react';
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

// const AddTopicForm = ({ handleClose, topic = null }) => {
//     const [formData, setFormData] = useState({
//         topic_name: '',
//         duration: '',
//     });
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     useEffect(() => {
//         if (topic) {
//             setFormData({
//                 topic_name: topic.topic_name,
//                 duration: topic.duration,
//             });
//         } else {
//             setFormData({
//                 topic_name: '',
//                 duration: '',
//             });
//         }
//     }, [topic]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccessMessage('');

//         if (!formData.topic_name.trim()) {
//             setError('Topic Name is required.');
//             return;
//         }
//         if (formData.duration <= 0) {
//             setError('Duration must be a positive number.');
//             return;
//         }

//         const url = topic ? `http://127.0.0.1:8000/admin-tables/topics/${topic.id}/` : 'http://127.0.0.1:8000/admin-tables/topics/';
//         const method = topic ? 'put' : 'post';

//         try {
//             await axios({
//                 method: method,
//                 url: url,
//                 data: formData,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRFToken': getCookie('csrftoken'),
//                 },
//             });

//             setError('');
//             setSuccessMessage(topic ? 'Topic updated successfully!' : 'Topic added successfully!');
//             setTimeout(() => handleClose(), 1000);
//         } catch (error) {
//             console.error('Error saving topic:', error);
//             if (error.response && error.response.status === 400) {
//                 setError(error.response.data.detail || 'An error occurred. Please try again.');
//             } else if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{topic ? 'Update Topic' : 'Add New Topic'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                     Topic Name:
//                     <input
//                         type="text"
//                         name="topic_name"
//                         value={formData.topic_name}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Duration (days):
//                     <input
//                         type="number"
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 {error && <p className="text-red-500">{error}</p>}
//                 {successMessage && <p className="text-green-500">{successMessage}</p>}
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
//                         {topic ? 'Update Topic' : 'Save Topic'}
//                     </button>
//                     <button 
//                         type="button" 
//                         onClick={handleClose} 
//                         className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition">
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddTopicForm;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// // Function to get CSRF token from cookies
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

// const AddTopicForm = ({ handleClose, topic = null }) => {
//     // Initialize form data and state for errors and success messages
//     const [formData, setFormData] = useState({
//         topic_name: '',
//         duration: '',
//     });
//     const [error, setError] = useState('');
//     const [successMessage, setSuccessMessage] = useState('');

//     // Update form data if topic prop changes
//     useEffect(() => {
//         if (topic) {
//             setFormData({
//                 topic_name: topic.topic_name,
//                 duration: topic.duration,
//             });
//         } else {
//             setFormData({
//                 topic_name: '',
//                 duration: '',
//             });
//         }
//     }, [topic]);

//     // Handle input changes
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccessMessage('');

//         // Validation checks
//         if (!formData.topic_name.trim()) {
//             setError('Topic Name is required.');
//             return;
//         }
//         if (formData.duration <= 0) {
//             setError('Duration must be a positive number.');
//             return;
//         }

//         // Determine request URL and method
//         const url = topic ? `http://127.0.0.1:8000/admin-tables/topics/${topic.id}/` : 'http://127.0.0.1:8000/admin-tables/topics/';
//         const method = topic ? 'put' : 'post';

//         try {
//             // Make the API request
//             const response = await axios({
//                 method: method,
//                 url: url,
//                 data: formData,
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'X-CSRFToken': getCookie('csrftoken'),
//                 },
//             });

//             // Handle successful response
//             setError('');
//             setSuccessMessage(topic ? 'Topic updated successfully!' : 'Topic added successfully!');
//             setTimeout(() => handleClose(), 1000);
//         } catch (error) {
//             // Handle errors
//             console.error('Error saving topic:', error.response); // Log full error response
//             if (error.response && error.response.status === 400) {
//                 const errorData = error.response.data;
//                 console.log('Error data:', errorData); // Log detailed error data
//                 if (errorData.topic_name) {
//                     setError(errorData.topic_name[0]); // Display specific error message
//                 } else {
//                     setError('An error occurred. Please try again.');
//                 }
//             } else if (error.response && error.response.status === 403) {
//                 setError('CSRF token missing or invalid.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">
//                 {topic ? 'Update Topic' : 'Add New Topic'}
//             </h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-2">
//                     Topic Name:
//                     <input
//                         type="text"
//                         name="topic_name"
//                         value={formData.topic_name}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 <label className="block mb-2">
//                     Duration (days):
//                     <input
//                         type="number"
//                         name="duration"
//                         value={formData.duration}
//                         onChange={handleChange}
//                         required
//                         className="mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                 </label>
//                 {error && <p className="text-red-500">{error}</p>}
//                 {successMessage && <p className="text-green-500">{successMessage}</p>}
//                 <div className="mt-4 flex justify-between">
//                     <button
//                         type="submit"
//                         className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                     >
//                         {topic ? 'Update Topic' : 'Save Topic'}
//                     </button>
//                     <button
//                         type="button"
//                         onClick={handleClose}
//                         className="bg-gray-300 text-black px-4 py-2 rounded-md hover:bg-gray-400 transition"
//                     >
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddTopicForm;


import React, { useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Function to get CSRF token from cookies
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

// Validation schema for both POST and PUT
const getValidationSchema = (isUpdating) => {
    if (isUpdating) {
        // If updating, only validate the duration field
        return Yup.object({
            duration: Yup.number()
                .positive('Duration must be a positive number.')
                .required('Duration is required.'),
        });
    } else {
        // For adding a new topic, validate both fields
        return Yup.object({
            topic_name: Yup.string()
                .required('Topic Name is required.')
                .test('unique-topic', 'Topic with this name already exists.', async function (value) {
                    const { topic } = this.options.context;

                    if (!value) return true; // Skip check if value is empty

                    // Normalize the topic name
                    const normalizedValue = value.replace(/\s+/g, ' ').trim().toLowerCase();

                    try {
                        const response = await axios.get('http://127.0.0.1:8000/admin-tables/check-topic-name/', {
                            params: { topic_name: normalizedValue },
                        });

                        // Ensure response.data exists and handle uniqueness check
                        if (response.data && response.data.exists !== undefined) {
                            return !response.data.exists; // Return true if topic does not exist
                        } else {
                            console.error('Unexpected response format:', response.data);
                            return false;
                        }
                    } catch (error) {
                        console.error('Error checking topic name:', error);
                        return false; // Consider the topic name as existing in case of error
                    }
                }),
            duration: Yup.number()
                .positive('Duration must be a positive number.')
                .required('Duration is required.'),
        });
    }
};

// Form component
const AddTopicForm = ({ handleClose, topic = null }) => {
    const isUpdating = Boolean(topic);

    const formik = useFormik({
        initialValues: {
            topic_name: '',
            duration: '',
        },
        validationSchema: getValidationSchema(isUpdating),
        validateOnChange: false, // Disable onChange validation
        validateOnBlur: true,    // Enable onBlur validation
        context: { topic },      // Pass the topic as context
        onSubmit: async (values, { setSubmitting, setErrors, setStatus }) => {
            setStatus(null);

            const url = isUpdating
                ? `http://127.0.0.1:8000/admin-tables/topics/${topic.id}/`
                : 'http://127.0.0.1:8000/admin-tables/topics/';
            const method = isUpdating ? 'put' : 'post';

            try {
                await axios({
                    method: method,
                    url: url,
                    data: values,
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': getCookie('csrftoken'),
                    },
                });

                setStatus({ success: isUpdating ? 'Topic updated successfully!' : 'Topic added successfully!' });
                setTimeout(() => handleClose(), 1000);
            } catch (error) {
                if (error.response && error.response.status === 400) {
                    const errorData = error.response.data;
                    if (errorData.topic_name) {
                        setErrors({ topic_name: errorData.topic_name[0] });
                    } else {
                        setStatus('An error occurred. Please try again.');
                    }
                } else if (error.response && error.response.status === 403) {
                    setStatus('CSRF token missing or invalid.');
                } else {
                    setStatus('An error occurred. Please try again.');
                }
            } finally {
                setSubmitting(false);
            }
        },
    });

    useEffect(() => {
        if (topic) {
            formik.setValues({
                topic_name: topic.topic_name,
                duration: topic.duration,
            });
        } else {
            formik.resetForm();
        }
    }, [topic]);

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">
                {isUpdating ? 'Update Topic' : 'Add New Topic'}
            </h2>
            <form onSubmit={formik.handleSubmit}>
                {!isUpdating && (
                    <label className="block mb-2">
                        Topic Name:
                        <input
                            type="text"
                            name="topic_name"
                            value={formik.values.topic_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className={`mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full ${formik.touched.topic_name && formik.errors.topic_name ? 'border-red-500' : ''}`}
                        />
                        {formik.touched.topic_name && formik.errors.topic_name ? (
                            <p className="text-red-500">{formik.errors.topic_name}</p>
                        ) : null}
                    </label>
                )}
                <label className="block mb-2">
                    Duration (days):
                    <input
                        type="number"
                        name="duration"
                        value={formik.values.duration}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`mt-1 p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full ${formik.touched.duration && formik.errors.duration ? 'border-red-500' : ''}`}
                    />
                    {formik.touched.duration && formik.errors.duration ? (
                        <p className="text-red-500">{formik.errors.duration}</p>
                    ) : null}
                </label>
                {formik.status && (
                    <p className={`text-${formik.status.success ? 'green' : 'red'}-500`}>
                        {formik.status.success || formik.status}
                    </p>
                )}
                <div className="mt-4 flex justify-between">
                    <button
                        type="submit"
                        disabled={formik.isSubmitting}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                    >
                        {isUpdating ? 'Update Topic' : 'Save Topic'}
                    </button>
                    <button
                        type="button"
                        onClick={handleClose}
                        // className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                        className="bg-blue-600 text-black px-4 py-2 rounded-md hover:bg-red-400 transition"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTopicForm;

