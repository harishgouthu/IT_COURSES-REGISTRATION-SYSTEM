



import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddTrainerForm from './admin-trainer-form';
import AddTopicForm from './AddTopicForm';
import AddCourseForm from './AddCourseForm';
import BatchForm from './AddBatchForm';
import TrainerList from './TrainerList';
import TopicList from './TopicList';
import CourseList from './CourseList';
import BatchList from './BatchList';
import AdminRegistrationForm from './AdminRegistrationForm';
import UserManagement from './UserManagement';



const AdminSidebar = () => {
    const navigate = useNavigate();
    const [activeForm, setActiveForm] = useState(null);
    const modalRef = useRef(null); // Reference for the modal

    const handleOpenPopup = (formType) => {
        setActiveForm(formType);
    };

    const handleClosePopup = () => {
        setActiveForm(null);
    };

    // Close popup when clicking outside of it
    const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
            handleClosePopup();
        }
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            // Cleanup event listener on unmount
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const renderForm = () => {
        switch (activeForm) {
            case 'trainer':
                return <AddTrainerForm onClose={handleClosePopup} />;
            case 'topic':
                return <AddTopicForm show={!!activeForm} onClose={handleClosePopup} />;
            case 'course':
                return <AddCourseForm show={!!activeForm} handleClose={handleClosePopup} />;
            case 'batch':
                return <BatchForm show={!!activeForm} handleClose={handleClosePopup} />;
            case 'admin-registration': 
                return <AdminRegistrationForm onClose={handleClosePopup} />;
            case 'manage-trainers':
                return <TrainerList onClose={handleClosePopup} />;
            case 'manage-topics':
                return <TopicList onClose={handleClosePopup} />;
            case 'manage-courses':
                return <CourseList onClose={handleClosePopup} />;
            case 'manage-batches':
                return <BatchList onClose={handleClosePopup} />;
            case 'manage-users':
                return <UserManagement onClose={handleClosePopup} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-blue-600 w-64 h-full p-4 relative">
            <div className="text-white font-bold text-lg mb-5">Admin Dashboard</div>
            <div>
                <button
                    onClick={() => navigate('/admin-dashboard')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Dashboard
                </button>
                {/* <button
                    onClick={() => handleOpenPopup('trainer')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Add Trainer
                </button>
                <button
                    onClick={() => handleOpenPopup('topic')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Add Topic
                </button>
                <button
                    onClick={() => handleOpenPopup('course')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Add Course
                </button>
                <button
                    onClick={() => handleOpenPopup('batch')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Add Batch
                </button> */}
                <button
                    onClick={() => handleOpenPopup('admin-registration')} // New button for admin registration
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Register Admin
                </button>
                <button
                    onClick={() => handleOpenPopup('manage-trainers')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Manage Trainers
                </button>
                <button
                    onClick={() => handleOpenPopup('manage-topics')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Manage Topics
                </button>
                <button
                    onClick={() => handleOpenPopup('manage-courses')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Manage Courses
                </button>
                <button
                    onClick={() => handleOpenPopup('manage-batches')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Manage Batches
                </button>
                <button
                    onClick={() => handleOpenPopup('manage-users')}
                    className="text-white hover:bg-blue-700 w-full text-left px-3 py-2 rounded mb-2"
                >
                    Manage Users
                </button>
            </div>

            {activeForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded shadow-lg" ref={modalRef}>
                        <button
                            onClick={handleClosePopup}
                            className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                        {renderForm()}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminSidebar;
