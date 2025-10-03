/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from "clsx";
import React from "react";
import { Slide } from "react-awesome-reveal";
import { useSettings } from "../../context/ConfigurationContext";
import { URL } from "../../utils/config";
import persofeminin from "../../../public/dist/images/perso-feminin.png";

export default function Salon() {
  const { config } = useSettings();

  if (!config || Object.entries(config).length === 0) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div
        className="bg-cover flex items-end justify-end"
        style={{
          backgroundImage: `url(${URL + config.salon_pop_culture_image})`,
        }}
      >
        <div className="relative isolate overflow-hidden">
          <div className="max-w-7xl pt-10 pb-24 sm:pb-32 lg:py-36">
            <div className="mt-20 sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0">
              <Slide triggerOnce>
                <h1 className="font-oswald absolute tracking-[0.566667px] text-5xl leading-[.95] w-[450px] left-8 -top-12 uppercase text-[#E97665] border-4 border-white rounded-3xl bg-[#3c315c] p-3">
                  LE SALON DE <br />
                  <span> LA POP CULTURE</span>
                </h1>
              </Slide>
              <div className="shadow-lg md:rounded-3xl">
                <img
                  className="h-[470px] overflow-hidden lg:max-w-max"
                  src={URL + config.footer_image}
                  alt="MEETT - Parc des Expositions et Centre de Conventions de Toulouse Métropole"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-full h-full overflow-hidden z-10">
          <div className="absolute right-0 bottom-0 h-28 w-28">
            <div
              className={clsx(
                "absolute -left-32 top-0 w-[300px] transform -rotate-[45deg] shadow-lg text-center text-white font-oswald font-bold py-1 uppercase",
                config.edition_color === null && "bg-[#E97665]"
              )}
              style={{ backgroundColor: config.edition_color }}
            >
              {config.edition}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2aade5] flex items-center justify-center">
        <Slide direction="right" triggerOnce>
          <div className="relative isolate overflow-hidden">
            <div className="max-w-7xl">
              <div className="sm:mt-24 md:mx-auto lg:mx-0 lg:mt-0">
                <h1 className="mb-2 text-white text-center font-oswald text-[40px] lg:text-[45px] tracking-[0.566667px] leading-[.95] uppercase">
                  À DÉCOUVRIR
                </h1>
                <hr className="relative lg:left-0 w-[calc(100% + 130px)] my-4" />

                <table className="min-w-full">
                  <tbody>
                    <tr>
                      <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste-black text-[40px] lg:text-[45px] font-oswald tracking-[0.566667px] leading-[.95] uppercase pt-4">
                        {config.halls}
                      </td>
                      <td className="whitespace-nowrap px-3 pt-5 text-white flex-shrink-0 font-oswald font-semibold text-4xl tracking-[0.566667px] leading-[.95] uppercase">
                        m²
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste-black text-[40px] lg:text-[45px] font-oswald tracking-[0.566667px] leading-[.95] uppercase pt-4">
                        {config.exposants}
                      </td>
                      <td className="whitespace-nowrap px-3 pt-6 text-white flex-shrink-0 font-oswald font-semibold text-4xl tracking-[0.566667px] leading-[.95] uppercase">
                        stands
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap pl-4 pr-3 text-right text-sm font-medium text-gray-900 sm:pl-6 artiste-black text-[40px] lg:text-[45px] font-oswald tracking-[0.566667px] leading-[.95] uppercase pt-4">
                        {config.scenes}
                      </td>
                      <td className="whitespace-nowrap px-3 pt-6 text-white flex-shrink-0 font-oswald font-semibold text-4xl tracking-[0.566667px] leading-[.95] uppercase">
                        scènes
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src={persofeminin}
                          alt="personnage feminin avec tshirt paris manga by tgs"
                          className="w-[500px] overflow-hidden relative top-4"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="mt-5 mb-4 flex justify-center items-center">
              <a
                href="https://photos.tgs-paris.fr"
                target="_blank"
                className="inline-block text-center text-white cursor-pointer py-3 px-8 font-oswald text-3xl border-4 border-white bg-[#2aade5] rounded-3xl transform transition duration-300 hover:scale-110"
                rel="noreferrer"
              >
                Accéder à la galerie !
              </a>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}
