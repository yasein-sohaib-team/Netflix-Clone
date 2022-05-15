import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const reactRoot = ReactDOM.render(document.getElementById("root"));
//const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  //document.getElementById("root")
);

reportWebVitals();
