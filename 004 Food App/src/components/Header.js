import { Link } from "react-router-dom";
import logo from "../asset/logo.png"
import { useEffect, useState } from "react";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    

    // useEffect(()=>{
    //     console.log("use Effect called")
    // },[loginBtn])
    
    console.log("header render")
    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><img src={logo} alt="" /></Link>
                <Link to="/"><img src={require("../asset/logo.png")} alt="" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li className="menu">Offers</li>
                    <li className="menu"><Link to="/contact">Contact</Link></li>
                    <li className="menu"><Link to="/about" > About</Link></li>
                    <li className="menu">Cart</li>
                    <li className="login" onClick={() => {
                     
                            
                            
                        loginBtn == "Login" ?
                            setLoginBtn("Logout") :
                            setLoginBtn("Login");
                        // console.log(loginBtn)

                    }} >{loginBtn}
                    </li>
                   
                </ul>

            </div>
        </div>
    )
}

export default Header;