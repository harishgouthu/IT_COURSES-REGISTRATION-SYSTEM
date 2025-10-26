// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddTopicForm from './AddTopicForm';

// const TopicList = () => {
//     const [topics, setTopics] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [selectedTopic, setSelectedTopic] = useState(null);

//     useEffect(() => {
//         fetchTopics();
//     }, []);

//     const fetchTopics = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/admin-tables/topics/');
//             setTopics(response.data);
//         } catch (error) {
//             console.error('Error fetching topics:', error);
//         }
//     };

//     const handleAddTopic = () => {
//         setSelectedTopic(null); // Reset selectedTopic for adding
//         setShowForm(true);
//     };

//     const handleUpdateTopic = (topic) => {
//         setSelectedTopic(topic); // Set topic to be updated
//         setShowForm(true);
//     };

//     const handleCloseForm = () => {
//         setShowForm(false);
//         setSelectedTopic(null); // Clear selected topic
//         fetchTopics(); // Refresh topics list
//     };

//     const handleDeleteTopic = async (topicId) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this topic?');
//         if (confirmDelete) {
//             try {
//                 await axios.delete(`http://localhost:8000/admin-tables/topics/${topicId}/`);
//                 fetchTopics(); // Refresh the topic list after deletion
//             } catch (error) {
//                 console.error('Error deleting topic:', error);
//             }
//         }
//     };

//     return (
//         <div>
//             <h1 className="text-center font-bold text-xl mb-4">Topics List</h1>
//             <button onClick={handleAddTopic} className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
//                 Add Topic
//             </button>
//             {showForm && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-md shadow-lg">
//                         <AddTopicForm handleClose={handleCloseForm} topic={selectedTopic} />
                  
//                     </div>
//                 </div>
//             )}
//             <table className="w-full border border-collapse">
//                 <thead>
//                     <tr>
//                         <th className="border">Topic Name</th>
//                         <th className="border">Duration</th>
//                         <th className="border">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {topics.map((topic) => (
//                         <tr key={topic.id}>
//                             <td className="border">{topic.topic_name}</td>
//                             <td className="border">{topic.duration}</td>
//                             <td className="border">
//                                 <button onClick={() => handleUpdateTopic(topic)} className="text-blue-500 hover:underline">
//                                     Update
//                                 </button>
//                                 <button onClick={() => handleDeleteTopic(topic.id)} className="ml-2 text-red-500 hover:underline">
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TopicList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AddTopicForm from './AddTopicForm';

// const TopicList = () => {
//     const [topics, setTopics] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [selectedTopic, setSelectedTopic] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');

//     useEffect(() => {
//         fetchTopics();
//     }, []);

//     const fetchTopics = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/admin-tables/topics/');
//             setTopics(response.data);
//         } catch (error) {
//             console.error('Error fetching topics:', error);
//             setError('Failed to fetch topics.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const handleAddTopic = () => {
//         setSelectedTopic(null); // Reset selectedTopic for adding
//         setShowForm(true);
//     };

//     const handleUpdateTopic = (topic) => {
//         setSelectedTopic(topic); // Set topic to be updated
//         setShowForm(true);
//     };

//     const handleCloseForm = () => {
//         setShowForm(false);
//         setSelectedTopic(null); // Clear selected topic
//         fetchTopics(); // Refresh topics list
//     };

//     const handleDeleteTopic = async (topicId) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this topic?');
//         if (confirmDelete) {
//             try {
//                 await axios.delete(`http://localhost:8000/admin-tables/topics/${topicId}/`);
//                 fetchTopics(); // Refresh the topic list after deletion
//             } catch (error) {
//                 console.error('Error deleting topic:', error);
//                 setError('Failed to delete topic.');
//             }
//         }
//     };

//     if (loading) return <div className="p-4">Loading...</div>;

//     return (
//         <div className="p-4 max-w-4xl mx-auto">
//             <h1 className="text-2xl font-semibold mb-4 text-blue-600">Topics List</h1>
//             <button
//                 onClick={handleAddTopic}
//                 className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
//             >
//                 Add Topic
//             </button>
//             {showForm && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-md shadow-lg relative w-full max-w-lg">
//                         <button
//                             onClick={handleCloseForm}
//                             className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
//                         >
//                             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//                             </svg>
//                         </button>
//                         <AddTopicForm handleClose={handleCloseForm} topic={selectedTopic} />
//                     </div>
//                 </div>
//             )}
//             {error && <div className="text-red-600 mb-4">{error}</div>}
//             <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
//                 <thead>
//                     <tr>
//                         <th className="p-2 border-b">Topic Name</th>
//                         <th className="p-2 border-b">Duration</th>
//                         <th className="p-2 border-b">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {topics.map((topic) => (
//                         <tr key={topic.id}>
//                             <td className="p-2 border-b">{topic.topic_name}</td>
//                             <td className="p-2 border-b">{topic.duration}</td>
//                             <td className="p-2 border-b">
//                                 <button
//                                     onClick={() => handleUpdateTopic(topic)}
//                                     className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition mr-2"
//                                 >
//                                     Update
//                                 </button>
//                                 <button
//                                     onClick={() => handleDeleteTopic(topic.id)}
//                                     className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition"
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default TopicList;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddTopicForm from './AddTopicForm';

const TopicList = () => {
    const [topics, setTopics] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTopics();
    }, []);

    const fetchTopics = async () => {
        try {
            const response = await axios.get('http://localhost:8000/admin-tables/topics/');
            setTopics(response.data);
        } catch (error) {
            console.error('Error fetching topics:', error);
            setError('Failed to fetch topics.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddTopic = () => {
        setSelectedTopic(null); // Reset selectedTopic for adding
        setShowForm(true);
    };

    const handleUpdateTopic = (topic) => {
        setSelectedTopic(topic); // Set topic to be updated
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedTopic(null); // Clear selected topic
        fetchTopics(); // Refresh topics list
    };

    const handleDeleteTopic = async (topicId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this topic?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8000/admin-tables/topics/${topicId}/`);
                fetchTopics(); // Refresh the topic list after deletion
            } catch (error) {
                console.error('Error deleting topic:', error);
                setError('Failed to delete topic.');
            }
        }
    };

    if (loading) return <div className="p-4">Loading...</div>;

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4 text-blue-600">Topics List</h1>
            <button
                onClick={handleAddTopic}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
                Add Topic
            </button>
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg relative w-full max-w-lg">
                        <button
                            onClick={handleCloseForm}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <AddTopicForm handleClose={handleCloseForm} topic={selectedTopic} />
                    </div>
                </div>
            )}
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead>
                    <tr>
                        <th className="p-2 border-b">Topic Name</th>
                        <th className="p-2 border-b">Duration</th>
                        <th className="p-2 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {topics.map((topic) => (
                        <tr key={topic.id}>
                            <td className="p-2 border-b">{topic.topic_name}</td>
                            <td className="p-2 border-b">{topic.duration}</td>
                            <td className="p-2 border-b">
                                <button
                                    onClick={() => handleUpdateTopic(topic)}
                                    className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition mr-2"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDeleteTopic(topic.id)}
                                    className="bg-red-600 text-white px-2 py-1 rounded-md hover:bg-red-700 transition"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopicList;
