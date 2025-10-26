
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddCourseForm from './AddCourseForm';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/admin-tables/add-course/');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
            setError('Failed to fetch courses.');
        } finally {
            setLoading(false);
        }
    };

    const handleAddCourse = () => {
        setSelectedCourse(null); // Reset selectedCourse for adding
        setShowForm(true);
    };

    const handleEditCourse = (course) => {
        setSelectedCourse(course); // Set course to be updated
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedCourse(null); // Clear selected course
        fetchCourses(); // Refresh course list
    };

    const handleDeleteCourse = async (courseId) => {
        if (window.confirm('Are you sure you want to delete this course?')) {
            try {
                await axios.delete(`http://127.0.0.1:8000/admin-tables/add-course/${courseId}/`);
                setCourses(courses.filter(course => course.id !== courseId));
            } catch (error) {
                console.error('Error deleting course:', error);
                setError('Failed to delete course.');
            }
        }
    };

    if (loading) return <div className="p-4">Loading...</div>;

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4 text-blue-600">Course List</h1>
            <button
                onClick={handleAddCourse}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
                Add New Course
            </button>
            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-lg relative w-full max-w-lg">
                        <button
                            onClick={handleCloseForm}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                        >
                            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        {/* <h2 className="text-lg font-semibold mb-4">Course Form</h2> */}
                        <AddCourseForm onClose={handleCloseForm} course={selectedCourse} show={showForm} />
                    </div>
                </div>
            )}
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
                <thead>
                    <tr className="bg-gray-200 border-b">
                        <th className="p-2 text-left">Title</th>
                        <th className="p-2 text-left">Duration</th>
                        <th className="p-2 text-left">Trainer</th>
                        <th className="p-2 text-left">Fee</th>
                        <th className="p-2 text-left">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id} className="border-b">
                            <td className="p-2">{course.title}</td>
                            <td className="p-2">{course.duration} days</td>
                            <td className="p-2">{course.trainer.trainer_name}</td>
                            <td className="p-2">{course.fee}</td>
                            <td className="p-2 flex space-x-2">
                                <button
                                    onClick={() => handleEditCourse(course)}
                                    className="bg-yellow-600 text-white px-3 py-1 rounded-md hover:bg-yellow-700 transition duration-300"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteCourse(course.id)}
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

export default CourseList;




