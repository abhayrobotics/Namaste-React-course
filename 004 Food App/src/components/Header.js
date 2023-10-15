import { Link } from "react-router-dom";
import logo from "../asset/logo.png"
import { useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");

    const onlineStatus = useOnlineStatus()
    
    console.log("header render")
    return (
        <div className=" px-3 py-2 flex justify-between items-center bg-blue-950 text-white">
            <div className="w-20">
                <Link to="/"><img src={logo} alt="" /></Link>
                {/* <Link to="/"><img src={require("../asset/logo.png")} alt="" /></Link> */}
            </div>
            <div className="">
                <ul className="flex text-xl">
                    <li className="menu mx-2">Offers</li>
                    <li className="menu  mx-2"><Link to="/contact">Contact</Link></li>
                    <li className="menu  mx-2"><Link to="/about" > About</Link></li>
                    <li className="menu mx-2"><Link to="/grocery" > Grocery</Link></li>
                    <li className="menu  mx-2">Cart</li>
                    <li className="login  mx-2" onClick={() => {
                     
                            
                            
                        loginBtn == "Login" ?
                            setLoginBtn("Logout") :
                            setLoginBtn("Login");
                        // console.log(loginBtn)

                    }} >{loginBtn}
                    </li>
                    {/* <li>{onlineStatus? "✅": "🔴"}</li> */}
                   
                </ul>

            </div>
        </div>
    )
}

export default Header;