import { useState } from "react";
import { LOGO_Details } from "../Utils/Constants"
import { Link } from "react-router-dom";


const Header = () =>{

 
    
    return (
        <div className="header">
            
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
            <ul className="navigate">
                <li>
                   <Link to="/">Home</Link> 
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/user">Users</Link>
                </li>
                <button className="logStatus" onClick={()=>{
                    buttonName == "Login" ? setbuttonName("Logout"): setbuttonName("Login")
                }}> {buttonName}</button>
            </ul>
        </div>
    )
}

export default Header

