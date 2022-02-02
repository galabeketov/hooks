import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  console.log("complexCompute");
  let i = 0;
  while (i < 1000000000) i++;
  return num * 2;
}

function Memo() {
  const [number, setNumber] = useState(42);
  const [colored, setColored] = useState(false);

  const styles = useMemo(
    () => ({
      color: colored ? "darkred" : "black",
    }),
    [colored]
  );

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  useEffect(() => {
    console.log("Styles changed");
    console.log(number);
  }, [styles]);

  return (
    <div className="mt-5">
      <p>useMemo</p>
      <h1 style={styles}>Summa: {computed}</h1>
      <button
        className={"btn btn-success"}
        onClick={() => setNumber((prev) => prev + 1)}
      >
        Plus
      </button>
      <button
        className={"btn btn-danger"}
        onClick={() => setNumber((prev) => prev - 1)}
      >
        Minus
      </button>
      <button
        className={"btn btn-warning"}
        onClick={() => setColored((prev) => !prev)}
      >
        Change
      </button>
    </div>
  );
}

export default Memo;
