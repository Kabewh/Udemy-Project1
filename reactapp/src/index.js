import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { Navigation } from "./context/Navigation";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="wrapper flex flex-row">
    <Navigation>
      <App />
    </Navigation>
  </div>
);
