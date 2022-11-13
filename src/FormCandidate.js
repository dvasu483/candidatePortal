import React from "react";
import { useState } from "react";

function FormCandidate({ addCandidate, showModal, setShowModal }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addCandidate(value);
    setValue("");
  };

  const close = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span onClick={close} className="close">
          &times;
        </span>
        <form className="form" onSubmit={handleSubmit}>
          <h3>ADD CANDIDATE</h3>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Name of the candidate"
            />
          </div>
          <button
            type="submit"
            style={{
              color: "white",
              backgroundColor: "#6facbe",
              border: "none",
              marginTop: "20px"
            }}
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCandidate;
