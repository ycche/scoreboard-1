import React, { useState, useEffect } from 'react'
import UserBoard from '../Components/UserScreen/userBoard'
import axios from 'axios';
import CreateModal from '../Components/UserScreen/createModal/createModal'
import DeleteModal from '../Components/UserScreen/deleteModal/deleteModal'
import '../Components/UserScreen/user.css'
import { useBoardContext, BoardContextProvider } from '../Components/UserScreen/boardContext'
import { useUserContext } from '../Components/UserScreen/userContext';
import UserSidebar from '../Components/UserScreen/UserSidebar'
import UserNavbar from '../Components/UserScreen/UserNavbar'
function UserPage() { 
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const {boardName, switchBoard} = useBoardContext()
  const {userName, switchName} = useUserContext()
  const openCreateModal = () => {
    setShowCreateModal(true)
  }
  const openDeleteModal = () => {
    setShowDeleteModal(true)
  }
  const [listOfBoards, setListOfBoards] = useState([])
  useEffect(() => {
      let mounted = true
      axios.get('/user').then(data => {
          if(mounted){
              setListOfBoards(data.data)
          }
      })
      axios.get('/user/name').then(data => {
        switchName(data.data[0].user_email)
      })
    return () => mounted = false
  }, [showCreateModal, showDeleteModal, boardName])

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
            <div className = "list-heading-modified">
              Last Modified
            </div>
          </div>
          {listOfBoards.map(item => <UserBoard data={item} openModal = {openDeleteModal}> </UserBoard>)}
          </div>
          </div>
          </div>
          {showCreateModal? <CreateModal setShowModal = {setShowCreateModal}></CreateModal> : null}
          {showDeleteModal? <DeleteModal setShowModal = {setShowDeleteModal}></DeleteModal> : null}
          
      </div>
  )
}

export default UserPage