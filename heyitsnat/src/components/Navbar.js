import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Nathania Yeo</div>
      <ul className="navbar-links">
        <li><a href="/heyitsnat">Home</a></li>
        <li><a href="heyitsnat/about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
