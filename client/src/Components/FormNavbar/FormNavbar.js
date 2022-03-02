import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './FormNavbar.css'
function RegNavbar () {
    return <div className= "FormNavContainer">
        <div className = "FormNavLogoWrapper">
        <Link to={'/'} className="FormNavLogo">
            Board
        </Link>
        </div>
    
   </div>
    
}
export default RegNavbar
