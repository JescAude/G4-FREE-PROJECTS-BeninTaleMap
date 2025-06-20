/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Home
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleGoToMap = () => {
    navigate('/map');
  };
  const teamMembers = [
  {
    name: "Jessica MOUSSOUGAN",
    role: "Développeuse Frontend",
    photo: "/photo1.jpg",
  },
  {
    name: "Joseph BEHANZIN",
    role: "Gestionnaire de données",
    photo: "/photo2.jpg",
  },
  {
    name: "Nuri ABLOU",
    role: "Designer UI/UX",
    photo: "/photo3.jpg",
  },
  {
    name: "Ramdon OGOUYOMI",
    role: "Gestionnaire de données",
    photo: "/photo4.jpg",
  },
  {
    name: "Romaric DEGA",
    role: "Gestion de l'API",
    photo: "/photo5.jpg",
  },
  {
    name: "Tobi AGONGBONON",
    role: "Architecte du projet",
    photo: "/photo6.jpg",
  },
];

  return (
    <div className="home-container">
      <section className="intro-section">
        <h1>Bienvenue sur BeninTaleMap  🗺️</h1>
        <button className="go-to-map-btn" onClick={handleGoToMap}>
          Accéder à la carte ➡️
        </button>
      </section>

      <section className="about-section">
        <h2>À propos de BeninTaleMap</h2>
        <p>
          BeninTaleMap est une initiative étudiante visant à faciliter la visualisation des données géographiques
          du Bénin de manière interactive et intuitive.
        </p>
      </section>

      <section className="team-section">
        <h2>Notre Équipe</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div className="team-member" key={index}>
              <img
                src={member.photo}
                alt={member.name}
                className="team-photo"
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
