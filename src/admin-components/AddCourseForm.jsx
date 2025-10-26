



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Select from 'react-select';

// const AddCourseForm = ({ show, onClose, course = null }) => {
//     const [title, setTitle] = useState('');
//     const [duration, setDuration] = useState('');
//     const [trainer, setTrainer] = useState('');
//     const [selectedTopics, setSelectedTopics] = useState([]);
//     const [fee, setFee] = useState('');
//     const [data, setData] = useState({ trainers: [], topics: [] });
//     const [errors, setErrors] = useState({});
//     const [message, setMessage] = useState({ type: '', content: '' });
//     const [formSubmitted, setFormSubmitted] = useState(false); // Add state flag for submission

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/admin-tables/initial-data/');
//                 setData(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };
//         fetchData();
//     }, []);

//     useEffect(() => {
//         if (course) {
//             setTitle(course.title);
//             setDuration(course.duration);
//             setTrainer(course.trainer);
//             setSelectedTopics(course.topics.map(topic => ({ value: topic.id, label: topic.topic_name })));
//             setFee(course.fee);
//         } else {
//             resetForm();
//         }
//     }, [course]);

//     useEffect(() => {
//         if (formSubmitted) {
//             setTimeout(() => {
//                 resetForm();
//                 setMessage({ type: '', content: '' });
//                 onClose();
//                 setFormSubmitted(false); // Reset the submission flag
//             }, 3000); // Delay form reset and closing
//         }
//     }, [formSubmitted, onClose]);

//     const resetForm = () => {
//         setTitle('');
//         setDuration('');
//         setTrainer('');
//         setSelectedTopics([]);
//         setFee('');
//         setErrors({});
//     };

//     const validateForm = () => {
//         const newErrors = {};
//         if (!title) newErrors.title = 'Title is required';
//         if (!duration || duration < 30 || duration > 200) newErrors.duration = 'Duration must be between 30 and 200 days';
//         if (!trainer) newErrors.trainer = 'Trainer is required';
//         if (selectedTopics.length === 0) newErrors.topics = 'At least one topic is required';
//         if (!fee || fee < 5000 || fee > 80000) newErrors.fee = 'Fee must be between 5000 and 80000';
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validateForm()) return;

//         const payload = {
//             title,
//             duration: parseInt(duration),
//             trainer: parseInt(trainer),
//             topics: selectedTopics.map(topic => topic.value),
//             fee: parseInt(fee),
//         };

//         try {
//             if (course) {
//                 await axios.put(`http://127.0.0.1:8000/admin-tables/add-course/${course.id}/`, payload);
//                 setMessage({ type: 'success', content: 'Course updated successfully!' });
//             } else {
//                 await axios.post('http://127.0.0.1:8000/admin-tables/add-course/', payload);
//                 setMessage({ type: 'success', content: 'Course added successfully!' });
//             }
//             setFormSubmitted(true); // Set flag to handle form reset
//         } catch (error) {
//             console.error('Error submitting form:', error);
//             if (error.response && error.response.data) {
//                 setErrors(error.response.data);
//                 setMessage({ type: 'error', content: 'Failed to save course. Please try again.' });
//             }
//         }
//     };

//     if (!show) return null;

//     return (
//         <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//             <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{course ? 'Update Course' : 'Add New Course'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label className="block mb-1">
//                     Course Title:
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         maxLength="40"
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                     {errors.title && <span className="text-red-500 text-xs">{errors.title}</span>}
//                 </label>
//                 <label className="block mb-1">
//                     Duration (days):
//                     <input
//                         type="number"
//                         value={duration}
//                         onChange={(e) => setDuration(e.target.value)}
//                         min="30"
//                         max="200"
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                     {errors.duration && <span className="text-red-500 text-xs">{errors.duration}</span>}
//                 </label>
//                 <label className="block mb-1">
//                     Trainer:
//                     <select
//                         value={trainer}
//                         onChange={(e) => setTrainer(e.target.value)}
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     >
//                         <option value="">Select Trainer</option>
//                         {data.trainers.map((tr) => (
//                             <option key={tr.id} value={tr.id}>
//                                 {`Shri. ${tr.trainer_name}, ${tr.qualification}, ${tr.it_experience} yrs Experience`}
//                             </option>
//                         ))}
//                     </select>
//                     {errors.trainer && <span className="text-red-500 text-xs">{errors.trainer}</span>}
//                 </label>
//                 <label className="block mb-1">
//                     Topics:
//                     <Select
//                         options={data.topics.map((topic) => ({
//                             value: topic.id,
//                             label: topic.topic_name,
//                         }))}
//                         value={selectedTopics}
//                         onChange={setSelectedTopics}
//                         isMulti
//                         required
//                         className="mt-1 text-black"
//                         classNamePrefix="react-select"
//                     />
//                     {errors.topics && <span className="text-red-500 text-xs">{errors.topics}</span>}
//                 </label>
//                 <label className="block mb-1">
//                     Fee:
//                     <input
//                         type="number"
//                         value={fee}
//                         onChange={(e) => setFee(e.target.value)}
//                         min="5000"
//                         max="80000"
//                         required
//                         className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
//                     />
//                     {errors.fee && <span className="text-red-500 text-xs">{errors.fee}</span>}
//                 </label>
//                 {/* Message display */}
//                 {message.content && (
//                     <div className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
//                         {message.content}
//                     </div>
//                 )}
//                 <div className="mt-4 flex justify-between">
//                     <button 
//                         type="submit" 
//                         className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
//                         {course ? 'Update Course' : 'Submit'}
//                     </button>
//                     <button 
//                         type="button" 
//                         onClick={onClose}
//                         className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">
//                         Cancel
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default AddCourseForm;





