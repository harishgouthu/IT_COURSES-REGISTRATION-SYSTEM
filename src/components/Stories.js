

// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// const studentStoriesData = [
//   {
//     id: 1,
//     image: "/assets/jond.jpg",
//     feedback: "This course is amazing! I learned so much and highly recommend it to anyone.",
//     name: "John Doe",
//     location: "LA, 19098"
//   },
//   {
//     id: 2,
//     image: "/assets/simg2.jpeg",
//     feedback: "An incredible learning experience. The instructor was highly knowledgeable and supportive.",
//     name: "Jane Smith",
//     location: "NY, 10001"
//   },
//   {
//     id: 3,
//     image: "/assets/simg3.jpeg",
//     feedback: "The course content was well-structured and the hands-on projects were really useful.",
//     name: "Alice Johnson",
//     location: "SF, 94105"
//   },
//   {
//     id: 4,
//     image: "/assets/simg4.jpeg",
//     feedback: "Excellent course with practical insights. Highly recommend for anyone looking to deepen their Python skills.",
//     name: "Bob Brown",
//     location: "TX, 75001"
//   },
//   // Add more student stories here as needed
// ];

// const Stories = () => {
//   return (
//     <section className="bg-gradient-to-r from-white-500 via-purple-600 to-indigo-500 text-white py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {studentStoriesData.map((story) => (
//             <div key={story.id} className="bg-white text-gray-900 rounded-lg shadow-lg overflow-hidden">
//               <Carousel
//                 showArrows={true}
//                 infiniteLoop={true}
//                 showThumbs={false}
//                 showStatus={false}
//                 autoPlay={true}
//                 interval={5000}
//               >
//                 {/* First slide: Image */}
//                 <div>
//                   <img src={story.image} alt={story.name} className="w-full h-64 object-cover rounded-t-lg" />
//                 </div>

//                 {/* Second slide: Feedback */}
//                 <div className="p-6">
//                   <p className="text-lg mb-4">"{story.feedback}"</p>
//                 </div>

//                 {/* Third slide: Student Info */}
//                 <div className="p-6 flex items-center">
//                   <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
//                     <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold">{story.name}</h3>
//                     <p className="text-sm text-gray-600">{story.location}</p>
//                   </div>
//                 </div>
//               </Carousel>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stories;



import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

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

];

const Stories = () => {
  return (
    <section className="bg-gradient-to-r from-white-500 via-purple-600 to-indigo-500 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Students Say</h2>
        <div className="space-y-8">
          {studentStoriesData.map((story) => (
            <div key={story.id} className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500  text-gray-900 rounded-lg shadow-lg overflow-hidden">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={3000}
              >
                {/* First slide: Image */}
                <div>
                  <img src={story.image} alt={story.name} className="w-full h-64 object-contain rounded-t-lg" />
                </div>

                {/* Second slide: Feedback */}
                <div className="p-6 flex items-center justify-center h-full">
                  <p className="text-lg mb-4">"{story.feedback}"</p>
                </div>

                {/* Third slide: Student Info */}
                <div className="p-20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-semibold">{story.name}</h3>
                    <p className="text-sm text-gray-600">{story.location}</p>
                </div>
                </div>
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stories;
