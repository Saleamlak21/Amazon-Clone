import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./component/context/StateProvider";
import Reducer, { initialState } from "./component/context/Reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={Reducer}>
        <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
