import RestaurentCard from "./RestaurentCard.js";
import resList from "../utils/mockData.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Shimmer from "./Shimmer.js";

const Body = () => {

    // local state variable - super powerful variable

    
    const [listOfRestaurent, setlistofRestaurent] = useState(resList);

    const [searchText, setSearchText] = useState("");

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
    // conditional rendering
    if(listOfRestaurent.length === 0){
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="search">
                <input className="search-box" type="text"  placeholder="Search Restaurent" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>
                <button onClick={() => {
                    //Filter the restaurant card and upadate the ui:
                    // searchText 
                    //console.log(searchText);

                    const filterdRes = listOfRestaurent.filter((res)=> res.name.includes(searchText));
                    setlistofRestaurent(filterdRes);

                }}>Search</button>
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
                        <Link key={restaurent.id} to={"/restaurants/" + restaurent.id} ><RestaurentCard   resData ={restaurent} /> </Link>
                    ))
                }
                   
            </div>
        </div>
    )
}

export default Body;