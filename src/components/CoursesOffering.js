

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactStars from 'react-rating-stars-component';
import './CoursesOffering.css';
import Register from './Register';

function CoursesOffering() {
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [courses, setCourses] = useState([]);
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState({ course: '', rating: 1 });
    const [submitError, setSubmitError] = useState(null);

    const handleShowRegister = () => setShowRegisterModal(true);
    const handleCloseRegister = () => setShowRegisterModal(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [coursesRes, reviewsRes] = await Promise.all([
                    // axios.get('http://localhost:8000/api/api/courses/'),
                    axios.get('http://localhost:8000/api/courses/'),
                    axios.get('http://localhost:8000/api/reviews/')
                ]);

                setCourses(coursesRes.data);
                setReviews(reviewsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleReviewSubmit = async (courseId, rating) => {
        try {
            await axios.post('http://localhost:8000/api/reviews/', { course: courseId, rating });
            const reviewsRes = await axios.get('http://localhost:8000/api/reviews/');
            setReviews(reviewsRes.data);
            setNewReview({ course: '', rating: 1 });
            setSubmitError(null);
        } catch (error) {
            console.error('Error submitting review:', error);
            setSubmitError('Error submitting review. Please try again.');
        }
    };

    return (
        <div className="courses-container">
            <ul>
                {courses.map(course => {
                    const {id, course_image, course_name, course_duration, next_batch, course_schedule, class_schedule, class_time, about_course, course_sample, batch_number, formatted_next_batch, course_fee, average_rating, reviews_count, trainer } = course;

                    return (
                        <li key={course.id}>
                              <div className='course-image'>
                               <img src={course_image}  alt ={course_name}/>
                              </div>
                              <div className='box'>
                              {/* <a className='register-url' href="http://localhost:3000/register" target="_blank" rel="noopener noreferrer">Register</a>
                             */}
                                <button
                                    onClick={handleShowRegister}
                                    className='register-url'
                                >
                                    Register
                                </button>
                            <div className='course-content'>
                                <p>{about_course}</p>
                                <span>₹{course_fee}/-</span>
                            </div>
                            <div className='mini-box'>
                              <p className="course-name">{course_name}</p>
                              <div className="label">
                                  <span>Next Batch-{formatted_next_batch}</span>
                                  <span>Batch-{batch_number}</span>
                              </div>
                            </div>
                            <div className="course-item">
                            <div className="course-header">
                                <span className="trainer-heading"><b>Trainer :</b> </span>
                                 <img src={trainer.trainer_image} alt={trainer.trainer_name} className="trainer-image"/>
                                <div className="trainer-info">
                                    <p>{trainer.trainer_name}</p>
                                    <p><b>{trainer.trainer_background}</b></p>
                                    <p>{trainer.trainer_designation}</p>
                                </div>
                                <div className="rating-info">
                                    <p>{average_rating}</p>
                                    <ReactStars
                                        count={5}
                                        value={average_rating}
                                        onChange={(newRating) => handleReviewSubmit(id, newRating)}
                                        size={24}
                                        activeColor="#ffd700"
                                        // edit={false}
                                    />
                                    <span>({reviews_count})</span>
                                </div>
                                <div className="course-schedule">
                                     <b>Schedule: {course_schedule}</b>
                                </div>
                            </div>
                            <div className="course-details">
                                <p>Duration: {course_duration}</p>
                                <p>Class Schedule: {class_schedule}</p>
                                <p>Class Time: {class_time}</p>
                                {course_sample && <span><b>Course Sample:</b><a href={course_sample} target="_blank" rel="noopener noreferrer">
                                <img src="/assets/youtube.png" alt="YouTube" className="youtube-logo" /></a></span>}
                            </div>
                            </div>
                                
                              </div>
                              <div className='cof-columns'>
                                <p className='cof-column1'>: :  : :  : :  : :  : :</p>
                                <p className='cof-column2'>: :  : :  : :  : :  : :</p>
                            </div>
                        </li>
                    );
                })}
             <Register show={showRegisterModal} handleClose={handleCloseRegister} />
            </ul>
            {submitError && <p>{submitError}</p>}
        </div>
        
    );
}

export default CoursesOffering;















