import { useEffect, useState } from "react";


const useOnlineStatus = () => {
    // check if user is online or offline

    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect( () => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        })

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })
    }, []);
    // boolean 
    return onlineStatus;
}


export default useOnlineStatus;