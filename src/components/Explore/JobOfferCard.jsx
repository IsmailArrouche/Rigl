// JobOfferCard.jsx

import React, { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";

export default function JobOfferCard({
  badgeLetter,
  user,
  time,
  title,
  location,
  employmentType,
  experienceLevel,
  skills = [],
  likes,
  description = "",
  isRemote,
  onInfoClick,
  className = "",
}) {
  // We'll skip like/dislike here for brevity
  const [likeCount] = useState(likes || 0);

  // Truncate the description
  const shortDesc =
    description.length > 110 ? description.slice(0, 110) + "..." : description;

  return (
    <div
      className={`
        relative 
        rounded-lg 
        w-full 
        flex 
        flex-col 
        p-6
        transition-all
        duration-300
        hover:scale-[1.01]
        hover:shadow-lg
        bg-white text-gray-800
        dark:bg-[#293145] dark:text-white
        ${className}
      `}
      style={{
        fontSize: "1rem",
        height: "500px", // a bit shorter
      }}
    >
      {/* Top row: Badge + Title + Remote? */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          {/* Badge Letter */}
          <div className="bg-[#FDE9D6] w-10 h-10 flex items-center justify-center rounded text-[#3D3D3D] font-bold text-lg">
            {badgeLetter}
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold text-lg">{title}</h2>
            {/* Remote or Not */}
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {isRemote ? (
                <>
                  <AiOutlineWifi className="inline-block w-4 h-4 mr-1 text-[#5C80BC]" />
                  Remote
                </>
              ) : (
                "On-Site"
              )}
            </p>
          </div>
        </div>

        {/* Right side: user/time */}
        <div className="text-right">
          <p className="font-semibold text-sm">{user}</p>
          <p className="text-xs text-gray-500 dark:text-gray-300">{time}</p>
        </div>
      </div>

      {/* Location & job type */}
      <p className="text-sm text-gray-600 dark:text-gray-200 mb-2">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-200 mb-2">
        <strong>Type:</strong> {employmentType} • {experienceLevel}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
              bg-[#5C80BC]/30
              text-white
              px-3
              py-1
              rounded-md
              text-xs
              font-medium
              transition-colors
              hover:bg-[#5C80BC]/50
              dark:bg-[#5C80BC]/30
              dark:hover:bg-[#5C80BC]/50
            "
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Description preview */}
      <p className="text-sm text-gray-700 dark:text-gray-100 flex-grow mb-4 leading-relaxed">
        {shortDesc}
      </p>

      {/* Bottom row: "Rigl" button + Info button */}
      <div className="flex items-center space-x-4 justify-center mt-auto">
        <button
          className="
            font-bold 
            text-sm
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
          style={{ width: "70%" }}
        >
          Rigl
        </button>

        <button
          onClick={onInfoClick}
          className="
            font-bold
            text-sm
            bg-[#5C80BC]
            text-white
            px-4
            py-3
            rounded-md
            hover:bg-[#4868A3]
            transition-colors
            duration-300
            flex
            items-center
            justify-center
          "
        >
          <FaInfoCircle className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
