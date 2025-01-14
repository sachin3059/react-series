# Parcel
- Dev Build
- Local server
- HMR = Hot Module Replacement
- File watching algorithm - written in c++
- Caching - faster builds
- Image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree shaking





# Food ordering App

/* 
Header
    - logo
    - Nav Items
Body
    - seacrch
    - Restaurent Container
    - Restaurent Card
        - Image
        - Name
        - Rating
        - Address
        - Cuisines
        - delivery Time
Footer
    - CopyRight
    - Links
    - Social Media
    - Contact Us
*/



Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";


- Named Export/Import

export const Component;
import { Component } from "path";




# React Hooks
    (Normak JS utility function)
    written by facebook developers

- useState() - superpowerful state variable in  react
- useEffect()




# 2 Types of Routing in Web Apps
- Client side Routing
- Server side Routing

# Routing

- createBrowserRouter
- RouterProvider
- outlet

- useParams
- <Link> </Link>  //basically uses anchor tag behind the scene



# class Based component

- it is normally javascript class
- props are passed using construction => this.props 



# React life cycle method

- Parent constructor
- Parent render

    - First constructor
    - First render

    - Second constructor
    - Second render

    < DOM UPDATED - IN SINGLE BATCH >
    - First componentDidMount
    - Second ComponentDidMount

- Parent ComponentDidMount




* Mounting....
- Constructor (dummy)
- Render(dummy)
    <HTML Dummy>
- Component Did Mount
    <API Call>
    <this.setState> -> state variable is updated
    

* -- update cylce
- Render(api data)
    <HTML is loaded with new api data>
- Component Did Update




# live Api 
- https://www.zomato.com/webapi/searchapi.php?city=5
- https://api.github.com/users/USERNAME




