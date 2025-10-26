





// import React, { createContext, useContext, useState, useEffect } from 'react';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
//     const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(!!localStorage.getItem('adminAccessToken'));
//     const [userData, setUserData] = useState(null);
//     const [studentData, setStudentData] = useState(null);
//     const [adminData, setAdminData] = useState(null);

//     useEffect(() => {
//         if (isLoggedIn) {
//             loadUserData();
//         }

//         if (isAdminLoggedIn) {
//             loadAdminData();
//         }
//     }, [isLoggedIn, isAdminLoggedIn]);

//     const loadUserData = () => {
//         const storedUserData = localStorage.getItem('userData');
//         const storedStudentData = localStorage.getItem('studentData');
//         if (storedUserData) setUserData(JSON.parse(storedUserData));
//         if (storedStudentData) setStudentData(JSON.parse(storedStudentData));
//     };

//     const loadAdminData = () => {
//         const storedAdminData = localStorage.getItem('adminData');
//         if (storedAdminData) setAdminData(JSON.parse(storedAdminData));
//     };

//     const login = () => {
//         setIsLoggedIn(true);
//         loadUserData();
//     };

//     const adminLogin = () => {
//         setIsAdminLoggedIn(true);
//         loadAdminData();
//     };

//     const logout = () => {
//         setIsLoggedIn(false);
//         setUserData(null);
//         setStudentData(null);
//         clearUserDataFromLocalStorage();
//     };

//     const adminLogout = () => {
//         setIsAdminLoggedIn(false);
//         setAdminData(null);
//         clearAdminDataFromLocalStorage();
//     };

//     const clearUserDataFromLocalStorage = () => {
//         localStorage.removeItem('accessToken');
//         localStorage.removeItem('refreshToken');
//         localStorage.removeItem('userData');
//         localStorage.removeItem('studentData');
//     };

//     const clearAdminDataFromLocalStorage = () => {
//         localStorage.removeItem('adminAccessToken');
//         localStorage.removeItem('adminRefreshToken');
//         localStorage.removeItem('adminData');
//     };

//     return (
//         <AuthContext.Provider value={{ 
//             isLoggedIn, 
//             setIsLoggedIn,
//             isAdminLoggedIn, 
//             setIsAdminLoggedIn,
//             login, 
//             logout, 
//             adminLogin, 
//             adminLogout, 
//             userData, 
//             studentData, 
//             adminData 
//         }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);




import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('accessToken'));
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(!!localStorage.getItem('adminAccessToken'));
    const [userData, setUserData] = useState(null);
    const [studentData, setStudentData] = useState(null);
    const [adminData, setAdminData] = useState(null);

    useEffect(() => {
        if (isLoggedIn) {
            loadUserData();
        }

        if (isAdminLoggedIn) {
            loadAdminData();
        }
    }, [isLoggedIn, isAdminLoggedIn]);

    const loadUserData = () => {
        try {
            const storedUserData = localStorage.getItem('userData');
            const storedStudentData = localStorage.getItem('studentData');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            }
            if (storedStudentData) {
                setStudentData(JSON.parse(storedStudentData));
            }
        } catch (error) {
            console.error("Error parsing user data from localStorage:", error);
        }
    };

    const loadAdminData = () => {
        try {
            const storedAdminData = localStorage.getItem('adminData');
            if (storedAdminData) {
                setAdminData(JSON.parse(storedAdminData));
            }
        } catch (error) {
            console.error("Error parsing admin data from localStorage:", error);
        }
    };

    const login = () => {
        setIsLoggedIn(true);
        loadUserData();
    };

    const adminLogin = () => {
        setIsAdminLoggedIn(true);
        loadAdminData();
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUserData(null);
        setStudentData(null);
        clearUserDataFromLocalStorage();
    };

    const adminLogout = () => {
        setIsAdminLoggedIn(false);
        setAdminData(null);
        clearAdminDataFromLocalStorage();
    };

    const clearUserDataFromLocalStorage = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('studentData');
    };

    const clearAdminDataFromLocalStorage = () => {
        localStorage.removeItem('adminAccessToken');
        localStorage.removeItem('adminRefreshToken');
        localStorage.removeItem('adminData');
    };

    return (
        <AuthContext.Provider value={{ 
            isLoggedIn, 
            setIsLoggedIn,
            isAdminLoggedIn, 
            setIsAdminLoggedIn,
            login, 
            logout, 
            adminLogin, 
            adminLogout, 
            userData, 
            studentData, 
            adminData 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
