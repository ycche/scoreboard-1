import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './UserSidebar.css'
function UserSidebar ({openModal}) {
    return <div className = "sidebar">
        <div className = "sidebar-create-wrapper">
        <button className = "sidebar-create" onClick = {openModal}> New Board</button>
        </div>
        <div className = "links-wrapper">
        <a className = "sidebar-link"> Your Boards</a>
        <a className = "sidebar-link"> Archived Boards</a>
        <a className = "sidebar-link"> Deleted Boards</a>
        </div>
    </div>
        
    
}
export default UserSidebar