import React, { useState } from "react";

function Show() {
  const [show, setShow] = useState(true);
  return (
    <div className="middle">
      <button className="btnclick" onClick={() => setShow((show) => !show)}>
        Show/Hide
      </button>
      {show ? <h2>Welcome to Show/Hide Page</h2> : null}
    </div>
  );
}

export default Show;
