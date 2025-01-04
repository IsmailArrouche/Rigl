import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import NotificationMenu from "./NotificationMenu";
import { Link } from "react-router-dom"; // Importez Link depuis React Router

function Navbar({ toggleSidebar }) {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode.mode);

  return (
    <div className="bg-gradient dark:bg-[rgb(41,49,69)]">
      <nav className="flex flex-wrap items-center justify-between px-4 py-4">
        <div className="flex items-center space-x-4 sm:w-auto">
          {/* Logo redirigeant vers la page explore */}
          <Link to="/explore" className="flex items-center space-x-2">
            <div className="text-green-400 text-2xl font-bold">⚡</div>
            <span className="text-blue-500 text-lg font-bold">Rigl</span>
          </Link>

          {/* Barre de recherche */}
          <div className="hidden sm:flex items-center bg-[#757987] dark:bg-[#3a3e4e] hover:bg-[#3a3e4e] px-4 py-2 rounded-full transition-colors w-full sm:w-48 md:w-72">
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

        <div className="flex items-center space-x-4 text-gray-400 justify-end sm:w-auto">
          <button
            onClick={toggleSidebar}
            className="sm:hidden nav-menu me-0 ms-2 flex items-center justify-center text-gray-400 hover:text-blue-500"
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
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Icône de messagerie */}
          <button
            className="hover:text-blue-500 transition-colors relative mb-[5px]"
            onClick={() => {
              window.location.href = "/message"; // Remplacez par votre lien
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
            <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-orange-500 rounded-full"></span>
          </button>

          {/* Icône de Notifications */}
          <NotificationMenu />

          {/* Icône de changement de mode */}
          <button
            title="Change Mode"
            onClick={() => dispatch(changeMode())}
            className="hover:text-blue-500 transition-colors mb-[7px]"
          >
            {mode ? (
              <SunIcon className="w-6 h-6 text-gray-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-400" />
            )}
          </button>

          {/* Icône de profil */}
          <div className="relative">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Mohannad avatar"
              className="w-8 h-8 rounded-full  mb-[5px]"
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
