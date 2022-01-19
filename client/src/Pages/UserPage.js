import React, { useState, useEffect } from 'react'
import userBoard from '../Components/User/userBoard'
import axios from 'axios';
function UserPage() {
  const [listOfBoards, setListOfBoards] = useState([])
  
  useEffect(() => {
      let mounted = true
      axios.get('/user', ___).then(items => {
          if(mounted){
              setListOfBoards(items)
          }
      })
    return () => mounted = false
  }, [])


  return (
      <div>
          {listOfBoards.map(item => <userBoard data = {item.data}></userBoard>)}
      </div>
  )
}

export default UserPage