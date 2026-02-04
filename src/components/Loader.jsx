import React, { useContext } from "react";
import { useSettings } from "../context/ConfigurationContext";
import { URL } from "../utils/config";

function Loader() {
  const { config } = useSettings();
  return (
    <div>
      <div className="fixed w-screen h-screen bg-[url('/dist/images/pattern-dark.jpeg')] flex z-50 inset-0 flex-col items-center justify-center">
        <img
          className="w-96 animate-pulse"
          src={URL + config.logo || "/dist/images/logo.png"}
          alt="logo"
        />
      </div>
    </div>
  );
}

export default Loader;
