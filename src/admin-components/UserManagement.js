


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const UserManagement = () => {
//     const [users, setUsers] = useState([]);
//     const [selectedUser, setSelectedUser] = useState(null);
//     const [editUser, setEditUser] = useState({
//         first_name: '',
//         last_name: '',
//         email: '',
//         mobile_number: '',
//         country_code: '',
//         password: '',
//         is_active: true,
//         is_staff: false,
//         is_superuser: false
//     });

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://127.0.0.1:8000/users/users/');
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             }
//         };
//         fetchUsers();
//     }, []); // Fetch users once on component mount

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setEditUser((prev) => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             if (selectedUser) {
//                 await axios.put(`http://127.0.0.1:8000/users/users/${selectedUser.id}/`, editUser);
//                 const response = await axios.get('http://127.0.0.1:8000/users/users/');
//                 setUsers(response.data);
//                 setSelectedUser(null);
//                 setEditUser({
//                     first_name: '',
//                     last_name: '',
//                     email: '',
//                     mobile_number: '',
//                     country_code: '',
//                     password: '',
//                     is_active: true,
//                     is_staff: false,
//                     is_superuser: false
//                 });
//             }
//         } catch (error) {
//             console.error('Error updating user:', error);
//         }
//     };

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`http://127.0.0.1:8000/users/users/${id}/`);
//             const response = await axios.get('http://127.0.0.1:8000/users/users/');
//             setUsers(response.data);
//         } catch (error) {
//             console.error('Error deleting user:', error);
//         }
//     };

//     const handleEdit = (user) => {
//         setSelectedUser(user);
//         setEditUser({
//             first_name: user.first_name || '',
//             last_name: user.last_name || '',
//             email: user.email || '',
//             mobile_number: user.mobile_number || '',
//             country_code: user.country_code || '',
//             password: '',
//             is_active: user.is_active || true,
//             is_staff: user.is_staff || false,
//             is_superuser: user.is_superuser || false
//         });
//     };

//     return (
//         <div className="p-4 font-sans">
//             <h2 className="text-xl font-semibold mb-4">User Management</h2>
//             {selectedUser && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//                     <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl relative">
//                         <button
//                             onClick={() => setSelectedUser(null)}
//                             className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
//                         >
//                             &times;
//                         </button>
//                         <form onSubmit={handleSubmit} className="space-y-3 text-sm">
//                             <input
//                                 type="text"
//                                 name="first_name"
//                                 value={editUser.first_name}
//                                 onChange={handleChange}
//                                 placeholder="First Name"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                             <input
//                                 type="text"
//                                 name="last_name"
//                                 value={editUser.last_name}
//                                 onChange={handleChange}
//                                 placeholder="Last Name"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                             <input
//                                 type="email"
//                                 name="email"
//                                 value={editUser.email}
//                                 onChange={handleChange}
//                                 placeholder="Email"
//                                 required
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                             <input
//                                 type="text"
//                                 name="mobile_number"
//                                 value={editUser.mobile_number}
//                                 onChange={handleChange}
//                                 placeholder="Mobile Number"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                             <input
//                                 type="text"
//                                 name="country_code"
//                                 value={editUser.country_code}
//                                 onChange={handleChange}
//                                 placeholder="Country Code"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                             <input
//                                 type="password"
//                                 name="password"
//                                 value={editUser.password}
//                                 onChange={handleChange}
//                                 placeholder="Password (leave blank if not changing)"
//                                 className="w-full p-2 border border-gray-300 rounded"
//                             />
//                             <div className="flex items-center mb-3 text-sm">
//                                 <input
//                                     type="checkbox"
//                                     name="is_active"
//                                     checked={editUser.is_active}
//                                     onChange={handleChange}
//                                     className="mr-1"
//                                 />
//                                 <label>Active</label>
//                             </div>
//                             <div className="flex items-center mb-3 text-sm">
//                                 <input
//                                     type="checkbox"
//                                     name="is_staff"
//                                     checked={editUser.is_staff}
//                                     onChange={handleChange}
//                                     className="mr-1"
//                                 />
//                                 <label>Staff</label>
//                             </div>
//                             <div className="flex items-center mb-3 text-sm">
//                                 <input
//                                     type="checkbox"
//                                     name="is_superuser"
//                                     checked={editUser.is_superuser}
//                                     onChange={handleChange}
//                                     className="mr-1"
//                                 />
//                                 <label>Superuser</label>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="w-full py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
//                             >
//                                 Update User
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             )}
//             <h3 className="text-lg font-semibold mb-3">User List</h3>
//             <table className="w-full border-collapse border border-gray-300 text-sm">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-300 p-2">First Name</th>
//                         <th className="border border-gray-300 p-2">Last Name</th>
//                         <th className="border border-gray-300 p-2">Email</th>
//                         <th className="border border-gray-300 p-2">Mobile Number</th>
//                         <th className="border border-gray-300 p-2">Country Code</th>
//                         <th className="border border-gray-300 p-2">Active</th>
//                         <th className="border border-gray-300 p-2">Staff</th>
//                         <th className="border border-gray-300 p-2">Superuser</th>
//                         <th className="border border-gray-300 p-2">Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td className="border border-gray-300 p-2">{user.first_name}</td>
//                             <td className="border border-gray-300 p-2">{user.last_name}</td>
//                             <td className="border border-gray-300 p-2">{user.email}</td>
//                             <td className="border border-gray-300 p-2">{user.mobile_number}</td>
//                             <td className="border border-gray-300 p-2">{user.country_code}</td>
//                             <td className="border border-gray-300 p-2 text-center">{user.is_active ? 'Yes' : 'No'}</td>
//                             <td className="border border-gray-300 p-2 text-center">{user.is_staff ? 'Yes' : 'No'}</td>
//                             <td className="border border-gray-300 p-2 text-center">{user.is_superuser ? 'Yes' : 'No'}</td>
//                             <td className="border border-gray-300 p-2">
//                                 <button
//                                     onClick={() => handleEdit(user)}
//                                     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-2 text-xs"
//                                 >
//                                     Edit
//                                 </button>
//                                 <button
//                                     onClick={() => handleDelete(user.id)}
//                                     className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 text-xs"
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default UserManagement;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [countryCodes, setCountryCodes] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [editUser, setEditUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        mobile_number: '',
        country_code: '',
        password: '',
        is_active: true,
        is_staff: false,
        is_superuser: false
    });
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/users/users/');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        const fetchCountryCodes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/admin-tables/countrycodes/');
                setCountryCodes(response.data);
            } catch (error) {
                console.error('Error fetching country codes:', error);
            }
        };

        fetchUsers();
        fetchCountryCodes();
    }, []); // Fetch users and country codes once on component mount

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setEditUser((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (selectedUser) {
                await axios.put(`http://127.0.0.1:8000/users/users/${selectedUser.id}/`, editUser);
                const response = await axios.get('http://127.0.0.1:8000/users/users/');
                setUsers(response.data);
                setSelectedUser(null);
                setEditUser({
                    first_name: '',
                    last_name: '',
                    email: '',
                    mobile_number: '',
                    country_code: '',
                    password: '',
                    is_active: true,
                    is_staff: false,
                    is_superuser: false
                });
                setSuccessMessage('User updated successfully!');
                setErrorMessage('');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            setErrorMessage('Error updating user. Please try again.');
            setSuccessMessage('');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/users/users/${id}/`);
            const response = await axios.get('http://127.0.0.1:8000/users/users/');
            setUsers(response.data);
            setSuccessMessage('User deleted successfully!');
            setErrorMessage('');
        } catch (error) {
            console.error('Error deleting user:', error);
            setErrorMessage('Error deleting user. Please try again.');
            setSuccessMessage('');
        }
    };

    const handleEdit = (user) => {
        setSelectedUser(user);
        setEditUser({
            first_name: user.first_name || '',
            last_name: user.last_name || '',
            email: user.email || '',
            mobile_number: user.mobile_number || '',
            country_code: user.country_code || '',
            password: '',
            is_active: user.is_active || true,
            is_staff: user.is_staff || false,
            is_superuser: user.is_superuser || false
        });
    };

    return (
        <div className="p-4 font-sans">
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Success!</strong>
                    <span className="block sm:inline">{successMessage}</span>
                </div>
            )}
            {errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline">{errorMessage}</span>
                </div>
            )}
            {selectedUser && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-4xl relative">
                        <button
                            onClick={() => setSelectedUser(null)}
                            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl"
                        >
                            &times;
                        </button>
                        <form onSubmit={handleSubmit} className="space-y-3 text-sm">
                            <input
                                type="text"
                                name="first_name"
                                value={editUser.first_name}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="last_name"
                                value={editUser.last_name}
                                onChange={handleChange}
                                placeholder="Last Name"
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="email"
                                name="email"
                                value={editUser.email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <input
                                type="text"
                                name="mobile_number"
                                value={editUser.mobile_number}
                                onChange={handleChange}
                                placeholder="Mobile Number"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <select
                                name="country_code"
                                value={editUser.country_code}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            >
                                <option value="" disabled>Select Country Code</option>
                                {countryCodes.map((country) => (
                                    <option key={country.id} value={country.code}>
                                        {country.name} ({country.code})
                                    </option>
                                ))}
                            </select>
                            <input
                                type="password"
                                name="password"
                                value={editUser.password}
                                onChange={handleChange}
                                placeholder="Password (leave blank if not changing)"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                            <div className="flex items-center mb-3 text-sm">
                                <input
                                    type="checkbox"
                                    name="is_active"
                                    checked={editUser.is_active}
                                    onChange={handleChange}
                                    className="mr-1"
                                />
                                <label>Active</label>
                            </div>
                            <div className="flex items-center mb-3 text-sm">
                                <input
                                    type="checkbox"
                                    name="is_staff"
                                    checked={editUser.is_staff}
                                    onChange={handleChange}
                                    className="mr-1"
                                />
                                <label>Staff</label>
                            </div>
                            <div className="flex items-center mb-3 text-sm">
                                <input
                                    type="checkbox"
                                    name="is_superuser"
                                    checked={editUser.is_superuser}
                                    onChange={handleChange}
                                    className="mr-1"
                                />
                                <label>Superuser</label>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"
                            >
                                Update User
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <h3 className="text-lg font-semibold mb-3">User List</h3>
            <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">First Name</th>
                        <th className="border border-gray-300 p-2">Last Name</th>
                        <th className="border border-gray-300 p-2">Email</th>
                        <th className="border border-gray-300 p-2">Mobile Number</th>
                        <th className="border border-gray-300 p-2">Country Code</th>
                        <th className="border border-gray-300 p-2">Active</th>
                        <th className="border border-gray-300 p-2">Staff</th>
                        <th className="border border-gray-300 p-2">Superuser</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-gray-300 p-2 text-center">{user.first_name}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.last_name}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.email}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.mobile_number}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.country_code}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.is_active ? 'Yes' : 'No'}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.is_staff ? 'Yes' : 'No'}</td>
                            <td className="border border-gray-300 p-2 text-center">{user.is_superuser ? 'Yes' : 'No'}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                <button
                                    onClick={() => handleEdit(user)}
                                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mr-1"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(user.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
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

export default UserManagement;
