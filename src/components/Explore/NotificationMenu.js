import React, { useState } from "react";

const NotificationMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Icône de notification */}
      <button
        onClick={toggleMenu}
        className="hover:text-blue-500 transition-colors"
      >
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

      {/* Menu des notifications */}
      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-white dark:bg-[#2E323D] shadow-lg rounded-md overflow-hidden z-10"
        >
          {/* Titre */}
          <div className="p-4 border-b dark:border-gray-700">
            <h4 className="font-bold text-lg text-gray-800 dark:text-white">
              Notifications
            </h4>
          </div>

          {/* Liste des notifications */}
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-[#3a3f4d] cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  Hendrix Stamp
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  There are many variations of pass...
                </p>
              </div>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-[#3a3f4d] cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  Goria Coast
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Mobile Apps UI Designer is required...
                </p>
              </div>
            </li>
            <li className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-[#3a3f4d] cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="User"
                className="w-10 h-10 rounded-full"
              />
              <div className="ml-3">
                <p className="text-sm font-semibold text-gray-800 dark:text-white">
                  Surfiya Zakir
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Mobile Apps UI Designer is required...
                </p>
              </div>
            </li>
          </ul>

          {/* Bouton "Voir tout" */}
          <div className="p-4 text-center border-t dark:border-gray-700">
            <button className="text-blue-500 font-semibold text-sm hover:underline">
              View All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationMenu;
