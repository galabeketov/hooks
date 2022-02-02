import React, { useEffect, useState } from "react";
import axios from "axios";
function Effect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[count].email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [count]);
  return (
    <div>
      <p className="text-center fw-bold">useEffect</p>
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        class="btn btn-primary me-3"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Plus
      </button>
      <button
        class="btn btn-primary"
        onClick={() => {
          setCount(count - 1 > 0 ? count - 1 : 0);
        }}
      >
        Minus
      </button>
    </div>
  );
}
export default Effect;
