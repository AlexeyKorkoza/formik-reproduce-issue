import React from "react";
import { useTestHook } from "./hook";
import "./index.css";

export default function App() {
  const { useFormikProps } = useTestHook();
  const { handleBlur, handleChange, handleSubmit } = useFormikProps;

  return (
    <div className="App">
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
    </div>
  );
}
