import React, { useState } from 'react';

const ExperienceForm = () => {
  const [formData, setformData] = useState({
    entreprise: '',
    poste: '',
    typeContrat: '',
    dateDebut: '',
    dateFin: '',
    description: '',
  });

  const [tags, setTagsExperience] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Le bouton Soumettre ne fait rien (ne fait aucune action ici)
  };

  const handleNouvelleExperience = () => {
    // Ajouter un nouveau tag avec uniquement l'entreprise
    const newTag = {
      entreprise: formData.entreprise, // Seul l'entreprise est affichée dans le tag
    };

    setTagsExperience([...tags, newTag]); // Ajoute le nouveau tag à la liste des tags
    setformData({
      entreprise: '',
      poste: '',
      typeContrat: '',
      dateDebut: '',
      dateFin: '',
      description: '',
    }); // Réinitialiser le formulaire
  };

  const handleDeleteTagExperience = (index) => {
    // Supprimer un tag de la liste en fonction de l'index
    const newTags = tags.filter((_, i) => i !== index);
    setTagsExperience(newTags);
  };
  return (
    <div className="max-w-lg mx-auto p-6 bg-[rgb(149,149,156)] dark:bg-[#323644] rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
        Ajouter une Expérience Professionnelle
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {/* Ligne Entreprise et Poste */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label
                htmlFor="entreprise"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Entreprise
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-600 dark:border-gray-500 bg-[rgb(149,149,156)] dark:bg-[#323644] text-black dark:text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="w-1/2">
              <label
                htmlFor="poste"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Poste
              </label>
              <input
                type="text"
                id="poste"
                name="poste"
                value={formData.poste}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-600 dark:border-gray-500 bg-[rgb(149,149,156)] dark:bg-[#323644] text-black dark:text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
          </div>
  
          {/* Ligne Type de Contrat, Date de Début et Date de Fin */}
          <div className="flex space-x-4">
            <div className="w-1/3">
              <label
                htmlFor="typeContrat"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Type de Contrat
              </label>
              <select
                id="typeContrat"
                name="typeContrat"
                value={formData.typeContrat}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-600 dark:border-gray-500 bg-[rgb(149,149,156)] dark:bg-[#323644] text-black dark:text-white focus:outline-none focus:border-indigo-500"
                required
              >
                <option value="">Contrat</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Stage">Stage</option>
                <option value="Alternance">Alternance</option>
                <option value="Contrat de Professionnalisation">
                  Contrat de Professionnalisation
                </option>
                <option value="Contrat de Apprentissage">Contrat de Apprentissage</option>
                <option value="Stage de Fin d'Etudes">Stage de Fin d'Etudes</option>
                <option value="Freelance">Freelance</option>
              </select>
            </div>
            <div className="w-1/3">
              <label
                htmlFor="dateDebut"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Date de début
              </label>
              <input
                type="date"
                id="dateDebut"
                name="dateDebut"
                value={formData.dateDebut}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-600 dark:border-gray-500 bg-[rgb(149,149,156)] dark:bg-[#323644] text-black dark:text-white focus:outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div className="w-1/3">
              <label
                htmlFor="dateFin"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                Date de fin
              </label>
              <input
                type="date"
                id="dateFin"
                name="dateFin"
                value={formData.dateFin}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-600 dark:border-gray-500 bg-[rgb(149,149,156)] dark:bg-[#323644] text-black dark:text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>
  
          {/* Description du Poste */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Description du poste
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-600 dark:border-gray-500 bg-[rgb(149,149,156)] dark:bg-[#323644] text-black dark:text-white focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
  
          {/* Affichage des tags avec possibilité de suppression */}
          <div className="mt-6">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-indigo-600 dark:bg-indigo-600 rounded-full px-3 py-2 m-1 text-sm font-medium text-white"
              >
                <span>{tag.entreprise}</span>
                <button
                  type="button"
                  onClick={() => handleDeleteTagExperience(index)}
                  className="ml-2 text-white hover:text-gray-200 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
  
          {/* Boutons Soumettre, Nouvelle Expérience et Précédent */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <button
              type="button"
              onClick={handleNouvelleExperience}
              className="opacity-60 text-lg transition-opacity dark:text-fblue-100 text-blue-700 border-blue-700 border-2 md:mt-0 mt-5 dark:border-fblue-100 py-2 rounded-3xl dark:bg-gray-700"
              style={{ width: "200px" }}
            >
              Nouvelle Expérience
            </button>
          </div>
        </div>
      </form>
    </div>
  ); 
};

export default ExperienceForm;
