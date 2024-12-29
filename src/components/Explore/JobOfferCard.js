import React, { useState } from 'react';
import { FaHeart, FaShare } from 'react-icons/fa';
import { MdWork, MdLocationOn, MdInfo } from 'react-icons/md';

const JobOfferCard = ({ user, time, title, location, employmentType, experienceLevel, skills, likes, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(likeCount + (liked ? -1 : 1));
  };

  return (
    <div
      className="relative bg-[#EAEAEA] text-[#3D3D3D] rounded-lg shadow-md w-full mx-auto dark:bg-[#323644] dark:text-[#FFFFFF] transition-colors duration-300"
      style={{ height: '20rem' }}
    >
      {showDetails ? (
        <div
          className="p-4 rounded-lg bg-[#F3F3F3] overflow-y-auto dark:bg-[#414B5A] transition-colors duration-300"
          style={{ height: '100%' }}
        >
          <button
            onClick={() => setShowDetails(false)}
            className="text-[#3D3D3D] font-medium hover:underline mb-4 block dark:text-[#D1D5DB]"
          >
            Back
          </button>
          <h2 className="font-semibold text-lg mb-2">Details for {title}</h2>
          <p className="text-sm text-[#4A4A4A] mb-4 dark:text-[#D1D5DB]">{description}</p>
          <div className="text-sm text-[#4A4A4A] dark:text-[#A8A8A8]">
            <div className="mb-2">
              <MdLocationOn className="inline-block mr-2 text-[#5C80BC]" /> {location}
            </div>
            <div className="mb-2">
              <MdWork className="inline-block mr-2 text-[#5C80BC]" /> {employmentType} • {experienceLevel}
            </div>
            <div>
              <MdInfo className="inline-block mr-2 text-[#5C80BC]" /> Compétences : {skills.join(', ')}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-lg flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-[#D1D5DB] w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mr-3 dark:bg-[#4A5568]">
                  {user.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold dark:text-[#FFFFFF] text-[#3D3D3D]">{user}</h3>
                  <p className="text-sm text-[#6B7280] dark:text-[#A0AEC0]">{time}</p>
                </div>
              </div>
              <button
                onClick={() => setShowDetails(true)}
                className="text-[#3D3D3D] font-medium hover:underline dark:text-[#FFFFFF]"
              >
                Details
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <h2 className="font-semibold text-lg mb-2 dark:text-[#FFFFFF] text-[#3D3D3D]">{title}</h2>
              <div className="flex items-center text-sm text-[#6B7280] dark:text-[#A0AEC0]">
                <MdLocationOn className="mr-2 text-[#5C80BC]" />
                {location}
              </div>
              <div className="flex items-center text-sm text-[#6B7280] dark:text-[#A0AEC0]">
                <MdWork className="mr-2 text-[#5C80BC]" />
                {employmentType} • {experienceLevel}
              </div>
              <div className="flex items-center text-sm text-[#6B7280] dark:text-[#A0AEC0]">
                <MdInfo className="mr-2 text-[#5C80BC]" />
                Compétences : {skills.join(', ')}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center ${
                  liked ? 'text-[#E53E3E]' : 'text-[#6B7280] dark:text-[#A0AEC0]'
                } hover:text-[#C53030] dark:hover:text-[#E53E3E] transition-colors duration-300`}
              >
                <FaHeart
                  className={`mr-1 transition-transform duration-300 ${
                    liked ? 'scale-125' : 'scale-100'
                  }`}
                />{' '}
                {likeCount}
              </button>
              <button className="flex items-center text-[#6B7280] hover:text-[#5C80BC] dark:text-[#A0AEC0] dark:hover:text-[#63B3ED] transition-colors duration-300">
                <FaShare className="mr-1" /> Partager
              </button>
            </div>
            <button className="flex items-center bg-[#5C80BC] text-white py-2 px-4 rounded-full shadow-md hover:bg-[#4868A3] transition-transform duration-300 transform hover:scale-105">
              Rigl
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobOfferCard;
