import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Logique de changement de mot de passe
    setMessage("Votre mot de passe a été modifié avec succès.");
    setTimeout(() => {
      navigate("/"); // Redirige vers la page de connexion après 2 secondes
    }, 2000);
  };

  return (
    <div className="flex items-center justify-center mt-16 bg-gradient">
      <div className="w-full max-w-md p-8 rgb(149 149 156) dark:bg-[#323644] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
        Change Your Password
        </h2>
        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div className="form__inputs">
            <label
              htmlFor="current-password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
            Current Password
            </label>
            <input
              type="password"
              id="current-password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            
              required
              className="w-full mt-1 px-4 py-2 dark:text-white text-black"
            />
          </div>
          <div className="form__inputs">
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              
              required
              className="w-full mt-1 px-4 py-2 dark:text-white text-black"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 mr-4 mt-4 rounded-2xl opacity-40 transition-opacity hover:opacity-100"
          >
            Modify
          </button>
        </form>
        {message && (
          <p className="mt-4 text-sm text-center text-green-600 dark:text-green-400">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ChangePassword;
