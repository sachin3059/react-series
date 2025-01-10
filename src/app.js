import React from "react";
import ReactDOM from "react-dom/client"

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";


const AppLayout = () => {
    //console.log(<Body />) // this is virtual DOM.
    //React.createElement("h1", {}, "hello world") 
    return(
        <div className="app-layout">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
