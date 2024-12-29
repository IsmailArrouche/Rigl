import React, { useState } from 'react';
import JobOfferCard from './JobOfferCard';
import Tabs from '../Nav/Tabs'; // Assuming Tabs contains the light/dark mode button

const Explore = () => {
  const [darkMode, setDarkMode] = useState(false); // Assuming Tabs will toggle this

  const jobOffers = [
    {
      id: 1,
      user: 'Anthony Daugloi',
      time: '2 hours ago',
      title: 'Chargé(e) de Clientèle en Réception d’Appels',
      location: 'Fès, Fès-Meknès, Maroc',
      employmentType: 'Sur site • Temps plein',
      experienceLevel: 'Premier emploi',
      skills: ['Adapter', 'Appareils mobiles', 'et 1 en plus'],
      likes: 100,
      comments: 20,
      description: 'Rejoignez notre équipe dynamique et contribuez à offrir un excellent service client pour nos appelants. Ce poste requiert des compétences interpersonnelles exceptionnelles, une patience à toute épreuve et une capacité à résoudre les problèmes de manière efficace. Vous serez responsable de répondre aux appels entrants, d’offrir des solutions rapides et adaptées aux demandes des clients, tout en maintenant une attitude professionnelle. Aucune expérience préalable n’est requise, une formation complète sera assurée pour vous préparer aux défis de ce rôle.'
    },
    {
      id: 2,
      user: 'Sarah Connor',
      time: '3 hours ago',
      title: 'Responsable Commercial',
      location: 'Casablanca, Maroc',
      employmentType: 'Sur site • Temps partiel',
      experienceLevel: 'Intermédiaire',
      skills: ['Négociation', 'Analyse de marché'],
      likes: 250,
      comments: 45,
      description: 'Développez et maintenez des relations commerciales stratégiques avec nos partenaires. Vous serez chargé d’analyser les tendances du marché, de négocier des accords clés et de travailler en étroite collaboration avec les équipes internes pour assurer une livraison efficace des services aux clients. Une bonne expérience en commerce est requise, ainsi qu’une capacité à communiquer efficacement et à résoudre les conflits.'
    },
    {
      id: 3,
      user: 'John Doe',
      time: '5 hours ago',
      title: 'Développeur Web Frontend',
      location: 'Rabat, Maroc',
      employmentType: 'Télétravail • Temps plein',
      experienceLevel: 'Junior',
      skills: ['React', 'JavaScript', 'CSS'],
      likes: 300,
      comments: 60,
      description: 'Nous recherchons un développeur frontend passionné pour rejoindre notre équipe. Vous travaillerez sur des projets innovants avec des technologies modernes comme React et Tailwind CSS. Une expérience préalable est souhaitée, mais pas obligatoire. Nous offrons une grande flexibilité dans les horaires et des opportunités de croissance professionnelle.'
    },
    {
      id: 4,
      user: 'Jane Smith',
      time: '1 day ago',
      title: 'Designer UX/UI',
      location: 'Marrakech, Maroc',
      employmentType: 'Sur site • Temps plein',
      experienceLevel: 'Confirmé',
      skills: ['Figma', 'Wireframing', 'Prototyping'],
      likes: 150,
      comments: 30,
      description: 'Nous cherchons un designer UX/UI expérimenté pour créer des expériences utilisateur exceptionnelles. Vous serez responsable de la conception des maquettes, wireframes, et prototypes pour des applications web et mobiles. Une bonne maîtrise des outils comme Figma est essentielle.'
    },
    {
      id: 5,
      user: 'Alex Brown',
      time: '2 days ago',
      title: 'Chef de Projet IT',
      location: 'Tanger, Maroc',
      employmentType: 'Sur site • Temps plein',
      experienceLevel: 'Senior',
      skills: ['Gestion de projet', 'Agile', 'Scrum'],
      likes: 400,
      comments: 70,
      description: 'Nous recherchons un chef de projet IT compétent pour superviser le cycle de vie complet des projets technologiques. Vous travaillerez en collaboration avec les équipes internes et les parties prenantes pour assurer une livraison dans les délais et respectant les budgets.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === 'up' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (direction === 'down' && currentIndex < jobOffers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={`h-screen bg-gray-100 dark:bg-gray-900 flex justify-center items-center relative`}>
      <div className="absolute top-4 right-4">
        <Tabs toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      </div>
      <div className="relative w-full max-w-md space-y-6 py-8">
        <div className="w-full">
          <JobOfferCard
            key={jobOffers[currentIndex].id}
            user={jobOffers[currentIndex].user}
            time={jobOffers[currentIndex].time}
            title={jobOffers[currentIndex].title}
            location={jobOffers[currentIndex].location}
            employmentType={jobOffers[currentIndex].employmentType}
            experienceLevel={jobOffers[currentIndex].experienceLevel}
            skills={jobOffers[currentIndex].skills}
            likes={jobOffers[currentIndex].likes}
            comments={jobOffers[currentIndex].comments}
            description={jobOffers[currentIndex].description}
          />
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-[-4rem] flex flex-col space-y-4 items-center">
          <button
            className="p-4 bg-gray-700 rounded-full text-white shadow-lg hover:bg-gray-600"
            onClick={() => handleScroll('up')}
          >
            ▲
          </button>
          <button
            className="p-4 bg-gray-700 rounded-full text-white shadow-lg hover:bg-gray-600"
            onClick={() => handleScroll('down')}
          >
            ▼
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
