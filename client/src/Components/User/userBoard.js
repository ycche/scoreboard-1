import React, {useState} from 'react'

const userBoard = (data) => {
  const [show, setShow] = useState(false)

  return (
      <div>
          <a href = "">
              <div>
                  {data.boardName}
                  <button type = "button" onClick = {setShow(true)}>
                      Show Settings
                  </button>
              </div>

          </a>
          {show ? <Modal/> : null}
      </div>
  )
    
}

export default RegisterSection
