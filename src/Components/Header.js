import { LOGO_Details } from "../Utils/Constants"
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
    return (
        <div className="navigations">
            <ul className="navigate">
                <li>Home</li>
                <li>About</li>
                <li>Carts</li>
                <li>User</li>
            </ul>
        </div>
    )
}

export default Header

