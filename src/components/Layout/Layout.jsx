import React from 'react'
import Navbar from '../repeatComp/NavBar/Navbar'
import Footer from '../repeatComp/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
return (
    <>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </>
)
}
