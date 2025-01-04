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
    // Ajouter plus d'exemples pour tester le défilement
];

function FriendRequest() {
    return (
        <div className="absolute top-20 right-0 lg:w-64 max-h-[300px] dark:bg-gray-900 bg-white rounded-lg shadow-lg p-4 overflow-y-auto">
            {/* En-tête */}
            <div className="flex justify-between items-center mb-4">
                <h4 className="dark:text-white text-black font-semibold text-sm">
                    Friend Request
                </h4>
                <a
                    href="#"
                    className="dark:text-blue-400 text-black text-xs font-medium hover:underline"
                >
                    See all
                </a>
            </div>

            {/* Liste des demandes */}
            {friendRequests.map((friend) => (
                <div
                    key={friend.id}
                    className="flex items-center justify-between mb-4 p-2 bg-transparent rounded-lg"
                >
                    <div className="flex flex-col items-start justify-center space-y-2 w-full">
                        <div className="flex items-center space-x-3">
                            <img
                                src={friend.avatar}
                                alt={`${friend.name}'s avatar`}
                                className="w-10 h-10 rounded-full"
                            />
                            <div>
                                <h5 className="dark:text-white text-black text-sm font-medium">
                                    {friend.name}
                                </h5>
                                <p className="text-gray-400 text-xs">
                                    {friend.mutualFriends} mutual friends
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 pt-2">
                            <button className="bg-blue-600 text-white text-xs font-semibold py-1 px-4 rounded-full hover:bg-blue-500">
                                Confirm
                            </button>
                            <button className="bg-gray-700 text-gray-300 text-xs font-semibold py-1 px-4 rounded-full hover:bg-gray-600">
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
