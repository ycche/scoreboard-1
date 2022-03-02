import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "./userBoard.css"
function UserBoard ({data}) {
  const [show, setShow] = useState(false)
  const handleClick = () => {
      setShow(true)
  }
  return (
      <div className = "user-board">
          <Link to = "/" className = "user-board-link">
                  {data.board_name} 
          </Link>
      </div>
  )
    
}
export default UserBoard
