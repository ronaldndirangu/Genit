import React from "react";
import Input from "../Input";
import Button from "../Button";
import "./index.scss";

const Sidebar = ({ handleChange, handleClick, amount, disable }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-text">
        Generate upto 10,000 random phone numbers
      </div>
      <Input action={handleChange} value={amount || ""} />
      <Button action={handleClick} disable={disable} />
    </div>
  );
};

export default Sidebar;
