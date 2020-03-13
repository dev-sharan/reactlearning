import "core-js";
import "regenerator-runtime/runtime";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./components/home/home";
import "./styles/global.scss";

ReactDOM.render(
  <div>
    <Home name="Max" />
  </div>,
  document.getElementById("app"),
);