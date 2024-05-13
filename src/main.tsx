import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!, {
  onUncaughtError: (error, errorInfo) => {
    // ... log error report
    console.log("onUncaughtError");
    console.log(error);
    console.error(errorInfo);
  },
  onCaughtError: (error, errorInfo) => {
    // ... log error report
    console.log("onCaughtError");
    console.log(error);
    console.error(errorInfo);
  },
}).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
