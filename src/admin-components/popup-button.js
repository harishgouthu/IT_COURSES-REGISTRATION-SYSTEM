// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AddTrainerForm from './admin-trainer-form'; // Adjust the path as necessary
// import AddTopicForm from './AddTopicForm'; // Adjust the path as necessary
// import AddCourseForm from './AddCourseForm'; // Adjust the path as necessary
// // import AddBatchForm from './AddBatchForm'; // Adjust the path as necessary

// const ButtonManagement = () => {
//     const navigate = useNavigate();
//     const [activeForm, setActiveForm] = useState(null);

//     const handleOpenPopup = (formType) => {
//         setActiveForm(formType);
//     };

//     const handleClosePopup = () => {
//         setActiveForm(null);
//     };

//     const renderForm = () => {
//         switch (activeForm) {
//             case 'trainer':
//                 return <AddTrainerForm onClose={handleClosePopup} />;
//             case 'topic':
//                 return <AddTopicForm onClose={handleClosePopup} />;
//             case 'course':
//                 return <AddCourseForm onClose={handleClosePopup} />;
//             // case 'batch':
//             //     return <AddBatchForm onClose={handleClosePopup} />;
//             // Add more forms as needed
//             default:
//                 return null;
//         }
//     };

//     return (
//         <div className="space-y-4">
//             <button
//                 onClick={() => handleOpenPopup('trainer')}
//                 className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//             >
//                 Add Trainer
//             </button>
//             <button
//                 onClick={() => handleOpenPopup('topic')}
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//             >
//                 Add Topic
//             </button>
//             <button
//                 onClick={() => handleOpenPopup('course')}
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//             >
//                 Add Course
//             </button>
//             {/* <button
//                 onClick={() => handleOpenPopup('batch')}
//                 className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
//             >
//                 Add Batch
//             </button> */}
//             {/* Add more buttons as needed */}

//             {activeForm && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-4 rounded shadow-lg">
//                         {renderForm()}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default ButtonManagement;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTrainerForm from './admin-trainer-form'; // Adjust the path as necessary
import AddTopicForm from './AddTopicForm'; // Adjust the path as necessary
import AddCourseForm from './AddCourseForm'; // Adjust the path as necessary

const ButtonManagement = () => {
    const [activeForm, setActiveForm] = useState(null);

    const handleOpenPopup = (formType) => {
        setActiveForm(formType);
    };

    const handleClosePopup = () => {
        setActiveForm(null);
    };

    const renderForm = () => {
        switch (activeForm) {
            case 'trainer':
                return <AddTrainerForm onClose={handleClosePopup} />;
            case 'topic':
                return <AddTopicForm onClose={handleClosePopup} />;
            case 'course':
                return <AddCourseForm show={!!activeForm} handleClose={handleClosePopup} />;
            default:
                return null;
        }
    };

    return (
        <div className="space-y-4">
            <button
                onClick={() => handleOpenPopup('trainer')}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
                Add Trainer
            </button>
            <button
                onClick={() => handleOpenPopup('topic')}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                Add Topic
            </button>
            <button
                onClick={() => handleOpenPopup('course')}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
            >
                Add Course
            </button>

            {activeForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-lg">
                        {renderForm()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ButtonManagement;
