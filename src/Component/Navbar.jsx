// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import '../App.css';
import Community from "../Community/Community";
import MMlogo from '../assets/MMlogo.png';
import p from '../assets/profile.png';

function Navbar() {
    return (
        <div className="navbar">
            <img src={MMlogo} className="logo" alt="companyLogo" />
            <div className="nav-item">
                <Link to="/" className="nav">Home</Link>
                <Link to="/mymentor" className="nav">My Mentor</Link>
                <Link to="/community" className="nav">Community</Link>
                <Link to="/roadmap" className="nav">Roadmap</Link>
                <Link to="/about" className="nav">About</Link>
            </div>
            <div className="dark">
                <button id="dark">dark</button>
            </div>
            <div className="profile">
                <img src={p} width={50} height={50} id="profile-pic" alt="profile" />
            </div>
        </div>
    )
}

export default Navbar;
