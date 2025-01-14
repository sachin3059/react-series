import { LOGO_URL } from "../utils/constants.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";



const Header = () => {
    //let btnName = "Login";  from this ui will not rerender
    // the above btnName is local javascript variable
    const [btnName, setBtnName] = useState("Login");

    //console.log("header render");

    // if no dependency array => useEffect is called on every component render;
    // if dependency array is empty  = [] => useEffect is called on initial render(just once)
    // if denpendecny array  is [btnName] => called everyTime btnName is updated:
    useEffect( ()=>{
        //console.log("useEffect called");
    }, [btnName]);


    const onlineStatus = useOnlineStatus();


    return (
        <div className="header">
            <div className="logo"> 
                <img src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li><Link to="/grocery">Grocery</Link> </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about" >About Us</Link> </li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={() => {
                        btnName === "login" ? setBtnName("logout") : setBtnName("login");
                        //console.log(btnName);
                    }}>{btnName} </button>
                </ul>
            </div>
        </div>
    )
};

export default Header;