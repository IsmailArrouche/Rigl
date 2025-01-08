import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/solid"; // For existing icons
import NotificationMenu from "./NotificationMenu";
import { Link } from "react-router-dom";

function Navbar({ toggleSidebar, isSidebarOpen }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div className="bg-gradient dark:bg-[rgb(41,49,69)]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Sarina&display=swap');`}
      </style>
      <nav className="flex flex-wrap items-center justify-between px-4 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-2 sm:w-auto">
          {/* Logo */}
          <Link to="/explore" className="flex items-center space-x-2 ml-3">
            <span
              className="font-bold"
              style={{
                fontFamily: "'Sarina', sans-serif",
                fontSize: "32px",
                color: "#007F89",
              }}
            >
              Rigl
            </span>
          </Link>
        </div>

        {/* Center Section (Search Bar) */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex items-center bg-[#3a3e4e] hover:bg-[#2d333c] px-4 py-2 rounded-full transition-colors w-full sm:w-96 md:w-[400px] lg:w-[500px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16.65 10.35a6.3 6.3 0 11-12.6 0 6.3 6.3 0 0112.6 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Start typing to search..."
              className="outline-none border-b border-transparent text-white font-semibold bg-transparent w-full ml-2 text-sm"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 text-gray-400 sm:w-auto">
          {/* 
            MOBILE ONLY: Mode Toggle + Sidebar Toggle 
            (These will show on small screens; hidden on md and above) 
          */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Mode Toggle (Mobile) */}
            <button
              title="Change Mode"
              onClick={() => dispatch(changeMode())}
              className="hover:text-[#007F89] transition-colors mb-[7px]"
            >
              {mode ? (
                <SunIcon className="w-6 h-6 text-gray-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-400" />
              )}
            </button>

            {/* Responsive Menu Icon */}
            <button
              onClick={toggleSidebar}
              className="nav-menu me-0 ms-2 flex items-center justify-center text-gray-400 hover:text-[#007F89] md:hidden"
              style={{ marginTop: "-4px" }}
            >
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* DESKTOP ONLY: Other Icons (hidden on smaller screens) */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Messaging Icon */}
            <button
              className="hover:text-[#007F89] transition-colors relative mb-[5px]"
              onClick={() => {
                window.location.href = "/message";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-[#007F89] rounded-full"></span>
            </button>

            {/* Notifications */}
            <NotificationMenu />

            {/* Mode Toggle (Desktop) */}
            <button
              title="Change Mode"
              onClick={() => dispatch(changeMode())}
              className="hover:text-[#007F89] transition-colors mb-[7px]"
            >
              {mode ? (
                <SunIcon className="w-6 h-6 text-gray-400" />
              ) : (
                <MoonIcon className="w-6 h-6 text-gray-400" />
              )}
            </button>

            {/* Profile Icon */}
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Profile avatar"
                className="w-8 h-8 rounded-full mb-[5px]"
              />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
