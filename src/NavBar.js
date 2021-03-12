import React from "react";
import { Link } from 'react-router-dom';

function NavBar(data){ 
    return (
        <header  className="header-area header-sticky">
            <div  className="row">
                <div  className="col-12">
                    <nav  className="main-nav">
                        <a href="#" className="logo">
                            <img src="assets/images/logo.png" alt="Softy Pinko"/>
                        </a>
                        <ul  className="nav">
                            <li><Link to="">Home</Link></li>
                            <li><Link to="/dashboard">Dashboard</Link></li>
                            {data.user == null && (<li><Link to="/login">Login</Link></li>)}
                            {data.user && (<li><Link to="/" > {data.user}, Logout</Link></li>)}
                        </ul>
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
