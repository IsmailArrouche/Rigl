import React, { useState } from 'react';
import Nav from './Nav';
import Contact from './Contact';
import Sidebar from './Sidebar';
import UserProfile from '../Profile/UserProfile';
import CreatePost from '../Profile/CreatePoste';

const Profile = () => {

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
        <div className="flex-1 flex flex-col relative">
          <div className="relative w-full max-w-md space-y-6 py-8">
            <UserProfile />
            <CreatePost />
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

export default Profile;
