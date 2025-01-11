import RestaurentCard from "./RestaurentCard.js";
import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer.js";

const Body = () => {

    // local state variable - super powerful variable

    
    const [listOfRestaurent, setlistofRestaurent] = useState([]);

    useEffect(()=>{
        console.log("useEffect called");
        // fetch data from server
        //fetchData();
    }, []); 


    const fetchData = async () => {
        const data = await fetch("https://www.zomato.com/webroutes/auth/init");
        const jsonData = await data.json();
        console.log(jsonData);

        // now set listOfRestaurent with the fetched data
        // setlistofRestaurent(jsonData);
    }

    // useEffect is a hook that is called when the component is mounted/Rerendered

    console.log("Body Component Rendered");

    // In console first "Body component Rendered" will be printed and then "useEffect called" will be printed


    // if listOfRestaurent is empty then it will print "LOADING...." else it will print the restaurent list
    if(listOfRestaurent.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="search">
                <input type="text" placeholder="Search Restaurent" />
                <button>Search</button>
            </div>
            <div className="filter-div">
                <button className="filter-btn" 
                    onClick={() => {
                        // filter logic:
                        const filteredlistOfRestaurent = listOfRestaurent.filter(
                            (res) => res.rating > 4
                        );
                        //console.log(filteredlistOfRestaurent);

                        setlistofRestaurent(filteredlistOfRestaurent);  // it will update my listofRestarurent
                    }}>
                    Filer Top Rated Restaurent
                </button>
            </div>
            <div className="restaurent-container">
                {
                    listOfRestaurent.map((restaurent)=>(
                        <RestaurentCard  key={restaurent.id} resData ={restaurent} />
                    ))
                }
                   
            </div>
        </div>
    )
}

export default Body;