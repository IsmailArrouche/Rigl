import React, { useRef, useEffect } from "react";

// Fonction pour générer une URL d'image aléatoire
const generateRandomImage = (width, height) =>
  `https://picsum.photos/${width}/${height}?random=${Math.floor(
    Math.random() * 1000
  )}`;

const stories = [
  { id: 1, name: "Aliqa Macale" },
  { id: 2, name: "Seary Victor" },
  { id: 3, name: "John Steere" },
  { id: 4, name: "Emma Stone" },
  { id: 5, name: "Lucas Kane" },
  { id: 6, name: "Sophia Grace" },
  { id: 7, name: "Liam Brooks" },
];

const StoryCard = ({ image, profile, name, onClick }) => (
  <div
    className="w-28 h-48 flex-shrink-0 mx-2 rounded-lg overflow-hidden shadow-lg flex flex-col justify-end items-center text-white text-sm cursor-pointer relative"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    onClick={onClick}
  >
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black via-transparent to-transparent"></div>
    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white">
      <img src={profile} alt={`${name}'s profile`} className="w-full h-full object-cover" />
    </div>
    <p className="mt-1 z-10">{name}</p>
  </div>
);

const AddStory = () => (
  <div className="w-28 h-48 flex-shrink-0 mx-2 bg-gray-700 rounded-lg flex flex-col justify-end items-center text-white text-sm cursor-pointer">
    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-500 text-lg">
      +
    </div>
    <p className="mt-1">Add Story</p>
  </div>
);

const StoryList = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        containerRef.current.scrollBy({ left: 150, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        containerRef.current.scrollBy({ left: -150, behavior: "smooth" });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="ml-[317px] relative flex justify-center">
      {/* Conteneur des stories avec une marge à gauche */}
      <div
        ref={containerRef}
        className="flex items-center overflow-hidden " // Ajout de la marge ici
        style={{
          width: "48rem", // Largeur pour afficher 6 stories
        }}
      >
        <AddStory />
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            image={generateRandomImage(200, 300)}
            profile={generateRandomImage(60, 60)}
            name={story.name}
          />
        ))}
      </div>
    </div>
  );
};

export default StoryList;
