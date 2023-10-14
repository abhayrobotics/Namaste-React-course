import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'

import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About'
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRoute = () => {
    return (
        <>
            <Header />
            <Outlet  />
        </>
    )
}
// small budle use lazy loading
const Grocery = lazy(() => import("./components/Grocery"));


const newRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppRoute />,
        errorElement: <Error />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:"/about",
                element:<About />
            },
            
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:(
                    <Suspense fallback= {<h2> fallback loading ...</h2>}>

                        <Grocery />
                    </Suspense>
                )
            },
            {
                path:"/restaurant/:resid",
                element:<RestaurantMenu />
            }
        ]
    },
    
])


// root.render(<AppRoute />)
root.render(<RouterProvider router={newRouter} />)

