




// // // import React, { useState } from 'react';

// // // const AdminRegistrationForm = ({ onClose }) => {
// // //     const [formData, setFormData] = useState({
// // //         firstName: '',
// // //         lastName: '',
// // //         email: '',
// // //         password: '',
// // //     });

// // //     const [error, setError] = useState(null);
// // //     const [success, setSuccess] = useState(false);

// // //     const handleChange = (e) => {
// // //         setFormData({
// // //             ...formData,
// // //             [e.target.name]: e.target.value,
// // //         });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();

// // //         try {
// // //             const response = await fetch('http://127.0.0.1:8000/users/admin-register/', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 },
// // //                 body: JSON.stringify(formData),
// // //             });

// // //             if (response.ok) {
// // //                 setSuccess(true);
// // //                 setError(null); // Clear any previous error messages

// // //                 // Delay closing the form to allow time for the success message to be seen
// // //                 setTimeout(() => {
// // //                     onClose();
// // //                 }, 2000); // 2-second delay
// // //             } else {
// // //                 const errorData = await response.json();
// // //                 setError(errorData.message || 'Something went wrong.');
// // //                 setSuccess(false);
// // //             }
// // //         } catch (error) {
// // //             setError('An error occurred. Please try again.');
// // //             setSuccess(false);
// // //             console.error('Error submitting form:', error);
// // //         }
// // //     };

// // //     return (
// // //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// // //             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
// // //                 <button
// // //                     onClick={onClose}
// // //                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// // //                     aria-label="Close"
// // //                 >
// // //                     &times;
// // //                 </button>
// // //                 <h2 className="text-2xl font-semibold mb-6 text-center">Admin Registration</h2>
// // //                 <form onSubmit={handleSubmit} className="space-y-6">
// // //                     <div>
// // //                         <label className="block text-sm font-medium text-gray-700">First Name</label>
// // //                         <input
// // //                             type="text"
// // //                             name="firstName"
// // //                             value={formData.firstName}
// // //                             onChange={handleChange}
// // //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                             required
// // //                         />
// // //                     </div>
// // //                     <div>
// // //                         <label className="block text-sm font-medium text-gray-700">Last Name</label>
// // //                         <input
// // //                             type="text"
// // //                             name="lastName"
// // //                             value={formData.lastName}
// // //                             onChange={handleChange}
// // //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                             required
// // //                         />
// // //                     </div>
// // //                     <div>
// // //                         <label className="block text-sm font-medium text-gray-700">Email</label>
// // //                         <input
// // //                             type="email"
// // //                             name="email"
// // //                             value={formData.email}
// // //                             onChange={handleChange}
// // //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                             required
// // //                         />
// // //                     </div>
// // //                     <div>
// // //                         <label className="block text-sm font-medium text-gray-700">Password</label>
// // //                         <input
// // //                             type="password"
// // //                             name="password"
// // //                             value={formData.password}
// // //                             onChange={handleChange}
// // //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                             required
// // //                         />
// // //                     </div>
// // //                     {error && <p className="text-red-500 text-center">{error}</p>}
// // //                     {success && <p className="text-green-500 text-center">Registration successful!</p>}
// // //                     <div className="flex justify-between">
// // //                         <button
// // //                             type="button"
// // //                             onClick={onClose}
// // //                             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
// // //                         >
// // //                             Cancel
// // //                         </button>
// // //                         <button
// // //                             type="submit"
// // //                             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
// // //                         >
// // //                             Register
// // //                         </button>
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default AdminRegistrationForm;




// // import React, { useState, useEffect } from 'react';

// // const AdminRegistrationForm = ({ onClose }) => {
// //     const [formData, setFormData] = useState({
// //         firstName: '',
// //         lastName: '',
// //         email: '',
// //         password: '',
// //         countryCode: null,
// //         mobileNumber: '',
// //     });

