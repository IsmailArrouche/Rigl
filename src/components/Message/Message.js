import React, { useState, useEffect } from 'react';
import Nav from '../Page/Nav';
import Contacts from '../Page/Contacts';
import FriendRequest from '../Page/FriendRequest';
import Sidebar from '../Page/Sidebar';
import ChatBox from './ChatBox';
import FancyLoader from "../Page/FancyLoader";

const Message = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [isWideScreen, setIsWideScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  const [isLoading, setIsLoading] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
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
    <div className="h-screen w-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className="w-2/12 bg-gray-100 dark:bg-[rgb(41,49,69)]">
            <Sidebar />
          </div>
        )}

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <ChatBox />
        </div>

        {/* Contact Section */}
        {isWideScreen && (
          <div className="flex-r">
            <div className="min-w-64 lg:block">
              <Contacts />
            </div>
            <div className="min-w-64 lg:block">
              <FriendRequest />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;