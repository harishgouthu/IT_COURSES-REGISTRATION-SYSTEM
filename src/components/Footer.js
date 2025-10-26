// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-logo">
//                 <img src="/assets/Courses_25.05.png" alt="Logo"/>
//             </div>
//             <nav className="footer-links">
//                 <ul>
//                     <li><Link to="/">Home</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/courses-offering">Courses Offering</Link></li>
//                     <li><Link to="/course-calendar">Course Calendar</Link></li>
//                     <li><Link to="/stories">Stories</Link></li>
//                     <li><Link to="/Contact">Contact</Link></li>
//                 </ul>
//             </nav>
//         </footer>
//     );
// };

// export default Footer;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <footer className="bg-gray-800 text-white py-6">
//             <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//                 <div className="footer-logo mb-4 md:mb-0">
//                     <img src="/assets/Courses_25.05.png" alt="Logo" className="h-10" />
//                 </div>
//                 <nav className="footer-links">
//                     <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
//                         <li>
//                             <Link to="/" className="hover:text-gray-400">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about" className="hover:text-gray-400">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/courses-offering" className="hover:text-gray-400">Courses Offering</Link>
//                         </li>
//                         <li>
//                             <Link to="/course-calendar" className="hover:text-gray-400">Course Calendar</Link>
//                         </li>
//                         <li>
//                             <Link to="/stories" className="hover:text-gray-400">Stories</Link>
//                         </li>
//                         <li>
//                             <Link to="/contact" className="hover:text-gray-400">Contact</Link>
//                         </li>
//                     </ul>
//                 </nav>
//             </div>
//             <div className="text-center mt-4">
//                 <p className="text-sm">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-gray-100 py-8">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="footer-logo mb-6 md:mb-0">
                    {/* <img src="/assets/Courses_25.05.png" alt="Logo" className="h-12 w-auto" /> */}
                    <img src="/assets/naidulogo.jpg" alt="Logo" className="h-8 w-22" />
                </div>
                <nav className="footer-links">
                    <ul className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-8">
                        <li>
                            <Link 
                                to="/" 
                                className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/courses-offering" 
                                className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300"
                            >
                                Courses Offering
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/course-calendar" 
                                className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300"
                            >
                                Course Calendar
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/stories" 
                                className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300"
                            >
                                Stories
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                               className="text-white font-bold no-underline hover:underline hover:text-red-00 transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="text-center mt-6">
                <p className="text-sm text-gray-200">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
