import React, { useState } from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import CreatePost from './CreatePoste';
import Contacts from "./Contacts";
import FriendRequest from "./FriendRequest";
import SocialPost from "./Poste";
import StoryList from './Stories';
import EventSection from './Event';

const Social = () => {
  // State to control sidebar toggle on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggles sidebar open/close in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-[200rem] w-screen bg-gray-100 text-gray-800 dark:bg-[#1E2738] dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      {/*
        Pass toggleSidebar and isSidebarOpen to Nav 
        (which should accept these props if you follow 
        the structure shown in your Navbar component).
      */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 h-full">
        {/* Sidebar (hidden in mobile unless toggled open; always visible from md breakpoint) */}
        <div
          className={`
            ${isSidebarOpen ? 'block' : 'hidden'}
            md:block
            w-2/12
            bg-gray-100
            dark:bg-[#293145]
          `}
        >
          <Sidebar />
        </div>

        {/* Center Content */}
        <div className="mb-1 flex flex-col relative mx-auto w-full sm:w-auto md:w-3/4 lg:w-1/2">
          <StoryList />
          <CreatePost />
          <SocialPost />
        </div>

        {/* Right Section: hidden on smaller screens, show on lg and above */}
        <div className="hidden lg:flex flex-r">
          {/* Contacts */}
          <div className="min-w-64 h-auto bg-gray-300 dark:bg-[#1E2738]">
            <Contacts />
          </div>

          {/* Friend Requests & Events */}
          <div className="mb-1 flex flex-col w-1/4 bg-gray-300 dark:bg-[#2B3545]">
            <FriendRequest />
            <EventSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
