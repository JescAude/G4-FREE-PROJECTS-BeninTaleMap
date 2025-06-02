import React from "react";
import {FaHome, FaCog} from 'react-icons/fa';

const SideBar = () => {
    return (
    <div className='w-64 bg-gray-500 fixed h-full px-4 py-2'>
        <div className="my-2 mb-4">
            <h1 className="text-2xl text-white"> Admin Dashboard</h1>
        </div>
        <hr/>
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-600 py-2">
                    <a href="">
                        <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
                        Home
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-600 py-2">
                    <a href="">
                        <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
                        Settings
                    </a>
                </li>
            </ul>
    </div>
    );
}

export default SideBar;