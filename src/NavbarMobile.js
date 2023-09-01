import React, { useState } from 'react';
import './Navbar.css'; 

const NavbarMobile = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
     setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
    <div className="hamburger" onClick={toggleMenu}>
        <div className="elements"></div>
        <div className="elements"></div>
        <div className="elements"></div>
      </div>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
      <a href="#">Services</a>
      <a href="#">Gallery</a>
      <a href="#">Blog</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
      </div>
    </nav>
  );
};


export default NavbarMobile;
