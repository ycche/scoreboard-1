import React, {useState} from 'react'
import Modal from "./modal"
function UserBoard ({data}) {
  const [show, setShow] = useState(false)
  const handleClick = () => {
      setShow(true)
  }
  return (
      <div>
          <a href = "">
              <div>
                  {data.board_name}
                  <button type = "button" onClick = {handleClick}>
                      Show Settings
                  </button>
              </div>

          </a>
      </div>
  )
    
}
export default UserBoard
