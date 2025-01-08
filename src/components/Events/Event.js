import React, { useState } from "react";
import Nav from "../Page/Nav";
import Sidebar from "../Page/Sidebar";
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";

const Event = () => {
  // State to control sidebar toggle on mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggles sidebar open/close in mobile view
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // 8 total events with stable Unsplash links, same approximate title length
  const events = [
    {
      date: "FEB 22",
      title: "Right Here Comedy",
      location: "Goa, Mumbai",
      image:
        "https://images.unsplash.com/photo-1524503033411-c9566986fc8f?ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      date: "FEB 24",
      title: "Comedy Poetry Night",
      location: "Goa, Mumbai",
      image:
        "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      date: "MAR 02",
      title: "Suhel's Galaxy Tour",
      location: "Goa, Mumbai",
      image:
        "https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      date: "MAR 11",
      title: "Grand Musical Night",
      location: "New Delhi",
      image:
        "https://images.unsplash.com/photo-1586318355105-09019060cf51?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      date: "APR 09",
      title: "Art Exhibition Fest",
      location: "Bengaluru",
      image:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&q=80&w=400",
    },
    {
      date: "MAY 15",
      title: "Global Food Fest 25",
      location: "Kolkata",
      image:
        "https://plus.unsplash.com/premium_photo-1698500035443-d774d98aaf06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGZlc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      date: "JUN 04",
      title: "World Tech Summit",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRlY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      date: "JUL 22",
      title: "Startup Funding Fest",
      location: "Pune",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RhcnR1cCUyMGZ1bmRpbmd8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[#2B3545] text-white flex flex-col transition-colors duration-300">
      {/* Navigation Bar (same background) */}
      <div className="w-full bg-[#2B3545] shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar (hidden on mobile unless toggled; visible from md) */}
        <div
          className={`
            ${isSidebarOpen ? "block" : "hidden"}
            md:block
            w-2/12
            bg-[#2B3545]
          `}
        >
          <Sidebar />
        </div>

        {/* Center Content: Map + Event Cards */}
        <div className="flex-1 p-4">
          {/* Map Section */}
          <div className="w-full h-64 sm:h-72 mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.080692312989!2d144.9649611154438!3d-37.81520674231461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb0f7f1b8d89a54b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1679833166545!5m2!1sen!2sau"
              title="Map"
              className="w-full h-full rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Event Cards Section */}
          {/*
            - grid-cols-1 on smallest screens
            - sm:grid-cols-2 from 640px
            - md:grid-cols-2 from 768px
            - lg:grid-cols-3 from 1024px
            - xl:grid-cols-4 from 1280px
          */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event, index) => {
              const [month, day] = event.date.split(" ");
              return (
                <div
                  key={index}
                  className="bg-[#1E2738] rounded-3xl w-full sm:w-auto h-96 shadow-lg p-6 flex flex-col mx-auto"
                >
                  {/* Event Image */}
                  <div className="w-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>

                  {/* Date + Title + Location */}
                  <div className="w-full mt-4 flex items-center">
                    {/* Date Box */}
                    <div className="bg-[#293145] border-2 border-white text-white font-bold w-16 h-20 flex flex-col items-center justify-center rounded-2xl">
                      <span className="text-xs uppercase">{month}</span>
                      <span className="text-2xl">{day}</span>
                    </div>

                    <div className="flex-1 ml-4">
                      {/* Title */}
                      <h3 className="text-base font-semibold mb-1">
                        {event.title}
                      </h3>
                      {/* Location + Icon */}
                      <p className="text-sm text-gray-300 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="w-4 h-4 inline-block mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2.25c-3.728 0-6.75 3.022-6.75 6.75 0 1.77.69 3.561 1.936 4.858l4.242 4.242 4.242-4.242A6.75 6.75 0 0012 2.25z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.25 9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                          />
                        </svg>
                        {event.location}
                      </p>
                    </div>
                  </div>

                  {/* Participants + Button */}
                  <div className="flex items-center justify-between mt-4">
                    {/* Participants */}
                    <div className="flex -space-x-2">
                      <img
                        src="https://sociala.uitheme.shop/assets/images/user-6.png"
                        alt="participant 1"
                        className="w-8 h-8 rounded-full border-2 border-[#1E2738]"
                      />
                      <img
                        src="https://sociala.uitheme.shop/assets/images/user-7.png"
                        alt="participant 2"
                        className="w-8 h-8 rounded-full border-2 border-[#1E2738]"
                      />
                      <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center text-xs border-2 border-[#1E2738]">
                        +2
                      </div>
                    </div>

                    {/* Teal Button */}
                    <button className="bg-[#00A8B5] text-white px-4 py-1 rounded text-sm font-bold hover:bg-[#007F89] transition-colors">
                      APPLY
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Section (Contacts + FriendRequest) */}
        <div className="hidden lg:flex flex-col w-auto bg-[#2B3545]">
          <Contacts />
          <FriendRequest />
        </div>
      </div>
    </div>
  );
};

export default Event;
