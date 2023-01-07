import { useState } from "react";

function InputHook(initialValue) {
  const [name, setName] = useState(initialValue);
  const reset = (e) => {
    e.preventDefault();
    setName(initialValue);
  };
  const bind = {
    name,
    onChange: (e) => e.target.value,
  };
  return [name, bind, reset];
}

export default InputHook;
