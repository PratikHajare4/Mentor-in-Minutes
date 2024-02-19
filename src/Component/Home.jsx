// Home.jsx
import React from "react";
import mentor from "../assets/mentor.png";

function Home() {
    return (
        <div>
            <div className="home">
                <img className="banner-img" src={mentor} alt="" />
            </div>
            <div>
                <p>Elevate your career with Mentor in minutes</p>
            </div>
        </div>
    );
}

export default Home;
