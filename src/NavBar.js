import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(data){ 
    return (
        <header  className="header-area header-sticky">
            <div  className="row">
                <div  className="col-12">
                    <nav  className="main-nav">
                        <a href="#" className="logo">
                            <img src="assets/images/logo.png" alt="Softy Pinko"/>
                        </a>
                        <nav>
                            <ul  className="nav">
                                <li><NavLink exact to="/">Home</NavLink></li>
                                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                                <li><NavLink to="/login">Login</NavLink></li>
                            </ul>
                        </nav>
                        <a  className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    );
}
export default NavBar;
