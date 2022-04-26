import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './UserNavbar.css'
import { useUserContext } from './userContext';
function UserNavbar () {
    const {userName, switchName} = useUserContext()
    return <div className= "UserNavContainer">
        <div className = "UserNavLogoWrapper">
        <Link to={'/'} className="UserNavLogo">
            Board
        </Link>
        </div>
        <div className="dropdown">
        <button className = "dropdown-button" >Account▾</button>
        <div className="dropdown-content">
            <div className='dropdown-name-container'><p className = "dropdown-name">{userName}</p></div>
            <div className= "dropdown-profile-wrapper">
            <Link className = "dropdown-profile" to={'/home'}>View Profile</Link>
            </div>
            <a className = 'dropdown-link' href="">Account Settings</a>
            <a className = 'dropdown-link' href= "">Help</a>
            <a className = 'dropdown-link' href="">Log Out</a>
        </div>
    </div>
</div>
         
    
}
export default UserNavbar