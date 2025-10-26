


// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { useAuth } from './components/AuthContext'; 
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './components/Home';
// import About from './components/About';
// import CoursesOffering from './components/CoursesOffering';
// import CourseCalendar from './components/CourseCalendar';
// import Stories from './components/Stories';
// import Contact from './components/Contact';
// import AddTrainerForm from './admin-components/admin-trainer-form';
// import TrainerList from './admin-components/TrainerList';
// import AddTopicForm from './admin-components/AddTopicForm';
// import TopicList from './admin-components/TopicList';
// import AddCourseForm from './admin-components/AddCourseForm';
// import CourseList from './admin-components/CourseList';
// import BatchForm from './admin-components/AddBatchForm';
// import BatchList from './admin-components/BatchList';
// import AdminLogin from './admin-components/AdminLogin';
// import AdminPasswordResetRequest from './admin-components/AdminPasswordResetRequest';
// import AdminPasswordResetConfirm from './admin-components/AdminPasswordResetConfirm';
// import Register from './components/Register';
// import Login from './components/Login';
// import UserProfile from './components/UserProfile';
// import AdminDashboard from './admin-components/AdminDashboard';
// import PasswordResetRequest from './components/PasswordResetRequest';
// import PasswordResetConfirm from './components/PasswordResetConfirm';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const App = () => {
//     const { isAdminLoggedIn } = useAuth();
//     return (
//         <>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/courses-offering" element={<CoursesOffering />} />
//                 <Route path="/course-calendar" element={<CourseCalendar />} />
//                 <Route path="/stories" element={<Stories />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/register" element={<Register />} />
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/admin-login" element={<AdminLogin />} />
//                 <Route path="/admin-dashboard" element={<AdminDashboard />}>
//                     <Route path="add-trainer" element={<AddTrainerForm />} />
//                     <Route path="add-topic" element={<AddTopicForm />} />
//                     <Route path="add-course" element={<AddCourseForm />} />
//                     <Route path="add-batch" element={<BatchForm />} />
//                     <Route path="edit-batch/:batchId" element={<BatchForm />} />
//                 </Route>
//                 <Route path="/profile" element={<UserProfile />} />
//                 <Route path="/manage-trainer" element={<TrainerList />} />
//                 <Route path="/manage-topic" element={<TopicList />} />
//                 <Route path="/manage-course" element={<CourseList />} />
//                 <Route path="/manage-batch" element={<BatchList />} />
//                 <Route path="/password-reset" element={<PasswordResetRequest/>} />
//                 <Route path="/password-reset-confirm/:uidb64/:token" element={<PasswordResetConfirm />} />
//                 <Route path="/adminpassword-reset" element={<AdminPasswordResetRequest/>} />
//                 <Route path="/adminpassword-reset-confirm/:uidb64/:token" element={<AdminPasswordResetConfirm />} />

                
               
//             </Routes>
           
//             <Footer />
//         </>
//     );
// };

// export default App;



import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './components/AuthContext'; // Import useAuth
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import CoursesOffering from './components/CoursesOffering';
import CourseCalendar from './components/CourseCalendar';
import Stories from './components/Stories';
import Contact from './components/Contact';
import AddTrainerForm from './admin-components/admin-trainer-form';
import TrainerList from './admin-components/TrainerList';
import AddTopicForm from './admin-components/AddTopicForm';
import TopicList from './admin-components/TopicList';
import AddCourseForm from './admin-components/AddCourseForm';
import CourseList from './admin-components/CourseList';
import BatchForm from './admin-components/AddBatchForm';
import BatchList from './admin-components/BatchList';
import AdminLogin from './admin-components/AdminLogin';
import UserManagement from './admin-components/UserManagement';
import AdminPasswordResetRequest from './admin-components/AdminPasswordResetRequest';
import AdminPasswordResetConfirm from './admin-components/AdminPasswordResetConfirm';
import Register from './components/Register';
import Login from './components/Login';
import UserProfile from './components/UserProfile';
import AdminDashboard from './admin-components/AdminDashboard';
import PasswordResetRequest from './components/PasswordResetRequest';
import PasswordResetConfirm from './components/PasswordResetConfirm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    const { isAdminLoggedIn } = useAuth(); // Get isAdminLoggedIn from useAuth

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses-offering" element={<CoursesOffering />} />
                <Route path="/course-calendar" element={<CourseCalendar />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={isAdminLoggedIn ? <AdminDashboard /> : <Navigate to="/admin-login" />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/manage-trainer" element={<TrainerList />} />
                <Route path="/manage-topic" element={<TopicList />} />
                <Route path="/manage-course" element={<CourseList />} />
                <Route path="/manage-batch" element={<BatchList />} />
                <Route path="/password-reset" element={<PasswordResetRequest />} />
                <Route path="/password-reset-confirm/:uidb64/:token" element={<PasswordResetConfirm />} />
                <Route path="/adminpassword-reset" element={<AdminPasswordResetRequest />} />
                <Route path="/adminpassword-reset-confirm/:uidb64/:token" element={<AdminPasswordResetConfirm />} />
                <Route path="/manage-users" element={<UserManagement />} />
            </Routes>
            <Footer />
        </>
    );
};

export default App;
