// class based component:
// it is normal javascript class

import React from "react";


class UserClass extends React.Component{

    constructor(props){
        super(props);

        //console.log(props);


        this.state = {
            count : 0,
            couter : 5,

            userInfo:{
                name: "dummy_name",
                location: "ait_pune"
            }
        }

        //console.log('Constructor');
    }
// for making api call make componentDidMount function asynchronous
    async componentDidMount(){
        //console.log("child component did mount");
        const data = await fetch("https://api.github.com/users/sachin3059");
        const json = await data.json();
        //console.log(json);

        this.setState({
            userInfo: json,
        });
    }


    componentDidUpdate(){
        //console.log("component did update");

        // this.timer = setInterval(() => {
        //     console.log("sachin");
        // }, 1000);

        // cons of single page application
        // if you go to another component to render
        // the above set interval  will also print there

        // you will clear this interval in 
        // component unmount
    }


    componentWillUnmount(){
        //console.log("component will unmount");
        //clearInterval(this.timer);
    }



    render(){

        //console.log('Render');
        return (
            <div className="user-card">
                <h2>Name: Sachin {this.props.name}</h2>
                <h3>Location: Prayagraj</h3>
                <h4>Contact: @sachin3059</h4>
                <h4>counter: {this.state.couter}</h4>
                <button onClick={() => {
                     this.setState({
                        count: this.state.count + 1,
                     });
                }}>count_btn: {this.state.count}</button>

                {/* {console.log(this.state.userInfo)}; */}

                <h2>Name from API {this.state.userInfo.name}</h2>
                <h2>Login from API {this.state.userInfo.login}</h2>
                <div>
                    <img src={this.state.userInfo.avatar_url}></img>
                    </div>
                </div>
        );
    }
}

export default UserClass;