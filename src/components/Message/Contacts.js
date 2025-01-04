import React from "react";

const Contacts = () => {
  const contacts = [
    {
      name: "Hurin Seary",
      status: "online",
      avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Victor Exrixon",
      status: "online",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Surfiya Zakir",
      status: "away",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      name: "Goria Coast",
      status: "offline",
      avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Hurin Seary",
      status: "online",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "David Goria",
      status: "online",
      avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Seary Victor",
      status: "online",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Ana Seary",
      status: "online",
      avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  const groups = [
    {
      name: "Studio Express",
      lastActive: "2 min",
      status: "online",
      avatar: "https://via.placeholder.com/40/007bff/ffffff?text=SE",
    },
    {
      name: "Armany Design",
      lastActive: null,
      status: "away",
      avatar: "https://via.placeholder.com/40/ffc107/ffffff?text=AD",
    },
    {
      name: "De fabous",
      lastActive: null,
      status: "online",
      avatar: "https://via.placeholder.com/40/28a745/ffffff?text=DF",
    },
  ];

  const statusColors = {
    online: "bg-green-500",
    away: "bg-orange-500",
    offline: "bg-red-500",
  };

  return (
    <div className="w-full  mt-96 lg:w-64 bg-white dark:bg-gray-900 shadow-md rounded-md p-4 transition-colors duration-300">
      {/* Wrapper for scrollable content */}
      <div className="h-96 overflow-y-scroll">
        {/* Contacts Section */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Contacts
          </h2>
          <ul className="space-y-3">
            {contacts.map((contact, index) => (
              <li
                key={index}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <img
                  src={contact.avatar}
                  alt={contact.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 dark:text-gray-300 block">
                    {contact.name}
                  </span>
                </div>
                <div
                  className={`w-3 h-3 rounded-full ${statusColors[contact.status]}`}
                ></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Groups Section */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
            Groups
          </h2>
          <ul className="space-y-3">
            {groups.map((group, index) => (
              <li
                key={index}
                className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <img
                  src={group.avatar}
                  alt={group.name}
                  className="w-8 h-8 rounded-full mr-3"
                />
                <div className="flex-1">
                  <span className="text-sm text-gray-700 dark:text-gray-300 block">
                    {group.name}
                  </span>
                </div>
                {group.lastActive && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {group.lastActive}
                  </span>
                )}
                <div
                  className={`w-3 h-3 rounded-full ${statusColors[group.status]}`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
