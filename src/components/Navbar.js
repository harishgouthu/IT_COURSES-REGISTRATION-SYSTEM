



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import Register from './Register';
// import Login from './Login';
// import AdminLogin from '../admin-components/AdminLogin';

// const Navbar = () => {
//     const [showRegisterModal, setShowRegisterModal] = useState(false);
//     const [showLoginModal, setShowLoginModal] = useState(false);
//     const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
//     const { isLoggedIn, isAdminLoggedIn, logout, adminLogout } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const adminAccessToken = localStorage.getItem('adminAccessToken');
//         const userAccessToken = localStorage.getItem('accessToken');

//         if (adminAccessToken) {
//             setShowAdminLoginModal(false);
//         } else if (userAccessToken) {
//             setShowLoginModal(false);
//         }
//     }, []);

//     const handleAdminLogout = async () => {
//         const refreshToken = localStorage.getItem('adminRefreshToken');
//         try {
//             await axios.post('http://127.0.0.1:8000/users/admin/logout/', { refresh: refreshToken }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`,
//                 },
//             });
//             localStorage.removeItem('adminAccessToken');
//             localStorage.removeItem('adminRefreshToken');
//             adminLogout();
//             alert('Admin successfully logged out.');
//             navigate('/');
//         } catch (error) {
//             console.error('Admin Logout Error:', error.response ? error.response.data : error.message);
//             adminLogout();
//             alert('An error occurred while logging out. Please try again.');
//             navigate('/');
//         }
//     };

//     const handleLogout = async () => {
//         const refreshToken = localStorage.getItem('refreshToken');
//         try {
//             await axios.post('http://127.0.0.1:8000/users/api/logout/', { refresh: refreshToken }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             });
//             localStorage.removeItem('accessToken');
//             localStorage.removeItem('refreshToken');
//             logout();
//             alert('Successfully logged out.');
//             navigate('/');
//         } catch (error) {
//             console.error('Logout Error:', error.response ? error.response.data : error.message);
//             logout();
//             alert('An error occurred while logging out. Please try again.');
//             navigate('/');
//         }
//     };

//     const handleShowRegister = () => setShowRegisterModal(true);
//     const handleCloseRegister = () => setShowRegisterModal(false);

//     const handleShowLogin = () => setShowLoginModal(true);
//     const handleCloseLogin = () => setShowLoginModal(false);

//     const handleShowAdminLogin = () => setShowAdminLoginModal(true);
//     const handleCloseAdminLogin = () => setShowAdminLoginModal(false);

//     return (
//         <header className="flex items-center justify-between bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 p-4 text-white shadow-lg">
//             <div className="flex items-center">
//                 {/* <img src="/assets/Courses_25.05.png" alt="Logo" className="h-12" /> */}
//                 <img src="/assets/naidulogo.jpg" alt="Logo" className="h-8 w-22" />
//                 <nav className="ml-10 space-x-8 hidden md:flex">
//                     {/* <Link to="/" className="hover:text-gray-300 text-white font-bold">Home</Link> */}
//                     <Link to="/" className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300">Home</Link>
//                     <Link to="/about"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">About</Link>
//                     <Link to="/courses-offering"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Courses Offering</Link>
//                     <Link to="/course-calendar"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Course Calendar</Link>
//                     <Link to="/stories"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Stories</Link>
//                     <Link to="/contact"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Contact</Link>
//                     {isLoggedIn && (
//                         // <Link to="/profile" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">UserProfile</Link>
//                         <Link to="/profile" className="text-green-200 font-bold no-underline hover:underline hover:text-red-600 transition-colors duration-300">UserProfile</Link>
//                     )}
//                     {isAdminLoggedIn && (
//                         // <Link to="/admin-dashboard" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Dashboard</Link>
//                         <Link to="/admin-dashboard" className="text-red-400 font-bold no-underline hover:underline hover:text-red-600 transition-colors duration-300">Dashboard</Link>
//                     )}
//                 </nav>
//             </div>
//             <div className="flex space-x-4">
//                 {isAdminLoggedIn ? (
//                     <button
//                         onClick={handleAdminLogout}
//                         className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
//                     >
//                         Admin Logout
//                     </button>
//                 ) : isLoggedIn ? (
//                     <button
//                         onClick={handleLogout}
//                         className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
//                     >
//                         Logout
//                     </button>
//                 ) : (
//                     <>
//                         <button
//                             onClick={handleShowRegister}
//                             className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
//                         >
//                             Register
//                         </button>
//                         <button
//                             onClick={handleShowLogin}
//                             className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
//                         >
//                             Login
//                         </button>
//                         <button
//                             onClick={handleShowAdminLogin}
//                             className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
//                         >
//                             Admin Login
//                         </button>
//                     </>
//                 )}
//             </div>
//             <Register show={showRegisterModal} handleClose={handleCloseRegister} />
//             <Login showModal={showLoginModal} handleCloseModal={handleCloseLogin} />
//             <AdminLogin showModal={showAdminLoginModal} handleCloseModal={handleCloseAdminLogin} />
//         </header>
//     );
// };

