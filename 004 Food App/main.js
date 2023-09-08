import React from "react";
import ReactDOM from 'react-dom/client'

import logo from "./asset/logo.png"
const root= ReactDOM.createRoot( document.getElementById('root'));



const Header =()=>{ 
    return(
        <div className="header">
            <div className="logo">
                <img  src={logo} alt="" />
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

const ResCard =()=>{
    return(
        <div className="res__card">
            <div className="res__title">
                <h3>Al-Bek</h3>
            </div>
            <div className="res__img">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/teg1rujhfwroaoig95qs" alt="" />
            </div>
            <div className="res__desc">
                <h4>Chicken Tandoori, North Indian </h4>
                <h4>4.4 star</h4>
                <h4>Shiwaji Nagar</h4>
                <h4>25 mins away</h4>

            </div>
        </div>
    )

}

const Body =()=>{
    return(
        <div className="body">
            <div className="search"></div>
            <div className="res__container">
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
                <ResCard />
            </div>
        </div>
    )
}
const RouteMap =()=>{
    return(
        <>
            <Header />
            <Body />
        </>
    )
}

root.render(<RouteMap />)