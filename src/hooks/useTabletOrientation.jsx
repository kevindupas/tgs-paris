import React, { useEffect, useState } from "react";

const useTabletOrientation = () => {
  const [isTabletPortrait, setIsTabletPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

      // Check if the device is in portrait mode
      const isPortrait = window.innerHeight > window.innerWidth;

      setIsTabletPortrait(isTablet && isPortrait);
    };

    // Initial check
    checkOrientation();

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  return isTabletPortrait;
};

export default useTabletOrientation;
