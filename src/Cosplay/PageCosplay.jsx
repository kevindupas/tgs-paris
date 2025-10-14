import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import JuryCosplay from "./JuryCosplay";
import ParticipantsCosplay from "./ParticipantsCosplay";
import CosplayImage from "./CosplayImage";

export default function PageCosplay() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://admin.tgsevenements.fr/api/v1/salons/1/e2c")
      .then((response) => response.json())
      .then((data) => setData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  ReactGA.send({
    hitType: "pageview",
    page: "/coupe-france-cosplay",
    title: "Coupe de france Cosplay",
  });

  if (!data) {
    return (
      <div className="fixed bg-black text-white top-0 left-0 h-full w-full flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <section className="bg-[#e7e2d8] pt-32 pb-12 px-10">
      <div className="text-center">
        <h1 className="font-oswald text-5xl uppercase p-2">
          {data.content.title}
          {/* Coupe de france de cosplay 2025 ! */}
        </h1>
        <h2 className="text-2xl p-3">
          <div dangerouslySetInnerHTML={{ __html: data.content.text }} />
          {/* Le festival accueille la grande finale de la 7ème saison de la
          compétition rassemblant 27 candidat(e)s sélectionné(e)s dans toute la
          France qui s'affronteront sur la grande scène du Japan Tours Festival
          devant 6 000 spectateurs et un jury d'exception. */}
        </h2>
      </div>

      <JuryCosplay jury={data.jury} />

      <ParticipantsCosplay participants={data.participants} />

      <CosplayImage />
    </section>
  );
}
