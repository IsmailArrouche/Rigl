import React from 'react';

const FooterBar = () => {
    return (
        <div className="fixed bottom-14 left-0 right-0 bg-blue-500 text-white flex justify-around items-center py-2 md:hidden">
        <button className="flex flex-col items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
            </svg>
            <span className="text-xs">Home</span>
        </button>
        <button className="flex flex-col items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20 12H4"
            />
            </svg>
            <span className="text-xs">Package</span>
        </button>
        <button className="flex flex-col items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-4.418 0-8 1.79-8 4v2c0 2.21 3.582 4 8 4s8-1.79 8-4v-2c0-2.21-3.582-4-8-4z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c4.418 0 8-1.79 8-4s-3.582-4-8-4-8 1.79-8 4 3.582 4 8 4z"
            />
            </svg>
            <span className="text-xs">Profile</span>
        </button>
        <button className="flex flex-col items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h8m-8 6h16"
            />
            </svg>
            <span className="text-xs">Menu</span>
        </button>
        </div>
    );
};

export default FooterBar;
