import React, { useState, useEffect } from "react";
function Maxcount() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = React.useState(10);
  const [disable, setDisable] = useState(true);
  const incresecount = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds("BOOOOM!");
      setDisable(false);
    }
  });
  return (
    <>
      <div className="middle">
        <h1>Number of Clicks Until Time Expires!!</h1>

        <h3 className="h3">{count}</h3>
        <h2>Time Left : {seconds} seconds</h2>
        {disable && (
          <button onClick={incresecount} className="btn">
            +
          </button>
        )}
      </div>
    </>
  );
}

export default Maxcount;
