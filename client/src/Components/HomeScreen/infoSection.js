import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./infoSection.css"
import noteImage from "../../Images/notes.svg"
function InfoSection () {
    return (

        <div className= "InfoSectionWrapper">
            <div className = "ContentSectionWrapper">
                <div className = "TextContentWrapper">
                    <div className = "TextHeadingWrapper">
                        <h1 className = "TextHeading">
                            Notes and Progress - Made as accessible as possible
                        </h1>
                    </div>
                    <div className = "TextSubheadingWrapper">
                        <h2 className = "TextSubheading">
                            No more forgetting. Board provides the easiest way to track progress 
                            on all of your goals.
                        </h2>
                    </div>
                    <div className = "ContentButtonWrapper">
                        <Link to ={'/register'} className = "ContentButton">
                            Register for free
                        </Link>
                    </div>
                </div>
            </div>
            <div className='info-image-wrapper'>
            <img className = 'info-image' src={noteImage} alt = "svg" />
        </div>
        </div>


    )
    
}
export default InfoSection
