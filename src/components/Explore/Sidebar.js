import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Newsfeed', icon: '📺', color: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { id: 2, label: 'Badges', icon: '🏅', color: 'bg-gradient-to-br from-orange-400 to-orange-600' },
    { id: 3, label: 'Explore Stories', icon: '🌍', color: 'bg-gradient-to-br from-yellow-400 to-yellow-600' },
    { id: 4, label: 'Popular Groups', icon: '⚡', color: 'bg-gradient-to-br from-pink-400 to-pink-600' },
    { id: 5, label: 'Author Profile', icon: '👤', color: 'bg-gradient-to-br from-blue-500 to-blue-700' },
  ];

  return (
    <div className="w-full sm:w-64 p-4 bg-gray-100 dark:bg-gray-900">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center sm:text-left">
        New Feeds
      </h2>

      {/* Menu Items */}
      <div className="grid grid-cols-1 gap-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {/* Icon Circle */}
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-full text-white text-xl ${item.color}`}
            >
              {item.icon}
            </div>
            {/* Label */}
            <span className="text-gray-700 dark:text-gray-300 text-base font-medium">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
