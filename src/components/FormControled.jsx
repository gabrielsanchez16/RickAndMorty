import React from "react";
import { useState } from "react";

const FormControled = () => {
  const [inputText, setInputText] = useState("");

  const onChangeImput = (e) => {
    setInputText(e.target.value);
    if (e.target.value.length > 10) {
      setInputText("");
    }
  };

  return (
    <form>
      <input value={inputText} type="text" onChange={onChangeImput} />
      <h1>{inputText}</h1>
    </form>
  );
};

export default FormControled;
