// class based component:
// it is normal javascript class

import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);

        console.log(props);
    }

    render(){
        return (
            <div className="user-card">
                <h2>Name: Sachin {this.props.name}</h2>
                <h3>Location: Prayagraj</h3>
                <h4>Contact: @sachin3059</h4>
            </div>
        );
    }
}

export default UserClass;