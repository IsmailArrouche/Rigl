import React from "react";
import profileImage from "../../../src/assets/avatar.jpeg";
import coverImage from "../../../src/assets/mountain.jpg";

const UserProfile = () => {
  return (
    <div className="bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg shadow-md overflow-hidden w-full">
      {/* Cover Photo */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Info and Action Buttons */}
      <div className="px-4 sm:px-6 py-4 relative">
        {/* Profile Photo */}
        <div className="absolute -top-16 left-4 sm:left-6 w-20 h-20 rounded-full overflow-hidden border-4 border-white dark:border-[#293145]">
          <img
            src={profileImage}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info and Buttons Container */}
        <div className="pt-6 sm:flex sm:items-center sm:justify-between">
          {/* Profile Info */}
          <div className="mb-4 sm:mb-0">
            <h1 className="text-xl sm:text-2xl font-bold">Mohannad Zitoun</h1>
            <p className="text-sm text-gray-400">support@gmail.com</p>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-2">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm">
              ADD FRIEND
            </button>
            <button className="bg-white dark:bg-[#1E2738] text-gray-700 dark:text-gray-200 px-3 py-2 rounded text-sm border dark:border-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 0v.511L12 12l7-7.489V4H5zm0 2.267V19h14V6.267l-7 7-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 -mx-4 sm:-mx-6 border-t border-gray-200 dark:border-gray-700">
          <div className="flex overflow-x-auto px-4 sm:px-6 py-3 space-x-6 text-gray-400 no-scrollbar">
            {["About", "Discussion", "Group", "Events", "Media"].map((item) => (
              <a
                key={item}
                href="#"
                className="whitespace-nowrap hover:text-black dark:hover:text-white transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