// //     const [countryCodes, setCountryCodes] = useState([]);
// //     const [error, setError] = useState(null);
// //     const [success, setSuccess] = useState(false);

// //     useEffect(() => {
// //         // Fetch country codes on component mount
// //         const fetchCountryCodes = async () => {
// //             try {
// //                 const response = await fetch('http://127.0.0.1:8000/admin-tables/countrycodes/');
// //                 if (response.ok) {
// //                     const data = await response.json();
// //                     setCountryCodes(data);
// //                 } else {
// //                     console.error('Failed to fetch country codes');
// //                 }
// //             } catch (err) {
// //                 console.error('Error fetching country codes:', err);
// //             }
// //         };

// //         fetchCountryCodes();
// //     }, []);

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData(prevFormData => ({
// //             ...prevFormData,
// //             [name]: value,
// //         }));
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             const response = await fetch('http://127.0.0.1:8000/users/admin-register/', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 },
// //                 body: JSON.stringify(formData),
// //             });

// //             if (response.ok) {
// //                 setSuccess(true);
// //                 setError(null);
// //                 setTimeout(() => onClose(), 2000);
// //             } else {
// //                 const errorData = await response.json();
// //                 setError(errorData.message || 'Something went wrong.');
// //                 setSuccess(false);
// //             }
// //         } catch (error) {
// //             setError('An error occurred. Please try again.');
// //             setSuccess(false);
// //             console.error('Error submitting form:', error);
// //         }
// //     };

// //     return (
// //         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
// //             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
// //                 <button
// //                     onClick={onClose}
// //                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
// //                     aria-label="Close"
// //                 >
// //                     &times;
// //                 </button>
// //                 <h2 className="text-2xl font-semibold mb-6 text-center">Admin Registration</h2>
// //                 <form onSubmit={handleSubmit} className="space-y-6">
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">First Name</label>
// //                         <input
// //                             type="text"
// //                             name="firstName"
// //                             value={formData.firstName}
// //                             onChange={handleChange}
// //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                             required
// //                         />
// //                     </div>
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Last Name</label>
// //                         <input
// //                             type="text"
// //                             name="lastName"
// //                             value={formData.lastName}
// //                             onChange={handleChange}
// //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                             required
// //                         />
// //                     </div>
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Country Code</label>
// //                         <select
// //                             name="countryCode"
// //                             value={formData.countryCode || ''}
// //                             onChange={handleChange}
// //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                         >
// //                             <option value="">Select Country Code</option>
// //                             {countryCodes.map(code => (
// //                                 <option key={code.id} value={code.id}>{code.code}</option>
// //                             ))}
// //                         </select>
// //                     </div>
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
// //                         <input
// //                             type="text"
// //                             name="mobileNumber"
// //                             value={formData.mobileNumber}
// //                             onChange={handleChange}
// //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                             required
// //                         />
// //                     </div>
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Email</label>
// //                         <input
// //                             type="email"
// //                             name="email"
// //                             value={formData.email}
// //                             onChange={handleChange}
// //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                             required
// //                         />
// //                     </div>
// //                     <div>
// //                         <label className="block text-sm font-medium text-gray-700">Password</label>
// //                         <input
// //                             type="password"
// //                             name="password"
// //                             value={formData.password}
// //                             onChange={handleChange}
// //                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                             required
// //                         />
// //                     </div>
// //                     {error && <p className="text-red-500 text-center">{error}</p>}
// //                     {success && <p className="text-green-500 text-center">Registration successful!</p>}
// //                     <div className="flex justify-between">
// //                         <button
// //                             type="button"
// //                             onClick={onClose}
// //                             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
// //                         >
// //                             Cancel
// //                         </button>
// //                         <button
// //                             type="submit"
// //                             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
// //                         >
// //                             Register
// //                         </button>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default AdminRegistrationForm;





// import React, { useState, useEffect } from 'react';

// const AdminRegistrationForm = ({ onClose }) => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: '',
//         countryCode: null,
//         mobileNumber: '',
//     });

//     const [countryCodes, setCountryCodes] = useState([]);
//     const [error, setError] = useState(null);
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         // Fetch country codes on component mount
//         const fetchCountryCodes = async () => {
//             try {
//                 const response = await fetch('http://127.0.0.1:8000/admin-tables/countrycodes/');
//                 if (response.ok) {
//                     const data = await response.json();
//                     setCountryCodes(data);
//                 } else {
//                     console.error('Failed to fetch country codes');
//                 }
//             } catch (err) {
//                 console.error('Error fetching country codes:', err);
//             }
//         };

//         fetchCountryCodes();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prevFormData => ({
//             ...prevFormData,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch('http://127.0.0.1:8000/users/admin-register/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });

//             if (response.ok) {
//                 setSuccess(true);
//                 setError(null);
//                 setTimeout(() => onClose(), 2000);
//             } else {
//                 const errorData = await response.json();
//                 setError(errorData.message || 'Something went wrong.');
//                 setSuccess(false);
//             }
//         } catch (error) {
//             setError('An error occurred. Please try again.');
//             setSuccess(false);
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
//                 <button
//                     onClick={onClose}
//                     className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//                     aria-label="Close"
//                 >
//                     &times;
//                 </button>
//                 <h2 className="text-2xl font-semibold mb-6 text-center">Admin Registration</h2>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">First Name</label>
//                         <input
//                             type="text"
//                             name="firstName"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Last Name</label>
//                         <input
//                             type="text"
//                             name="lastName"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Country Code</label>
//                         <select
//                             name="countryCode"
//                             value={formData.countryCode || ''}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         >
//                             <option value="">Select Country Code</option>
//                             {countryCodes.map(code => (
//                                 <option key={code.id} value={code.id}>{code.code}</option>
//                             ))}
//                         </select>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
//                         <input
//                             type="text"
//                             name="mobileNumber"
//                             value={formData.mobileNumber}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium text-gray-700">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                             required
//                         />
//                     </div>
//                     {error && <p className="text-red-500 text-center">{error}</p>}
//                     {success && <p className="text-green-500 text-center">Registration successful!</p>}
//                     <div className="flex justify-between">
//                         <button
//                             type="button"
//                             onClick={onClose}
//                             className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
//                         >
//                             Cancel
//                         </button>
//                         <button
//                             type="submit"
//                             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-150 ease-in-out"
//                         >
//                             Register
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default AdminRegistrationForm;







import React, { useState, useEffect } from 'react';

const AdminRegistrationForm = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        countryCode: null,
        mobileNumber: '',
    });

    const [countryCodes, setCountryCodes] = useState([]);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        // Fetch country codes on component mount
        const fetchCountryCodes = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/admin-tables/countrycodes/');
                if (response.ok) {
                    const data = await response.json();
                    setCountryCodes(data);
                } else {
                    console.error('Failed to fetch country codes');
                }
            } catch (err) {
                console.error('Error fetching country codes:', err);
            }
        };

        fetchCountryCodes();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://127.0.0.1:8000/users/admin-register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccess(true);
                setError(null);
                setTimeout(() => onClose(), 2000);
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Something went wrong.');
                setSuccess(false);
            }
        } catch (error) {
            setError('An error occurred. Please try again.');
            setSuccess(false);
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative h-auto">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4 text-center">Admin Registration</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-xs font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Country Code</label>
                        <select
                            name="countryCode"
                            value={formData.countryCode || ''}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">Select Country Code</option>
                            {countryCodes.map(code => (
                                <option key={code.id} value={code.id}>{code.code}({code.name})</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-center text-xs">{error}</p>}
                    {success && <p className="text-green-500 text-center text-xs">Registration successful!</p>}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded transition duration-150 ease-in-out"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded transition duration-150 ease-in-out"
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminRegistrationForm;
