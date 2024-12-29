import React, { useState } from 'react';
import Nav from './Nav';
import Contact from './Contact';
import JobOfferCard from './JobOfferCard';

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
      description: 'We are looking for a Software Engineer to join our dynamic team. You will be responsible for building and maintaining scalable web applications.'
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
      description: 'Join our analytics team to help uncover data-driven insights. You will create reports, dashboards, and work closely with cross-functional teams.'
    }
  ]);

  return (
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* JobOfferCard in Center */}
        <div className="flex-1 flex flex-col justify-center items-center space-y-6">
          {jobOffers.map((offer) => (
            <JobOfferCard
              key={offer.id}
              user={offer.user}
              time={offer.time}
              title={offer.title}
              location={offer.location}
              employmentType={offer.employmentType}
              experienceLevel={offer.experienceLevel}
              skills={offer.skills}
              likes={offer.likes}
              description={offer.description}
            />
          ))}
        </div>

        <div className="w-1/4 bg-gray-200 dark:bg-inherit p-4 shadow-md">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Explore;
