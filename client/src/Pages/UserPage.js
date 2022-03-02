import React, { useState, useEffect } from 'react'
import UserBoard from '../Components/UserScreen/userBoard'
import axios from 'axios';
import Modal from '../Components/UserScreen/createModal/createModal'
import '../Components/UserScreen/user.css'
import UserSidebar from '../Components/UserScreen/UserSidebar'
import UserNavbar from '../Components/UserScreen/UserNavbar'
function UserPage() {
  const [listOfBoards, setListOfBoards] = useState([])
  useEffect(() => {
      let mounted = true
      axios.get('/user').then(data => {
          console.log(data.data)
          if(mounted){
              setListOfBoards(data.data)
          }
      })
    return () => mounted = false
  }, [])

  const [showCreateModal, setShowCreateModal] = useState(false)
  const openCreateModal = () => {
    setShowCreateModal(true)
  }
  return (
      <div className = "userPage">
          <UserNavbar></UserNavbar>
          <div className = "userContent">
            <UserSidebar openModal = {openCreateModal}></UserSidebar>
          <div className = "list-container">
          <div className = "list-wrapper">
          <div className = "list-heading">
            <p className = "list-heading-title">
              Title
            </p>
            <p className = "list-heading-owner">
              Owner
            </p>
            <p className = "list-heading-modified">
              Last Modified
            </p>
          </div>
          {listOfBoards.map(item => <UserBoard data={item}> </UserBoard>)}
          </div>
          </div>
          </div>
          {showCreateModal? <Modal setShowModal = {setShowCreateModal}></Modal> : null}
      </div>
  )
}

export default UserPage