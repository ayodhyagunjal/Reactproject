import React from "react";
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-links">
        `<li><a href="/home" target="_blank" >Home</a></li>`
        <li><a href="/about" target="_blank" >About</a></li>
        <li><a href="/contact" target="_blank" >Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
