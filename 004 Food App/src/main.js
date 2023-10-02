import React from "react";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Header from "./components/Header";
import Body from './components/Body';
import About from './components/About'
import Contact from "./components/Contact";


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppRoute = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const newRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppRoute />
    },
    {
        path:"/about",
        element:<About />
    },
    {
        path:"/contact",
        element:<Contact />
    }
])


// root.render(<AppRoute />)
root.render(<RouterProvider router={newRouter} />)

