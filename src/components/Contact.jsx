// import React from 'react'

// const Contact = () => {
//   return (
//     <div>In progress</div>
//   )
// }

// export default Contact;



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Contact Us</h1>
        
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/2 lg:w-2/3 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Details</h2>
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+1 (123) 456-7890</p>
                </div>
              </div>
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                  <p className="text-gray-600">contact@example.com</p>
                </div>
              </div>
              {/* Address */}
              <div className="flex items-center space-x-4">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 text-2xl" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Address</h3>
                  <p className="text-gray-600">123 Main Street, City, Country, 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
