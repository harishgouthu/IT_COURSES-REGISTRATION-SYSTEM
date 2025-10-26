



// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import AdminPasswordResetRequest from './AdminPasswordResetRequest';
// const AdminLogin = ({ showModal, handleCloseModal }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [showAdminPasswordResetRequest, setShowAdminPasswordResetRequest] = useState(false);

//     const navigate = useNavigate();
//     const modalRef = useRef(null);
//     const { adminLogin } = useAuth();
//     const AdminpasswordResetModalRef = useRef(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/users/admin/login/', {
//                 email,
//                 password,
//             });

//             // Store admin tokens in localStorage
//             localStorage.setItem('adminRefreshToken', response.data.refresh);
//             localStorage.setItem('adminAccessToken', response.data.access);

//             // Call login function with admin user data
//             adminLogin({
//                 email,
//                 isAdmin: true,
//             });

//             // Redirect to the admin dashboard
//             navigate('/admin-dashboard');
//             handleCloseModal(); // Close the modal after successful login

//             // Reset form fields
//             setEmail('');
//             setPassword('');
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setError(error.response.data.error || 'Login failed. Please try again.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };
//     const handleShowAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(true);
//     const handleCloseAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(false);

//     // Close modal on outside click
//     const handleOutsideClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target)) {
//             handleCloseModal(); // Close modal and reset form
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     // Ensure form fields are reset when modal is closed
//     const handleModalClose = () => {
//         setEmail('');
//         setPassword('');
//         handleCloseModal();
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
//                     <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//                         <button
//                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             onClick={handleModalClose}
//                         >
//                             &times;
//                         </button>
//                         <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Admin Login</h2>
//                         {error && <div className="text-sm text-red-500 mb-4 text-center">{error}</div>}
//                         <form onSubmit={handleLogin}>
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                             <input
//                                 type="email"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 id="email"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                             <input
//                                 type="password"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 id="password"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                             >
//                                 Login
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//             {showAdminPasswordResetRequest && (
//                 <AdminPasswordResetRequest
//                     showModal={showAdminPasswordResetRequest}
//                     handleCloseModal={handleClosePasswordResetRequest}
//                     modalRef={AdminpasswordResetModalRef} // Pass ref for PasswordResetRequest modal
//                 />
//             )}
//         </>
//     );
// };

// export default AdminLogin;


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import AdminPasswordResetRequest from './AdminPasswordResetRequest';

// const AdminLogin = ({ showModal, handleCloseModal }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [showAdminPasswordResetRequest, setShowAdminPasswordResetRequest] = useState(false);

//     const navigate = useNavigate();
//     const modalRef = useRef(null);
//     const { adminLogin } = useAuth();
//     const adminPasswordResetModalRef = useRef(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/users/admin/login/', {
//                 email,
//                 password,
//             });

//             localStorage.setItem('adminRefreshToken', response.data.refresh);
//             localStorage.setItem('adminAccessToken', response.data.access);

//             adminLogin({
//                 email,
//                 isAdmin: true,
//             });

//             navigate('/admin-dashboard');
//             handleCloseModal(); // Close the modal after successful login
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setError(error.response.data.error || 'Login failed. Please try again.');
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     const handleShowAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(true);
//     const handleCloseAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(false);

//     const handleOutsideClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target) &&
//             (!adminPasswordResetModalRef.current || !adminPasswordResetModalRef.current.contains(e.target))) {
//             handleCloseModal(); // Close the login modal only if clicking outside both modals
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     const handleModalClose = () => {
//         setEmail('');
//         setPassword('');
//         handleCloseModal();
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
//                     <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//                         <button
//                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             onClick={handleModalClose}
//                         >
//                             &times;
//                         </button>
//                         <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Admin Login</h2>
//                         {error && <div className="text-sm text-red-500 mb-4 text-center">{error}</div>}
//                         <form onSubmit={handleLogin}>
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                             <input
//                                 type="email"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                             <input
//                                 type="password"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                             >
//                                 Login
//                             </button>
//                         </form>
//                         <button
//                             className="mt-4 text-blue-500 hover:underline text-sm"
//                             onClick={handleShowAdminPasswordResetRequest}
//                         >
//                             Forgot Password?
//                         </button>
//                     </div>
//                 </div>
//             )}
//             {showAdminPasswordResetRequest && (
//                 <AdminPasswordResetRequest
//                     showModal={showAdminPasswordResetRequest}
//                     handleCloseModal={handleCloseAdminPasswordResetRequest}
//                     modalRef={adminPasswordResetModalRef}
//                 />
//             )}
//         </>
//     );
// };

// export default AdminLogin;


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import AdminPasswordResetRequest from './AdminPasswordResetRequest';

// const AdminLogin = ({ showModal, handleCloseModal }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [showAdminPasswordResetRequest, setShowAdminPasswordResetRequest] = useState(false);

//     const navigate = useNavigate();
//     const modalRef = useRef(null);
//     const { adminLogin } = useAuth();
//     const adminPasswordResetModalRef = useRef(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/users/api/token/', {
//                 email,
//                 password,
//             });

//             localStorage.setItem('adminRefreshToken', response.data.refresh);
//             localStorage.setItem('adminAccessToken', response.data.access);

//             adminLogin({
//                 email,
//                 isAdmin: true,
//             });

//             navigate('/admin-dashboard');
//             handleCloseModal(); // Close the modal after successful login
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setError(error.response.data.detail || 'Login failed. Please try again.'); // Adjust error message
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     const handleShowAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(true);
//     const handleCloseAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(false);

//     const handleOutsideClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target) &&
//             (!adminPasswordResetModalRef.current || !adminPasswordResetModalRef.current.contains(e.target))) {
//             handleCloseModal(); // Close the login modal only if clicking outside both modals
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     const handleModalClose = () => {
//         setEmail('');
//         setPassword('');
//         handleCloseModal();
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
//                     <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//                         <button
//                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             onClick={handleModalClose}
//                         >
//                             &times;
//                         </button>
//                         <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Admin Login</h2>
//                         {error && <div className="text-sm text-red-500 mb-4 text-center">{error}</div>}
//                         <form onSubmit={handleLogin}>
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                             <input
//                                 type="email"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                             <input
//                                 type="password"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                             >
//                                 Login
//                             </button>
//                         </form>
//                         <button
//                             className="mt-4 text-blue-500 hover:underline text-sm"
//                             onClick={handleShowAdminPasswordResetRequest}
//                         >
//                             Forgot Password?
//                         </button>
//                     </div>
//                 </div>
//             )}
//             {showAdminPasswordResetRequest && (
//                 <AdminPasswordResetRequest
//                     showModal={showAdminPasswordResetRequest}
//                     handleCloseModal={handleCloseAdminPasswordResetRequest}
//                     modalRef={adminPasswordResetModalRef}
//                 />
//             )}
//         </>
//     );
// };

// export default AdminLogin;







// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import AdminPasswordResetRequest from './AdminPasswordResetRequest';

// const AdminLogin = ({ showModal, handleCloseModal }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [showAdminPasswordResetRequest, setShowAdminPasswordResetRequest] = useState(false);

//     const navigate = useNavigate();
//     const modalRef = useRef(null);
//     const { adminLogin } = useAuth();
//     const adminPasswordResetModalRef = useRef(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/users/admin/login/', {
//                 email,
//                 password,
//             });

//             localStorage.setItem('adminRefreshToken', response.data.refresh);
//             localStorage.setItem('adminAccessToken', response.data.access);

//             adminLogin({
//                 email,
//                 isAdmin: true,
//             });

//             navigate('/admin-dashboard');
//             handleModalClose(); // Close the modal after successful login
//         } catch (error) {
//             if (error.response && error.response.data) {
//                 setError(error.response.data.detail || 'Login failed. Please try again.'); // Adjust error message
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     const handleShowAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(true);
//     const handleCloseAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(false);

//     const handleOutsideClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target) &&
//             (!adminPasswordResetModalRef.current || !adminPasswordResetModalRef.current.contains(e.target))) {
//             handleModalClose(); // Close the login modal only if clicking outside both modals
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     const handleModalClose = () => {
//         setEmail('');
//         setPassword('');
//         setError('');
//         handleCloseModal();
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
//                     <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//                         <button
//                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             onClick={handleModalClose}
//                         >
//                             &times;
//                         </button>
//                         <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Admin Login</h2>
//                         {error && <div className="text-sm text-red-500 mb-4 text-center">{error}</div>}
//                         <form onSubmit={handleLogin}>
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                             <input
//                                 type="email"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                             <input
//                                 type="password"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                             >
//                                 Login
//                             </button>
//                         </form>
//                         <button
//                             className="mt-4 text-blue-500 hover:underline text-sm"
//                             onClick={handleShowAdminPasswordResetRequest}
//                         >
//                             Forgot Password?
//                         </button>
//                     </div>
//                 </div>
//             )}
//             {showAdminPasswordResetRequest && (
//                 <AdminPasswordResetRequest
//                     showModal={showAdminPasswordResetRequest}
//                     handleCloseModal={handleCloseAdminPasswordResetRequest}
//                     modalRef={adminPasswordResetModalRef}
//                 />
//             )}
//         </>
//     );
// };

// export default AdminLogin;


// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import AdminPasswordResetRequest from './AdminPasswordResetRequest';

// const AdminLogin = ({ showModal, handleCloseModal }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [showAdminPasswordResetRequest, setShowAdminPasswordResetRequest] = useState(false);

//     const navigate = useNavigate();
//     const modalRef = useRef(null);
//     const { adminLogin } = useAuth();
//     const adminPasswordResetModalRef = useRef(null);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setError('');

//         try {
//             const response = await axios.post('http://127.0.0.1:8000/users/admin/login/', {
//                 email,
//                 password,
//             });

//             localStorage.setItem('adminRefreshToken', response.data.refresh);
//             localStorage.setItem('adminAccessToken', response.data.access);

//             adminLogin({
//                 email,
//                 isAdmin: true,
//             });

//             navigate('/admin-dashboard');
//             handleModalClose(); // Close the modal after successful login
//         } catch (error) {
//             if (error.response) {
//                 // Check if error response exists
//                 if (error.response.data) {
//                     // Set specific error message based on response
//                     setError(error.response.data.error || 'An error occurred. Please try again.');
//                 } else {
//                     setError('An error occurred. Please try again.');
//                 }
//             } else {
//                 setError('An error occurred. Please try again.');
//             }
//         }
//     };

//     const handleShowAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(true);
//     const handleCloseAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(false);

//     const handleOutsideClick = (e) => {
//         if (modalRef.current && !modalRef.current.contains(e.target) &&
//             (!adminPasswordResetModalRef.current || !adminPasswordResetModalRef.current.contains(e.target))) {
//             handleModalClose(); // Close the login modal only if clicking outside both modals
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('mousedown', handleOutsideClick);
//         return () => {
//             document.removeEventListener('mousedown', handleOutsideClick);
//         };
//     }, []);

//     const handleModalClose = () => {
//         setEmail('');
//         setPassword('');
//         setError('');
//         handleCloseModal();
//     };

//     return (
//         <>
//             {showModal && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
//                     <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
//                         <button
//                             className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
//                             onClick={handleModalClose}
//                         >
//                             &times;
//                         </button>
//                         <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Admin Login</h2>
//                         {error && <div className="text-sm text-red-500 mb-4 text-center">{error}</div>}
//                         <form onSubmit={handleLogin}>
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
//                             <input
//                                 type="email"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 required
//                             />
//                             <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
//                             <input
//                                 type="password"
//                                 className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                             />
//                             <button
//                                 type="submit"
//                                 className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                             >
//                                 Login
//                             </button>
//                         </form>
//                         <button
//                             className="mt-4 text-blue-500 hover:underline text-sm"
//                             onClick={handleShowAdminPasswordResetRequest}
//                         >
//                             Forgot Password?
//                         </button>
//                     </div>
//                 </div>
//             )}
//             {showAdminPasswordResetRequest && (
//                 <AdminPasswordResetRequest
//                     showModal={showAdminPasswordResetRequest}
//                     handleCloseModal={handleCloseAdminPasswordResetRequest}
//                     modalRef={adminPasswordResetModalRef}
//                 />
//             )}
//         </>
//     );
// };

// export default AdminLogin;


import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import AdminPasswordResetRequest from './AdminPasswordResetRequest';

const AdminLogin = ({ showModal, handleCloseModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showAdminPasswordResetRequest, setShowAdminPasswordResetRequest] = useState(false);

    const navigate = useNavigate();
    const modalRef = useRef(null);
    const { adminLogin } = useAuth();
    const adminPasswordResetModalRef = useRef(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/admin/login/', {
                email,
                password,
            });
    
            localStorage.setItem('adminRefreshToken', response.data.refresh);
            localStorage.setItem('adminAccessToken', response.data.access);
    
            adminLogin({
                email,
                isAdmin: true,
            });
    
            navigate('/admin-dashboard');
            handleModalClose(); 
        } catch (error) {
            console.error('Login Error:', error); 
            if (error.response) {
              
                console.error('Error Response Data:', error.response.data);
    
                const errorData = error.response.data;
    
               
                if (errorData.non_field_errors && Array.isArray(errorData.non_field_errors)) {
                    setError(errorData.non_field_errors.join(', ')); 
                } else if (errorData.error) {
                    setError(errorData.error);
                } else {
                    setError('An error occurred. Please try again.');
                }
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        }
    };
    
    const handleShowAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(true);
    const handleCloseAdminPasswordResetRequest = () => setShowAdminPasswordResetRequest(false);

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target) &&
            (!adminPasswordResetModalRef.current || !adminPasswordResetModalRef.current.contains(e.target))) {
            handleModalClose(); // Close the login modal only if clicking outside both modals
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleModalClose = () => {
        setEmail('');
        setPassword('');
        setError('');
        handleCloseModal();
    };

    return (
        <>
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-60">
                    <div ref={modalRef} className="relative bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                            onClick={handleModalClose}
                        >
                            &times;
                        </button>
                        <h2 className="text-xl font-semibold mb-4 text-blue-600 text-center">Admin Login</h2>
                        {error && <div className="text-sm text-red-500 mb-4 text-center">{error}</div>}
                        <form onSubmit={handleLogin}>
                            <label className="block mb-2 text-sm font-medium text-gray-600">Email</label>
                            <input
                                type="email"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <label className="block mb-2 text-sm font-medium text-gray-600">Password</label>
                            <input
                                type="password"
                                className="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 mb-4"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            >
                                Login
                            </button>
                        </form>
                        <button
                            className="mt-4 text-blue-500 hover:underline text-sm"
                            onClick={handleShowAdminPasswordResetRequest}
                        >
                            Forgot Password?
                        </button>
                    </div>
                </div>
            )}
            {showAdminPasswordResetRequest && (
                <AdminPasswordResetRequest
                    showModal={showAdminPasswordResetRequest}
                    handleCloseModal={handleCloseAdminPasswordResetRequest}
                    modalRef={adminPasswordResetModalRef}
                />
            )}
        </>
    );
};

export default AdminLogin;
