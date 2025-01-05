// FancyLoader.jsx
import React from "react";

/**
 * A simple three-box bouncing loader using Tailwind CSS classes.
 * Customize box colors, size, and animation as needed.
 */
export default function FancyLoader({
  boxColors = ["#EF4444", "#F59E0B", "#6366F1"],
  size = "2rem",
}) {
  return (
    <div className="flex space-x-2">
      {boxColors.map((color, index) => (
        <div
          key={index}
          className="animate-bounce rounded"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            animationDelay: `${index * 0.15}s`, // slight delay per box
            animationDuration: "0.75s", // default bounce duration is 1s in Tailwind
          }}
        />
      ))}
    </div>
  );
}
