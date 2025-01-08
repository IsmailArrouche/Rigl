import React, { useState } from "react";

const notifications = [
  {
    id: 1,
    name: "Hendrix Stamp",
    message: "There are many variations of pass..",
    time: "3 min",
    avatar: "https://i.pravatar.cc/40?img=11",
  },
  {
    id: 2,
    name: "Goria Coast",
    message: "Mobile Apps UI Designer is required..",
    time: "2 min",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    id: 3,
    name: "Surfiya Zakir",
    message: "Mobile Apps UI Designer is required..",
    time: "1 min",
    avatar: "https://i.pravatar.cc/40?img=13",
  },
  {
    id: 4,
    name: "Victor Erixon",
    message: "Mobile Apps UI Designer is required..",
    time: "30 sec",
    avatar: "https://i.pravatar.cc/40?img=14",
  },
];

const NotificationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Notification Icon */}
      <button
        onClick={toggleMenu}
        className="hover:text-[#007F89] transition-colors"
      >
        <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-[#007F89] rounded-full"></span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
      </button>

      {/* Notification Menu */}
      {isOpen && (
        <div className="absolute -right-8 mt-3 w-80 bg-white dark:bg-gray-900 shadow-lg rounded-3xl overflow-hidden z-10">
          {/* Header */}
          <div className="p-4 border-b dark:border-gray-700">
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">
              Notification
            </h4>
          </div>

          {/* Notification List */}
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-[#3a3f4d] cursor-pointer"
              >
                <img
                  src={notification.avatar}
                  alt={`${notification.name}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3 flex-1">
                  <p className="text-sm font-semibold text-gray-800 dark:text-white">
                    {notification.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {notification.message}
                  </p>
                </div>
                <span className="text-xs text-gray-400">{notification.time}</span>
              </li>
            ))}
          </ul>

          {/* View All Button */}
          <div className="p-4 text-center border-t dark:border-gray-700">
            <button className="text-[#007F89] font-semibold text-sm hover:underline">
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
