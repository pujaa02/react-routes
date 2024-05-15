//using hook
import React, { useState } from "react";


function Changecolor() {
  const [colour, setColour] = useState("black");

  return (
    <div class="middle">
      <h1 id="countdown" style={{ color: colour }}>
        Current color is : {colour}
      </h1>
      <button
        class="btn"
        style={{ backgroundColor: "red" }}
        onClick={() => setColour("red")}
      >
        Red
      </button>
      <button
        class="btn"
        style={{ backgroundColor: "green" }}
        onClick={() => setColour("green")}
      >
        Green
      </button>
      <button
        class="btn"
        style={{ backgroundColor: "blue" }}
        onClick={() => setColour("blue")}
      >
        Blue
      </button>
      <button
        class="btn"
        style={{ backgroundColor: "pink" }}
        onClick={() => setColour("pink")}
      >
        Pink
      </button>
      <button
        class="btn"
        style={{ backgroundColor: "yellow" }}
        onClick={() => setColour("yellow")}
      >
        Yellow
      </button>
    </div>
  );
}

export default Changecolor;
