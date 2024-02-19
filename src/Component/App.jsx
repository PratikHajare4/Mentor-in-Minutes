import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RegisterCard from "./RegisterCard";
import Community from "../Community/Community";

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mymentor" element={<RegisterCard />} />
                    <Route path="/Community" element={<Community/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;