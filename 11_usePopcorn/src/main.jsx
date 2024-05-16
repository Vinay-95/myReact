import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
import Stars from "./Stars";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Stars starSize={5} size={24} color="red" />
    <Stars starSize={10} size={49} color="purple" />
  </React.StrictMode>
);
