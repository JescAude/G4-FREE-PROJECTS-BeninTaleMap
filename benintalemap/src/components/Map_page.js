/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Map_page
*/

import React, { useState, useEffect } from 'react';
import BeninMap3D from '../components/Beninmap';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/Searchbar';

function MapPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const villes = [
    { name: "Parakou", coords: [2.625, 9.345] },
    { name: "Cotonou", coords: [2.4219, 6.3703] },
    { name: "Porto-Novo", coords: [2.6322, 6.4969] },
    { name: "Djougou", coords: [1.6667, 9.7000] },
    { name: "Natitingou", coords: [1.3840, 10.3000] },
    { name: "Abomey", coords: [1.9833, 7.1833] },
    { name: "Ouidah", coords: [2.0833, 6.3667] },
    { name: "Allada", coords: [2.1500, 6.6333] },
    { name: "Nikki", coords: [3.1833, 9.9333] },
    { name: "Savalou", coords: [1.7333, 7.9333] },
    { name: "Dassa-Zoumè", coords: [2.2000, 7.7500] },
    { name: "Kétou", coords: [2.6000, 7.3500] },
    { name: "Tchaourou", coords: [2.6000, 8.8833] },
    { name: "Bohicon", coords: [2.0667, 7.1667] },
  ];
  const filteredVilles = villes.filter(v =>
    v.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="main-content">
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        <BeninMap3D villes={filteredVilles} searchTerm={searchTerm}/>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <SearchBar onSearch={setSearchTerm}/>
    </div>
  );
}

export default MapPage;
