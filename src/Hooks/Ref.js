import React, { useRef } from "react";

function Ref() {
  const inputRef = useRef(null);

  const onClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    // console.log();
  };
  return (
    <div className="mt-5">
      <h1>useRef</h1>
      <div className="d-flex align-items-center">
        <input
          type="text"
          className="form-control"
          placeholder="Ex..."
          ref={inputRef}
        />
        <button className="btn btn-primary" onClick={onClick}>
          click
        </button>
      </div>
    </div>
  );
}

export default Ref;
