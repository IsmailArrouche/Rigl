import React, { useState, useEffect } from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import CreatePost from './CreatePoste';
import Contacts from "./Contacts";
import FriendRequest from "./FriendRequest";
import SocialPost from "./Poste";
import StoryList from './Stories';
import EventSection from './Event';
import FancyLoader from "../Page/FancyLoader"; // Make sure the path is correct

const Social = () => {
  // State to control sidebar toggle on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // New: isLoading state to show FancyLoader
  const [isLoading, setIsLoading] = useState(true);

  // Toggles sidebar open/close in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Use effect for 3-second loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // If still loading, show the loader
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-200 dark:bg-[#1E2738]">
        <FancyLoader
          boxColors={[
            "#EF4444",
            "#F59E0B",
            "#6366F1",
            "#10B981",
            "#3B82F6",
            "#8B5CF6",
          ]}
          size="3rem"
          animationSpeed={1.5}
        />
      </div>
    );
  }

  // Otherwise, render the normal layout
  return (
    <div className="min-h-screen w-screen bg-gray-100 text-gray-800 dark:bg-[#1E2738] dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 h-full">
        {/* Sidebar (hidden in mobile unless toggled; always visible on md+) */}
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

        {/* Right Section (only on lg+) */}
        <div className="hidden lg:flex flex-r">
          {/* Contacts */}
          <div className="min-w-64 h-auto bg-gray-300 dark:bg-[#1E2738]">
            <Contacts />
          </div>

          {/* Friend Requests + Events */}
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
