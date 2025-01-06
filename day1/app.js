{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}

const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm h1 💪 tag")
    )
);


// what if two sibling elements:
{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}

// const par = React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div", 
//         {id: "child"},
//         [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("p", {}, "I'm p tag")]  // array of different elements , siblings  
//     )
// )



// now: create this one:

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}

{/* <div id="parent">
    <div id="child">
        <h1>I'm h1 tag</h1>
    </div>
</div> */}


const par = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div", 
        {id: "child"},
        [React.createElement("h1", {}, "I'm h1 tag"), React.createElement("p", {}, "I'm p tag")]  // array of different elements , siblings  
    ),
    React.createElement(
        "div",
        { id: "parent" },
        React.createElement("div", { id: "child" },
            React.createElement("h1", {}, "I'm h1 💪 tag")
        )
    )
);
// now this is toooo ugly, so we will use JSX


// JSX:







// const heading = React.createElement("h2", {id: "heading1", xyz:"abc"},"Hello World 💪 from react");
// console.log(heading);  // it is basicaly a javascript object

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root); 

//root.render(heading);
//root.render(parent);
root.render(par);



