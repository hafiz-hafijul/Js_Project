import React from "react";
import { NavLink } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/">Hafiz</NavLink>
    </div>
  );
};

export default Logo;
