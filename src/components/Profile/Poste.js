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
    <div className="w-full space-y-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white dark:bg-[#293145] dark:text-[#FFFFFF] rounded-lg shadow-sm p-4"
        >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <span className="font-medium">Mohannad Zitoun</span>
                <p className="text-xs text-gray-400">
                  {formatDate(post.date)}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              ···
            </button>
          </div>

          {/* Content */}
          <div className="mt-4">
            <p className="text-sm">{post.content}</p>
            <div className="mt-4 rounded-lg overflow-hidden">
              {post.media.type === 'image' ? (
                <img
                  src={post.media.src}
                  alt="Post content"
                  className="w-full h-auto"
                />
              ) : (
                <video controls className="w-full">
                  <source src={post.media.src} type="video/mp4" />
                </video>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => handleLike(post.id)}
              className={`flex items-center space-x-2 ${
                likes[post.id] ? 'text-red-500' : 'text-gray-500'
              }`}
            >
              <FaHeart className={`transition-transform ${likes[post.id] ? 'scale-110' : ''}`} />
              <span>{likes[post.id] ? 1 : 0}</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500">
              <FaCommentAlt />
              <span>Comment</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-500">
              <FaShare />
              <span>Share</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SocialPost;
