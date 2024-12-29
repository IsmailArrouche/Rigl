import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../app/features/mode/modeSlice";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import Contact from "./Contact";

function Navbar() {
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.mode.mode);

    return (
        <div className="bg-gradient dark:bg-[#272a37]">
            {/* Barre de navigation */}
            <nav className="flex flex-wrap items-center justify-between px-4 py-2">
                {/* Logo et Barre de recherche */}
                <div className="flex items-center space-x-4 sm:w-auto">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="text-green-400 text-2xl font-bold">⚡</div>
                        <span className="text-blue-500 text-lg font-bold">Rigl</span>
                    </div>

                    {/* Barre de recherche */}
                    <div className="flex items-center bg-[#757987] dark:bg-[#3a3e4e] hover:bg-[#3a3e4e] px-4 py-2 rounded-full transition-colors w-full sm:w-48 md:w-72">
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

                {/* Icônes : Profil, Notifications, Messagerie, Changement de mode */}
                <div className="flex items-center space-x-4 text-gray-400 justify-end sm:w-auto">
                    {/* Icône de Profil */}
                    <button className="hover:text-blue-500 transition-colors">
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
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>

                    {/* Icône de Notifications */}
                    <button className="hover:text-blue-500 transition-colors">
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

                    {/* Icône de changement de mode */}
                    <button
                        title="Change Mode"
                        onClick={() => dispatch(changeMode())}
                        className="hover:text-blue-500 transition-colors"
                    >
                        {mode ? (
                            <SunIcon className="w-6 h-6 text-gray-400" />
                        ) : (
                            <MoonIcon className="w-6 h-6 text-gray-400" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Appel du composant Contact */}
            <Contact />
        </div> 
    );
}

export default Navbar;