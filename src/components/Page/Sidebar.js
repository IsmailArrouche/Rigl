import React, { useState } from "react";
import {
  HomeIcon,
  UserGroupIcon,
  CalendarIcon,
  UsersIcon,
  UserCircleIcon,
  CogIcon,
  ChartBarIcon,
  InboxIcon, // New Icon for Chat
} from "@heroicons/react/solid"; // Import Heroicons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    {
      id: 1,
      label: "Explore jobs",
      icon: <HomeIcon className="w-6 h-6" />,
      color: "bg-[#00A8B5]",
      route: "/explore",
    },
    {
      id: 2,
      label: "Social",
      icon: <UserGroupIcon className="w-6 h-6" />,
      color: "bg-[#007F89]",
      route: "/social",
    },
    {
      id: 3,
      label: "Explore Events",
      icon: <CalendarIcon className="w-6 h-6" />,
      color: "bg-[#0096A6]",
      route: "/event",
    },
    {
      id: 4,
      label: "Messages",
      icon: <UsersIcon className="w-6 h-6" />,
      color: "bg-[#5C80BC]",
      route: "/message",
    },
    {
      id: 5,
      label: "Author Profile",
      icon: <UserCircleIcon className="w-6 h-6" />,
      color: "bg-[#4868A3]",
      route: "/profile",
    },
  ];

  const handleRedirect = (route) => {
    window.location.href = route; // Redirect to the specified route
  };

  return (
    <div className="w-[17rem] bg-gray-100 dark:bg-[#293145]">
      {/* Sidebar */}
      <div
        className={`fixed ${
          isSidebarOpen ? "left-0" : "-left-full"
        } top-16 pt-16 md:top-24 h-[calc(100vh-4rem)] md:h-[calc(100vh-4rem)] w-full sm:w-64 md:w-64 p-4 bg-white dark:bg-[#293145] overflow-y-auto scrollbar-t scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 z-40 transition-all duration-300 md:left-4 md:rounded-lg`}
        style={{ zIndex: 1000 }}
      >
        {/* New Feeds Section */}
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center sm:text-left">
            Navigation
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-0">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-md cursor-pointer hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-[#293145] hover:bg-gray-100 dark:hover:bg-[#3C485C]"
                onClick={() => handleRedirect(item.route)}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white shadow-md ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  {/* Label */}
                  <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Section */}
        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center sm:text-left">
            Account
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-0">
            {/* Settings */}
            <div
              className="flex items-center gap-4 p-3 rounded-md cursor-pointer hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-[#293145] hover:bg-gray-100 dark:hover:bg-[#3C485C]"
              onClick={() => handleRedirect("/settings")}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#00A8B5] text-white shadow-md">
                <CogIcon className="w-6 h-6" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                Settings
              </span>
            </div>

            {/* Analytics */}
            <div
              className="flex items-center gap-4 p-3 rounded-md cursor-pointer hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-[#293145] hover:bg-gray-100 dark:hover:bg-[#3C485C]"
              onClick={() => handleRedirect("/analytics")}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#007F89] text-white shadow-md">
                <ChartBarIcon className="w-6 h-6" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                Analytics
              </span>
            </div>

            {/* Chat */}
            <div
              className="flex items-center justify-between p-3 rounded-md cursor-pointer hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-[#293145] hover:bg-gray-100 dark:hover:bg-[#3C485C]"
              onClick={() => handleRedirect("/chat")}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#5C80BC] text-white shadow-md">
                  <InboxIcon className="w-6 h-6" /> {/* Changed Icon */}
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                  Chat
                </span>
              </div>
              <div className="flex items-center justify-center bg-orange-500 text-white rounded-full w-6 h-6 text-xs font-bold">
                23
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
