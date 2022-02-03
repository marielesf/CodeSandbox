import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import HelloWorld from "./classComponent";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <HelloWorld />
  </StrictMode>,
  rootElement
);
