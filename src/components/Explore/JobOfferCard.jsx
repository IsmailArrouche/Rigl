import React, { useState } from "react";
import { FaStar, FaBan, FaInfoCircle, FaBriefcase } from "react-icons/fa";

export default function JobOfferCard({
  company,
  user,
  time,
  title,
  location,
  employmentType,
  experienceLevel,
  skills = [],
  likes = 0,
  dislikes = 0,
  description = "",
  isRemote = false,
  onInfoClick,
  className = "",
}) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  // Like/Dislike Handlers
  const handleLike = () => {
    if (isLiked) {
      setIsLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setIsLiked(true);
      setLikeCount((prev) => prev + 1);
      if (isDisliked) {
        setIsDisliked(false);
        setDislikeCount((prev) => prev - 1);
      }
    }
  };

  const handleDislike = () => {
    if (isDisliked) {
      setIsDisliked(false);
      setDislikeCount((prev) => prev - 1);
    } else {
      setIsDisliked(true);
      setDislikeCount((prev) => prev + 1);
      if (isLiked) {
        setIsLiked(false);
        setLikeCount((prev) => prev - 1);
      }
    }
  };

  const badgeLetter = company ? company[0].toUpperCase() : "N";
  const shortDesc =
    description.length > 120 ? description.slice(0, 120) + "..." : description;

  return (
    <div
      className={`
        relative 
        rounded-lg 
        w-full 
        lg:max-w-3xl 
        flex 
        flex-col 
        p-5
        transition-all
        duration-300
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        bg-white text-gray-800
        dark:bg-[#293145] dark:text-white
        ${className}
      `}
      style={{ fontSize: "1rem", height: "auto" }}
    >
      {/* Top Section */}
      <div
        className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-3 space-y-4 lg:space-y-0"
      >
        {/* Square badge */}
        <div
          className="bg-[#FDE9D6] flex items-center justify-center text-[#3D3D3D] font-bold rounded-md lg:mr-4"
          style={{ width: "70px", height: "70px", fontSize: "1.4rem" }}
        >
          {badgeLetter}
        </div>

        {/* Job Details */}
        <div className="flex flex-col flex-grow text-center lg:text-left">
          <h1 className="font-bold text-md mb-1 leading-tight">{title}</h1>
          <p className="text-xs text-gray-600 dark:text-gray-300">{company}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {location} • {time} {isRemote && <span> • Remote</span>}
          </p>
        </div>
      </div>

      {/* Like/Dislike Row */}
      <div className="flex items-center mb-3 space-x-6 justify-center lg:justify-start">
        <button
          onClick={handleLike}
          className="flex items-center space-x-2 text-md px-2 py-1 rounded-md transition-transform hover:shadow-md"
        >
          <span
            className={`
              transition-transform duration-300
              ${
                isLiked
                  ? "scale-110 text-yellow-500"
                  : "text-gray-400 hover:scale-105 hover:text-gray-500 dark:hover:text-gray-300"
              }
            `}
          >
            <FaStar className="w-5 h-5" />
          </span>
          <span>{likeCount}</span>
        </button>

        <button
          onClick={handleDislike}
          className="flex items-center space-x-2 text-md px-2 py-1 rounded-md transition-transform hover:shadow-md"
        >
          <span
            className={`
              transition-transform duration-300
              ${
                isDisliked
                  ? "scale-110 text-red-500"
                  : "text-gray-400 hover:scale-105 hover:text-gray-500 dark:hover:text-gray-300"
              }
            `}
          >
            <FaBan className="w-5 h-5" />
          </span>
          <span>{dislikeCount}</span>
        </button>
      </div>

      {/* Job Type Info */}
      <p className="text-sm text-gray-500 dark:text-gray-300 mb-2">
        <strong>Type:</strong> {employmentType} • {experienceLevel}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-[#5C80BC]/30 text-gray-900 px-2 py-1 rounded-md text-xs font-medium hover:bg-[#5C80BC]/50 dark:text-white"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-100 flex-grow leading-relaxed mb-4">
        {shortDesc}
      </p>

      {/* Bottom Row: Rigl and Details Buttons */}
      <div className="flex items-center justify-between mt-auto">
        <button
          className="
            flex
            items-center
            justify-center
            font-bold
            text-sm
            bg-[#5C80BC]
            text-white
            py-3
            px-4
            shadow
            transition-colors
            duration-300
            hover:bg-[#4868A3]
            rounded-md
            flex-grow
            active:scale-95
          "
          title="Rigl"
        >
          <FaBriefcase className="w-4 h-4 mr-2" />
          Rigl
        </button>
        <button
  onClick={onInfoClick}
  className="
    font-bold
    text-sm
    bg-[#5C80BC]
    text-white
    transition-colors
    duration-300
    hover:bg-[#4868A3]
    rounded-md
    shadow-sm
    ml-2
    flex
    items-center
    justify-center
  "
  style={{ width: "40px", height: "45px" }}
  title="Details"
>
  <FaInfoCircle className="w-4 h-4" />
</button>

      </div>
    </div>
  );
}
