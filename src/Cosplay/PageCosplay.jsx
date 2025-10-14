import React from 'react'
import ReactGA from "react-ga4";
import JuryCosplay from "./JuryCosplay";
import ParticipantsCosplay from './ParticipantsCosplay';
import CosplayImage from './CosplayImage';

export default function PageCosplay() {
  ReactGA.send({
    hitType: "pageview",
    page: "/coupe-france-cosplay",
    title: "Coupe de france Cosplay",
  });

  return (
    <section className="bg-[#e7e2d8] pt-32 pb-12 px-10">
      <div className="text-center">
        <h1 className='font-oswald text-5xl uppercase p-2'>Coupe de france de cosplay 2025 !</h1>
        <h2 className='text-2xl p-3'>Le festival accueille la grande finale de la 7ème saison de la compétition rassemblant 27 candidat(e)s sélectionné(e)s dans toute la France qui s'affronteront sur la grande scène du Japan Tours Festival devant 6 000 spectateurs et un jury d'exception.</h2>
      </div>

        <JuryCosplay />

        <ParticipantsCosplay/>

        <CosplayImage />
    </section>
  );
}
