/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Searchbar
*/

import {React, useState} from "react";
import { FaSearch } from "react-icons/fa";
import './Searchbar.css'

function SearchBar ({ onSearch }) {
    const [query, setQuery] = useState('');
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };
    return (
        <div className="searchbar">
            <FaSearch className="search-icon"/>
            <input type= "text" placeholder="Search an adress" value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyPress}></input>
        </div>
    )
}

export default SearchBar;