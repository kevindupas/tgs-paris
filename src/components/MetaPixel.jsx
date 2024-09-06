import React, { useEffect } from "react";

const MetaPixel = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `
      !(function (s, a, e, v, n, t, z) {
        if (s.saq) return;
        n = s.saq = function () {
          n.callMethod
            ? n.callMethod.apply(n, arguments)
            : n.queue.push(arguments);
        };
        if (!s._saq) s._saq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "1.0";
        n.queue = [];
        t = a.createElement(e);
        t.async = !0;
        t.src = v;
        z = a.getElementsByTagName(e)[0];
        z.parentNode.insertBefore(t, z);
      })(
        window,
        document,
        "script",
        "https://tags.srv.stackadapt.com/events.js"
      );
      saq("conv", "r6lg0CsbFMLFz5j7kxv35J", {
        revenue: "remplacer",
        "product name": "remplacer",
      });
    `;

    document.body.appendChild(script);

    // Nettoyage si nécessaire
    return () => {
      document.body.removeChild(script);
    };
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