import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

const AddCourseForm = ({ show, onClose, course = null }) => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');
    const [trainer, setTrainer] = useState('');
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [fee, setFee] = useState('');
    const [data, setData] = useState({ trainers: [], topics: [] });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState({ type: '', content: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/admin-tables/initial-data/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (course) {
            setTitle(course.title);
            setDuration(course.duration);
            setTrainer(course.trainer.id); // Ensure trainer is correctly set
            setSelectedTopics(course.topics.map(topic => ({ value: topic.id, label: topic.topic_name })));
            setFee(course.fee);
        } else {
            resetForm();
        }
    }, [course]);

    useEffect(() => {
        if (formSubmitted) {
            setTimeout(() => {
                resetForm();
                setMessage({ type: '', content: '' });
                onClose();
                setFormSubmitted(false);
            }, 3000);
        }
    }, [formSubmitted, onClose]);

    const resetForm = () => {
        setTitle('');
        setDuration('');
        setTrainer('');
        setSelectedTopics([]);
        setFee('');
        setErrors({});
    };

    const validateForm = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!duration || duration < 30 || duration > 200) newErrors.duration = 'Duration must be between 30 and 200 days';
        if (!trainer) newErrors.trainer = 'Trainer is required';
        if (selectedTopics.length === 0) newErrors.topics = 'At least one topic is required';
        if (!fee || fee < 5000 || fee > 80000) newErrors.fee = 'Fee must be between 5000 and 80000';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const payload = {
            title,
            duration: parseInt(duration),
            trainer: parseInt(trainer), // Ensure trainer ID is correctly passed
            topics: selectedTopics.map(topic => topic.value),
            fee: parseInt(fee),
        };

        try {
            if (course) {
                await axios.put(`http://127.0.0.1:8000/admin-tables/add-course/${course.id}/`, payload);
                setMessage({ type: 'success', content: 'Course updated successfully!' });
            } else {
                await axios.post('http://127.0.0.1:8000/admin-tables/add-course/', payload);
                setMessage({ type: 'success', content: 'Course added successfully!' });
            }
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            if (error.response && error.response.data) {
                setErrors(error.response.data);
                setMessage({ type: 'error', content: 'Failed to save course. Please try again.' });
            }
        }
    };

    if (!show) return null;

    return (
        <div className="bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
            <h2 className="text-lg font-semibold mb-3 text-blue-600 text-center">{course ? 'Update Course' : 'Add New Course'}</h2>
            <form onSubmit={handleSubmit}>
                <label className="block mb-1">
                    Course Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength="40"
                        required
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                    {errors.title && <span className="text-red-500 text-xs">{errors.title}</span>}
                </label>
                <label className="block mb-1">
                    Duration (days):
                    <input
                        type="number"
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        min="30"
                        max="200"
                        required
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                    {errors.duration && <span className="text-red-500 text-xs">{errors.duration}</span>}
                </label>
                <label className="block mb-1">
                    Trainer:
                    <select
                        value={trainer}
                        onChange={(e) => setTrainer(e.target.value)}
                        required
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    >
                        <option value="">Select Trainer</option>
                        {data.trainers.map((tr) => (
                            <option key={tr.id} value={tr.id}>
                                {`Shri. ${tr.trainer_name}, ${tr.qualification}, ${tr.it_experience} yrs Experience`}
                            </option>
                        ))}
                    </select>
                    {errors.trainer && <span className="text-red-500 text-xs">{errors.trainer}</span>}
                </label>
                <label className="block mb-1">
                    Topics:
                    <Select
                        options={data.topics.map((topic) => ({
                            value: topic.id,
                            label: topic.topic_name,
                        }))}
                        value={selectedTopics}
                        onChange={setSelectedTopics}
                        isMulti
                        required
                        className="mt-1 text-black"
                        classNamePrefix="react-select"
                    />
                    {errors.topics && <span className="text-red-500 text-xs">{errors.topics}</span>}
                </label>
                <label className="block mb-1">
                    Fee:
                    <input
                        type="number"
                        value={fee}
                        onChange={(e) => setFee(e.target.value)}
                        min="5000"
                        max="80000"
                        required
                        className="mt-1 p-1 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                    {errors.fee && <span className="text-red-500 text-xs">{errors.fee}</span>}
                </label>
                {message.content && (
                    <div className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {message.content}
                    </div>
                )}
                <div className="mt-4 flex justify-between">
                    <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition">
                        {course ? 'Update Course' : 'Submit'}
                    </button>
                    <button 
                        type="button" 
                        onClick={onClose}
                        className="bg-gray-300 text-black px-2 py-1 rounded-md hover:bg-gray-400 transition ml-2">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCourseForm;
