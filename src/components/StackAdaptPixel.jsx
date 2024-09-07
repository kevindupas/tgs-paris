import React, { useEffect } from "react";

const StackAdaptPixel = () => {
  useEffect(() => {
    // Créer et insérer le script du Pixel Meta/Facebook
    const script = document.createElement("script");
    script.async = true;
    script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', 'r6lg0CsbFMLFz5j7kxv35J'); 
      fbq('track', 'PageView');
    `;

    document.body.appendChild(script);

    // Fonction de nettoyage
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src="https://www.facebook.com/tr?id=r6lg0CsbFMLFz5j7kxv35J&ev=PageView&noscript=1"
        alt="Meta Pixel"
      />
    </noscript>
  );
};

export default StackAdaptPixel;
