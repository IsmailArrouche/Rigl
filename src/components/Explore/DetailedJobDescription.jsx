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
    <div className="detailed-container">
      {/* Top row: letter + job info + Rigl + close button */}
      <div className="flex items-center justify-between mb-4">
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

        {/* Right side: big Rigl + close button */}
        <div className="flex items-center space-x-3">
          <button type="button" className="btn-primary" title="Rigl">
            Rigl
          </button>
          <button onClick={onBack} className="btn-secondary" title="Close">
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      </div>

      <hr className="hr" />

      {/* Responsibilities */}
      <section className="mb-6">
        <h2 className="section-header">
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
        <h2 className="section-header">
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
        <h2 className="section-header">
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
          <h2 className="section-header">
            <FaLightbulb className="icon-blue" />
            <span>About {company}</span>
          </h2>
          <p className="text-sm leading-relaxed">{about}</p>
        </section>
      )}
    </div>
  );
}
