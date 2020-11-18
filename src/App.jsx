import React from "react";

import { Modal } from './Modal'
import { useTestHook } from "./hook";
import "./index.css";

export default function App() {
  const {
    isOpenModal,
    toggleModal,
    useFormikProps
  } = useTestHook();
  const { handleBlur, handleChange, handleSubmit } = useFormikProps;

  return (
    <div className="App">
      {!isOpenModal && <button type="button" onClick={toggleModal}>Open Modal</button>}
      {isOpenModal && <Modal isOpen={isOpenModal} closeModal={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="firstName"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="lastName"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </Modal>
      }
    </div>
  );
}
