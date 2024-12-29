import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Newsfeed', icon: '📺', color: 'bg-blue-500' },
    { id: 2, label: 'Badges', icon: '🏅', color: 'bg-orange-500' },
    { id: 3, label: 'Explore Stories', icon: '🌍', color: 'bg-yellow-500' },
    { id: 4, label: 'Popular Groups', icon: '⚡', color: 'bg-pink-500' },
    { id: 5, label: 'Author Profile', icon: '👤', color: 'bg-blue-600' },
  ];

return (
    <div className="w-full sm:w-64 p-4 bg-gray-100 dark:bg-gray-900">
      {/* Title */}
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center sm:text-left">
        New Feeds
      </h2>

      {/* Menu Items */}
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-2">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 ${item.color}`}
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-white font-medium text-sm sm:text-base">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
