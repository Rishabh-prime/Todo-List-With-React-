import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        // onClick={() => {
        //     props.onAdd(inputText);
        //      setInputText("");
        // }}
        onClick={() => {
          props.onAdd(inputText);
          setInputText("");
          // ye input text curent array item ko refer ker raha hai inputput text vo hai jo user likehga
          //const [inputText, setInputText] = useState("");
          // app wale section humne inputText as parameter pass kiya hai function addItem(inputText) {
          // setItems((prevItems) => {
          //return [...prevItems, inputText];
          // });
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
