import React, { useState } from 'react';
import Nav from './Nav';
import Contact from './Contact';
import JobOfferCard from './JobOfferCard';
import Sidebar from './Sidebar'; // Import Contact2

const Explore = () => {
  const [jobOffers, setJobOffers] = useState([
    {
      id: 1,
      user: 'Jane Doe',
      time: '2 hours ago',
      title: 'Software Engineer',
      location: 'San Francisco, CA',
      employmentType: 'Full-time',
      experienceLevel: 'Mid-Level',
      skills: ['JavaScript', 'React', 'Node.js'],
      likes: 120,
      description:
        'We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.',
    },
    {
      id: 2,
      user: 'John Smith',
      time: '1 day ago',
      title: 'Data Analyst',
      location: 'New York, NY',
      employmentType: 'Part-time',
      experienceLevel: 'Junior',
      skills: ['Python', 'SQL', 'Tableau'],
      likes: 85,
      description:
        'Join our analytics team to help uncover data-driven insights. You will create reports, dashboards, and work closely with cross-functional teams.',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'down' && currentIndex < jobOffers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Contact2 on the Left */}
        <div className="w-1/4  bg-gray-100 dark:bg-inherit shadow-md mt-4">
          <Sidebar />
        </div>

        {/* JobOfferCard in Center */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <div className="relative w-full max-w-md space-y-6 py-8">
            <JobOfferCard
              key={jobOffers[currentIndex].id}
              user={jobOffers[currentIndex].user}
              time={jobOffers[currentIndex].time}
              title={jobOffers[currentIndex].title}
              location={jobOffers[currentIndex].location}
              employmentType={jobOffers[currentIndex].employmentType}
              experienceLevel={jobOffers[currentIndex].experienceLevel}
              skills={jobOffers[currentIndex].skills}
              likes={jobOffers[currentIndex].likes}
              description={jobOffers[currentIndex].description}
              className="bg-gray-200 dark:bg-[rgb(31_41_55)] w-full"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem] flex flex-col space-y-4 items-center">
              <button
                className="p-4 bg-gray-700 rounded-full text-white shadow-lg hover:bg-gray-600"
                onClick={() => handleScroll('up')}
              >
                ▲
              </button>
              <button
                className="p-4 bg-gray-700 rounded-full text-white shadow-lg hover:bg-gray-600"
                onClick={() => handleScroll('down')}
              >
                ▼
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section on the Right */}
        <div className="w-1/4">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Explore;
