import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { DragDropProvider } from "./Providers/DragDropProvider";

ReactDOM.render(
  <React.StrictMode>
    <DragDropProvider>
      <App />
    </DragDropProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
