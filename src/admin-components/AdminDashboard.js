// import React from 'react';

// import AdminSidebar from './AdminNavbar'; 
// import { Outlet } from 'react-router-dom'; 
// const AdminDashboard = () => {
//     return (
//         <div className="flex">
//             <AdminSidebar />
//             <div className="container mx-auto mt-5 ml-4"> 
 
//              <Outlet />
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;


// import React, { useEffect } from 'react';
// import AdminSidebar from './AdminNavbar';
// import { Outlet, useNavigate } from 'react-router-dom';
// import { useAuth } from '../components/AuthContext'; // Assuming you have this context

// const AdminDashboard = () => {
//     const navigate = useNavigate();
//     const { isAdminLoggedIn, adminLogout } = useAuth();

//     useEffect(() => {
//         // Handle logout event across tabs
//         const handleStorageChange = (event) => {
//             if (event.key === 'adminAccessToken' && event.newValue === null) {
//                 // Token removed, user has logged out
//                 adminLogout();
//                 navigate('/'); // Redirect to login page or any other page
//             }
//         };

//         window.addEventListener('storage', handleStorageChange);

//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, [navigate, adminLogout]);

//     return (
//         <div className="flex">
//             <AdminSidebar />
//             <div className="container mx-auto mt-5 ml-4">
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;



import React, { useEffect } from 'react';
import AdminSidebar from './AdminNavbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { isAdminLoggedIn, adminLogout } = useAuth();

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'adminAccessToken' && event.newValue === null) {
                adminLogout();
                navigate('/');
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate, adminLogout]);

    return (
        <div className="flex">
            <AdminSidebar />
            <div className="container mx-auto mt-5 ml-4">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminDashboard;
