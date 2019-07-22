import React from "react";
import "./index.scss";

const Input = ({ action, value }) => {
  return (
    <input
      className="input"
      value={value}
      placeholder="Enter amount to be generated"
      onChange={e => action(e)}
    />
  );
};

export default Input;
