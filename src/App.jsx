import { NavLink, createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import './App.css'
import Product from "./pages/Product"
import Categories from "./pages/Categories"
import Orders from "./pages/Orders"
import Reviews from "./pages/Reviews"
import Promocodes from "./pages/Promocodes"
import ChangePassword from "./pages/ChangePassword"
import Docs from "./pages/Docs"
import ErrorPage from "./pages/ErrorPage"


function App() {
  const routs=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element: <Home />
        },
        {
          path:'products',
          element: <Product />
        },
        {
          path:"categories",
          element: <Categories />
        },
        {
          path: 'orders',
          element:<Orders />
        },{
          path:"reviews",
          element: <Reviews/> 
        },
        {
          path: "promocodes",
          element: <Promocodes/>
        },
        {
          path:"changepassword",
          element:<ChangePassword/>
        },
        {
          path:"docs",
          element: <Docs/>
        }
      ]
    },

  ])
  return (<RouterProvider router={routs} /> )
}


export default App
