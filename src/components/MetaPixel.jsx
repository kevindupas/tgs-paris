import React, { useEffect } from "react";
import useScript from "../utils/useScript";

const MetaPixel = () => {
  // Utiliser le hook pour charger le script
  useScript("https://tags.srv.stackadapt.com/events.js");

  useEffect(() => {
    // Initialiser saq une fois le script chargé
    if (!window.saq) {
      window.saq = function () {
        window.saq.callMethod
          ? window.saq.callMethod.apply(window.saq, arguments)
          : window.saq.queue.push(arguments);
      };
      window.saq.queue = [];
      window.saq.loaded = true;
      window.saq.version = "1.0";
    }
    window.saq("conv", "r6lg0CsbFMLFz5j7kxv35J", {
      revenue: "remplacer",
      "product name": "remplacer",
    });
  }, []);

  return (
    <noscript>
      <img
        src="https://tags.srv.stackadapt.com/conv?cid=r6lg0CsbFMLFz5j7kxv35J&sa_conv_data_revenue=remplacer&sa_conv_data_product%20name=remplacer"
        width="1"
        height="1"
        alt="StackAdapt"
      />
    </noscript>
  );
};

export default MetaPixel;
