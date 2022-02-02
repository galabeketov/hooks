import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import State from "./Hooks/State";
import Effect from "./Hooks/Effect";
import Ref from "./Hooks/Ref";
import Context from "./Hooks/Context/Context";
import Memo from "./Hooks/Memo";
import CallBack from "./Hooks/Callback/Callback";
import Reducer from "./Hooks/Reducer";
import useEventListenerPage from "./Hooks/useEventListener";
import TextInputWithFocusButton from "./Hooks/Test";
class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <State />
        <Effect />
        <Ref />
        <Context />
        <Memo />
        <CallBack />
        <Reducer />
        <useEventListenerPage />
        <div className="mt-5">
          <TextInputWithFocusButton />
        </div>
      </div>
    );
  }
}

export default App;
