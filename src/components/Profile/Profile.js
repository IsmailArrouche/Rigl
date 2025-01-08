import React, { useState } from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import UserProfile from './UserProfile';
import CreatePost from './CreatePoste';
import AboutSection from './About';
import EventSection from './Event';
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";
import SocialPost from "./Poste";

const Profile = () => {
  // State to control sidebar toggle on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggles sidebar open/close in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="h-[200rem] w-screen bg-gray-100 text-gray-800 dark:bg-[#2B3545] dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      {/*
        Pass toggleSidebar and isSidebarOpen to Nav 
        (which should accept these props if you've wired it similarly to your Navbar component).
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
        <div className="ml-0 md:ml-40 mb-1 flex-1 flex flex-col relative">
          <div className="relative w-full max-w-full md:max-w-md space-y-6 py-8">
            <UserProfile />
            <div className="flex-1 flex flex-col md:flex-row w-full md:w-[960px] pb-4 ml-1">
              {/* About + Events (Events hidden on smaller screens) */}
              <div className="w-full md:w-1/2 mb-4 md:mb-0 hidden lg:block">
                <AboutSection />
                <EventSection />
              </div>

              {/* If you want About to be visible at all breakpoints, and only hide EventSection, you can do this:
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <AboutSection />
                  <div className="hidden lg:block">
                    <EventSection />
                  </div>
                </div>
              */}

              {/* Posts on the right side */}
              <div className="flex-1 flex flex-col">
                <CreatePost />
                <SocialPost />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: hidden on smaller screens (only show on lg) */}
        <div className="hidden lg:flex flex-r">
          <div className="min-w-64  dark:bg-[#2B3545]">
            <Contacts />
          </div>
          <div className="w-1/4  dark:bg-[#2B3545]">
            <FriendRequest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
