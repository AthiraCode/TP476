import React from "react";
import Mediator from "./Mediator";

const Button = ({ mediator }) => {
  const handleClick = () => {
    mediator.notify(this, { type: "buttonClick" });
  };

  return <button onClick={handleClick}>Submit</button>;
};

export default Button;
