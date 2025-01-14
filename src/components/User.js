import { useEffect, useState } from "react";

const User = (props) => {
    //console.log(props);
    const [count, setCount] = useState(0);
    const [counter , setCounter] = useState(2);
    const {name} = props;


    useEffect(()=>{
        console.log("useEffect is called")
        // setInterval(() => {
        //     console.log("sachin");
        // }, 1000);
    },[])
    return (
        <div className="user-card">
            <h2>Name:{name}</h2>
            <h3>Location: Prayagraj</h3>
            <h4>Contact: @sachin3059</h4>
            <h4>Count: {count}</h4>
            <h4>Counter: {counter}</h4>
        </div>
    )
}

export default User;