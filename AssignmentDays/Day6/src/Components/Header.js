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
                    Home
                </li>
                <li>
                About
                </li>
                <li>
                Carts
                </li>
                <button onClick={()=>{
                    buttonName == "Login" ? setbuttonName("Logout"): setbuttonName("Login")
                }}> {buttonName}</button>
            </ul>
        </div>
    )
}

export default Header

