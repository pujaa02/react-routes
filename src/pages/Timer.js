import React, { useState, useEffect } from "react";


function Timer() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div className="middle">
      <h1>Timer : {count}</h1>
    </div>
  );
}
export default Timer;
// useEffect(() => {
//   //Runs only on the first render
// }, []);

// useEffect(() => {
//   //Runs on the first render
//   //And any time any dependency value changes
// }, [prop, state]);
