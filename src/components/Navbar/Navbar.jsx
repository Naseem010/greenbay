import React from "react";
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo1.png';
import "./navbar.css";


const Navbar = () => {
  return (
    <div className="NavBar">
    <img className="logo" src={logo} alt="logo" />
    <div className="header-logo"> 
    <h2>GGVRA</h2>
    </div>
    <div className="navbar">
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        </ul>
    </div>
    </div>
  );
};

export default Navbar;