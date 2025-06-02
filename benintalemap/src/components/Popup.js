import React from "react";

function Popup(props) {
const {x, y} = props.position || {x: 0, y: 0};

return props.trigger ? (
    <div
    className="popup fixed z-50"
    style={{
        top: y,
        left: x,
        transform: "translate(-50%, -50%)",
        position: "absolute",
    }}>
    <div className="popup-inner bg-orange-400 p-6 rounded shadow-lg relative">
        <button
        className="text-orange-600 border border-gray-400 bg-white px-4 py-2 rounded shadow hover:bg-orange-100 transition"
        onClick={() => props.setTrigger(false)}>Close</button>
        {props.children}
    </div>
    </div>
) : null;
}


export default Popup;
