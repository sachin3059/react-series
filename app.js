import React from "react";
import ReactDOM from "react-dom/client";

// JSX
// jsx => babel transpiles to react.createElement => html
const Jsxheading = <h1 className="heading1"> React Element sachin kumar ❤️</h1>;



// React component
// Class Based component -> old way of writying component
// Functional Component -> new way of writing component

const HeadingComponent = () => {
    return <h1>Functional react component 🙏</h1>
};

const  HeadingComponent2 = () => {
    return (
        <div className="container">
            {/* here i also rendered another functional component HeadingComponent */}
            <HeadingComponent />  
            <h1>React Fucntional component  for multiple line of jsx</h1>
        </div> 
    )
};



// rendering of react element or jsx
const jsxroot = ReactDOM.createRoot(document.getElementById("root1"));
jsxroot.render(Jsxheading);




// now how to render functional component;

const root = ReactDOM.createRoot(document.getElementById("root2"));
root.render(<HeadingComponent />);


const root1 = ReactDOM.createRoot(document.getElementById("root3"));
root1.render(<HeadingComponent2 />);

