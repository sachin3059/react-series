import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return (
        <div className="header">
            
            <div className="logo">
                <img src="https://www.pngkey.com/png/full/114-1149878_logo-clipart-website-logo-png.png" alt="logo" />
            </div>

            <div className="search-bar">
                <input type="text" placeholder="Search" />
            </div>

            <div className="user-icon">
                <img src="https://www.pngkey.com/png/full/114-1149878_logo-clipart-website-logo-png.png" alt="user-icon" />
            </div>
            
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);


const Body = () =>{
    return (
        <div className="main-body">
            <h1>Assignment 1 ✅ </h1>
        </div>
    )
}

const bodyRoot = ReactDOM.createRoot(document.getElementById("body"));
bodyRoot.render(<Body />);


const Footer = () => {
    return (
        <div className="footer">
            <h1>©️ 2025 made by sachin . All rights reserved</h1>
        </div>
    )
}

const footerRoot = ReactDOM.createRoot(document.getElementById("foot"));
footerRoot.render(<Footer />);





