import React, { useState } from 'react';
import postImage from '../../assets/t-10.jpg';
import postVideo1 from '../../assets/v-1 mp4-sociala uitheme shop.mp4';
import postVideo2 from '../../assets/v-2 mp4-sociala uitheme shop.mp4';
import postVideo3 from '../../assets/v-4 mp4-sociala uitheme shop.mp4';
import { FaHeart, FaCommentAlt, FaShare } from 'react-icons/fa';

const SocialPost = () => {
  const [posts] = useState([
    {
      id: 1,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.',
      date: '2025-01-01T10:00:00',
      media: { type: 'image', src: postImage },
    },
    {
      id: 2,
      content: 'Proin blandit ac massa sed rhoncus. Phasellus faucibus mollis pharetra.',
      date: '2025-01-02T12:00:00',
      media: { type: 'video', src: postVideo1 },
    },
    {
        id: 3,
        content: 'Proin blandit ac massa sed rhoncus. Phasellus faucibus mollis pharetra.',
        date: '2025-01-02T15:00:00',
        media: { type: 'video', src: postVideo2 },
      },
      {
        id: 4,
        content: 'Proin blandit ac massa sed rhoncus. Phasellus faucibus mollis pharetra.',
        date: '2025-01-02T20:00:00',
        media: { type: 'video', src: postVideo3 },
      },
  ]);

  const [likes, setLikes] = useState({});

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: !prevLikes[postId],
    }));
  };

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleString('fr-FR', options);
  };

  return (
    <div className="mx-auto sm:w-1/2 lg:w-[630px] lg:max-h-[610px] flex flex-wrap gap-4 justify-center">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card w-full shadow-sm rounded-xl border-0 p-3 sm:p-4 mb-3 mx-auto bg-white dark:bg-[#293145] dark:text-[#FFFFFF]"
        >
          {/* En-tête */}
          <div className='flex flex-wrap justify-between'>
          <div className="card-body p-0 relative ">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="avatar" className="shadow-sm rounded-full w-8 h-8 sm:w-10 sm:h-10" />
                <div className="flex flex-col">
                <span className="pl-2 text-sm sm:text-base">Mohannad Zitoun</span>
                <span className="px-2 flex-col text-xs text-gray-400">{formatDate(post.date)}</span>
                </div>
              </div>
            </div>
          </div>
          <button
          className="items-center dots-button w-9 h-9 text-gray-900 p-2 sm:p-3 rounded-full  bg-gray-300 dark:bg-[#ffffff] dark:text-[#363232]"
          style={{ paddingTop: "6px"}}
        >
          ···
    </button>
</div>
          {/* Contenu */}
          <div className="mt-3">
            <p>{post.content}</p>
            {post.media.type === 'image' && (
              <img src={post.media.src} alt="Post" className="mt-2 rounded-md" />
            )}
            {post.media.type === 'video' && (
              <video controls className="mt-2 rounded-md">
                <source src={post.media.src} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture des vidéos.
              </video>
            )}
          </div>

          {/* Actions */}
          <div className="card-body flex flex-wrap p-0 mt-2 gap-2 sm:gap-4">
            {/* Bouton "Like" */}
            <button
              className={`flex items-center ${
                likes[post.id] ? 'text-[#E53E3E]' : 'text-[#6B7280] dark:text-[#A0AEC0]'
              } hover:text-[#C53030] dark:hover:text-[#E53E3E] transition-colors duration-300`}
              onClick={() => handleLike(post.id)}
              aria-label="Like"
            >
              <FaHeart
                className={`mr-1 h-5 w-5 transition-transform duration-300 ${
                  likes[post.id] ? 'scale-125' : 'scale-100'
                }`}
              />
              <span>{likes[post.id] ? 1 : 0}</span>
            </button>

                <div className="flex flex-wrap justify-between w-[530px]">
                {/* Bouton "Commenter" */}
                <button className="flex items-center text-[#6B7280] dark:text-[#A0AEC0] space-x-2 p-2 sm:p-3 rounded-md  w-full sm:w-auto">
                    <FaCommentAlt className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Comment</span>
                </button>
                
                {/* Bouton "Partager" */}
                <button className="flex items-center text-[#6B7280] dark:text-[#A0AEC0] space-x-2 p-2 sm:p-2 rounded-md w-full sm:w-auto">
                    <FaShare className="h-5 w-5" />
                    <span className="text-xs sm:text-sm">Share</span>
                </button>
                </div>
          </div>
        </div>
      ))}
    </div>

  );
};

export default SocialPost;
