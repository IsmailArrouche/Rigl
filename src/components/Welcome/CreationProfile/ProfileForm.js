import React, { useState } from 'react';
import ExperienceForm from './ExperienceForm';

const ProfileForm = () => {
  const fields = [
    { id: 'phone', label: 'Numéro de Téléphone', type: 'text', requiresTags: false },
    { id: 'address', label: 'Adresse (ville, région, pays)', type: 'text', requiresTags: false },
    { id: 'job_title', label: 'Titre ou Poste Recherché', type: 'text', requiresTags: true },
    { id: 'industry', label: 'Secteur d\'Activité', type: 'text', requiresTags: true },
    { id: 'skills', label: 'Compétences Principales', type: 'text', requiresTags: true },
    { id: 'education_level', label: 'Niveau d\'Études', type: 'select', 
      options: ['Baccalauréat', 'CAP', 'BEP', 'BTS', 'DUT', 'Deug', 'L1', 'L2', 'L3', 'M1', 'M2', 'Diplôme d\'ingénieur', 'Doctorat', 'Post-Doctorat'], 
      requiresTags: false 
    },
    { id: 'university', label: 'Université ou Établissement Fréquenté', type: 'text', requiresTags: false },
    { id: 'field_of_study', label: 'Domaines d\'Étude', type: 'text', requiresTags: false },
    { id: 'gender', label: 'Genre', type: 'select', options: ['Homme', 'Femme', 'Autre'], requiresTags: false },
    { id: 'experience', label: 'Expérience Professionnelle', type: 'group', requiresTags: false }
  ];
  
  const [tags, setTags] = useState({
    job_title: [],
    industry: [],
    skills: [],
    experience: []  // Ajout d'un tableau pour stocker les expériences
  });
  
  const [formData, setFormData] = useState({
    phone: '',
    address: '',
    job_title: '',
    industry: '',
    skills: '',
    education_level: '',
    university: '',
    field_of_study: '',
    gender: '',
    entreprise: '',
    poste: '',
    typeContrat: '',
    dateDebut: '',
    dateFin: '',
    description: ''
  });
  
  const [currentFieldIndex, setCurrentFieldIndex] = useState(0);
  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };
  
  const handleTagKeyPress = (e, fieldId) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      e.preventDefault();
      setTags((prevTags) => ({
        ...prevTags,
        [fieldId]: [...prevTags[fieldId], e.target.value.trim()]
      }));
      setFormData((prevData) => ({
        ...prevData,
        [fieldId]: ''  // Réinitialiser le champ après ajout
      }));
    }
  };
  
  const removeTag = (fieldId, index) => {
    setTags((prevTags) => ({
      ...prevTags,
      [fieldId]: prevTags[fieldId].filter((_, i) => i !== index)
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    // Validation des champs
    fields.forEach(field => {
      if (field.requiresTags && !formData[field.id] && tags[field.id].length === 0) {
        newErrors[field.id] = `${field.label} est requis.`;
      }
    });
  
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      console.log('Form Data Submitted:', formData, tags);
      alert('Formulaire soumis avec succès !');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();  // Empêche la soumission du formulaire
    }
  };

  const goToPreviousField = () => {
    if (currentFieldIndex > 0) {
      setCurrentFieldIndex(currentFieldIndex - 1);
    }
  };
  
  const goToNextField = () => {
    if (currentFieldIndex < fields.length - 1) {
      setCurrentFieldIndex(currentFieldIndex + 1);
    }
  };

  const renderField = (field) => {
    switch (field.type) {
      case "text":
        return (
          <>
            <label
              htmlFor={field.id}
              className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              value={formData[field.id]}
              onChange={handleInputChange}
              onKeyDown={
                field.requiresTags ? (e) => handleTagKeyPress(e, field.id) : null
              }
              type="text"
              className={`mt-1 block w-full px-4 py-3 border-b-2 ${
                errors[field.id] ? "border-red-500" : "border-gray-500 dark:border-gray-400"
              } bg-transparent text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500`}
            />
            {field.requiresTags && (
              <div className="mt-2 flex flex-wrap gap-2">
                {tags[field.id]?.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-500 dark:bg-blue-700 text-white rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(field.id, index)}
                      className="ml-2 text-white"
                    >
                      &times;
                    </button>
                  </span>
                ))}
              </div>
            )}
            {errors[field.id] && (
              <p className="text-sm mt-1 text-red-500">{errors[field.id]}</p>
            )}
          </>
        );
  
      case "select":
        return (
          <>
            <label
              htmlFor={field.id}
              className="block text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300"
            >
              {field.label}
            </label>
            <select
              id={field.id}
              value={formData[field.id]}
              onChange={handleInputChange}
              className="mt-1 block w-full px-4 py-3 border-b-2 border-gray-500 dark:border-gray-400 bg-transparent text-gray-800 dark:text-gray-300 focus:outline-none focus:border-indigo-500"
            >
              <option value="">Sélectionnez une option</option>
              {field.options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors[field.id] && (
              <p className="text-sm mt-1 text-red-500">{errors[field.id]}</p>
            )}
          </>
        );
  
      case "group":
        return <ExperienceForm />;
  
      default:
        return null;
    }
  };
  
  return (
    <div
      className="max-w-lg mx-auto p-6 bg-[rgb(149,149,156)] dark:bg-[#323644] text-gray-700 dark:text-gray-300 rounded shadow"
      style={{ minHeight: "100px", minWidth: "37rem" }}
    >
      <form onSubmit={handleSubmit} onKeyDown={handleKeyDown}>
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-700 dark:text-gray-300">
          Formulaire
        </h2>
        {renderField(fields[currentFieldIndex])}
        <div className="flex justify-between items-center mt-4">
          {currentFieldIndex > 0 && (
            <button
              type="button"
              onClick={goToPreviousField}
              className="opacity-60 text-lg transition-opacity dark:text-blue-400 text-blue-700 border-blue-700 border-2 dark:border-blue-400 py-2 rounded-3xl dark:bg-gray-700 hover:opacity-100"
              style={{ width: "130px" }}
            >
              Précédent
            </button>
          )}
          {currentFieldIndex < fields.length - 1 && (
            <button
              type="button"
              onClick={goToNextField}
              className="opacity-60 text-lg transition-opacity dark:text-blue-400 text-blue-700 border-blue-700 border-2 dark:border-blue-400 py-2 rounded-3xl dark:bg-gray-700 hover:opacity-100"
              style={{ width: "100px" }}
            >
              Suivant
            </button>
          )}
          {currentFieldIndex === fields.length - 1 && (
            <button
              type="submit"
              className="opacity-60 text-lg transition-opacity text-white bg-green-600 dark:bg-green-500 border-green-600 dark:border-green-500 py-2 rounded-3xl hover:opacity-100"
              style={{ width: "100px" }}
            >
              Soumettre
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
export default ProfileForm;
