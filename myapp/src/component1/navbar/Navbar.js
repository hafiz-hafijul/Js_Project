import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("All Are Good !!!");
  };

  const searchClass = search ? "searchbox active" : "searchbox";
  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/post">
            Post
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{ color: "green" }} to="/signup">
            SignUp
          </NavLink>
        </li>
      </ul>
      <div className="searchbar">
        <form onSubmit={submitSearch}>
          <input type="text" placeholder="Search" className={searchClass} />

          <div className="icon" onClick={() => setSearch(true)}>
            <SearchIcon />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
