import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./infoSection.css"
function InfoSection () {
    return (
        <div className= "InfoSectionWrapper">
            <div className = "ContentSectionWrapper">
                <div className = "TextContentWrapper">
                    <div className = "TextHeadingWrapper">
                        <h1 className = "TextHeading">
                            Behold, the marvels of the universe.
                        </h1>
                    </div>
                    <div className = "TextSubheadingWrapper">
                        <h2 className = "TextSubheading">
                            The vast wonders of the universe are well beholden. Beholden is the universe of the people.
                        </h2>
                    </div>
                    <div className = "ContentButtonWrapper">
                        <Link to ={'/register'} className = "ContentButton">
                            Register for free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
    
}
export default InfoSection
