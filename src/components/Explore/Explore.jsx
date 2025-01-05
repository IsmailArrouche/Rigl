// Explore.jsx

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Contacts from "./Contacts";
import FriendRequest from "./FriendRequest";
import JobOfferCard from "./JobOfferCard";
import DetailedJobDescription from "./DetailedJobDescription";
import Sidebar from "./Sidebar";
import FooterBar from "./Footer";

import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import jobOffers from "./jobOffers";

export default function Explore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Sidebar
  const [isSidebarVisible, setSidebarVisible] = useState(window.innerWidth >= 768);
  const toggleSidebar = () => setSidebarVisible(!isSidebarVisible);

  // Responsive
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarVisible(true);
      } else {
        setSidebarVisible(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Up/Down logic
  const handleScroll = (direction) => {
    if (direction === "up" && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (direction === "down" && currentIndex < jobOffers.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };
  const canScrollUp = currentIndex > 0;
  const canScrollDown = currentIndex < jobOffers.length - 1;

  const currentJob = jobOffers[currentIndex];

  return (
    <div className="h-screen w-screen bg-gray-200 dark:bg-[#1E2738] text-gray-800 dark:text-gray-100 flex flex-col transition-colors duration-300">
      {/* Navigation Bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <Nav toggleSidebar={toggleSidebar} />
      </div>

      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        {isSidebarVisible && (
          <div className="w-2/12 bg-gray-100 dark:bg-[#293145]">
            <Sidebar />
          </div>
        )}

        {/* Center content */}
        <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden">
          {/* If showDetails is false => job card */}
          <div
            className={`
              absolute w-full max-w-[60%] py-8 transition-all duration-500
              ${
                showDetails
                  ? "opacity-0 translate-x-16 pointer-events-none"
                  : "opacity-100 translate-x-0"
              }
            `}
            style={{ margin: "0 auto" }}
          >
            <JobOfferCard
              key={currentJob.id}
              company={currentJob.company}
              user={currentJob.user}
              time={currentJob.time}
              title={currentJob.title}
              location={currentJob.location}
              employmentType={currentJob.employmentType}
              experienceLevel={currentJob.experienceLevel}
              skills={currentJob.skills}
              likes={currentJob.likes}
              dislikes={currentJob.dislikes}
              description={currentJob.description}
              isRemote={currentJob.isRemote}
              className="bg-gray-300 dark:bg-[#2B3545] w-full transition-all duration-300"
              onInfoClick={() => setShowDetails(true)}
            />

            {/* Up/Down Buttons */}
            <div className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem] flex flex-col space-y-4 items-center">
              <button
                className={`
                  p-4 rounded-full text-white shadow-lg
                  transition-transform
                  duration-300
                  active:scale-95
                  flex items-center justify-center
                  ${
                    canScrollUp
                      ? "bg-[#5C80BC] hover:bg-[#4868A3]"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
                onClick={() => handleScroll("up")}
                disabled={!canScrollUp}
                title="Previous Job"
              >
                <FaArrowUp className="w-5 h-5" />
              </button>
              <button
                className={`
                  p-4 rounded-full text-white shadow-lg
                  transition-transform
                  duration-300
                  active:scale-95
                  flex items-center justify-center
                  ${
                    canScrollDown
                      ? "bg-[#5C80BC] hover:bg-[#4868A3]"
                      : "bg-gray-400 cursor-not-allowed"
                  }
                `}
                onClick={() => handleScroll("down")}
                disabled={!canScrollDown}
                title="Next Job"
              >
                <FaArrowDown className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Detailed view => DetailedJobDescription */}
          <div
            className={`
              absolute w-full max-w-[80%] transition-all duration-500
              ${
                showDetails
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full pointer-events-none"
              }
            `}
            style={{ margin: "0 auto" }}
          >
            <DetailedJobDescription
              job={currentJob}
              onBack={() => setShowDetails(false)}
            />
          </div>
        </div>

        {/* Right side: Contacts & FriendRequest */}
        <div className="flex-r">
          <div className="min-w-64 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <Contacts />
          </div>
          <div className="w-1/4 bg-gray-300 dark:bg-[#2B3545] lg:block">
            <FriendRequest />
          </div>
        </div>
      </div>

      {/* Footer for small screens */}
      <div className="md:hidden bg-gray-300 dark:bg-[#2B3545]">
        <FooterBar />
      </div>
    </div>
  );
}
