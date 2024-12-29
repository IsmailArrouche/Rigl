import React from "react";

const friendRequests = [
    {
        id: 1,
        name: "yassine",
        mutualFriends: 12,
        avatar: "https://via.placeholder.com/40",
    },
    {
        id: 2,
        name: "Amine",
        mutualFriends: 18,
        avatar: "https://via.placeholder.com/40",
    },
    {
        id: 3,
        name: "Smail",
        mutualFriends: 28,
        avatar: "https://via.placeholder.com/40",
    },
];

function Contact() {
    return (
        <div className="absolute top-20 right-8 dark:bg-[#232d43] bg-transparent rounded-lg shadow-md p-4 w-72 text-white sm:w-72 max-w-full">
            <div className="flex justify-between items-center mb-4">
                <h4 className="dark:text-white text-black font-semibold text-sm">Friend Request</h4>
                <a href="#" className="dark:text-blue-400 text-black text-xs font-medium hover:underline">
                    See all
                </a>
            </div>
            {friendRequests.map((friend) => (
                <div key={friend.id} className="flex items-center justify-between mb-4">
                    {/* Avatar et détails */}
                    <div className="flex items-center">
                        <img
                            src={friend.avatar}
                            alt={`${friend.name}'s avatar`}
                            className="w-10 h-10 rounded-full mr-3"
                        />
                        <div>
                            <h5 className="dark:text-white text-black text-sm font-medium">{friend.name}</h5>
                            <p className="text-gray-600 text-xs">{friend.mutualFriends} mutual friends</p>
                        </div>
                    </div>
                    {/* Boutons Confirm et Delete */}
                    <div className="flex items-center space-x-2">
                        <button className="bg-gray-500 text-white text-xs font-semibold py-1 px-2 rounded-full hover:bg-blue-600">
                            Confirm
                        </button>
                        <button className="bg-gray-700 text-gray-300 text-xs font-semibold py-1 px-2 rounded-full hover:bg-gray-600">
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contact;