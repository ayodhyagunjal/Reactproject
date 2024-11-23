import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
        <li><a href="/home" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="/about" target="_blank" rel="noopener noreferrer">About</a></li>
        <li><a href="/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
