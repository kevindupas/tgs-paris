import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { ConfigurationProvider } from "./context/ConfigurationContext";
import { LoaderProvider } from "./context/LoaderContext";
import "./index.css";
import Routing from "./Routing";

const TRACKING_ID = "G-TKTPJYEGVD";
ReactGA.initialize(TRACKING_ID);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigurationProvider>
      <LoaderProvider>
        <Routing />
      </LoaderProvider>
    </ConfigurationProvider>
  </React.StrictMode>
);
