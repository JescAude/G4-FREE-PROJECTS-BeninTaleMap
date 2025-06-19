/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** App
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MapPage from './components/Map_page';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  )
}

export default App;
