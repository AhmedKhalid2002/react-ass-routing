import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import {RouterProvider, createBrowserRouter, createHashRouter}from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Notfound from './components/Notfound/Notfound'
export default function App() {
  const routes=createHashRouter([
    {path:'',element:<Layout/>,children:[
      {index:true,element:<Home/>},
      {path:'about',element:<About/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<Notfound/>},

    ]},
  ])
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
