/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Setting
*/

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useNarrator } from './AIcontext';
import './Setting.css';

const Settings = () => {
    const {theme, setTheme} = useNarrator();
    const navigate = useNavigate();
    const { mapStyle, setMapStyle } = useNarrator();
    const { isNarratorEnabled, setIsNarratorEnabled } = useNarrator(); 
    const toggleNarrator = () => setIsNarratorEnabled(!isNarratorEnabled);
    const handleSave = () => {
        navigate('/map')
    };
    return (
        <div className="settings-container">
            <h2>Paramètres</h2>
        <div className="setting-group">
        <label>Thème :</label>
        <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Clair</option>
            <option value="dark">Sombre</option>
        </select>
        </div>

        <div className="setting-group">
            <label>Type de carte :</label>
            <select value={mapStyle} onChange={(e) => setMapStyle(e.target.value)}>
                <option value="standard">Standard</option>
                <option value="satellite">Satellite</option>
            </select>
        </div>

        <div className="setting-group">
            <label>
            <input
                type="checkbox"
                checked={isNarratorEnabled}
                onChange={toggleNarrator}
            />
            Activer l'IA conteuse
        </label>
        </div>

        <div className="setting-group">
            <button onClick={handleSave} className="save-btn">
                Enregistrer les modifications
            </button>
        </div>
        </div>
    );
};

export default Settings;
