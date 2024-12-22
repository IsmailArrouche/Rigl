import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simuler une vérification de l'email
    setMessage(
        "Si cet email est enregistré, un lien de réinitialisation vous sera envoyé."
    );
    //alert("check your email") 
    setTimeout(() => {
        navigate("/change-password");
    }, 10000); // Redirection après 2 secondes
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient">
      <div className="w-full max-w-md p-8 rgb(149 149 156) dark:bg-[#323644] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Réinitialisation du mot de passe
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form__inputs mr-1 false">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              
            >
              Adresse e-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              
              className="w-full mt-1 px-4 py-2 dark:text-white text-black"
                autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-3 mr-4 mt-4 rounded-2xl opacity-40 transition-opacity hover:opacity-100"
            
          >
            Envoyer
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

export default ForgotPassword;