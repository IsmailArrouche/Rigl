import React, { useState, useEffect } from "react";
import Nav from "../Page/Nav";
import Contacts from "../Page/Contacts";
import FriendRequest from "../Page/FriendRequest";
import JobOfferCard from "./JobOfferCard";
import DetailedJobDescription from "./DetailedJobDescription";
import Sidebar from "../Page/Sidebar";
import jobOffers from "./jobOffers";
import FancyLoader from "./FancyLoader";
import ScrollButtons from "./ScrollButtons";

export default function Explore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isWideScreen, setIsWideScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1024);
      setSidebarVisible(window.innerWidth >= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (direction) => {
    if (direction === "back" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "forward" && currentIndex < jobOffers.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const currentJob = jobOffers[currentIndex];

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

      <div
        className={`
          fade-in-up
          h-screen w-screen bg-gray-200 dark:bg-[#1E2738] text-gray-800 dark:text-gray-100 
          flex flex-col transition-colors duration-300
          overflow-hidden
        `}
      >
        {/* Nav Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
          <Nav toggleSidebar={() => setSidebarVisible(!isSidebarVisible)} />
        </div>

        {/* Main Content */}
        <div className="flex flex-1">
          {/* Optional Sidebar */}
          {isSidebarVisible && <Sidebar />}

          {/* Center content: Job Card & Details */}
          <div className="flex-1 flex items-center justify-center -top-10 relative">
            {/* The card + buttons container */}
            <div
              className={`
                w-[90%] sm:w-[70%] lg:w-[50%]
                flex flex-col items-center
                transition-all 
                duration-500
                ${
                  showDetails
                    ? "opacity-0 translate-x-16 pointer-events-none"
                    : "opacity-100 translate-x-0"
                }
              `}
            >
              <JobOfferCard
                key={currentJob.id}
                {...currentJob}
                className="bg-gray-300 dark:bg-[#293145] w-full transition-all duration-300"
                onInfoClick={() => setShowDetails(true)}
              />

              {/* Scroll Buttons (now placed below the card) */}
              <div className="mt-1">
                <ScrollButtons
                  onBack={() => handleScroll("back")}
                  onForward={() => handleScroll("forward")}
                />
              </div>
            </div>

            {/* The details container */}
            <div
              className={`
                w-[90%] sm:w-[70%] lg:w-[50%]
                transition-all 
                duration-500
                absolute
                ${
                  showDetails
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full pointer-events-none"
                }
              `}
            >
              <DetailedJobDescription
                job={currentJob}
                onBack={() => setShowDetails(false)}
              />
            </div>
          </div>

          {/* Right side: Contacts & FriendRequest (only on wide screens) */}
          {isWideScreen && (
            <div className="flex-r">
              <div className="min-w-64 bg-gray-300 dark:bg-inherit">
                <Contacts />
              </div>
              <div className="min-w-64 bg-gray-300 dark:bg-inherit">
                <FriendRequest />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
