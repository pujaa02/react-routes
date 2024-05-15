import React, { useState } from "react";
import Progressbar from "./progressbar";

function Progress() {
  const [value, setValue] = useState(15);
  const setval = (e) => {
    setValue(Number(e.target.value));
  };
  return (
    <div className="middle">
      <h1>ProgressBar</h1>
      <Progressbar width={value} />
      <form>
        <label>Input Percentage</label>
        <input className="progress" type="number" onChange={setval} />
      </form>
    </div>
  );
}

export default Progress;
