import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file for styling

// Navbar component
export default function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState(null); // State to manage active nav item

  // Function to handle click event on nav item
  const handleClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="navbar">
      <div className="left">
        <span className="logo">SmartHome</span>
      </div>
      <div className="middle">
        <span
          className={`nav-item ${activeNavItem === 'Rooms' ? 'active' : ''}`}
          onClick={() => handleClick('Rooms')}
        >
          Rooms
        </span>
        <span
          className={`nav-item ${activeNavItem === 'Smartify' ? 'active' : ''}`}
          onClick={() => handleClick('Smartify')}
        >
          Smartify
        </span>
        <span
          className={`nav-item ${activeNavItem === 'New Device' ? 'active' : ''}`}
          onClick={() => handleClick('New Device')}
        >
          New Device
        </span>
        <span
          className={`nav-item ${activeNavItem === 'Dashboard' ? 'active' : ''}`}
          onClick={() => handleClick('Dashboard')}
        >
          Dashboard
        </span>
      </div>
      <div className="right">
        <img className="profile-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS31m_8krjsdG2SfYoOBDxioFsbl8v621hTbg&s" alt="Profile" />
      </div>
    </div>
  );
}
