import React, { useState } from "react";
import { FaStar, FaSkull } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { MdArrowBack, MdOutlineCheckCircle, MdOutlineLocalActivity } from "react-icons/md";

export default function DetailedJobDescription({ job, onBack }) {
  // If you want to store "liked" or "disliked"
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const [isDisliked, setIsDisliked] = useState(false);
  const [dislikeCount, setDislikeCount] = useState(0);

  // Fallback job data
  const defaultJob = {
    badgeLetter: "N",
    title: "Remote Flight Reservationist (Work From Home)",
    company: "Newport Associates",
    location: "New York City, NY",
    posted: "1 day ago",
    isRemote: true,
  };

  const currentJob = job || defaultJob;
  const { badgeLetter, title, company, location, posted, isRemote } = currentJob;

  // Toggle like
  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
      // if disliked, undo
      if (isDisliked) {
        setIsDisliked(false);
        setDislikeCount((prev) => prev - 1);
      }
    }
  };

  // Toggle dislike
  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
      setDislikeCount((prev) => prev - 1);
    } else {
      setIsDisliked(true);
      setDislikeCount((prev) => prev + 1);
      // if liked, undo
      if (isLiked) {
        setIsLiked(false);
        setLikeCount((prev) => prev - 1);
      }
    }
  };

  return (
    <div
      className="
        relative
        p-6
        bg-white
        text-gray-800
        rounded-lg
        shadow-lg
        max-w-5xl
        w-full
      "
      style={{
        // Remove top margin; let's rely on parent's styling
        minHeight: "80vh",
        maxHeight: "80vh", // Let’s cap the height
        overflowY: "auto", // Scrollable
      }}
    >
      {/* More modern back button (top-left) */}
      <button
        onClick={onBack}
        className="
          absolute
          top-3
          left-3
          flex
          items-center
          space-x-2
          text-blue-600
          hover:bg-blue-50
          px-3
          py-2
          rounded-md
          transition-colors
        "
      >
        <MdArrowBack className="w-5 h-5" />
        <span className="text-sm font-medium">Back</span>
      </button>

      {/* Top bar: job info + apply + star/skull */}
      <div className="flex items-center justify-between mb-4">
        {/* Left: Badge + Title & Company info */}
        <div className="flex items-center space-x-4">
          {/* Badge letter (like "N") */}
          <div className="bg-[#FDE9D6] w-10 h-10 flex items-center justify-center rounded text-[#3D3D3D] font-bold text-lg">
            {badgeLetter}
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg text-gray-800">
              {title}
            </h1>
            <p className="text-sm text-gray-500">
              {company} &middot; {location} &middot; {posted}
              {isRemote && (
                <>
                  {" "}
                  &middot;{" "}
                  <span className="inline-flex items-center font-medium">
                    <AiOutlineWifi className="w-4 h-4 mr-1 text-[#5C80BC]" />
                    Remote
                  </span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right: Buttons (Rigl-style "Apply", star/skull) */}
        <div className="flex items-center space-x-4">
          {/* "Apply" button: same design as Rigl */}
          <button
            type="button"
            className="
              font-bold 
              text-md
              bg-[#5C80BC] 
              text-white 
              py-3
              px-6 
              shadow 
              transition-colors 
              duration-300 
              hover:bg-[#4868A3] 
              rounded-md
            "
          >
            Apply
          </button>

          {/* Like / Dislike (star/skull) */}
          <div className="flex items-center space-x-4">
            {/* Star */}
            <button
              onClick={handleLike}
              className="flex items-center space-x-1 text-sm"
            >
              <span
                className={`
                  transition-transform duration-300
                  ${
                    isLiked
                      ? "scale-110 text-yellow-500"
                      : "text-gray-400 hover:scale-105 hover:text-gray-600"
                  }
                  inline-block
                `}
              >
                <FaStar className="w-5 h-5" />
              </span>
              <span>{likeCount}</span>
            </button>

            {/* Skull */}
            <button
              onClick={handleDislike}
              className="flex items-center space-x-1 text-sm"
            >
              <span
                className={`
                  transition-transform duration-300
                  ${
                    isDisliked
                      ? "scale-110 text-red-500"
                      : "text-gray-400 hover:scale-105 hover:text-gray-600"
                  }
                  inline-block
                `}
              >
                <FaSkull className="w-5 h-5" />
              </span>
              <span>{dislikeCount}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-2" />

      {/* Description Section */}
      <div className="pr-2">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          Description
        </h2>

        <h3 className="font-semibold text-gray-700 mb-1 flex items-center space-x-1">
          <MdOutlineCheckCircle className="text-green-500" />
          <span>Job Description:</span>
        </h3>
        <p className="text-sm text-gray-700 mb-4 leading-relaxed">
          Are you passionate about travel, events, and helping others create
          unforgettable experiences? Join our team and turn your passion into a
          rewarding career! No prior experience is necessary—just bring your
          enthusiasm, and we'll provide the training and tools you need to
          succeed.
        </p>

        <h3 className="font-semibold text-gray-700 mb-1 flex items-center space-x-1">
          <MdOutlineLocalActivity className="text-blue-500" />
          <span>What You'll Do:</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Book Travel & Events:</strong> Assist clients in booking air
            travel, hotels, car rentals, cruises, sporting events, concerts,
            activities, and travel insurance.
          </li>
          <li>
            <strong>Community Outreach:</strong> Connect with local communities
            (wedding planners, hairdressers, college planners, etc.) to build
            relationships and expand your client base.
          </li>
          <li>
            <strong>Utilize Social Media:</strong> Promote your services,
            attract new clients, and share travel tips & deals.
          </li>
          <li>
            <strong>Track Bookings:</strong> Use a dedicated website to manage
            and track client bookings.
          </li>
        </ul>

        <h3 className="font-semibold text-gray-700 mb-1 flex items-center space-x-1">
          <MdOutlineCheckCircle className="text-green-500" />
          <span>What We Offer:</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li>
            <strong>Comprehensive Training:</strong> Free certification and
            daily Zoom training sessions to ensure you're fully equipped to
            thrive.
          </li>
          <li>
            <strong>Mentorship:</strong> Guidance from experienced mentors every
            step of the way.
          </li>
          <li>
            <strong>Flexible Work Environment:</strong> All you need is Wi-Fi
            and a computer or smartphone.
          </li>
        </ul>

        <h3 className="font-semibold text-gray-700 mb-1 flex items-center space-x-1">
          <MdOutlineLocalActivity className="text-blue-500" />
          <span>Why Join Us?</span>
        </h3>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-2 mb-4">
          <li>
            <strong>No Experience Needed:</strong> We'll teach you everything
            you need to know.
          </li>
          <li>
            <strong>Supportive Community:</strong> Work with like-minded
            individuals who share your passion for travel and events.
          </li>
        </ul>

        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          Ready to embark on an exciting new journey? Apply today to become a
          Travel &amp; Event Booking Specialist and start building the career of
          your dreams!
        </p>
      </div>

      {/* Numbers & Facts Section */}
      <div className="bg-gray-100 text-gray-800 p-4 rounded-md mt-4">
        <h3 className="font-bold text-sm mb-3">Numbers & Facts</h3>
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold">Location</span>
          <span>
            {location}{" "}
            {isRemote && (
              <>
                &nbsp;
                <AiOutlineWifi className="inline-block w-4 h-4 text-[#5C80BC]" />
                &nbsp; Remote
              </>
            )}
          </span>
        </div>
      </div>
    </div>
  );
}
