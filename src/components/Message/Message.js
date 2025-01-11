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

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
      setSidebarVisible(window.innerWidth >= 768); // Automatically show sidebar on larger screens
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
      <div className="flex items-center justify-center h-screen w-screen bg-gray-200 dark:bg-[#1E2738]">
        <FancyLoader 
          barHeight="10px"
          animationSpeed={8}
        />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen bg-gray-200 dark:bg-[#1E2738] text-gray-800 dark:text-gray-100 transition-colors duration-300 overflow-hidden">
      {/* Nav Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav 
          toggleSidebar={() => setSidebarVisible(!isSidebarVisible)} 
          isSidebarOpen={isSidebarVisible}
        />
      </div>

      {/* Main Content */}
      <div className="flex h-full">
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className="md:block w-[100] bg-gray-100 dark:bg-gray-800 transition-transform duration-300 transform">
            <Sidebar closeSidebar={() => setSidebarVisible(false)} />
          </div>
        )}

        {/* ChatBox */}
        <div 
          className={`flex-1 w-full mt-[5.5rem] transition-all duration-300`}
        >
          <ChatBox />
        </div>

        {/* Right-side: Contacts and FriendRequest */}
        {isWideScreen && (
          <div className="hidden lg:flex mt-[5.5rem] mb-8 w-[20%] xl:w-[15%] flex-col space-y-2">
            <div className="flex-1 bg-gray-300 dark:bg-inherit">
              <FriendRequest />
            </div>
            <div className="flex-1 bg-gray-300 dark:bg-inherit">
              <Contacts />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;
