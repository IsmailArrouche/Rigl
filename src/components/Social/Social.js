import React, { useState, useEffect } from 'react';
import Nav from '../Page/Nav';
import Sidebar from '../Page/Sidebar';
import CreatePost from './CreatePoste';
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";
import SocialPost from "./Poste";
import StoryList from './Stories';
import FancyLoader from '../Page/FancyLoader';

const Social = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [isWideScreen, setIsWideScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarVisible(window.innerWidth >= 768);
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-200 dark:bg-gray-900">
        <FancyLoader
          boxColors={["#EF4444", "#F59E0B", "#6366F1", "#10B981", "#3B82F6", "#8B5CF6"]}
          size="3rem"
          animationSpeed={1.5}
        />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 h-full">
        {/* Sidebar on the Left */}
        {isSidebarVisible && (
          <div className="w-2/12 bg-gray-100 dark:bg-[#293145]">
            <Sidebar />
          </div>
        )}

        {/* Center Content */}
        <div className="flex-1 flex flex-col relative mx-auto">
          <StoryList />
          <CreatePost />
          <SocialPost />
        </div>

        {/* Contact Section on the Right */}
        {isWideScreen && (
          <div className="flex-r">
            <div className="min-w-64 bg-inherit lg:block">
              <Contacts />
            </div>
            <div className="min-w-64 bg-inherit lg:block">
              <FriendRequest />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Social;
