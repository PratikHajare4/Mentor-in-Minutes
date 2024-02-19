import React from "react";
import '../App.css'
import MMlogo from '../assets/MMlogo.png';
import p from '../assets/profile.png';

function Navbar() {
    return(
        <div className="navbar">
             <img src={MMlogo} className="logo" alt="companyLogo" />
             <div className="nav-item">
             <a  className="nav" href="">Home</a>
             <a className="nav" href="">My Mentor</a>
             <a className="nav" href="">Community</a>
             <a className="nav" href="">Roadmap</a>
             <a className="nav" href="">About</a>
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