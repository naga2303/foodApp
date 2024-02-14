import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import User from "./Components/User";
import Carts from "./Components/Carts"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurnantMenu";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Carts from "./Components/Carts";


/**Code - Create a Header Component from scratch using Functional Component with JSX */








const root1 = ReactDOM.createRoot(document.getElementById("root1"))
const AppLayout = () =>{
    return(
        <Provider store={appStore}>
        <Header />
        <Outlet />
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/user",
                element: <User />
            },
            {
                path:"/carts",
                element: <Carts />
            },
            {
                path:"/restaurnants/:resId",
                element:<RestaurantMenu />,
            }
        ]
    }
])

root1.render(<RouterProvider router={appRouter}/>)
    