import React from "react";
import ReactDOM from "react-dom";
import 'typeface-roboto';
import "./index.css";
import App from "./App";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
