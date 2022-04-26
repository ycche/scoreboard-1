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
                  {data.board_name}
                  Blaise 
                  <img src="../../Images/delete_black_24dp.svg" alt="L"></img>
          </a>
      </div>
  )
    
}
export default UserBoard
