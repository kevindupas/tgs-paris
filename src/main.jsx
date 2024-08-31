import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigurationProvider } from "./context/ConfigurationContext";
import { LoaderProvider } from "./context/LoaderContext";
import "./index.css";
import Routing from "./Routing";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigurationProvider>
      <LoaderProvider>
        <Routing />
      </LoaderProvider>
    </ConfigurationProvider>
  </React.StrictMode>
);
