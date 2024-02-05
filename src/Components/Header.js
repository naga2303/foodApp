import { useState } from "react";
import { LOGO_Details } from "../Utils/Constants"
import { Link } from "react-router-dom";


const Header = () =>{

 
    
    return (
        <div className="header flex text-center space-x-0 border-spacing-0 bg-blue-100 shadow-lg justify-between">
            
                <img  src={LOGO_Details} className="logo" height={100} width={150}/>
                <div><h3 className="companyName">Just Order!!!</h3></div>
                <Navigation />
        </div>
    )
}
const Navigation = () =>{
    const [buttonName,setbuttonName] = useState("Login")
    return (
        <div className="navigations">
            <ul className="navigate flex px-2">
                <li className="px-2">
                   <Link to="/">Home</Link> 
                </li>
                <li className="px-2">
                <Link to="/about">About</Link>
                </li>
                <li className="px-2">
                <Link to="/user">Users</Link>
                </li>
                <button className="logStatus px-2 cursor-pointer" onClick={()=>{
                    buttonName == "Login" ? setbuttonName("Logout"): setbuttonName("Login")
                }}> {buttonName}</button>
            </ul>
        </div>
    )
}

export default Header

