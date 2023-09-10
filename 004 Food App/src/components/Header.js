import logo from "../asset/logo.png"

const Header = () => {
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
                </ul>

            </div>
        </div>
    )
}

export default Header;