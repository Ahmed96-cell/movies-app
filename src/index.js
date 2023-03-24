import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import App from "./component/App";
// import Test from "./component/test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
