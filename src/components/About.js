import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{
    constructor(props){
        super(props);

        //console.log("parent constructor");
    }

    componentDidMount(){
        //console.log("parent component did mount");
    }

    render(){
        //console.log("parent render");
        return (
            <div>
                <h1>About us</h1>
                < User name={"sachin Kumar(function)"} />
                < UserClass name={"sachin Kumar(class)"} />
            </div>
        );
    }
}


export default About;