// export default Navbar;







// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../components/AuthContext';
// import Register from './Register';
// import Login from './Login';
// import AdminLogin from '../admin-components/AdminLogin';

// const Navbar = () => {
//     const [showRegisterModal, setShowRegisterModal] = useState(false);
//     const [showLoginModal, setShowLoginModal] = useState(false);
//     const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
//     const { isLoggedIn, isAdminLoggedIn, logout, adminLogout } = useAuth();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const adminAccessToken = localStorage.getItem('adminAccessToken');
//         const userAccessToken = localStorage.getItem('accessToken');

//         if (adminAccessToken) {
//             setShowAdminLoginModal(false);
//         } else if (userAccessToken) {
//             setShowLoginModal(false);
//         }
//     }, []);

//     const handleAdminLogout = async () => {
//         const refreshToken = localStorage.getItem('adminRefreshToken');
//         try {
//             await axios.post('http://127.0.0.1:8000/users/admin/logout/', { refresh: refreshToken }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`,
//                 },
//             });
//             adminLogout();
//             alert('Admin successfully logged out.');
//             navigate('/');
//         } catch (error) {
//             console.error('Admin Logout Error:', error.response ? error.response.data : error.message);
//             adminLogout();
//             alert('An error occurred while logging out. Please try again.');
//             navigate('/');
//         }
//     };

//     const handleLogout = async () => {
//         const refreshToken = localStorage.getItem('refreshToken');
//         try {
//             await axios.post('http://127.0.0.1:8000/users/api/logout/', { refresh: refreshToken }, {
//                 headers: {
//                     Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
//                 },
//             });
//             logout();
//             alert('Successfully logged out.');
//             navigate('/');
//         } catch (error) {
//             console.error('Logout Error:', error.response ? error.response.data : error.message);
//             logout();
//             alert('An error occurred while logging out. Please try again.');
//             navigate('/');
//         }
//     };

//     const handleShowRegister = () => setShowRegisterModal(true);
//     const handleCloseRegister = () => setShowRegisterModal(false);

//     const handleShowLogin = () => setShowLoginModal(true);
//     const handleCloseLogin = () => setShowLoginModal(false);

//     const handleShowAdminLogin = () => setShowAdminLoginModal(true);
//     const handleCloseAdminLogin = () => setShowAdminLoginModal(false);

//     return (
        // <header className="flex items-center justify-between bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 p-4 text-white shadow-lg">
        //     <div className="flex items-center">
        //         <img src="/assets/naidulogo.jpg" alt="Logo" className="h-8 w-22" />
        //         <nav className="ml-10 space-x-8 hidden md:flex">
        //             <Link to="/" className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300">Home</Link>
        //             <Link to="/about"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">About</Link>
        //             <Link to="/courses-offering"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Courses Offering</Link>
        //             <Link to="/course-calendar"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Course Calendar</Link>
        //             <Link to="/stories"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Stories</Link>
        //             <Link to="/contact"  className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Contact</Link>
        //             {isLoggedIn && (
        //                 <Link to="/profile" className="text-green-200 font-bold no-underline hover:underline hover:text-red-600 transition-colors duration-300">UserProfile</Link>
        //             )}
        //             {isAdminLoggedIn && (
        //                 <Link to="/admin-dashboard" className="text-red-400 font-bold no-underline hover:underline hover:text-red-600 transition-colors duration-300">Dashboard</Link>
        //             )}
        //         </nav>
        //     </div>
        //     <div className="flex space-x-4">
        //         {isAdminLoggedIn ? (
        //             <button
        //                 onClick={handleAdminLogout}
        //                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
        //             >
        //                 Admin Logout
        //             </button>
        //         ) : isLoggedIn ? (
        //             <button
        //                 onClick={handleLogout}
        //                 className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
        //             >
        //                 Logout
        //             </button>
        //         ) : (
        //             <>
        //                 <button
        //                     onClick={handleShowRegister}
        //                     className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
        //                 >
        //                     Register
        //                 </button>
        //                 <button
        //                     onClick={handleShowLogin}
        //                     className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
        //                 >
        //                     Login
        //                 </button>
        //                 <button
        //                     onClick={handleShowAdminLogin}
        //                     className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
        //                     // className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
        //                 >
        //                     Admin Login
        //                 </button>
        //             </>
        //         )}
        //     </div>
        //     <Register show={showRegisterModal} handleClose={handleCloseRegister} />
        //     <Login showModal={showLoginModal} handleCloseModal={handleCloseLogin} />
        //     <AdminLogin showModal={showAdminLoginModal} handleCloseModal={handleCloseAdminLogin} />
        // </header>
