import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="headermenu">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <div>Social Icons</div>
    </header>
  );
};

export default Header;
