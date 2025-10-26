// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import AddTrainerForm from './admin-trainer-form';

// const TrainerList = () => {
//     const [trainers, setTrainers] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [selectedTrainer, setSelectedTrainer] = useState(null);
//     const formRef = useRef(null); // Reference for the form

//     useEffect(() => {
//         fetchTrainers();
//     }, []);

//     const fetchTrainers = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/admin-tables/trainers/');
//             setTrainers(response.data);
//         } catch (error) {
//             console.error('Error fetching trainers:', error);
//         }
//     };

//     const handleAddTrainer = () => {
//         setSelectedTrainer(null); // Reset selectedTrainer for adding
//         setShowForm(true);
//     };

//     const handleUpdateTrainer = (trainer) => {
//         setSelectedTrainer(trainer); // Set trainer to be updated
//         setShowForm(true);
//     };

//     const handleCloseForm = () => {
//         setShowForm(false);
//         setSelectedTrainer(null); // Clear selected trainer
//         fetchTrainers(); // Refresh trainer list
//     };

//     const handleDeleteTrainer = async (trainerId) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this trainer?');
//         if (confirmDelete) {
//             try {
//                 await axios.delete(`http://localhost:8000/admin-tables/trainers/${trainerId}/`);
//                 fetchTrainers(); // Refresh the trainer list after deletion
//             } catch (error) {
//                 console.error('Error deleting trainer:', error);
//             }
//         }
//     };

//     return (
//         <div>
//             {/* <h1 className="text-center font-bold text-xl mb-4">Trainers List</h1> */}
//             <h1 className="text-2xl font-semibold mb-4 text-blue-600">Trainers List</h1>
//             <button onClick={handleAddTrainer} className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
//                 Add Trainer
//             </button>
//             {showForm && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-md shadow-lg" ref={formRef}>
//                         <h2 className="text-lg font-semibold mb-4">Trainer Form</h2>
//                         <AddTrainerForm onClose={handleCloseForm} trainer={selectedTrainer} />
//                         <button
//                             onClick={handleCloseForm}
//                             className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
//                         >
//                             Cancel
//                         </button>
//                     </div>
//                 </div>
//             )}
//             <table className="w-full border border-collapse">
//                 <thead>
//                     <tr>
//                         <th className="border">Trainer Name</th>
//                         <th className="border">Qualification</th>
//                         <th className="border">Email</th>
//                         <th className="border">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {trainers.map((trainer) => (
//                         <tr key={trainer.id}>
//                             <td className="border">{trainer.trainer_name}</td>
//                             <td className="border">{trainer.qualification}</td>
//                             <td className="border">{trainer.email}</td>
//                             <td className="border">
//                                 <button onClick={() => handleUpdateTrainer(trainer)} className="text-blue-500 hover:underline">
//                                     Update
//                                 </button>
//                                 <button onClick={() => handleDeleteTrainer(trainer.id)} className="ml-2 text-red-500 hover:underline">
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

// export default TrainerList;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import AddTrainerForm from './admin-trainer-form'; 

// const TrainerList = () => {
//     const [trainers, setTrainers] = useState([]);
//     const [showForm, setShowForm] = useState(false);
//     const [selectedTrainer, setSelectedTrainer] = useState(null);

//     useEffect(() => {
//         fetchTrainers();
//     }, []);

//     const fetchTrainers = async () => {
//         try {
//             const response = await axios.get('http://localhost:8000/admin-tables/trainers/');
//             setTrainers(response.data);
//         } catch (error) {
//             console.error('Error fetching trainers:', error);
//         }
//     };

//     const handleAddTrainer = () => {
//         setSelectedTrainer(null); // Reset selectedTrainer for adding
//         setShowForm(true);
//     };

//     const handleUpdateTrainer = (trainer) => {
//         setSelectedTrainer(trainer); // Set trainer to be updated
//         setShowForm(true);
//     };

//     const handleCloseForm = () => {
//         setShowForm(false);
//         setSelectedTrainer(null); // Clear selected trainer
//         fetchTrainers(); // Refresh trainer list
//     };

