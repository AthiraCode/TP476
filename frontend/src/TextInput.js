import React, { useState } from "react";
import Mediator from "./Mediator";

const TextInput = ({ mediator }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    mediator.notify(this, { type: "inputChange", value: text });
  };

  return <input type="text" value={text} onChange={handleChange} />;
};

export default TextInput;
