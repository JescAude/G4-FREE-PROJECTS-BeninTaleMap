/*
** EPITECH PROJECT, 2025
** G4-FREE-PROJECTS-BeninTaleMap
** File description:
** Popup
*/

import React from "react";
import {FaTimes} from 'react-icons/fa';
import './Popup.css';

function Popup(props) {
const {x, y} = props.position || {x: 0, y: 0};

return props.trigger ? (
    <div
    className="popup"
    style={{
        top: y,
        left: x,
        // transform: "translate(-50%, -50%)",
        position: "absolute",
    }}>
    <div className="popup-inner">
        <button onClick={() => props.setTrigger(false)}><FaTimes/></button>
        {props.children}
    </div>
    </div>
) : null;

}

export default Popup;
