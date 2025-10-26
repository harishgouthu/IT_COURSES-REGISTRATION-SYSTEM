

import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const PasswordResetRequest = ({ showModal, handleCloseModal, modalRef }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!email) {
            setError('Email is required.');
            setMessage('');
            return;
        }

        try {
            await axios.post('http://127.0.0.1:8000/users/password-reset/', { email });
            setMessage('Password reset email sent successfully.');
            setError('');
            setEmail(''); // Clear the email input
            setTimeout(() => {
                handleCloseModal(); // Close modal after 2 seconds
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred.');
            setMessage('');
        }
    };

    // Close modal on outside click
    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleCloseModal();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        if (!showModal) {
            setEmail('');
            setMessage('');
            setError('');
        }
    }, [showModal]);

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
                    <div
                        ref={modalRef}
                        className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full"
                    >
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={handleCloseModal}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Password Reset Request</h2>
                        <form onSubmit={handleSubmit}>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            >
                                Send Password Reset Email
                            </button>
                        </form>
                        {message && <p className="text-green-500 mt-4">{message}</p>}
                        {error && <p className="text-red-500 mt-4">{error}</p>}
                    </div>
                </div>
            )}
        </>
    );
};

export default PasswordResetRequest;

