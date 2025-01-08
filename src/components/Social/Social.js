import React from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import CreatePost from './CreatePoste';
import Contacts from "./Contacts";
import FriendRequest from "./FriendRequest";
import SocialPost from "./Poste";
import StoryList from './Stories';
import EventSection from './Event';


const Social = () => {

  return (
    <div className="h-[200rem] w-screen bg-gray-100 text-gray-800 dark:bg-[#1E2738]  dark:text-gray-100 flex flex-col sm:w-auto">
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
        <div className="mb-1 flex flex-col relative mx-auto w-full sm:w-auto md:w-3/4 lg:w-1/2">
          <StoryList />
          <CreatePost />
          <SocialPost />
        </div>



        {/* Contact Section on the Right */}
        <div className="flex-r">
          <div className="min-w-64 h-auto bg-gray-300 dark:bg-[#1E2738] lg:block">
            <Contacts />
          </div>
          <div className="mb-1 flex flex-col w-1/4 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <FriendRequest />
            <EventSection />
          </div>
        </div>
      </div>
      </div>
  );
};

export default Social;
