/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** App
*/

import {React, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MapPage from './components/Map_page';
import Settings from './components/Setting';
import { NarratorProvider , useNarrator} from './components/AIcontext';
import './App.css';

function App() {
    const { theme } = useNarrator();
    useEffect(() => {
      document.body.className = '';
      document.body.classList.add(`theme-${theme}`);
    }, [theme]);
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/map" element={<MapPage/>}/>
          <Route path="/settings" element={<Settings/>}/>  
        </Routes>
      </Router>
  )
}

export default App;
