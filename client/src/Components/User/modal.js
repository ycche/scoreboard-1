import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import FocusTrap from 'focus-trap-react';
const Modal = (onClickOutside, closeModal, onKeyDown, onSubmit) => {
  return (
    ReactDOM.createPortal(
        <FocusTrap>
              <aside
                tag="aside"
                role="dialog"
                tabIndex="-1"
                className="modal-cover"
                onClick={onClickOutside}
                onKeyDown={onKeyDown}>
                    <div>
                        Modal Area
                        <button onClick={closeModal}>
                
                        </button>
                    </div>
              </aside>
        </FocusTrap>
    )
  )
    
}

export default Modal