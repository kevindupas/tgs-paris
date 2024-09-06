import { addScriptDefault, setup } from "meta-pixel";
import React from "react";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { ConfigurationProvider } from "./context/ConfigurationContext";
import { LoaderProvider } from "./context/LoaderContext";
import "./index.css";
import Routing from "./Routing";

const TRACKING_ID = "G-TKTPJYEGVD";
ReactGA.initialize(TRACKING_ID);

const META_PIXEL_ID = "r6lg0CsbFMLFz5j7kxv35J";

// Initialisation de Meta Pixel
const fbq = addScriptDefault();
const { $fbq } = setup(fbq).init(META_PIXEL_ID).pageView();

const App = () => {
  React.useEffect(() => {
    ReactGA.send("pageview");
    $fbq("track", "PageView");
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

// Exportez fbq pour l'utiliser dans d'autres parties de votre application si nécessaire
export { fbq };
