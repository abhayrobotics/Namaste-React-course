# Class bAsed Component

## 1. How do you create nested Router react-router-dom  configurations ?
    import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
        
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
                    path:"/restaurant/:resid",
                    element:<RestaurantMenu />
                }
            ]
        },
        
    ])

    root.render(<RouterProvider router={newRouter} />)

## 2. 