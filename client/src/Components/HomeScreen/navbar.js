import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
function Navbar () {
    return <div className= "NavContainer">
        <div className = "NavLogoWrapper">
        <Link to={'/'} className="NavLogo">
            Board
        </Link>
        </div>
        <div className = "NavLoginWrapper">
        <Link to ={'/login'} className = "NavLogin">
            Login
        </Link>
        </div>
        <div className = "NavSignupWrapper">
        <Link to = {"/register"} className = "NavSignup">
            Sign Up
        </Link>
        </div>
   </div>
    
}
export default Navbar
