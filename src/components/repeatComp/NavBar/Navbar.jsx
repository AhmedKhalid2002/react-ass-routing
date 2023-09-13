import React from "react";
import NavbarStyle from './Navbar.module.css'
import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
        <nav className={`navbar navbar-expand-lg p-4  ${NavbarStyle.bg_nav}`}>
            <div className="container">
            <Link className='navbar-brand text-white fw-bold fs-2' to='/'>
                START FRAMEWORK
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item me-2">
                    <NavLink className="nav-link text-white fw-bold" aria-current="page" to='about'>
                        ABOUT
                    </NavLink>
                </li>
                <li className="nav-item me-3">
                    <NavLink className="nav-link text-white fw-bold" to='portfolio'>
                        PORTFOLIO
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-white fw-bold" to='contact'>
                        CONTACT
                    </NavLink>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
    }
