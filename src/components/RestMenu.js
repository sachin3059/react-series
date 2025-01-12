import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData.js";
import { useParams } from "react-router-dom";

const RestMenu = () => {

    const [resInfo, setResInfo] = useState([]);
    const {resId} = useParams();
    

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        // const data = await fetch("");
        // const json = await data.json();

        // console.log(json);
        console.log(resList);
        setResInfo(resList);   
    }

    // if(resInfo) return <Shimmer/>

    const {id, name, cousines} = resList[0];

    return (
        <div className="menu">
            <h1>{id}</h1>
            <h1>Restaurant name: {name}</h1>
            <h2>Menu: {cousines}</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestMenu;