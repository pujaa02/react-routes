function Progressbar({ width: inputval }) {
  return (
    <div className="container">
      {inputval >= 0 && inputval <= 100 ? (
        <div className="innerContainer" style={{ width: `${inputval}%` }}>
          {inputval}%
        </div>
      ) : (
        alert("please enter value between 0 to 100")
      )}
    </div>
  );
}

export default Progressbar;
