import React, { useContext } from "react";
import InputHook from "../hooks/inputHook";
import { userContext } from "../App";

function Form() {
  const [name, inputBinding, resetFunc] = InputHook("");
  const submitHandler = () => {
    resetFunc();
    alert(name);
  };
  const contextString = useContext(userContext);
  console.log("getting context:", contextString);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <span>First Name:</span>
          <input type="text" {...inputBinding} />
        </div>
        <div>
          <span>Last Name:</span>
          <input type="text" />
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
