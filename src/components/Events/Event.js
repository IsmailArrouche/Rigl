import React, { useState, useEffect } from "react";
import Nav from "../Page/Nav";
import Sidebar from "../Page/Sidebar";
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";
import FancyLoader from "../Page/FancyLoader"; // Make sure this path is correct

const Event = () => {
  // 1) States for sidebar, wide screen, and loading
  const [isSidebarVisible, setSidebarVisible] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [isWideScreen, setIsWideScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );
  const [isLoading, setIsLoading] = useState(true);

  // 2) On resize, update isSidebarVisible and isWideScreen
  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
      setSidebarVisible(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 3) Show loader for 3 seconds, then reveal content
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 4) Our 8 events data
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
        "https://plus.unsplash.com/premium_photo-1681550093390-14477e7b196a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      date: "MAR 11",
      title: "Grand Musical Night",
      location: "New Delhi",
      image:
        "https://images.unsplash.com/photo-1586318355105-09019060cf51?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3",
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
        "https://plus.unsplash.com/premium_photo-1698500035443-d774d98aaf06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      date: "JUN 04",
      title: "World Tech Summit",
      location: "Mumbai",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
      date: "JUL 22",
      title: "Startup Funding Fest",
      location: "Pune",
      image:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
  ];

  // 5) If still loading, display FancyLoader
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-200 dark:bg-[#1E2738]">
        <FancyLoader
          boxColors={[
            "#EF4444",
            "#F59E0B",
            "#6366F1",
            "#10B981",
            "#3B82F6",
            "#8B5CF6",
          ]}
          size="3rem"
          animationSpeed={1.5}
        />
      </div>
    );
  }

  return (
    <>
      {/* Optional fade-in style (like Explore) */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}
      </style>

      {/* Main container - now scrollable */}
      <div
        className="
          fade-in-up
          min-h-screen w-full
          bg-gray-200 dark:bg-[#1E2738]
          text-gray-800 dark:text-gray-100
          flex flex-col
          transition-colors duration-300
          overflow-y-auto
        "
      >
        {/* Navigation Bar */}
        <div className="w-full bg-gray-200 dark:bg-[#1E2738] shadow-md sticky top-0 z-10">
          <Nav toggleSidebar={() => setSidebarVisible(!isSidebarVisible)} />
        </div>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Optional Sidebar */}
          {isSidebarVisible && <Sidebar />}

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
            <div
              className="
                w-full
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
                gap-6
              "
            >
              {events.map((event, index) => {
                const [month, day] = event.date.split(" ");
                return (
                  <div
                    key={index}
                    className="
                      bg-gray-300 dark:bg-[#1E2738]
                      rounded-3xl
                      w-full
                      sm:w-auto
                      h-96
                      shadow-lg
                      p-6
                      flex
                      flex-col
                      mx-auto
                      transition-colors duration-300
                    "
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
                      <div
                        className="
                          bg-gray-200 dark:bg-[#293145]
                          border-2
                          border-gray-400 dark:border-white
                          text-gray-800 dark:text-white
                          font-bold
                          w-16 h-20
                          flex flex-col
                          items-center justify-center
                          rounded-2xl
                          transition-colors duration-300
                        "
                      >
                        <span className="text-xs uppercase">{month}</span>
                        <span className="text-2xl">{day}</span>
                      </div>
                      <div className="flex-1 ml-4">
                        {/* Title */}
                        <h3 className="text-base font-semibold mb-1">
                          {event.title}
                        </h3>
                        {/* Location + Icon */}
                        <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
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
                          className="
                            w-8 h-8
                            rounded-full
                            border-2
                            border-gray-300 dark:border-[#1E2738]
                          "
                        />
                        <img
                          src="https://sociala.uitheme.shop/assets/images/user-7.png"
                          alt="participant 2"
                          className="
                            w-8 h-8
                            rounded-full
                            border-2
                            border-gray-300 dark:border-[#1E2738]
                          "
                        />
                        <div
                          className="
                            w-8 h-8
                            rounded-full
                            bg-gray-500
                            text-white
                            flex items-center justify-center
                            text-xs
                            border-2
                            border-gray-300 dark:border-[#1E2738]
                          "
                        >
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

          {/* Right Section: only shows if isWideScreen */}
          {isWideScreen && (
            <div className="flex-r">
              <div className="min-w-64 mt-2 bg-gray-200 dark:bg-[#1E2738]">
                <FriendRequest />
              </div>
              <div className="min-w-64 mt-2 bg-gray-200 dark:bg-[#1E2738]">
                <Contacts />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Event;
