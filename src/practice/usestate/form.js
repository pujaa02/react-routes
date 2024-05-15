import React, { useState } from "react";
function Form() {
  const initialval = {
    username: "",
    fullname: "",
    age: "",
  };
  const [data, setData] = useState(initialval);
  const [display, setDisplay] = useState(false);
  const submitform = (e) => {
    e.preventDefault();
    setDisplay(true);
  };
  const changeval = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  return (
    <div className="middle">
      <h1>Form</h1>
      <form onSubmit={submitform} className="form">
        <label htmlFor="uname">UserName : </label>
        <input
          id="uname"
          name="username"
          value={data.username || ""}
          type="text"
          onChange={changeval}
        />{" "}
        <br />
        <label htmlFor="fname">FullName : </label>
        <input
          id="fname"
          name="fullname"
          value={data.fullname || ""}
          type="text"
          onChange={changeval}
        />{" "}
        <br />
        <label htmlFor="age">Age : </label>
        <input
          id="age"
          name="age"
          value={data.age || ""}
          type="number"
          onChange={changeval}
        />{" "}
        <br />
        <button className="btnclick">Submit</button>
      </form>
      {display && (
        <>
          <h3>UserName : {data.username}</h3>
          <h3>FullName : {data.fullname}</h3>
          <h3>Age : {data.age}</h3>
        </>
      )}
    </div>
  );
}

export default Form;
