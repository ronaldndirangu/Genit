import React from "react";
import "./index.scss";

const Button = ({ action, disable }) => {
  return (
    <button
      className="button-primary"
      type="button"
      onClick={e => action(e)}
      disabled={disable}
    >
      Generate
    </button>
  );
};

export default Button;
