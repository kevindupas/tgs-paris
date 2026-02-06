/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { useSettings } from "../../context/ConfigurationContext";
import { URL } from "../../utils/config";
import persofeminin from "../../../public/dist/images/perso-feminin2.png";

const StatItem = ({ value, label }) => (
  <div className="flex flex-col items-start p-4 border-l-4 border-white/30 hover:border-white transition-colors duration-300">
    <span className="font-oswald text-[40px] lg:text-[45px] font-bold leading-none text-[#1a1a1a]">
      {value}
    </span>
    <span className="font-oswald text-xl lg:text-2xl font-medium text-white uppercase tracking-wide mt-1">
      {label}
    </span>
  </div>
);

const SalonSideVisual = ({ config }) => (
  <div
    className="relative bg-cover bg-center min-h-[500px] h-full flex flex-col justify-center overflow-hidden"
    style={{
      backgroundImage: `url(${URL + config.salon_pop_culture_image})`,
       backgroundPosition: "center top"
    }}
  >
    {/* Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-black/10" />

    <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 lg:py-24 flex flex-col items-center lg:items-start justify-center h-full">
      <Slide triggerOnce>
        <div className="relative mb-8 lg:mb-12 self-start lg:-ml-12">
           {/* Stylized Title Box */}
          <div className="bg-[#3c315c] text-[#E97665] border-4 border-white p-6 rounded-tr-3xl rounded-bl-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] transform -rotate-1">
            <h1 className="font-oswald text-5xl lg:text-7xl leading-[0.9] uppercase tracking-wide">
              Le Salon de <br />
              <span className="text-white">la Pop Culture</span>
            </h1>
          </div>
        </div>
      </Slide>

      {/* Footer Image Container */}
      <div className="w-full max-w-md lg:max-w-lg shadow-2xl rounded-2xl overflow-hidden border-4 border-white transform hover:scale-[1.02] transition-transform duration-500 mt-4 lg:mt-8">
        <img
          className="w-full h-auto object-cover"
          src={URL + config.footer_image}
          alt="MEETT - Parc des Expositions"
        />
      </div>
    </div>

    {/* Edition Tag - Fixed Cropping */}
    <div className="absolute top-0 right-0 w-48 h-48 overflow-hidden z-20 pointer-events-none">
      <div
        className={clsx(
          "absolute top-[32px] -right-[42px] w-[200px] transform rotate-[45deg] text-center text-white font-oswald font-bold py-2 text-xl shadow-lg uppercase tracking-wider",
          !config.edition_color && "bg-[#E97665]"
        )}
        style={{ backgroundColor: config.edition_color || undefined }}
      >
        {config.edition}
      </div>
    </div>
  </div>
);

const SalonSideStats = ({ config }) => (
  <div className="bg-[#2aade5] relative flex flex-col justify-center min-h-[600px] overflow-hidden">
     {/* Decorative background element */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-white rounded-full blur-3xl mix-blend-overlay"></div>
    </div>

    <div className="relative z-10 w-full px-8 lg:px-16 py-12 flex flex-col h-full justify-center">
        <Slide direction="right" triggerOnce cascade damping={0.2}>
            
            <div className="mb-12">
                <h2 className="font-oswald text-6xl lg:text-[80px] uppercase text-white leading-[0.85] drop-shadow-sm">
                  À Découvrir
                </h2>
                <div className="w-24 h-2 bg-[#1a1a1a] mt-6 rounded-r-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-8 w-full lg:max-w-xl z-10 mb-14">
                <StatItem value={config.halls} label="Surface (m²)" />
                <StatItem value={config.exposants} label="Stands" />
                <StatItem value={config.scenes} label="Scènes" />
            </div>

            <div className="z-20">
                <a
                  href="https://photos.tgs-paris.fr"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 bg-white text-[#2aade5] font-oswald text-2xl uppercase font-bold py-4 px-10 rounded-xl border-4 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl"
                >
                  <span>Accéder à la galerie</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6 transform group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
            </div>

        </Slide>
    </div>

    {/* Mascot - Cleanly integrated at the bottom right */}
    <div className="absolute bottom-0 right-0 z-0 pointer-events-none translate-y-4 lg:translate-x-4">
        <img
        src={persofeminin}
        alt="Personnage TGS"
        className="w-[300px] lg:w-[500px] object-contain drop-shadow-2xl"
        />
    </div>
  </div>
);

export default function Salon() {
  const { config } = useSettings();

  if (!config || Object.entries(config).length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <SalonSideVisual config={config} />
      <SalonSideStats config={config} />
    </div>
  );
}
