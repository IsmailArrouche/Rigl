import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import Contacts from './Contacts';
import  FriendRequest from './FriendRequest';
import Sidebar from './Sidebar';
import FooterBar from './Footer';
import ChatBox from './ChatBox';

const Message = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
      setSidebarVisible(!isSidebarVisible);
    };
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setSidebarVisible(true); // Affiche la Sidebar sur des écrans larges
        } else {
          setSidebarVisible(false); // Cache la Sidebar sur des écrans petits
        }
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

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
          <div className="w-2/12 bg-gray-100 dark:bg-inherit">
            <Sidebar />
          </div>
        )}
        <div className="flex-1 flex flex-col justify-center items-center relative">
          <ChatBox/>
        </div>
        
        {/* Contact Section */}
        <div className="flex-r">
        <div className="min-w-64  lg:block">
          <Contacts />
        </div>

        <div className="w-1/4  lg:block">
          < FriendRequest/>
        </div>
        </div>
      

      </div>

      {/* Responsive Footer Bar */}
      <div className="md:hidden">
        <FooterBar />
      </div>
    </div>
  );
};
export default Message;
