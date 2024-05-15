import React, { useState, useEffect, useRef } from "react";

function Inputref() {
  const [input, setInput] = useState("");
  const count = useRef(0);
  const inputvalue = useRef();
  const previousInputValue = useRef("");

  const focusinput = () => {
    inputvalue.current.focus();
  };

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className="middle">
      <h1>useRef Example</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Current input : {input}</h3>
      <h3>Current count is : {count.current}</h3>
      <br />
      <input type="text" ref={inputvalue} />
      <button className="btn" onClick={focusinput}>
        Focus Input
      </button>
    </div>
  );
}

export default Inputref;
