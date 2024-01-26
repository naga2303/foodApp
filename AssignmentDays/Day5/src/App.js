import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";




/**Code - Create a Header Component from scratch using Functional Component with JSX */








const root1 = ReactDOM.createRoot(document.getElementById("root1"))
const AppLayout = () =>{
    return(
        <>
        <Header />
        <Body />
        </>
    )
}
root1.render(<AppLayout/>)
    