import React from "react";
import RiglImage from "../../assets/Rigl.png"; // Import the Rigl image

/**
 * A loader where the "Rigl.png" image and the progress bar fill gradually together.
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
  `;

  return (
    <>
      <style>
        {`
          ${keyframes}

          /* Styles for centering container */
          .loader-container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Full viewport height for perfect centering */
            position: relative; /* To allow precise positioning of bar */
          }

          /* Responsive styles for image */
          .rigl-image {
            width: 80vw; /* Scales based on screen size */
            max-width: 1000px; /* Max width to match the original image size */
            height: auto; /* Maintain aspect ratio */
            position: relative; /* To stack bar over image */
          }

          @media (min-width: 640px) {
            .rigl-image {
              width: 60vw; /* Adjusted for tablets and small laptops */
            }
          }

          @media (min-width: 1024px) {
            .rigl-image {
              width: 500px; /* Full size for desktops */
            }
          }

          .progress-bar-container {
            position: absolute; /* Absolute position relative to the container */
            bottom: calc(50% - 7rem); /* Moves the bar slightly below the center */
            width: 60%; /* Matches a proportionate width to the image */
            max-width: 800px; /* Ensures the bar doesn't overflow */
            z-index: 2; /* Ensure it's on top of the image */
          }
        `}
      </style>
      <div className="loader-container">
        {/* Image in place of text */}
        <img
          src={RiglImage}
          alt="Rigl"
          className="rigl-image"
        />

        {/* Loading Bar */}
        <div
          className="progress-bar-container"
          style={{
            height: barHeight,
            backgroundColor: "#1E293B", // Initial dark background
            borderRadius: "5px",
            overflow: "hidden", // Clip overflowing elements
          }}
        >
          <div
            style={{
              height: "100%",
              background: "linear-gradient(90deg, rgb(29, 140, 160), rgb(29, 140, 160))",
              animation: `progress-fill ${animationSpeed}s ease-in-out forwards`,
            }}
          ></div>
        </div>
      </div>
    </>
  );
}
