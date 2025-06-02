import React from 'react';
import { useState , useEffect } from 'react';
import './App.css';
import Popup from './components/Popup';
import SideBar from './components/SideBar';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
  const handleClick = (e) => {
  if (e.target.closest(".popup-inner")) return;
    setClickPosition({ x: e.clientX, y: e.clientY });
    setShowPopup(true);
  };
  document.addEventListener("click", handleClick);
  return () => {
    document.removeEventListener("click", handleClick);
  };
  }, []);

  return (
    <div className="flex">
      <h1 className="text-4xl font-bold text-purple-700 mb-6">Coucou Jessica ! 🎀</h1>
      <Popup trigger={showPopup} setTrigger={setShowPopup} position={clickPosition}>
        <h3 className="text-lg font-semibold">Infos</h3>
      </Popup>
      <div>
          <SideBar />
      </div>
    </div>
  );
}


export default App;
