// RegisterCard.jsx
import React from "react";
import '../App.css';

function RegisterCard() {
    return (
        <div>
            <div className="container">
                <form className="registerCard">
                    <h1 className="regi">Join As </h1>
                    <button>Mentor</button><br />
                    <p>OR</p>
                    <button>Mentee</button>
                </form>
            </div>
            <div className="botton-login">
                <p id="login-p">Login if you are already registered</p>
                <button id="login">Login</button>
            </div>
        </div>
    );
}

export default RegisterCard;
