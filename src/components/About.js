import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className="about-page bg-gray-100 text-gray-900">
      {/* Hero Section */}

  <section className="hero bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  text-white py-20">
  <div className="container mx-auto text-center px-4">
    <h1 className="text-5xl font-extrabold mb-6">About Chaitanya Reddy</h1>
    <p className="text-xl mb-10">
      Discover the expertise and contributions of Chaitanya Reddy, a seasoned IT professional and educator with a passion for advancing technology and education.
    </p>
  </div>
</section>

{/* Main Content Section */}
<section className="main-content py-16 bg-gray-50">
  <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
    {/* Trainer Image */}
    <div className="trainer-image mb-8 md:mb-0">
      <img
        src="/assets/chaithanya.jpg"
        alt="Chaitanya Reddy"
        className="w-64 h-64 object-cover rounded-full border-4 border-gray-300 shadow-lg mx-auto md:mx-0"
      />
    </div>

    {/* Trainer Info */}
    <div className="trainer-info md:ml-8 text-gray-700">
      <h2 className="text-3xl font-bold mb-4">Professional Background</h2>
      <p className="mb-4">
        D. Chaitanya Reddy is an accomplished IT professional with an M.Tech degree from IIT Roorkee. With over 20 years of experience in the IT industry, he has developed a deep expertise in Python, Data Science, and various other technologies.
      </p>
      <p className="mb-4">
        Throughout his career, Chaitanya has been instrumental in training and mentoring professionals, having successfully guided over 60 batches of students and industry professionals. His extensive experience spans across multiple multinational corporations globally, enhancing his ability to adapt to diverse technology environments.
      </p>
      <p className="mb-4">
        Chaitanya's educational background includes a prestigious M.Tech degree, and he has consistently pursued professional development to stay at the forefront of IT advancements. His global exposure has provided him with a rich understanding of various technologies and their applications in different contexts.
      </p>
      <p className="mb-4">
        Known for his exceptional teaching skills and dedication, Chaitanya has made a significant impact on his students and colleagues, contributing to their career growth and success.
      </p>

      {/* Contact Information */}
      <div className="contact-info mt-8">
        <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
        <ul className="list-none space-y-4">
          <li className="flex items-center">
            <FontAwesomeIcon icon={faPhone} className="text-blue-600 text-xl mr-4" />
            <span>(123) 456-7890</span>
          </li>
          <li className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-600 text-xl mr-4" />
            <span>chaitanya@example.com</span>
          </li>
        </ul>
      </div>

      {/* Qualifications */}
      <div className="qualifications mt-8">
        <h3 className="text-2xl font-semibold mb-4">Qualifications</h3>
        <ul className="list-disc list-inside space-y-2 pl-5">
          <li>M.Tech in Computer Science from IIT Roorkee</li>
          <li>B.Tech in Computer Science from XYZ University</li>
          <li>Certified Data Scientist</li>
          <li>Various industry-recognized certifications in Python and Data Science</li>
        </ul>
      </div>

      {/* Training Experience */}
      <div className="training-experience mt-8">
        <h3 className="text-2xl font-semibold mb-4">Training Experience</h3>
        <p className="mb-4">
          Chaitanya has extensive experience in delivering training programs and workshops on advanced IT topics, including Python, Data Science, and Machine Learning. His training sessions are known for their practical approach and in-depth coverage of complex topics.
        </p>
        <p>
          He has successfully conducted training for various organizations, ranging from startups to large corporations, ensuring that the content is tailored to meet the specific needs and skill levels of the participants.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default About;
