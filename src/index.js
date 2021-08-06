import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ButtonStateProvider } from "./context/buttonStateContext";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ButtonStateProvider>
      <App />
    </ButtonStateProvider>
  </StrictMode>,
  rootElement
);
