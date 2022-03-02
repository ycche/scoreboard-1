//Modal.js
import React, { useRef } from "react";
import ReactDom from "react-dom";
import "./createModal.css"
function Modal ({ setShowModal }){
  // close the modal when clicking outside the modal.
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <h1>Create a New Board</h1>
        <form>
        <div className = "create-modal-inputs">
                <label htmlFor="email" className = "create-modal-label">
                </label>
                <input type="text" name="email" placeholder = "Name"  className = "LoginInput">
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

export default Modal
