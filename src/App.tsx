// global dependencies
import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("Start");
  return <h1>My SWC App</h1>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
