









import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css'
import { faVideo, faBook, faFileAlt, faChalkboardTeacher, faQuestionCircle, faCalendarCheck, faStar, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Home = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homepage">
      {/* Hero Section with Carousel */}
      <section className="hero py-20">
        <Slider {...carouselSettings} className="hero-carousel">
          <div className="hero-slide text-center">
            <img
              src="/assets/c_images/c4img.avif"
              alt="Hero Slide 1"
              style={{ objectPosition: 'center 40%' }}
            />
            <p className="text-3xl md:text-1xl  leading-tight px-4 text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-4">
              With Python, you're not just writing code, you're crafting solutions, building bridges between ideas and actions, and shaping the future of technology.
            </p>
          </div>
          <div className="hero-slide text-center">
            <img
              src="/assets/c_images/c2img.avif"
              alt="Hero Slide 2"
              style={{ objectPosition: 'center 10%' }}
            />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight px-4 text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-4">
              Learn Python with expert guidance and hands-on experience.
            </h1>
          </div>
          <div className="hero-slide text-center">
            <img
              src="/assets/c_images/c3img.avif"
              alt="Hero Slide 3"
              // style={{ objectPosition: 'center 1%' }}
            />
            <h1 className="text-3xl md:text-5xl font-bold leading-tight px-4 text-white absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 py-4">
              Elevate your coding skills and accelerate your career with our specialized courses.
            </h1>
          </div>
        </Slider>
      </section>
      {/* About Me Section */}
      <section className="about-me py-12 bg-gray-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="about-image mb-8 md:mb-0">
            {/* <img src="/assets/chaithanya.jpg" alt="Chaitanya Reddy" className="w-48 h-48 object-cover rounded-full border-4 border-gray-300 shadow-lg" />*/}
            <img src="/assets/chaithanya.jpg" alt="Chaitanya Reddy" className="w-[400px] h-[200px] object-cover rounded-full border-4 border-gray-300 shadow-lg"/>

          </div>
          <div className="about-content md:ml-8">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 mb-4">
              D. Chaitanya is a seasoned professional with a robust educational background, holding an M.Tech degree from IIT Roorkee. With over 20 years of experience in the IT industry, Chaitanya has amassed extensive knowledge and skills in Python, Data Science technologies.
            </p>
            <p className="text-gray-700 mb-4">
              Notably, he trained 60+ batches so far successfully and possesses over a decade of experience in training, indicating a strong capability for imparting knowledge and training graduates, job aspirants. Having worked with multiple MNC companies across different continents, Mr. Chaitanya likely has a diverse range of experiences and perspectives in the IT sector.
            </p>
            <p className="text-gray-700 mb-6">
              This global exposure suggests adaptability, cultural awareness, and potentially a breadth of expertise in various IT technologies. Overall, D. Chaitanya appears to be a seasoned professional with a wealth of experience and expertise to offer in the IT industry.
            </p>
            <Link to="/about">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">More Details</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Offering Section */}
      <section className="courses-offering py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Courses Offering</h2>
          <p className="text-gray-600 mb-8 text-center">Here are some IT courses that Mr. D. Chaitanya has been offering based on their qualifications and experience:</p>
          <div className="courses grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Course Card */}
            {coursesData.map((course) => (
              <div key={course.id} className="course bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={course.image} alt={course.title} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                <h5 className="text-xl font-semibold mb-2">{course.title}</h5>
                <p className="text-gray-600 mb-1">{course.instructor}</p>
                <p className="text-gray-500 mb-2">{course.experience}</p>
                <p className="text-yellow-500 font-bold mb-4">{course.rating}</p>
                <Link to="/courses-offering">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">More Details</button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Specialities Section */}
      <section className="courses-specialities py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Courses Specialities</h2>
          <div className="specialities grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialitiesData.map((speciality) => (
              <div key={speciality.id} className="speciality bg-gray-50 p-6 rounded-lg shadow-md flex items-start">
                <FontAwesomeIcon icon={specialitiesIcons[speciality.title]} className="text-blue-500 text-3xl mr-4" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{speciality.title}</h3>
                  <p className="text-gray-600">{speciality.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    {/* Student Stories Carousel */}
    <section className="student-stories py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Student Stories</h2>
          <Slider {...carouselSettings} className="student-stories-carousel">
            {studentStoriesData.map((story) => (
              <div key={story.id} className="story bg-white p-6 rounded-lg shadow-lg flex items-center">
                <img src={story.image} alt={story.name} className="w-16 h-16 object-cover rounded-full border-2 border-gray-300 mr-4" />
                <div>
                  <p className="text-gray-700 mb-2">{story.feedback}</p>
                  <p className="font-semibold">{story.name}</p>
                  <p className="text-gray-500">{story.location}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}


const coursesData = [
  {
    id: 1,
    image: "/assets/course_images/the-complete-python-maste-selar.co-627b77a0dd750.png",
    title: "Complete Python",
    instructor: "Chaitanya Reddy",
    experience: "IIT Roorkee alumni, 20+ yrs exp",
    rating: "4.6 ★ ★ ★ ★ ★ (79000)"
  },
  {
    id: 2,
    image: "/assets/course_images/Fs_python_web_Thumbnail_44c4936e42.jpg",
    title: "Python Fullstack",
    instructor: "Chaitanya Reddy",
    experience: "IIT Roorkee alumni, 20+ yrs exp",
    rating: "4.2 ★ ★ ★ ★ ★ (4623)"
  },
  {
    id: 3,
    image: "/assets/course_images/Front-end.webp",
    title: "Frontend Technologies",
    instructor: "Chaitanya Reddy",
    experience: "IIT Roorkee alumni, 20+ yrs exp",
    rating: "4.9 ★ ★ ★ ★ ★ (899)"
  },
  {
    id: 4,
    image: "/assets/course_images/647591e3ceebd.jfif",
    title: "Python Fullstack with Data Science",
    instructor: "Chaitanya Reddy",
    experience: "IIT Roorkee alumni, 20+ yrs exp",
    rating: "4.4 ★ ★ ★ ★ ★ (9452)"
  }
];

const specialitiesIcons = {
  'Session Recording': faVideo,
  'Course Material': faBook,
  'Assignments': faFileAlt,
  'Accessible Trainer': faChalkboardTeacher,
  'Question Hour': faQuestionCircle,
  'Weekly Tests': faCalendarCheck,
  'Highlight IMP': faStar,
  '100% Job Assistance': faBriefcase,
};


const specialitiesData = [
  {
    id: 1,
    title: "Session Recording",
    description: "Every live class will be recorded and shared to student immediate after the class."
  },
  {
    id: 2,
    title: "Course Material",
    description: "Entire course material will be provided to students at the beginning of the course."
  },
  {
    id: 3,
    title: "Assignments",
    description: "Lots of programs are shared to students for practicing code in the form of assignments during Day-1 of training."
  },
  {
    id: 4,
    title: "Accessible Trainer",
    description: "Being an accessible trainer, Mr. D. Chaitanya has been ensuring that all students have equal opportunities to learn and succeed."
  },
  {
    id: 5,
    title: "Question Hour",
    description: "Dedicated 15 minutes question hour is also scheduled on every Saturday’s class to clarify student’s doubts."
  },
  {
    id: 6,
    title: "Weekly Tests",
    description: "Conducts a test every week, review the code written by every student to provide feedback to them."
  },
  {
    id: 7,
    title: "Highlight IMP",
    description: "Every important interview question will be highlighted during concept explanation in class."
  },
  {
    id: 8,
    title: "100% Job Assistance",
    description: "Trainer and his supporting team will provide complete job assistance to every student, but can't provide a job guarantee."
  }
];

const studentStoriesData = [
  {
    id: 1,
    image: "/assets/jond.jpg",
    feedback: "This course is amazing! I learned so much and highly recommend it to anyone.",
    name: "John Doe",
    location: "LA, 19098"
  },
  {
    id: 2,
    image: "/assets/simg2.jpeg",
    feedback: "An incredible learning experience. The instructor was highly knowledgeable and supportive.",
    name: "Jane Smith",
    location: "NY, 10001"
  },
  {
    id: 3,
    image: "/assets/simg3.jpeg",
    feedback: "The course content was well-structured and the hands-on projects were really useful.",
    name: "Alice Johnson",
    location: "SF, 94105"
  },
  {
    id: 4,
    image: "/assets/simg4.jpeg",
    feedback: "Excellent course with practical insights. Highly recommend for anyone looking to deepen their Python skills.",
    name: "Bob Brown",
    location: "TX, 75001"
  },
  // Add more student stories here as needed
]

export default Home;





