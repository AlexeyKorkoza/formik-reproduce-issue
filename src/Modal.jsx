import React from "react";

import './Modal.css';

export const Modal = ({ children, closeModal, isOpen }) => {
  return (
    <div className="modal" style={{ display: isOpen ? "block": "none" }}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  )
}