import React, { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const MetaPixel = ({ children }) => {
  useEffect(() => {
    ReactPixel.init("r6lg0CsbFMLFz5j7kxv35J"); // Remplacez par votre ID Facebook Pixel
    ReactPixel.pageView();
  }, []);

  return <>{children}</>;
};

export default MetaPixel;
