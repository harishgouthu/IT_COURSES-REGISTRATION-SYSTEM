// // src/components/Logout.js
// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Logout = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Clear tokens and user data from local storage
//         localStorage.removeItem('refreshToken');
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('userData');
//         localStorage.removeItem('studentData');

//         // Redirect to login page
//         navigate('/login');
//     }, [navigate]);

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gray-100">
//             <p>Logging out...</p>
//         </div>
//     );
// };

// export default Logout;
