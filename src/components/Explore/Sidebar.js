import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { id: 1, label: 'Newsfeed', icon: '📺' },
    { id: 2, label: 'Badges', icon: '🏅' },
    { id: 3, label: 'Explore Stories', icon: '🌍' },
    { id: 4, label: 'Popular Groups', icon: '⚡' },
    { id: 5, label: 'Author Profile', icon: '👤' },
  ];

  return (
    <div
      className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 p-4 bg-gray-100 dark:bg-gray-900 overflow-y-auto scrollbar-t scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-400"
      style={{ zIndex: 1000 }}
    >
      {/* New Feeds Section */}
      <div className="mb-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center sm:text-left">
          New Feeds
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {/* Icon */}
              <div className="text-2xl">{item.icon}</div>
              {/* Label */}
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Account Section */}
      <div className="mt-8">
        <h2 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center sm:text-left">
          Account
        </h2>
        <div className="grid grid-cols-1 gap-4">
          {/* Settings */}
          <div className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
            <div className="text-2xl">⚙️</div>
            <span className="text-gray-700 dark:text-gray-300 text-base font-medium">Settings</span>
          </div>

          {/* Analytics */}
          <div className="flex items-center gap-4 p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
            <div className="text-2xl">📊</div>
            <span className="text-gray-700 dark:text-gray-300 text-base font-medium">Analytics</span>
          </div>

          {/* Chat with Notification */}
          <div className="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700">
            <div className="flex items-center gap-4">
              <div className="text-2xl">💬</div>
              <span className="text-gray-700 dark:text-gray-300 text-base font-medium">Chat</span>
            </div>
            <div className="flex items-center justify-center bg-orange-500 text-white rounded-full w-6 h-6 text-xs font-bold">
              23
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
