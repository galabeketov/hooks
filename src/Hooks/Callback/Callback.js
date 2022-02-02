import axios from "axios";
import React, { useCallback, useState } from "react";
import Child from "./Child";

export default function CallBack() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState(0);

  const returnComment = useCallback(
    (name) => {
      console.log("hisoblash");
      return data + name;
    },
    [data]
  );
  const returnComment2 = (name) => {
    console.log("hisoblash");
    return data + name;
  };
  return (
    <div className="App">
      <Child returnComment={returnComment} />
      <button
        className="btn btn-primary"
        onClick={() => setData((prev) => prev + 1)}
      >
        {data}
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
}
