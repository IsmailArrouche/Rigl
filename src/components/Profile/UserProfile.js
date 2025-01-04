import React from "react";
import profileImage from "../../../src/assets/avatar.jpeg";
import coverImage from "../../../src/assets/mountain.jpg";
import { useSelector } from "react-redux";

const UserProfile = () => {
    // redux
    const user = useSelector((state) => state.user.user);
  return (
    <div className="relative bg-[#1B2136] w-full max-w-screen-xl mx-auto rounded-lg shadow-md overflow-hidden sm:w-full lg:w-[60rem]">
     {/* Cover Photo */}
    <div className="h-48 lg:w-[100%] overflow-hidden mt-4 mx-4">
      <img
        src={coverImage} // Remplacez par votre URL ou chemin d'image
        alt="Cover"
        className="w-[97%]  h-full object-cover rounded-[0.5rem]"
      />
    </div>
      {/* Profile Info et Action Buttons */}
<div className="flex items-center justify-between bg-[#1B2136] text-white px-6 py-4 relative">
  {/* Photo de Profil (Position Absolue) */}
  <div className="absolute top-[-1.5rem] left-6 w-20 h-20 rounded-full overflow-hidden border-4 border-[#1B2136]">
    <img
      src={profileImage}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>
  {/* Informations du Profil */}
  <div className="pl-24"> {/* Ajout de padding-left pour espacer */}
    <h1 className="text-2xl font-bold">{user?.firstName} {user?.lastName}</h1>
    <p className="text-sm text-gray-400">{user?.email}</p>
  </div>
  {/* Boutons d'Action */}
  <div className="flex space-x-2">
    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded text-sm">
      ADD FRIEND
    </button>
    <button className="bg-white text-gray-700 px-3 py-2 rounded text-sm border">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M3 4a1 1 0 011-1h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 0v.511L12 12l7-7.489V4H5zm0 2.267V19h14V6.267l-7 7-7-7z" />
      </svg>
    </button>
  </div>
</div>


      {/* Navigation */}
      <div className="border-t border-gray-700 bg-[#1B2136]">
        <div className="flex flex-wrap space-x-4 px-5 py-3 text-gray-400">
          {["About", "Discussion", "Group", "Events", "Media"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-white px-2 py-1 transition"
              >
                {item}
              </a>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
