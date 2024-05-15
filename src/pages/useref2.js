import React, { useState, useEffect, useRef } from "react";

function Inputref2() {
  const [input, setInput] = useState("");
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = input;
  }, [input]);

  return (
    <div className="middle">
      <h1>useRef Example</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h3>Current input : {input}</h3>
      <h3>Previous input : {previousInputValue.current}</h3>
    </div>
  );
}

export default Inputref2;
