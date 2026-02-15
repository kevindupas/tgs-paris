import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PIXEL_ID = "333925680502013";

const FacebookPixel = () => {
  const location = useLocation();

  useEffect(() => {
    // Manually inject Facebook Pixel script
    if (!window.fbq) {
      (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js"
      );
    }

    // Initialize the specific pixel
    window.fbq("init", PIXEL_ID);
  }, []);

  useEffect(() => {
    // Track PageView on route change
    // We use a timeout to ensure init has processed if it was just added, 
    // although fbq queue handles this automatically.
    if (window.fbq) {
      window.fbq("track", "PageView");
    }
  }, [location]);

  return null;
};

export default FacebookPixel;
