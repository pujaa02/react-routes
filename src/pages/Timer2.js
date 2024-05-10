import React, { useState, useEffect } from "react";
import "./App.css";

function Timer2() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  useEffect(() => {
      //   setCount((count) => count + 1);
      setCalculation(()=>count*2)
  },[count]);
  return (
    <div class="middle">
      <h2>Count : {count}</h2>
      <button class="btn" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <h2>calculation : {calculation}</h2>
    </div>
  );
}
export default Timer2;
