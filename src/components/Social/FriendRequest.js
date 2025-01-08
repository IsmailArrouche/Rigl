import React from "react";

const friendRequests = [
    {
        id: 1,
        name: "Anthony Daugloi",
        mutualFriends: 12,
        avatar: "https://i.pravatar.cc/40?img=12",
    },
    {
        id: 2,
        name: "Mohannad Zitoune",
        mutualFriends: 18,
        avatar: "https://i.pravatar.cc/40?img=23",
    },
    {
        id: 3,
        name: "Hurin Seary",
        mutualFriends: 28,
        avatar: "https://i.pravatar.cc/40?img=34",
    },
];

function FriendRequest() {
    return (
        <div className="absolute top-[6rem] right-[19rem] lg:w-64 max-h-[375px] bg-white dark:bg-[rgb(41_49_69_/var(--tw-bg-opacity,1))] rounded-lg shadow-lg p-4 overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h4 className="text-gray-800 dark:text-white font-semibold text-sm">
                    Friend Request
                </h4>
                <a
                    href="#"
                    className="text-[#00A8B5] text-xs font-medium hover:underline"
                >
                    See all
                </a>
            </div>

            {/* Friend Requests */}
            {friendRequests.map((friend) => (
                <div
                    key={friend.id}
                    className="flex items-center justify-between mb-4 p-2 bg-transparent rounded-lg hover:bg-gray-100 dark:hover:bg-[rgb(43_53_69_/var(--tw-bg-opacity,1))] transition-colors duration-300"
                >
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <div className="flex items-center space-x-3">
                            <img
                                src={friend.avatar}
                                alt={`${friend.name}'s avatar`}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h5 className="text-gray-800 dark:text-white text-sm font-medium">
                                    {friend.name}
                                </h5>
                                <p className="text-gray-500 dark:text-gray-400 text-xs">
                                    {friend.mutualFriends} mutual friends
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 pt-2">
                            <button className="bg-[#00A8B5] text-white text-xs font-semibold py-1 px-4 rounded-full hover:bg-[#007F89] transition-all duration-300">
                                Confirm
                            </button>
                            <button className="bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-semibold py-1 px-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-500 transition-all duration-300">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FriendRequest;
