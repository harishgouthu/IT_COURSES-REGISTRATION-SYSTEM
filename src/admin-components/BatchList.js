import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BatchForm from './AddBatchForm';

const BatchList = () => {
    const [batches, setBatches] = useState([]);
    const [courses, setCourses] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [selectedBatch, setSelectedBatch] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchBatches();
        fetchCourses();
    }, []);

    const fetchBatches = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/admin-tables/batches/');
            setBatches(response.data);
        } catch (error) {
            console.error('Error fetching batches:', error);
            setError('Failed to fetch batches.');
        } finally {
            setLoading(false);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/admin-tables/add-course/');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const handleAddBatch = () => {
        setSelectedBatch(null); // Reset selectedBatch for adding
        setShowForm(true);
    };

    const handleEditBatch = (batch) => {
        setSelectedBatch(batch); // Set batch to be updated
        setShowForm(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
        setSelectedBatch(null); // Clear selected batch
        fetchBatches(); // Refresh batch list
    };

    const handleDeleteBatch = async (batchId) => {
        if (window.confirm('Are you sure you want to delete this batch?')) {
            try {
                await axios.delete(`http://127.0.0.1:8000/admin-tables/batches/${batchId}/`);
                setBatches(batches.filter(batch => batch.id !== batchId));
            } catch (error) {
                console.error('Error deleting batch:', error);
                setError('Failed to delete batch.');
            }
        }
    };

    if (loading) return <div className="p-4">Loading...</div>;

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-4 text-blue-600">Batch List</h1>
            <button
                onClick={handleAddBatch}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
            >
                Add New Batch
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
                        <BatchForm handleClose={handleCloseForm} batch={selectedBatch} />
                    </div>
                </div>
            )}
            {error && <div className="text-red-600 mb-4">{error}</div>}
            <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead>
                    <tr>
                        <th className="p-2 border-b">Batch Number</th>
                        <th className="p-2 border-b">Course</th>
                        <th className="p-2 border-b">Start Date</th>
                        <th className="p-2 border-b">End Date</th>
                        <th className="p-2 border-b">Status</th>
                        <th className="p-2 border-b">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {batches.map(batch => (
                        <tr key={batch.id}>
                            <td className="p-2 border-b">{batch.batch_number}</td>
                            <td className="p-2 border-b">{courses.find(course => course.id === batch.course)?.title}</td>
                            <td className="p-2 border-b">{new Date(batch.start_date).toLocaleDateString()}</td>
                            <td className="p-2 border-b">{new Date(batch.end_date).toLocaleDateString()}</td>
                            <td className="p-2 border-b capitalize">{batch.status}</td>
                            <td className="p-2 border-b">
                                <button
                                    onClick={() => handleEditBatch(batch)}
                                    className="bg-blue-600 text-white px-2 py-1 rounded-md hover:bg-blue-700 transition mr-2"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteBatch(batch.id)}
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

export default BatchList;
