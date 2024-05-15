import React, { useState, useEffect } from "react";
function Todo() {
  const [input, setInput] = useState("");
  const [does, setDoes] = useState([]);
  const addingdata = (e) => {
    e.preventDefault();
    setInput("");
    return setDoes([...does, input]);
  };
  const removeNode = (node, index) => {
    console.log(index, node);
    const newItems = does.filter((_, i) => i !== index);
    setDoes(newItems);
  };
  return (
    <div className="middle">
      <h2>Todo List</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="btnadd" onClick={(e) => addingdata(e)}>
        Add
      </button>

      <ul>
        {does.map((item, index) => (
          <div className="flex" key={index}>
            <li>{item}</li>
            <button
              className="del"
              onClick={(e) => removeNode(e.target.parentNode, index)}
            >
              x
            </button>
          </div>
        ))}
      </ul>
      <br />
    </div>
  );
}

export default Todo;
