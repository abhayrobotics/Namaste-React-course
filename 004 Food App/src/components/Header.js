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
                <img src={logo} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="menu">Offers</li>
                    <li className="menu">Help</li>
                    <li className="menu">About</li>
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