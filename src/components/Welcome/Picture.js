import React, { useState } from "react";
import Avatar from "../../assets/avatar.jpeg";
import { useSelector } from "react-redux";

function Picture() {
  // redux
  const user = useSelector((state) => state.user.user);

  // State pour gérer les valeurs modifiées
  const [isEditing, setIsEditing] = useState(false);
  const [fullName, setFullName] = useState(`${user?.firstName} ${user?.lastName}`);
  const [email] = useState(user?.email); // email n'est pas éditable

  // Fonction pour gérer la sauvegarde des modifications
  const handleSave = () => {
    const [firstName, lastName] = fullName.split(" "); // Sépare le nom complet en prénom et nom
    // Logique de sauvegarde, par exemple, envoyer au backend
    console.log("Nouveau nom:", firstName, lastName);
    setIsEditing(false); // Ferme le mode édition après la sauvegarde
  };

  // Fonction pour gérer l'appui sur la touche Entrée
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="mt-2 h-fit flex flex-col mb-5">  {/* Réduction de la marge supérieure ici */}
      <h1 className="text-center dark:text-gray-400 text-gray-600 text-2xl font-bold mt-2"> {/* Réduction de la marge supérieure ici */}
        Welcome to your Profile !
      </h1>
      <div className="mt-4 flex flex-col md:flex-row items-center">
        <img
          className="w-40 md:w-48 mb-6 md:mb-0 md:mr-10 rounded-full shadow-lg"
          src={Avatar}
          alt="avatar"
        />
        <div>
          <div className="flex flex-col md:items-start items-center">
            <div className="flex items-center">
              {isEditing ? (
                <input
                  type="text"
                  className="md:text-3xl text-xl font-bold dark:text-white bg-transparent border-b-2 border-gray-500 focus:outline-none"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  onKeyDown={handleKeyDown} // Gère la touche Entrée
                />
              ) : (
                <h3 className="md:text-3xl text-xl font-bold dark:text-white">
                  {fullName}
                </h3>
              )}
              <button
                className="ml-2 p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
                onClick={() => setIsEditing(!isEditing)} // Active ou désactive le mode édition
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center mt-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {email}
              </span>
            </div>
            <span className="text-green-600 text-base md:text-lg font-semibold">
              Online
            </span>
            {isEditing && (
              <button
                className="mt-4 p-2 bg-blue-500 text-white rounded"
                onClick={handleSave} // Sauvegarde des modifications
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Picture);
