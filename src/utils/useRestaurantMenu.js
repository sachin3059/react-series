import { useEffect, useState } from "react";
const useRestaurantMenu = () =>{
    // FETCH DATA

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    }, []);
    

    const fetchData = async() => {
        const data = await fetch("https://api.github.com/users/sachin3059");
        const json = await data.json();
        setResInfo(json);
    };

    return resInfo ;

}

export default useRestaurantMenu;