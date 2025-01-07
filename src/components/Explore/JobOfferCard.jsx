import React from "react";
import { FaInfoCircle, FaBriefcase } from "react-icons/fa";

export default function JobOfferCard({
  company,
  user,
  time,
  title,
  location,
  employmentType,
  experienceLevel,
  skills = [],
  description = "",
  isRemote = false,
  onInfoClick,
  className = "",
}) {
  const badgeLetter = company ? company[0].toUpperCase() : "N";
  const shortDesc =
    description.length > 180 ? description.slice(0, 180) + "..." : description;

  return (
    <div
      className={`
        relative 
        rounded-lg 
        w-full 
        lg:max-w-3xl 
        flex 
        flex-col 
        p-6
        transition-all
        duration-300
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        bg-white text-gray-800
        dark:bg-[#293145] dark:text-white
        h-[30rem]
        ${className}
      `}
      style={{ fontSize: "1rem" }}
    >
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between mb-5">
        {/* Square badge */}
        <div className="badge">{badgeLetter}</div>

        {/* Job Details */}
        <div className="w-[85%] flex flex-col flex-grow text-center lg:text-left lg:ml-6">
          <h1 className="font-bold text-lg mb-2 leading-tight">{title}</h1>
          <p className="text-sm text-gray-600 dark:text-gray-300">{company}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {location} • {time} {isRemote && <span> • Remote</span>}
          </p>
        </div>
      </div>

      {/* Job Type Info */}
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
        <strong>Type:</strong> {employmentType} • {experienceLevel}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-3 mb-4">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-700 dark:text-gray-100 flex-grow leading-relaxed mb-5">
        {shortDesc}
      </p>

      {/* Bottom Row: Rigl and Details Buttons */}
      <div className="flex items-center justify-between mt-auto">
        <button className="btn-primary" title="Rigl">
          <FaBriefcase className="w-5 h-5 mr-2" />
          Rigl
        </button>
        <button
          onClick={onInfoClick}
          className="btn-secondary ml-4"
          title="Details"
        >
          <FaInfoCircle className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
