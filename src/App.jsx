import { NavLink, createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import Home from './pages/Home'
import './App.css'


function App() {
  const routs=createBrowserRouter([
    {
      path:"/",
      element:<MainLayout/>,
      children:[
        {
          index:true,
          element: <Home />
        }
      ]
    }
  ])
  return (<RouterProvider router={routs} /> )
}


export default App
