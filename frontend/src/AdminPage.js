import React, { useEffect } from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import Mediator from "./Mediator";

const AdminPage = () => {
  const mediator = new Mediator();

  useEffect(() => {
    // Register components with the mediator
    mediator.registerComponent(TextInput);
    mediator.registerComponent(Button);
  }, []);

  return (
    <div>
      <h2>Donut Admin Page</h2>
      <TextInput mediator={mediator} />
      <Button mediator={mediator} />
    </div>
  );
};

export default AdminPage;
