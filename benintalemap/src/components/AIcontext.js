/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** AIcontext
*/

import React, { createContext, useState, useContext } from 'react';

const NarratorContext = createContext();

export const NarratorProvider = ({ children }) => {
    const [isNarratorEnabled, setIsNarratorEnabled] = useState(true);
    const [mapStyle, setMapStyle] = useState('standard');
    const [theme, setTheme] = useState('clair');

return (
        <NarratorContext.Provider value={{ isNarratorEnabled, setIsNarratorEnabled , mapStyle, setMapStyle, theme, setTheme }}>
            {children}
        </NarratorContext.Provider>
    );
};

export const useNarrator = () => useContext(NarratorContext);
