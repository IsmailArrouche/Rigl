import React from 'react';
import Nav from './Nav';
import Sidebar from './Sidebar';
import UserProfile from './UserProfile';
import CreatePost from './CreatePoste';
import AboutSection from './About';
import EventSection from './Event';
import Contacts from "./Contacts";
import FriendRequest from "./FriendRequest";
import SocialPost from "./Poste";


const Profile = () => {

  return (
    <div className="h-[200rem] w-screen bg-gray-100 text-gray-800 dark:bg-gray-900  dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 h-full">
        {/* Sidebar on the Left */}
        <div className="w-2/12 bg-gray-100 dark:bg-[#293145]">
          <Sidebar />
        </div>

        {/* JobOfferCard in Center */}
        <div className="ml-0 md:ml-40 mb-1 flex-1 flex flex-col relative">
          <div className="relative w-full max-w-full md:max-w-md space-y-6 py-8">
            <UserProfile />
            <div className="flex-1 flex flex-col md:flex-row w-full md:w-[960px] pb-4 ml-1">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <AboutSection />
                <EventSection />
              </div>
              <div className="flex-1 flex flex-col">
                <CreatePost />
                <SocialPost />
              </div>
            </div>
          </div>
        </div>


        {/* Contact Section on the Right */}
        <div className="flex-r">
          <div className="min-w-64 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <Contacts />
          </div>
          <div className="w-1/4 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <FriendRequest />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Profile;
