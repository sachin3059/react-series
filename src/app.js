import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client"

import Header from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Cart from "./components/Cart.js";
import RestMenu from "./components/RestMenu.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer.js";
//import Grocery from "./components/Grocery.js";


// chunking
// code splitting
// dynamic bundling
// lazy loading


const Grocery = lazy(() => import("./components/Grocery.js")) 


const AppLayout = () => {
    //console.log(<Body />) // this is virtual DOM.
    //React.createElement("h1", {}, "hello world") 
    return(
        <div className="app-layout">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
};


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:[
        {
            path: "/",
            element: <Body/>,
            errorElement:<Error/>
        },
        {
            path: "/about",
            element: <About />,
            errorElement: <Error/>
        },
        {
            path: "/contact",
            element: <Contact />,
            errorElement: <Error/>
        },
        {
            path: "/cart",
            element: <Cart />,
            errorElement: <Error/>
        },
        {
            path: "/restaurants/:resId", // means this url is dynamic
            element: <RestMenu/>,
            errorElement: <Error/>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<h1>This  is Grocery</h1>}> <Grocery /></Suspense>,
            errorElement: <Error />
        }
        ],
        errorElement: <Error />
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<AppLayout />);

root.render(<RouterProvider router = {appRouter} />);
