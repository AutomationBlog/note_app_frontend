import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './App.jsx'
import wip from "./assets/WIP.jpg";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    <div id="portal">
      <img src={wip} style={{ width: "100%", height: "100%" }} alt="WIP" />
    </div>
  </StrictMode>
);
