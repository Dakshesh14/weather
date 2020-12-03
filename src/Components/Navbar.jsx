import React from 'react'
import {
    NavLink,
} from "react-router-dom";

import Logo from "../Static/Images/logo.png"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid col-sm-12 col-md-10 col-lg-10">
                <a className="navbar-brand" href="#">
                    <div className="navbar-logo">
                        <img src={Logo} alt="" className="img-fluid" />
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/" className="nav-link" aria-current="page">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="active" to="/about" className="nav-link">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
