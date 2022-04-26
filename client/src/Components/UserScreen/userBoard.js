import React, {useContext} from 'react'
import { useBoardContext } from './boardContext'
import {Link} from 'react-router-dom'
import "./userBoard.css"
function UserBoard ({data, openModal}) {
  const {boardName, switchBoard, boardId, switchBoardId} = useBoardContext()
  const handleClick = () => {
      switchBoard(data.board_name)
      switchBoardId(data.board_id)
      openModal()
  }
  return (
      <div className = "user-board">
          <Link to = "/" className = "user-board-link">
                  {data.board_name} 
          </Link>
          <div className = "user-board-owner-wrapper">
          <p className = "user-board-owner">
              Test
          </p>
          </div>
          <div className = "user-board-date-wrapper">
          <p>
              {data.date_last_modified.substring(0, 10)}
          </p>
          </div>
          <div className= "icon-button-wrapper">
          <button className = "icon-button">
          <i class="material-icons">settings</i>
          </button>
          </div>
          <div className= "icon-button-wrapper">
          <button className = "icon-button" onClick = {handleClick}>
          <i class="material-icons">delete</i>
          </button>
          </div>
      </div>
  )
    
}
export default UserBoard