//     const handleDeleteTrainer = async (trainerId) => {
//         const confirmDelete = window.confirm('Are you sure you want to delete this trainer?');
//         if (confirmDelete) {
//             try {
//                 await axios.delete(`http://localhost:8000/admin-tables/trainers/${trainerId}/`);
//                 fetchTrainers(); // Refresh the trainer list after deletion
//             } catch (error) {
//                 console.error('Error deleting trainer:', error);
//             }
//         }
//     };

//     return (
//         <div className="p-4 max-w-4xl mx-auto">
//             <h1 className="text-2xl font-semibold mb-4 text-blue-600">Trainers List</h1>
//             <button
//                 onClick={handleAddTrainer}
//                 className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
//             >
//                 Add Trainer
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
//                         <AddTrainerForm onClose={handleCloseForm} trainer={selectedTrainer} />
//                     </div>
//                 </div>
//             )}
//             <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
//                 <thead>
//                     <tr>
//                         <th className="p-2 border-b">Trainer Name</th>
//                         <th className="p-2 border-b">Qualification</th>
//                         <th className="p-2 border-b">Email</th>
//                         <th className="p-2 border-b">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {trainers.map((trainer) => (
//                         <tr key={trainer.id}>
//                             <td className="p-2 border-b">{trainer.trainer_name}</td>
//                             <td className="p-2 border-b">{trainer.qualification}</td>
//                             <td className="p-2 border-b">{trainer.email}</td>
//                             <td className="p-2 border-b">
//                                 <button
//                                     onClick={() => handleUpdateTrainer(trainer)}
//                                     className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition mr-2"
//                                 >
//                                     Update
//                                 </button>
//                                 <button
//                                     onClick={() => handleDeleteTrainer(trainer.id)}
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

// export default TrainerList;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddTrainerForm from './admin-trainer-form'; // Make sure the path is correct

const TrainerList = () => {
    const [trainers, setTrainers] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedTrainer, setSelectedTrainer] = useState(null);

    useEffect(() => {
        fetchTrainers();
    }, []);

    const fetchTrainers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/admin-tables/trainers/');
            setTrainers(response.data);
        } catch (error) {
            console.error('Error fetching trainers:', error);
        }
    };

    const handleAddTrainer = () => {
        setSelectedTrainer(null); // Reset selectedTrainer for adding
        setShowForm(true);
    };

    const handleUpdateTrainer = (trainer) => {
        setSelectedTrainer(trainer); // Set trainer to be updated
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedTrainer(null); // Clear selected trainer
        fetchTrainers(); // Refresh trainer list
    };

    const handleDeleteTrainer = async (trainerId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this trainer?');
        if (confirmDelete) {
            try {
                await axios.delete(`http://localhost:8000/admin-tables/trainers/${trainerId}/`);
                fetchTrainers(); // Refresh the trainer list after deletion
            } catch (error) {
                console.error('Error deleting trainer:', error);
            }
        }
    };

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-blue-700">Trainers List</h1>
            <button
                onClick={handleAddTrainer}
                className="mb-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
            >
                Add Trainer
            </button>
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg relative w-full max-w-md">
                        <button
                            onClick={handleCloseForm}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        <AddTrainerForm onClose={handleCloseForm} trainer={selectedTrainer} />
                    </div>
                </div>
            )}
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-100 text-gray-700">
                        <th className="p-3 border-b">Trainer Name</th>
                        <th className="p-3 border-b">Qualification</th>
                        <th className="p-3 border-b">Email</th>
                        <th className="p-3 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {trainers.map((trainer) => (
                        <tr key={trainer.id} className="hover:bg-gray-50">
                            <td className="p-3 border-b">{trainer.trainer_name}</td>
                            <td className="p-3 border-b">{trainer.qualification}</td>
                            <td className="p-3 border-b">{trainer.email}</td>
                            <td className="p-3 border-b flex space-x-2">
                                <button
                                    onClick={() => handleUpdateTrainer(trainer)}
                                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 transition duration-300"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDeleteTrainer(trainer.id)}
                                    className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition duration-300"
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

export default TrainerList;
