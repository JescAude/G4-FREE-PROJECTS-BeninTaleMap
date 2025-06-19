/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Searchbar
*/

import React from "react";
import { FaSearch } from "react-icons/fa";
import './Searchbar.css'

function SearchBar () {
    return (
        <div className="searchbar">
            <FaSearch className="search-icon"/>
            <input type= "text" placeholder="Search an adress"></input>
        </div>
    )
}

export default SearchBar;