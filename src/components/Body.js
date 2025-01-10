import RestaurentCard from "./RestaurentCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react";

const Body = () => {

    // local state variable - super powerful variable

    // const arr = useState(resList);
    // const [listofRestarurent, setlistofRestaurent] = arr;

    // above and below do same work , above is destructuring of array

    // or 
    
    const [listOfRestaurent, setlistofRestaurent] = useState(resList);

    // or 
    // const arr = useState(resList);
    // const listofRestarurent = arr[0];
    // const setlistofRestaurent = arr[1];
 

    // Normal js variable:
    //let listOfRestaurent= [];


    // normal javascript variable
    // let listOfRestaurentJS = [
    //     {
    //         id: 1,
    //         name: 'KFC',
    //         cousines: 'Burgers, fried-chicken, Biryani, Fast Food',
    //         rating: 3.8,
    //         forTwo: 400,
    //         delivaryTime: 36
    //     },
    //     {
    //         id: 2,
    //         name: 'Meghna Foods',
    //         cousines: 'Biryani, Andhra , South Indian, Chinees, Seafood',
    //         rating: 4.4,
    //         forTwo: 500,
    //         delivaryTime: 29
    //     },
    //     {
    //         id: 3,
    //         name: 'OAC',
    //         cousines: 'wad-pav, maggi, night-cantten',
    //         rating: 4.1,
    //         forTwo: 450,
    //         delivaryTime: 5
    //     }
    // ]; 

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