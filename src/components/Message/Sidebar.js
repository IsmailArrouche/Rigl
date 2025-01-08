import React, { useState } from "react";
import {
  HomeIcon,
  BadgeCheckIcon,
  GlobeAltIcon,
  UsersIcon,
  UserCircleIcon,
  CogIcon,
  ChartBarIcon,
  ChatAlt2Icon,
} from "@heroicons/react/solid"; // Import des icônes Heroicons

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const menuItems = [
    {
      id: 1,
      label: "Newsfeed",
      icon: <HomeIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-400 to-blue-600",
      route: "/newsfeed",
    },
    {
      id: 2,
      label: "Badges",
      icon: <BadgeCheckIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-orange-400 to-orange-600",
      route: "/badges",
    },
    {
      id: 3,
      label: "Explore Stories",
      icon: <GlobeAltIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      route: "/stories",
    },
    {
      id: 4,
      label: "Popular Groups",
      icon: <UsersIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-pink-400 to-pink-600",
      route: "/groups",
    },
    {
      id: 5,
      label: "Author Profile",
      icon: <UserCircleIcon className="w-6 h-6" />,
      color: "bg-gradient-to-br from-blue-500 to-blue-700",
      route: "/profile",
    },
  ];

  const handleRedirect = (route) => {
    window.location.href = route; // Redirige vers le lien spécifié
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-20 left-4 h-[calc(100vh-4rem)] w-64 p-4 bg-gray-100 dark:bg-[rgb(41,49,69)] overflow-y-auto scrollbar-t scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-400 z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
        style={{ zIndex: 1000 }}
      >
        {/* New Feeds Section */}
        <div className="mb-8 ">
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center sm:text-left">
            New Feeds
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-0">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => handleRedirect(item.route)}
              >
                <div className="flex items-center gap-4">
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-white ${item.color}`}
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
          <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center sm:text-left">
            Account
          </h2>
          <div className="grid grid-cols-1 gap-x-4 gap-y-0">
            {/* Settings */}
            <div
              className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => handleRedirect("/settings")}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-400 to-gray-600 text-white">
                <CogIcon className="w-6 h-6" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                Settings
              </span>
            </div>

            {/* Analytics */}
            <div
              className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => handleRedirect("/analytics")}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white">
                <ChartBarIcon className="w-6 h-6" />
              </div>
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">
                Analytics
              </span>
            </div>

            {/* Chat */}
            <div
              className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={() => handleRedirect("/chat")}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-400 to-purple-600 text-white">
                  <ChatAlt2Icon className="w-6 h-6" />
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
    </>
  );
};

export default Sidebar;
