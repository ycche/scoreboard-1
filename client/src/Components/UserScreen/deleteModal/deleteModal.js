//Modal.js
import React, { useRef } from "react";
import ReactDom from "react-dom";
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./deleteModal.css"
import { useBoardContext } from '../boardContext'
function DeleteModal ({ setShowModal, submitForm, user}){
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const {boardName, switchBoard, boardId, switchBoardId} = useBoardContext()
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  useEffect(() => {
    console.log(boardName)
}, [boardName])

  const navigate = useNavigate();
  const deleteItem = () => {
    axios.delete('/user/board/delete', {data: {id : boardId,}}).then(res => {
      setShowModal(false)
      navigate('/home')
  }) .catch(res => {
      setShowModal(false)
      navigate('/home')})
  }

  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h1>Warning: You are about to delete the following board</h1>
        <h1 className = 'delete-modal-board-name'>{boardName}</h1>

        <div className = "delete-modal-inputs">
        <button type="submit" value="Delete" className='delete-modal-cancel'> Cancel </button>
        <button type="submit" value="Delete" onClick = {deleteItem} className='delete-modal-confirm'> Confirm </button>      
        </div>

      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default DeleteModal
