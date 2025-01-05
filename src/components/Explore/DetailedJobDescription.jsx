// DetailedJobDescription.jsx

import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { FaTimes, FaClipboardCheck, FaLightbulb } from "react-icons/fa";

export default function DetailedJobDescription({ job, onBack }) {
  if (!job) return null;

  const {
    company,
    title,
    location,
    posted,
    isRemote,
    responsibilities = [],
    qualifications = [],
    benefits = [],
    about = "",
  } = job;

  const badgeLetter = company ? company[0].toUpperCase() : "N";

  return (
    <div
      className="
        relative
        p-6
        bg-white
        dark:bg-[#293145]
        text-gray-800
        dark:text-gray-100
        rounded-lg
        shadow-lg
        max-w-5xl
        w-full
        transition-all
        duration-500
      "
      style={{
        minHeight: "80vh",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      {/* Top row: letter + job info + Rigl + close button */}
      <div className="flex items-center justify-between mb-4">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <div className="bg-[#FDE9D6] w-10 h-10 flex items-center justify-center rounded text-[#3D3D3D] font-bold text-lg">
            {badgeLetter}
          </div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">
              {title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {company} • {location} • {posted}
              {isRemote && (
                <>
                  {" "}
                  • Remote
                  <AiOutlineWifi className="inline-block w-4 h-4 ml-1 text-[#5C80BC]" />
                </>
              )}
            </p>
          </div>
        </div>

        {/* Right side: big Rigl + close button */}
        <div className="flex items-center space-x-3">
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
              transition-transform
              duration-300
              hover:bg-[#4868A3]
              active:scale-95
              rounded-md
            "
            title="Rigl"
          >
            Rigl
          </button>

          <button
            onClick={onBack}
            className="
              flex
              items-center
              justify-center
              font-bold
              text-md
              bg-[#5C80BC]
              text-white
              py-3
              px-3
              rounded-md
              hover:bg-[#4868A3]
              transition-transform
              duration-300
              active:scale-95
            "
            title="Close"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      </div>

      <hr className="my-2 border-gray-300 dark:border-gray-600" />

      {/* Responsibilities */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 flex items-center space-x-2">
          <FaClipboardCheck className="text-green-500" />
          <span>Responsibilities</span>
        </h2>
        {responsibilities.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-sm">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-300">
            No responsibilities listed.
          </p>
        )}
      </section>

      {/* Qualifications */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 flex items-center space-x-2">
          <FaLightbulb className="text-blue-500" />
          <span>Qualifications</span>
        </h2>
        {qualifications.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-sm">
            {qualifications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-300">
            No qualifications listed.
          </p>
        )}
      </section>

      {/* Benefits */}
      <section className="mb-6">
        <h2 className="text-lg font-semibold mb-2 flex items-center space-x-2">
          <FaClipboardCheck className="text-green-500" />
          <span>Benefits</span>
        </h2>
        {benefits.length > 0 ? (
          <ul className="list-disc list-inside space-y-1 text-sm">
            {benefits.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-300">
            No benefits listed.
          </p>
        )}
      </section>

      {/* About */}
      {about && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2 flex items-center space-x-2">
            <FaLightbulb className="text-blue-500" />
            <span>About {company}</span>
          </h2>
          <p className="text-sm leading-relaxed">{about}</p>
        </section>
      )}
    </div>
  );
}
