import React from "react";
import { useState } from "react";

const form = () => {
  const [inputText, setInputText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setInputText(e.target.children[0].value);
  };

  return (
    <form onSubmit={onSubmit} action="">
      <input type="text" />
      <button>Print text</button>
      <h1>{inputText}</h1>
    </form>
  );
};

export default form;
