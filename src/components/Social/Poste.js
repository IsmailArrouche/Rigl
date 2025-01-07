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
    <div className="lg:ml-[3.5rem] lg:w-[44rem] max-w-screen-lg px-4 sm:px-6 lg:px-8 flex flex-col gap-4 justify-center">
      {posts.map((post) => (
        <div
          key={post.id}
          className="card w-full shadow-sm rounded-xl border-0 p-3 sm:p-4 mb-3 bg-white dark:bg-[#293145] dark:text-[#FFFFFF]"
        >
          {/* En-tête */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="avatar"
                className="shadow-sm rounded-full w-10 h-10"
              />
              <div className="flex flex-col pl-2">
                <span className="text-sm sm:text-base">Mohannad Zitoun</span>
                <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
              </div>
            </div>
            <button
              className="dots-button w-9 h-9 text-gray-900 p-2 rounded-full bg-gray-300 dark:bg-[#ffffff] dark:text-[#363232]"
            >
              ···
            </button>
          </div>

          {/* Contenu */}
          <div className="mt-3">
            <p className="text-sm sm:text-base">{post.content}</p>
            {post.media.type === 'image' && (
              <img
                src={post.media.src}
                alt="Post"
                className="mt-2 rounded-md w-full h-auto"
              />
            )}
            {post.media.type === 'video' && (
              <video controls className="mt-2 rounded-md w-full h-auto">
                <source src={post.media.src} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture des vidéos.
              </video>
            )}
          </div>

          {/* Actions */}
          <div className="mt-3 flex flex-wrap justify-between gap-4">
            <button
              className={`flex items-center ${
                likes[post.id] ? 'text-[#E53E3E]' : 'text-[#6B7280] dark:text-[#A0AEC0]'
              } hover:text-[#C53030] dark:hover:text-[#E53E3E] transition-colors duration-300`}
              onClick={() => handleLike(post.id)}
            >
              <FaHeart
                className={`mr-2 h-5 w-5 transition-transform duration-300 ${
                  likes[post.id] ? 'scale-125' : 'scale-100'
                }`}
              />
              <span>{likes[post.id] ? 1 : 0}</span>
            </button>
            <button className="flex items-center text-[#6B7280] dark:text-[#A0AEC0] hover:text-[#4A5568] dark:hover:text-[#CBD5E0] transition-colors duration-300">
              <FaCommentAlt className="mr-2 h-5 w-5" />
              Comment
            </button>
            <button className="flex items-center text-[#6B7280] dark:text-[#A0AEC0] hover:text-[#4A5568] dark:hover:text-[#CBD5E0] transition-colors duration-300">
              <FaShare className="mr-2 h-5 w-5" />
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialPost;
