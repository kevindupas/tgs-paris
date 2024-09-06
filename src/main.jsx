import React from "react";
import ReactDOM from "react-dom/client";
import ReactPixel from "react-facebook-pixel";
import ReactGA from "react-ga4";
import { ConfigurationProvider } from "./context/ConfigurationContext";
import { LoaderProvider } from "./context/LoaderContext";
import "./index.css";
import Routing from "./Routing";

const TRACKING_ID = "G-TKTPJYEGVD";
ReactGA.initialize(TRACKING_ID);

const FB_PIXEL_ID = "r6lg0CsbFMLFz5j7kxv35J";
ReactPixel.init(FB_PIXEL_ID);

const App = () => {
  React.useEffect(() => {
    ReactGA.send("pageview");
    ReactPixel.pageView();
  }, []);

  return (
    <ConfigurationProvider>
      <LoaderProvider>
        <Routing />
      </LoaderProvider>
    </ConfigurationProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
