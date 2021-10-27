// Imports

import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
// Main App Function
const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Home />
        </div>
    );
};

export default App;
