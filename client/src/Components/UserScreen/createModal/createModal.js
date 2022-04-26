//Modal.js
import React, { useRef } from "react";
import ReactDom from "react-dom";
import validateInfo from "./validateInfo"
import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./createModal.css"
function CreateModal ({ setShowModal, submitForm }){
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  const useForm = (callback,validateInfo,submitForm) => {
    const [values, setValues] = useState({
      name : '',
    })
    const [errors,setErrors] = useState({
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = e => {
      const {name, value} = e.target
      setValues({
        ...values,
        [name] : value
      })
    }
    const navigate = useNavigate();
    const handleSubmit = e =>{
      setErrors(validateInfo(values))
      e.preventDefault();
      setIsSubmitting(true);
    }
    useEffect(() => {
      if(Object.keys(errors).length === 0 && isSubmitting){
        setIsSubmitting(false)
        axios.post('/user/board/add', values)
          .then(res => {
              setShowModal(false)
              navigate('/home')
          })
          .catch(res => {
          setShowModal(false)
          navigate('/home')})
      }
    },[errors, isSubmitting])
    return {handleChange,values,handleSubmit,errors};
  }

  const {handleChange, values,handleSubmit,errors} = useForm(submitForm, validateInfo, setShowModal);
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h1>Create a New Board</h1>
        <form onSubmit={handleSubmit}>
        <div className = "create-modal-inputs">
                <label htmlFor="name" className = "create-modal-label">
                </label>
                <input type="text" name="name" placeholder = "Name"  className = "LoginInput" onChange={handleChange}>
                </input>
                <div className = "create-modal-submit">
                    <input type="submit" value="Create" className = "create-modal-button"/>
                </div>
        </div>
        </form>
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default CreateModal
