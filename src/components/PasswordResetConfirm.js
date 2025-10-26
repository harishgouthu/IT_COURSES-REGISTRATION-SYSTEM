

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const PasswordResetConfirm = () => {
    const { uidb64, token } = useParams();
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:8000/users/password-reset/${uidb64}/${token}/`, { new_password: newPassword });
            setMessage('Password has been reset successfully.');
            setError('');
            setTimeout(() => navigate('/'), 2000); // Redirect to login page after successful reset
        } catch (err) {
            setError(err.response?.data?.error || 'An error occurred.');
            setMessage('');
        }
    };

    useEffect(() => {
        if (!uidb64 || !token) {
            navigate('/'); 
        }
    }, [uidb64, token, navigate]);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
            <div className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Reset Your Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <label className="block text-sm font-medium text-gray-600">
                        New Password:
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mt-1"
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                    >
                        Reset Password
                    </button>
                </form>
                {message && <p className="mt-4 text-green-600 text-center">{message}</p>}
                {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
            </div>
        </div>
    );
};

export default PasswordResetConfirm;
