import React from "react";
import { RefreshIcon, XIcon, StarIcon } from "@heroicons/react/solid"; // Import icons for Heroicons v1.0.6

export default function ScrollButtons({ onBack, onForward }) {
  return (
    <div className="absolute left-1/2 mt-2 transform -translate-x-1/2 flex space-x-12 items-center">
      {/* Dislike Button */}
      <button
        className="scroll-btn scroll-btn-dislike"
        onClick={onForward}
        title="Dislike"
      >
        <XIcon className="w-8 h-8" />
      </button>

      {/* Back Button */}
      <button
        className="scroll-btn scroll-btn-back"
        onClick={onBack}
        title="Go Back"
      >
        <RefreshIcon className="w-8 h-8" />
      </button>

      {/* Star Button */}
      <button
        className="scroll-btn scroll-btn-star"
        onClick={onForward}
        title="Star"
      >
        <StarIcon className="w-8 h-8" />
      </button>
    </div>
  );
}
