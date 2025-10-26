


// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';
// import { MdEmail, MdPhone, MdSchool, MdAssignment } from 'react-icons/md';

// const UserProfile = () => {
//     const navigate = useNavigate();
//     const { userData, studentData } = useAuth();
//     const { isLoggedIn, logout } = useAuth();

//     useEffect(() => {
//         const handleStorageChange = (event) => {
//             if (event.key === 'accessToken' && event.newValue === null) {
//                 logout();
//                 navigate('/');
//             }
//         };

//         window.addEventListener('storage', handleStorageChange);
//         return () => {
//             window.removeEventListener('storage', handleStorageChange);
//         };
//     }, [navigate, logout]);

//     if (!userData) {
//         return (
//             <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
//                 <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-500 hover:scale-105">
//                     <p className="text-gray-700 text-lg">
//                         You are logged out. Please 
//                         <button 
//                             onClick={() => navigate('/login')} 
//                             className="ml-1 text-blue-600 underline hover:text-blue-700 transition duration-300"
//                         >
//                             log in again
//                         </button>.
//                     </p>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
//             <div className="bg-white p-8 rounded-lg shadow-2xl max-w-lg w-full transform transition-transform duration-500 hover:scale-105">
//                 <h3 className="text-4xl font-extrabold text-blue-800 mb-6">Welcome, {userData.first_name} {userData.last_name}!</h3>
                
//                 <div className="space-y-6">
//                     <h4 className="text-3xl font-semibold text-blue-700 border-b-2 border-gray-300 pb-2 mb-4">Your Info</h4>
//                     <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
//                         <div className="flex items-center mb-4">
//                             <MdEmail className="text-blue-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
//                             <div className="flex flex-col">
//                                 <span className="font-semibold text-gray-800 text-lg">Email:</span>
//                                 <span className="text-gray-600 text-md">{userData.email}</span>
//                             </div>
//                         </div>
//                         <div className="flex items-center mb-4">
//                             <MdPhone className="text-green-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
//                             <div className="flex flex-col">
//                                 <span className="font-semibold text-gray-800 text-lg">Mobile Number:</span>
//                                 <span className="text-gray-600 text-md">{studentData ? `${studentData.country_code} ${userData.mobile_number}` : userData.mobile_number}</span>
//                             </div>
//                         </div>

//                         {studentData && (
//                             <>
//                                 <div className="flex items-center mb-4">
//                                     <MdSchool className="text-yellow-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
//                                     <div className="flex flex-col">
//                                         <span className="font-semibold text-gray-800 text-lg">Course Name:</span>
//                                         <span className="text-gray-600 text-md">{studentData.course}</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center mb-4">
//                                     <MdAssignment className="text-red-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
//                                     <div className="flex flex-col">
//                                         <span className="font-semibold text-gray-800 text-lg">Batch Number:</span>
//                                         <span className="text-gray-600 text-md">{studentData.batch}</span>
//                                     </div>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UserProfile;



import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { MdEmail, MdPhone, MdSchool, MdAssignment } from 'react-icons/md';

const UserProfile = () => {
    const navigate = useNavigate();
    const { userData, studentData } = useAuth();
    const { isLoggedIn, logout } = useAuth();

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === 'accessToken' && event.newValue === null) {
                logout();
                navigate('/');
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [navigate, logout]);

    if (!userData) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-200">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full transform transition-transform duration-500 hover:scale-105">
                    <p className="text-gray-700 text-lg">
                        You are logged out. Please 
                        <button 
                            onClick={() => navigate('/login')} 
                            className="ml-1 text-blue-600 underline hover:text-blue-700 transition duration-300"
                        >
                            log in again
                        </button>.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
            <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-2xl max-w-lg w-full transform transition-transform duration-500 hover:scale-105">
                <h3 className="text-4xl font-extrabold text-blue-800 mb-6">Welcome, {userData.first_name} {userData.last_name}!</h3>
                
                <div className="space-y-6">
                    <h4 className="text-3xl font-semibold text-blue-700 border-b-2 border-gray-300 pb-2 mb-4">Your Info</h4>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
                        <div className="flex items-center mb-4">
                            <MdEmail className="text-blue-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-800 text-lg">Email:</span>
                                <span className="text-gray-600 text-md">{userData.email}</span>
                            </div>
                        </div>
                        <div className="flex items-center mb-4">
                            <MdPhone className="text-green-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-800 text-lg">Mobile Number:</span>
                                <span className="text-gray-600 text-md">{studentData ? `${studentData.country_code} ${userData.mobile_number}` : userData.mobile_number}</span>
                            </div>
                        </div>

                        {studentData && (
                            <>
                                <div className="flex items-center mb-4">
                                    <MdSchool className="text-yellow-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-800 text-lg">Course Name:</span>
                                        <span className="text-gray-600 text-md">{studentData.course}</span>
                                    </div>
                                </div>
                                <div className="flex items-center mb-4">
                                    <MdAssignment className="text-red-500 mr-4 w-8 h-8 transition-transform duration-300 hover:scale-110" />
                                    <div className="flex flex-col">
                                        <span className="font-semibold text-gray-800 text-lg">Batch Number:</span>
                                        <span className="text-gray-600 text-md">{studentData.batch}</span>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
