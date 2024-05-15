import React, { useState } from "react";

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const start = () => {
    window.myTimer = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stop = () => {
    clearInterval(window.myTimer);
  };
  const reset = () => {
    clearInterval(window.myTimer);
    setTimer(0);
  };
  return (
    <div className="middle">
      <h1>Timer</h1>
      <h3>
        <span>{Math.trunc(timer / 60)} mins </span>
        <span>{timer % 60} secs</span>
      </h3>
      <button className="btn" onClick={start}>
        Start
      </button>
      <button className="btn" onClick={stop}>
        Stop
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
