/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { useSettings } from "../../context/ConfigurationContext";
import { URL } from "../../utils/config";

const StatItemMobile = ({ value, label }) => (
  <div className="flex flex-col items-center justify-center p-3 border border-white/20 rounded bg-white/5 backdrop-blur-sm">
    <span className="font-oswald text-3xl font-bold leading-none text-white drop-shadow-md">
      {value}
    </span>
    <span className="font-oswald text-sm font-medium text-white/90 uppercase tracking-wide mt-1">
      {label}
    </span>
  </div>
);

const SalonMobileVisual = ({ config }) => (
  <div className="relative w-full overflow-hidden">
    {/* Background Image Container */}
    <div
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{
        backgroundImage: `url(${URL + config.salon_pop_culture_image})`,
      }}
    />
    <div className="absolute inset-0 bg-black/30 z-0" />

    <div className="relative z-10 px-4 py-12 flex flex-col items-center">
      <Slide direction="down" triggerOnce>
        {/* Title Box */}
        <div className="bg-[#3c315c] text-[#E97665] border-2 border-white p-4 rounded-tr-xl rounded-bl-xl shadow-lg transform -rotate-1 mb-8 max-w-[90%]">
          <h1 className="font-oswald text-4xl leading-[0.9] uppercase tracking-wide text-center">
            Le Salon de <br />
            <span className="text-white">la Pop Culture</span>
          </h1>
        </div>

        {/* Footer Image */}
        <div className="w-full max-w-sm shadow-2xl rounded-lg overflow-hidden border-2 border-white">
          <img
            className="w-full h-auto object-cover"
            src={URL + config.footer_image}
            alt="MEETT - Parc des Expositions"
          />
        </div>
      </Slide>
    </div>

    {/* Edition Tag - Increased size to avoid cropping */}
    <div className="absolute top-0 right-0 w-40 h-40 overflow-hidden z-20 pointer-events-none">
      <div
        className={clsx(
          "absolute top-[28px] -right-[35px] w-[160px] transform rotate-[45deg] text-center text-white font-oswald font-bold py-1.5 text-sm shadow-md uppercase tracking-wider",
          !config.edition_color && "bg-[#E97665]"
        )}
        style={{ backgroundColor: config.edition_color || undefined }}
      >
        {config.edition}
      </div>
    </div>
  </div>
);

const SalonMobileStats = ({ config }) => (
  <div className="bg-[#2aade5] relative flex flex-col overflow-hidden pt-10 pb-0">
     {/* Decorative background */}
    <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -right-10 -top-10 w-64 h-64 bg-white rounded-full blur-2xl mix-blend-overlay"></div>
    </div>

    <div className="relative z-10 px-6 flex flex-col flex-grow">
        <Slide direction="up" triggerOnce cascade damping={0.2}>
            
            <div className="mb-8 text-center">
                <h2 className="font-oswald text-5xl uppercase text-white leading-[0.85] drop-shadow-sm">
                  À Découvrir
                </h2>
                <div className="w-16 h-1.5 bg-[#1a1a1a] mt-4 mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-3 gap-3 w-full mb-8">
                <StatItemMobile value={config.halls} label="m²" />
                <StatItemMobile value={config.exposants} label="Stands" />
                <StatItemMobile value={config.scenes} label="Scènes" />
            </div>

            {/* Bottom Area: Interaction */}
            <div className="relative w-full flex flex-col items-center mt-auto pb-12">
                 <div className="z-20">
                     <a
                      href="https://photos.tgs-paris.fr"
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2 bg-white text-[#2aade5] font-oswald text-xl uppercase font-bold py-3 px-8 rounded-lg border-4 border-transparent hover:border-white hover:bg-transparent hover:text-white transition-all duration-300 shadow-xl whitespace-nowrap"
                    >
                      <span>Accéder à la galerie</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 transform group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                </div>
            </div>

        </Slide>
    </div>
  </div>
);

export default function SalonMobile() {
  const { config } = useSettings();

  if (!config || Object.entries(config).length === 0) return null;

  return (
    <div className="flex flex-col w-full">
      <SalonMobileVisual config={config} />
      <SalonMobileStats config={config} />
    </div>
  );
}
