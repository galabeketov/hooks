import React, { useRef } from "react";
function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` указывает на смонтированный элемент `input`
    inputEl.current.focus();
  };
  return (
    <div>
      <input className="form-control" ref={inputEl} type="text" />
      <button className="btn btn-primary" onClick={onButtonClick}>
        focus to input
      </button>
    </div>
  );
}
export default TextInputWithFocusButton;