//     );
// };

// export default Navbar;






import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../components/AuthContext';
import Register from './Register';
import Login from './Login';
import PasswordResetConfirm from './PasswordResetConfirm';
import AdminLogin from '../admin-components/AdminLogin';

const Navbar = () => {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
    const { isLoggedIn, isAdminLoggedIn, logout, adminLogout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'accessToken' || event.key === 'adminAccessToken') {
                // Force a state update to reflect changes
                window.location.reload();
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleAdminLogout = async () => {
        const refreshToken = localStorage.getItem('adminRefreshToken');
        try {
            await axios.post('http://127.0.0.1:8000/users/admin/logout/', { refresh: refreshToken }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`,
                },
            });
            localStorage.removeItem('adminAccessToken'); // Remove the token
            localStorage.setItem('adminAccessToken', null); // Trigger the storage event
            adminLogout();
            alert('Admin successfully logged out.');
            navigate('/');
        } catch (error) {
            console.error('Admin Logout Error:', error.response ? error.response.data : error.message);
            adminLogout();
            alert('An error occurred while logging out. Please try again.');
            navigate('/');
        }
    };

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem('refreshToken');
        try {
            await axios.post('http://127.0.0.1:8000/users/api/logout/', { refresh: refreshToken }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            localStorage.removeItem('accessToken'); // Remove the token
            localStorage.setItem('accessToken', null); // Trigger the storage event
            logout();
            alert('Successfully logged out.');
            navigate('/');
        } catch (error) {
            console.error('Logout Error:', error.response ? error.response.data : error.message);
            logout();
            alert('An error occurred while logging out. Please try again.');
            navigate('/');
        }
    };

    const handleShowRegister = () => setShowRegisterModal(true);
    const handleCloseRegister = () => setShowRegisterModal(false);

    const handleShowLogin = () => setShowLoginModal(true);
    const handleCloseLogin = () => setShowLoginModal(false);

    const handleShowAdminLogin = () => setShowAdminLoginModal(true);
    const handleCloseAdminLogin = () => setShowAdminLoginModal(false);

    return (
        <header className="flex items-center justify-between bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 p-4 text-white shadow-lg">
            <div className="flex items-center">
                <img src="/assets/naidulogo.jpg" alt="Logo" className="h-8 w-22" />
                <nav className="ml-10 space-x-8 hidden md:flex">
                    <Link to="/" className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300">Home</Link>
                    <Link to="/about" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">About</Link>
                    <Link to="/courses-offering" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Courses Offering</Link>
                    <Link to="/course-calendar" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Course Calendar</Link>
                    <Link to="/stories" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Stories</Link>
                    <Link to="/contact" className="text-white font-bold no-underline hover:underline hover:text-black-300 transition-colors duration-300">Contact</Link>
                    {isLoggedIn && (
                        <Link to="/profile" className="text-green-200 font-bold no-underline hover:underline hover:text-red-600 transition-colors duration-300">UserProfile</Link>
                    )}
                    {isAdminLoggedIn && (
                        <Link to="/admin-dashboard" className="text-red-400 font-bold no-underline hover:underline hover:text-red-600 transition-colors duration-300">Dashboard</Link>
                    )}
                </nav>
            </div>
            <div className="flex space-x-4">
                {isAdminLoggedIn ? (
                    <button
                        onClick={handleAdminLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
                    >
                        Admin Logout
                    </button>
                ) : isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <button
                            onClick={handleShowRegister}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
                        >
                            Register
                        </button>
                        <button
                            onClick={handleShowLogin}
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
                        >
                            Login
                        </button>
                        <button
                            onClick={handleShowAdminLogin}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 shadow-md"
                        >
                            Admin Login
                        </button>
                    </>
                )}
            </div>
            <Register show={showRegisterModal} handleClose={handleCloseRegister} />
            <Login showModal={showLoginModal} handleCloseModal={handleCloseLogin} />
            <AdminLogin showModal={showAdminLoginModal} handleCloseModal={handleCloseAdminLogin} />
        </header>
    );
};

export default Navbar;
