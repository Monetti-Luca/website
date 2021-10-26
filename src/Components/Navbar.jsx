// Import
import React from "react";
import "../Assets/css/Navbar.css";

// Components
const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo">
                <h1 className="logo">LG</h1>
            </div>
            <ul className="nav-links">
                <li className="link-elem">
                    <a href="#">About</a>
                </li>
                <li className="link-elem">
                    <a href="#">Work</a>
                </li>
                <li className="link-elem">
                    <a href="#">Pricing</a>
                </li>
            </ul>
        </div>
    );
};

// Export
export default Navbar;
