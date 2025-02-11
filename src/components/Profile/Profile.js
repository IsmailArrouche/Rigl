import React, { useState, useEffect } from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import UserProfile from './UserProfile';
import CreatePost from './CreatePoste';
import AboutSection from './About';
import EventSection from './Event';
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";
import SocialPost from "./Poste";
import FancyLoader from "../Page/FancyLoader"; // Ensure the path is correct

const Profile = () => {
  // State to control sidebar toggle on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isWideScreen, setIsWideScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  const [isLoading, setIsLoading] = useState(true);

  // Toggles sidebar open/close in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  return (
    <>
      {/* Add fade-in animation style */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>

      <div className="fade-in-up min-h-screen w-screen bg-gray-200 dark:bg-[#1E2738] text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-300">
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
          <div className="flex-1 flex flex-col items-center px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-5xl space-y-6 py-8">
              {/* User Profile Section */}
              <div className="w-full">
                <UserProfile />
              </div>

              {/* Main Content Grid */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: About + Events */}
                <div className="space-y-6 lg:col-span-1">
                  <AboutSection />
                  <EventSection />
                </div>

                {/* Right Column: Posts */}
                <div className="space-y-6 lg:col-span-2">
                  <CreatePost />
                  <SocialPost />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - only show on wide screens */}
          {isWideScreen && (
            <div className="hidden lg:block w-[320px] space-y-4 p-4">
              <div className="bg-white dark:bg-[#293145] rounded-lg shadow-lg">
                <FriendRequest />
              </div>
              <div className="bg-white dark:bg-[#293145] rounded-lg shadow-lg">
                <Contacts />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;