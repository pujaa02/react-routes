import React, { useState, useEffect } from "react";

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>Fetchwed Data</h2>
      {data &&
        data.map((item) => {
          return (
            <>
              <h3>{item.userId}</h3>
              <p key={item.id}>{item.title}</p>
              <p>{item.completed}</p>
            </>
          );
        })}
    </div>
  );
}

export default Fetch;
