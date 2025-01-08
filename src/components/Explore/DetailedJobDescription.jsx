import React from "react";
import { AiOutlineWifi } from "react-icons/ai";
import { FaTimes, FaClipboardCheck, FaLightbulb, FaBriefcase } from "react-icons/fa";

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
    // Non-responsive with fixed height (80vh) and scrollable
    <div
      className="
        flex 
        flex-col
        h-[80vh]
        overflow-y-auto
        p-4
        bg-white 
        dark:bg-[#293145]
        text-gray-800
        dark:text-gray-100
        rounded-lg
        shadow-md
      "
    >
      {/* Top row: letter + job info + close button */}
      <div className="flex items-start justify-between mb-4">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <div className="badge-small">{badgeLetter}</div>
          <div className="flex flex-col">
            <h1 className="font-semibold text-lg">{title}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              {company} • {location} • {posted}
              {isRemote && (
                <>
                  {" "}
                  • Remote
                  <AiOutlineWifi className="inline-block w-4 h-4 ml-1 icon-blue" />
                </>
              )}
            </p>
          </div>
        </div>

        {/* Close button */}
        <div>
          <button onClick={onBack} className="btn-secondary" title="Close">
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      </div>

      <hr className="hr" />

      {/* Responsibilities */}
      <section className="mb-6">
        <h2 className="section-header flex items-center space-x-2">
          <FaClipboardCheck className="icon-green" />
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
        <h2 className="section-header flex items-center space-x-2">
          <FaLightbulb className="icon-blue" />
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
        <h2 className="section-header flex items-center space-x-2">
          <FaClipboardCheck className="icon-green" />
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
          <h2 className="section-header flex items-center space-x-2">
            <FaLightbulb className="icon-blue" />
            <span>About {company}</span>
          </h2>
          <p className="text-sm leading-relaxed">{about}</p>
        </section>
      )}

      {/* Rigl Button at the bottom, using FaBriefcase icon */}
      <div className="mt-auto pt-4">
        <hr className="hr mb-4" />
        <button type="button" className="btn-primary" title="Rigl">
          <FaBriefcase className="w-5 h-5 mr-2 inline-block" />
          Rigl
        </button>
      </div>
    </div>
  );
}
