import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './UserNavbar.css'
function UserNavbar (userName) {

    return <div className= "UserNavContainer">
        <div className = "UserNavLogoWrapper">
        <Link to={'/'} className="UserNavLogo">
            Board
        </Link>
        </div>
        <div className="dropdown">
        <button className = "dropdown-button" >Account</button>
        <div className="dropdown-content">
            <div>dewott@gmail.com</div>
            <div className= "dropdown-profile-wrapper">
            <Link className = "dropdown-profile" to={'/home'}>View Profile</Link>
            </div>
            <a className = 'dropdown-link' href="https://blog.hubspot.com/">Account Settings</a>
            <a className = 'dropdown-link' href= "https://blog.hubspot.com/">Help</a>
            <a className = 'dropdown-link' href="https://academy.hubspot.com/">Log Out</a>
        </div>
    </div>
</div>
         
    
}
export default UserNavbar