import React from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import UserProfile from './UserProfile';
import CreatePost from './CreatePoste';
import AboutSection from './About';
import EventSection from './Event';
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";


const Profile = () => {

  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-800 dark:bg-gray-900  dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar on the Left */}
        <div className="w-2/12 bg-gray-100 dark:bg-[#293145]">
          <Sidebar />
        </div>

        {/* JobOfferCard in Center */}
        <div className="flex-1 flex flex-col relative">
          <div className="relative w-full max-w-md space-y-6 py-8">
            <UserProfile />
            <div className="flex-1 flex w-full md:w-[960px] flex-col pb-4 ml-1 md:flex-row">
              <div>
                <AboutSection />
                <EventSection />
              </div>
              <CreatePost />
            </div>
            
          </div>
        </div>

        {/* Contact Section on the Right */}
        <div className="flex-r">
          <div className="min-w-64 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <Contacts />
          </div>
          <div className="min-w-64 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <FriendRequest />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Profile;
