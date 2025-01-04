import React, { useState } from 'react';
import Nav from './Nav';
import Contact from './contact';
import Sidebar from './Sidebar';
import FooterBar from './Footer';
import ChatBox from './ChatBox';

const Message = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

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
          <div className="bg-gray-100 dark:bg-inherit flex-shrink-0">
            <Sidebar />
          </div>
        )}

        {/* ChatBox in Center */}
        <div className="flex-1 flex flex-col justify-center items-center">
        <ChatBox />
        </div>

        {/* Contact Section */}
        
      </div>

      {/* Responsive Footer Bar */}
      <div className="md:hidden">
        <FooterBar />
      </div>
    </div>
  );
};

export default Message;
