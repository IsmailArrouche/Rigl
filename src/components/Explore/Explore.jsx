import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Contacts from './Contacts';
import FriendRequest from './FriendRequest';
import JobOfferCard from './JobOfferCard';
import DetailedJobDescription from './DetailedJobDescription';
import Sidebar from './Sidebar';
import FooterBar from './Footer';

import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

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
        'We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications. Collaborate with cross-functional teams, review code, and shape the future of our technology stack...',
      isRemote: false,
      badgeLetter: 'S',
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
        'Join our analytics team to help uncover data-driven insights. You will create reports, dashboards, and work closely with cross-functional teams. Enhance data pipelines, automate tasks, and deliver actionable recommendations...',
      isRemote: true,
      badgeLetter: 'D',
    },
  ]);

  // Current index for the job offer being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Whether to show the detailed description
  const [showDetails, setShowDetails] = useState(false);

  // State for sidebar
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  // Handle responsive sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll through job offers (for the small card)
  const handleScroll = (direction) => {
    if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'down' && currentIndex < jobOffers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Determine disabled states
  const canScrollUp = currentIndex > 0;
  const canScrollDown = currentIndex < jobOffers.length - 1;

  // Current job object
  const currentJob = jobOffers[currentIndex];

  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-300">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className="w-2/12 bg-gray-100 dark:bg-[rgb(41,49,69)] transition-colors duration-300">
            <Sidebar />
          </div>
        )}

        {/* Center Area */}
        <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden">
          {/* We wrap both views in absolute containers to animate transitions */}
          
          {/* Card View */}
          <div
            className={`
              absolute w-full max-w-[60%] py-8 transition-all duration-500
              ${showDetails ? 'opacity-0 translate-x-16 pointer-events-none' : 'opacity-100 translate-x-0'}
            `}
            style={{ margin: '0 auto' }}
          >
            <JobOfferCard
              key={currentJob.id}
              user={currentJob.user}
              time={currentJob.time}
              title={currentJob.title}
              location={currentJob.location}
              employmentType={currentJob.employmentType}
              experienceLevel={currentJob.experienceLevel}
              skills={currentJob.skills}
              likes={currentJob.likes}
              description={currentJob.description}
              className="bg-gray-200 dark:bg-gray-700 w-full transition-all duration-300"
              onInfoClick={() => setShowDetails(true)}
            />

            {/* Up/Down Buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem] flex flex-col space-y-4 items-center">
              <button
                className={`
                  p-4 rounded-full text-white shadow-lg
                  transition-colors duration-300
                  flex items-center justify-center
                  ${
                    canScrollUp
                      ? 'bg-indigo-600 hover:bg-indigo-500'
                      : 'bg-gray-400 cursor-not-allowed'
                  }
                `}
                onClick={() => handleScroll('up')}
                disabled={!canScrollUp}
                title="Previous Job"
              >
                <FaArrowUp className="w-5 h-5" />
              </button>
              <button
                className={`
                  p-4 rounded-full text-white shadow-lg
                  transition-colors duration-300
                  flex items-center justify-center
                  ${
                    canScrollDown
                      ? 'bg-indigo-600 hover:bg-indigo-500'
                      : 'bg-gray-400 cursor-not-allowed'
                  }
                `}
                onClick={() => handleScroll('down')}
                disabled={!canScrollDown}
                title="Next Job"
              >
                <FaArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Detailed View */}
          <div
            className={`
              absolute w-full max-w-[80%] transition-all duration-500
              ${showDetails ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}
            `}
            style={{ margin: '0 auto' }}
          >
            <DetailedJobDescription
              job={currentJob}
              onBack={() => setShowDetails(false)}
            />
          </div>
        </div>
        
        {/* Contacts & Friend Request on the right */}
        <div className="flex-r">
          <div className="min-w-64 lg:block">
            <Contacts />
          </div>
          <div className="w-1/4 lg:block">
            <FriendRequest />
          </div>
        </div>
      </div>

      {/* Footer Bar for smaller screens */}
      <div className="md:hidden">
        <FooterBar />
      </div>
    </div>
  );
};

export default Explore;
