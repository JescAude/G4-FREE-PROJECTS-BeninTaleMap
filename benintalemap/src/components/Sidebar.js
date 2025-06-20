/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Sidebar
*/

import React from "react";
import {FaHome, FaCog, FaTimes, FaList} from 'react-icons/fa';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, setIsOpen }) => {
  let content;

  if (isOpen) {
    content = (
      <>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          <FaTimes />
        </button>
        <img src="/logo_beninTaleMap.jpeg" alt="Logo BeninTaleMap" className="sidebar-logo" />
        <h1 className="title">BeninTaleMap</h1>
        <hr />
        <ul className="menu">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              <FaHome className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/settings" onClick={() => setIsOpen(false)}>
              <FaCog className="icon" />
              Settings
            </Link>
          </li>
        </ul>
      </>
    );
  } else {
    content = (
      <>
        <button className="open-btn" onClick={() => setIsOpen(true)}>
          <FaList />
        </button>
        <button className="home-reduced-sidebar" onClick={() => setIsOpen(true)}>
          <FaHome />
        </button>
        <button className="settings-reduced-sidebar" onClick={() => setIsOpen(true)}>
          <FaCog />
        </button>
      </>
    );
  }

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {content}
    </div>
  );
};

export default Sidebar;
