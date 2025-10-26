



import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';
import PasswordResetRequest from './PasswordResetRequest';

const Login = ({ showModal, handleCloseModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPasswordResetRequest, setShowPasswordResetRequest] = useState(false);

    const navigate = useNavigate();
    const { login } = useAuth();
    const loginModalRef = useRef(null);
    const passwordResetModalRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('http://127.0.0.1:8000/users/api/login/', {
                email,
                password,
            });

            const { refresh, access, user_data, student_data } = response.data;

            localStorage.setItem('refreshToken', refresh);
            localStorage.setItem('accessToken', access);
            localStorage.setItem('userData', JSON.stringify(user_data));
            localStorage.setItem('studentData', JSON.stringify(student_data));

            login();
            navigate('/profile', { state: { user_data, student_data } });
            handleCloseModal(); // Close the modal after successful login
        } catch (error) {
            console.error('Login Error:', error.response || error.message);
            setError('Invalid credentials. Please try again.');
        }
    };

    const handleShowPasswordResetRequest = () => setShowPasswordResetRequest(true);
    const handleClosePasswordResetRequest = () => setShowPasswordResetRequest(false);

    const handleOutsideClick = (e) => {
        if (loginModalRef.current && !loginModalRef.current.contains(e.target) &&
            (!passwordResetModalRef.current || !passwordResetModalRef.current.contains(e.target))) {
            handleCloseModal(); 
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Reset form when modal is closed
    useEffect(() => {
        if (!showModal) {
            setEmail('');
            setPassword('');
            setError('');
            setShowPasswordResetRequest(false);
        }
    }, [showModal]);

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
                    <div ref={loginModalRef} className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={() => handleCloseModal()}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Login</h2>
                        <form onSubmit={handleLogin}>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {error && <div className="text-sm text-red-500 mb-4">{error}</div>}
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            >
                                Login
                            </button>
                        </form>
                        <button
                            className="mt-4 text-blue-500 hover:underline text-sm"
                            onClick={handleShowPasswordResetRequest}
                        >
                            Forgot Password?
                        </button>
                    </div>
                </div>
            )}
            {showPasswordResetRequest && (
                <PasswordResetRequest
                    showModal={showPasswordResetRequest}
                    handleCloseModal={handleClosePasswordResetRequest}
                    modalRef={passwordResetModalRef} 
                />
            )}
        </>
    );
};

export default Login;
