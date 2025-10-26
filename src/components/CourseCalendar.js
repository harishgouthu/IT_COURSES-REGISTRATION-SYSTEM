

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CourseCalendar = () => {
//     const [course, setCourse] = useState(null);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/table/full_courses/')
//             .then(response => {
//                 setCourse(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the course data!', error);
//             });
//     }, []);

//     if (!course) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <ul>
//                 {course.map(c => {
//                     const{id, course_name, course_pdf, course_structure, part1, part2} = c;
//                     return(
//                         <li key={c.id}>
//                             <div>
//                                 {course_name}
//                                 <a href={course_pdf}>pdf</a>
//                                 {course_structure}
//                                 {part1.course_starts_on}
//                                 {part1.course_duration}
//                                 {part1.course_class_time}
//                                 {part1.hours_of_class}
//                                 {part1.class_days.m}
//                                 {part1.class_days.t}
//                                 {part1.class_days.w}
//                                 {part1.class_days.th}
//                                 {part1.class_days.f}
//                                 {part1.class_days.s}
//                                 {part1.class_days.days_per_week}
//                                 {part1.course_batch}
//                                 <img src={ `http://127.0.0.1:8000${part1.course_trainer.trainer_image}`}alt={part1.course_trainer.trainer_name}/>
                                
//                                 {part1.course_trainer.trainer_name}
//                                 {part1.course_trainer.trainer_background}
//                                 {part1.course_trainer.trainer_experience}
//                                 {part1.course_trainer.trainer_designation}
//                                 {part1.course_fee}
//                                 <a href={part1.course_action}>actions</a>

//                                 {part2.course_starts_on}
//                                 {part2.course_duration}
//                                 {part2.course_class_time}
//                                 {part2.hours_of_class}
//                                 {part2.class_days.m}
//                                 {part2.class_days.t}
//                                 {part2.class_days.w}
//                                 {part2.class_days.th}
//                                 {part2.class_days.f}
//                                 {part2.class_days.s}
//                                 {part2.class_days.days_per_week}
//                                 {part2.course_batch}
//                                 <img src={ `http://127.0.0.1:8000${part2.course_trainer.trainer_image}`}alt={part1.course_trainer.trainer_name}/>
                                
//                                 {part2.course_trainer.trainer_name}
//                                 {part2.course_trainer.trainer_background}
//                                 {part2.course_trainer.trainer_experience}
//                                 {part2.course_trainer.trainer_designation}
//                                 {part2.course_fee}
//                                 <a href={part2.course_action}>actions</a>
//                             </div>

//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default CourseCalendar;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const CourseCalendar = () => {
//     const [course, setCourse] = useState(null);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/table/full_courses/')
//             .then(response => {
//                 setCourse(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the course data!', error);
//             });
//     }, []);

//     if (!course) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <ul>
//                 {course.map(c => {
//                     const{id, course_name, course_pdf, course_structure, part1, part2} = c;
//                     return(
//                        <div key = {id}>
//                           <table>
//                             <thead>
//                                <tr>
//                                  <th>Starts On</th>
//                                  <th>Duration</th>
//                                  <th>Class Time</th>
//                                  <th>Class Days</th>
//                                  <th>Trainer</th>
//                                  <th>Batch</th>
//                                  <th>Fee</th>
//                                  <th>Actions</th>
//                                </tr>
//                             </thead>
//                             <tbody>
//                                 <tr>
//                                     <td>{part1.course_starts_on}</td>
//                                     <td>{part1.course_duration}</td>
//                                     <td>{part1.course_class_time} {part1.hours_of_class}</td>
//                                     <td><span>{part1.class_days.m}</span> <span>{part1.class_days.t}</span> <span>{part1.class_days.w}</span> <span>{part1.class_days.th}</span> <span>{part1.class_days.f}</span> <span>{part1.class_days.s}</span> <p>{part1.class_days.days_per_week}</p></td>
//                                     <td><p><img src={ `http://127.0.0.1:8000${part1.course_trainer.trainer_image}`}alt={part1.course_trainer.trainer_name}/></p> <p>{part1.course_trainer.trainer_name}</p> <p>{part1.course_trainer.trainer_background}</p> <p>{part1.course_trainer.trainer_designation}</p></td>
//                                     <td>{part1.course_batch}</td>
//                                     <td> {part1.course_fee}</td>
//                                     <td><a href={part1.course_action}>actions</a></td>
//                                 </tr>
//                                 <tr>
//                                     <td>{part2.course_starts_on}</td>
//                                     <td>{part2.course_duration}</td>
//                                     <td>{part2.course_class_time} {part1.hours_of_class}</td>
//                                     <td><span>{part2.class_days.m}</span> <span>{part2.class_days.t}</span> <span>{part2.class_days.w}</span> <span>{part2.class_days.th}</span> <span>{part2.class_days.f}</span> <span>{part2.class_days.s}</span> <p>{part2.class_days.days_per_week}</p></td>
//                                     <td><p><img src={ `http://127.0.0.1:8000${part2.course_trainer.trainer_image}`}alt={part2.course_trainer.trainer_name}/></p> <p>{part2.course_trainer.trainer_name}</p> <p>{part2.course_trainer.trainer_background}</p> <p>{part2.course_trainer.trainer_designation}</p></td>
//                                     <td>{part2.course_batch}</td>
//                                     <td> {part2.course_fee}</td>
//                                     <td><a href={part2.course_action}>actions</a></td>
//                                 </tr>
//                             </tbody>
//                           </table>
//                        </div>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default CourseCalendar;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './CourseCalendar.css'; 

// const CourseCalendar = () => {
//     const [course, setCourse] = useState(null);

//     useEffect(() => {
//         axios.get('http://127.0.0.1:8000/table/full_courses/')
//             .then(response => {
//                 setCourse(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error fetching the course data!', error);
//             });
//     }, []);

//     if (!course) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="course-calendar-container">
//             <ul className="course-list">
//                 {course.map(c => {
//                     const { id, course_name, course_pdf, course_structure, part1, part2 } = c;
//                     return (
//                         <div key={id} className="course-table-item">
//                             <p className="course-table-name">{course_name}: {course_structure}<a href={course_pdf} target="_blank" rel="noopener noreferrer"><img src="/assets/pdf-img.png"  alt="pdf"  className='pdf-img'/></a></p>
//                             <table className="course-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Starts On</th>
//                                         <th>Duration</th>
//                                         <th>Class Time</th>
//                                         <th>Class Days</th>
//                                         <th>Trainer</th>
//                                         <th>Batch #</th>
//                                         <th>Fee</th>
//                                         <th>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td>{part1.formatted_start_date}</td>
//                                         <td>{part1.course_duration}</td>
//                                         <td>{part1.course_class_time} <p>{part1.hours_of_class}</p></td>
//                                         <td className='days'>
//                                             <span className='m-day'>{part1.class_days.m}</span> <span className='t-day'>{part1.class_days.t}</span> <span className='w-day'>{part1.class_days.w}</span> <span className='th-day'>{part1.class_days.th}</span> <span className='f-day'>{part1.class_days.f}</span> <span className='s-day'>{part1.class_days.s}</span>
//                                             <p>{part1.class_days.days_per_week}</p>
//                                         </td>
//                                         <td>
//                                             <div className="course-trainer-info">
//                                                 <img src={`http://127.0.0.1:8000${part1.course_trainer.trainer_image}`} alt={part1.course_trainer.trainer_name} className="course-trainer-image" />
//                                                 <div>
//                                                     <p className="course-trainer-name">{part1.course_trainer.trainer_name}</p>
//                                                     <p>{part1.course_trainer.trainer_background}</p>
//                                                     <p>{part1.course_trainer.trainer_designation}</p>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>{part1.course_batch}</td>
//                                         <td>Rs. {part1.course_fee}/-</td>
//                                         <td><a className='register-link' href="http://localhost:3000/register">Register</a></td>
//                                     </tr>
//                                     <tr>
//                                         <td>{part2.formatted_start_date}</td>
//                                         <td>{part2.course_duration}</td>
//                                         <td>{part2.course_class_time} <p>{part2.hours_of_class}</p></td>
//                                         <td className='days'>
//                                             <span className='m-day'>{part2.class_days.m}</span> <span className='t-day'>{part2.class_days.t}</span> <span className='w-day'>{part2.class_days.w}</span> <span  className='th-day'>{part2.class_days.th}</span> <span className='f-day'>{part2.class_days.f}</span> <span  className='s-day'>{part2.class_days.s}</span>
//                                             <p>{part2.class_days.days_per_week}</p>
//                                         </td>
//                                         <td>
//                                             <div className="course-trainer-info">
//                                                 <img src={`http://127.0.0.1:8000${part2.course_trainer.trainer_image}`} alt={part2.course_trainer.trainer_name} className="course-trainer-image" />
//                                                 <div>
//                                                     <p className="course-trainer-name">{part2.course_trainer.trainer_name}</p>
//                                                     <p>{part2.course_trainer.trainer_background}</p>
//                                                     <p>{part2.course_trainer.trainer_designation}</p>
//                                                 </div>
//                                             </div>
//                                         </td>
//                                         <td>{part2.course_batch}</td>
//                                         <td>Rs. {part2.course_fee}/-</td>
//                                         <td><a className='register-link' href="http://localhost:3000/register">Register</a></td>
//                                     </tr>
//                                 </tbody>
//                             </table>
                            
//                         </div>
//                     );
//                 })}
//             </ul>
//         </div>
//     );
// };

// export default CourseCalendar;



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CourseCalendar.css'; 
import Register from './Register';

const CourseCalendar = () => {
    const [course, setCourse] = useState(null);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleShowRegister = () => setShowRegisterModal(true);
    const handleCloseRegister = () => setShowRegisterModal(false);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/table/full_courses/')
            .then(response => {
                setCourse(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the course data!', error);
            });
    }, []);

    if (!course) {
        return <div>Loading...</div>;
    }

    return (
        <div className="course-calendar-container">
            <ul className="course-list">
                {course.map(c => {
                    const { id, course_name, course_pdf, course_structure, part1, part2 } = c;
                    return (
                        <div key={id} className="course-table-item">
                            {/* <p className="course-table-name">{course_name}: {course_structure}<a href={course_pdf} target="_blank" rel="noopener noreferrer"><img src="/assets/pdf-img.png"  alt="pdf"  className='pdf-img'/></a></p> */}
                            <p className="course-table-name">
                                <span className="course-structure-container">
                                    {course_name}: {course_structure}
                                    <a href={course_pdf} target="_blank" rel="noopener noreferrer">
                                        <img src="/assets/pdf-img.png" alt="pdf" className="pdf-img" />
                                    </a>
                                </span>
                            </p>

                            <table className="course-table">
                                <thead>
                                    <tr>
                                        <th>Starts On</th>
                                        <th>Duration</th>
                                        <th>Class Time</th>
                                        <th>Class Days</th>
                                        <th>Trainer</th>
                                        <th>Batch #</th>
                                        <th>Fee</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{part1.formatted_start_date}</td>
                                        <td>{part1.course_duration}</td>
                                        <td>{part1.course_class_time} <p>{part1.hours_of_class}</p></td>
                                        <td className='days'>
                                            <span className='m-day'>{part1.class_days.m}</span> <span className='t-day'>{part1.class_days.t}</span> <span className='w-day'>{part1.class_days.w}</span> <span className='th-day'>{part1.class_days.th}</span> <span className='f-day'>{part1.class_days.f}</span> <span className='s-day'>{part1.class_days.s}</span>
                                            <p>{part1.class_days.days_per_week}</p>
                                        </td>
                                        <td>
                                            <div className="course-trainer-info">
                                                <img src={`http://127.0.0.1:8000${part1.course_trainer.trainer_image}`} alt={part1.course_trainer.trainer_name} className="course-trainer-image" />
                                                <div>
                                                    <p className="course-trainer-name">{part1.course_trainer.trainer_name}</p>
                                                    <p>{part1.course_trainer.trainer_background}</p>
                                                    <p>{part1.course_trainer.trainer_designation}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{part1.course_batch}</td>
                                        <td>Rs. {part1.course_fee}/-</td>
                                        {/* <td><a className='register-link' href="http://localhost:3000/register">Register</a></td> */}
                                        <td><button
                                                    onClick={handleShowRegister}
                                                    className='register-link'
                                                >
                                                    Register
                                                </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{part2.formatted_start_date}</td>
                                        <td>{part2.course_duration}</td>
                                        <td>{part2.course_class_time} <p>{part2.hours_of_class}</p></td>
                                        <td className='days'>
                                            <span className='m-day'>{part2.class_days.m}</span> <span className='t-day'>{part2.class_days.t}</span> <span className='w-day'>{part2.class_days.w}</span> <span  className='th-day'>{part2.class_days.th}</span> <span className='f-day'>{part2.class_days.f}</span> <span  className='s-day'>{part2.class_days.s}</span>
                                            <p>{part2.class_days.days_per_week}</p>
                                        </td>
                                        <td>
                                            <div className="course-trainer-info">
                                                <img src={`http://127.0.0.1:8000${part2.course_trainer.trainer_image}`} alt={part2.course_trainer.trainer_name} className="course-trainer-image" />
                                                <div>
                                                    <p className="course-trainer-name">{part2.course_trainer.trainer_name}</p>
                                                    <p>{part2.course_trainer.trainer_background}</p>
                                                    <p>{part2.course_trainer.trainer_designation}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{part2.course_batch}</td>
                                        <td>Rs. {part2.course_fee}/-</td>
                                        {/* <td><a className='register-link' href="http://localhost:3000/register">Register</a></td> */}
                                        <td><button
                                                    onClick={handleShowRegister}
                                                    className='register-link'
                                                >
                                                    Register
                                                </button>
                                                </td>
                                        
                                    </tr>
                                </tbody>
                            </table>
                            <div className='cc-columns'>
                                <p className='cc-column1'>: :  : :  : :  : :  : :</p>
                                <p className='cc-column2'>: :  : :  : :  : :  : :</p>
                            </div>
                        </div>
                    );
                })}
               <Register show={showRegisterModal} handleClose={handleCloseRegister} />
            </ul>
        </div>
    );
};

export default CourseCalendar;



