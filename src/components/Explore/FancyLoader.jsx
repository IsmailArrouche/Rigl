import React from "react";

/**
 * A loader where "RIGL" and the progress bar fill gradually together.
 * Starts dark and is colored with the bar's progress, including random pauses.
 *
 * Props:
 * - barHeight: Height of the loading bar.
 * - animationSpeed: Total duration of the animation cycle in seconds.
 */
export default function FancyLoader({
  barHeight = "10px",
  animationSpeed = 8, // Slower animation in seconds
}) {
  // Define keyframe animations
  const keyframes = `
    @keyframes progress-fill {
      0% {
        width: 0%;
      }
      25% {
        width: 30%;
      }
      40% {
        width: 35%; /* Random pause */
      }
      60% {
        width: 70%;
      }
      75% {
        width: 75%; /* Another pause */
      }
      100% {
        width: 100%;
      }
    }

    @keyframes text-fill {
      0% {
        background-position: 0% 50%;
      }
      25% {
        background-position: 30% 50%;
      }
      40% {
        background-position: 35% 50%; /* Sync with bar */
      }
      60% {
        background-position: 70% 50%;
      }
      75% {
        background-position: 75% 50%; /* Sync with bar */
      }
      100% {
        background-position: 100% 50%;
      }
    }
  `;

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Bungee&family=Stalinist+One&display=swap');
          ${keyframes}
        `}
      </style>
      <div className="flex flex-col items-center space-y-6">
        {/* Text with gradient fill synced to the bar */}
        <div
          id="rigl-text"
          style={{
            fontSize: "225px",
            fontFamily: "'Bungee', 'Stalinist One', sans-serif", // Using imported fonts
            fontWeight: 900,
            fontStyle: "italic",
            lineHeight: "1.05",
            textAlign: "center",
            color: "transparent",
            background: "linear-gradient(to right, #3B82F6, #6D28D9, #4F46E5, #8B5CF6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: "200% 200%", // Smooth gradient movement
            animation: `text-fill ${animationSpeed}s ease-in-out forwards`,
          }}
        >
          RIGL
        </div>

        {/* Loading Bar */}
        <div
          style={{
            width: "100%", // Matches the width of "RIGL"
            height: barHeight,
            backgroundColor: "#1E293B", // Initial dark background
            borderRadius: "5px",
            overflow: "hidden", // Clip overflowing elements
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, #3B82F6, #6D28D9, #4F46E5, #8B5CF6)",
              animation: `progress-fill ${animationSpeed}s ease-in-out forwards`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
