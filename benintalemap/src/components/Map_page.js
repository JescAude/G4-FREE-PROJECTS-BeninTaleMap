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
  const [showPopup, setShowPopup] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.closest(".popup-inner")) return;
      setClickPosition({ x: e.clientX, y: e.clientY });
      setShowPopup(true);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <div className="main-content">
        {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
        <BeninMap3D />
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <SearchBar />
    </div>
  );
}

export default MapPage;
