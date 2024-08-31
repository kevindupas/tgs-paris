/* eslint-disable no-console */
import React from "react";
import ReactGA from "react-ga4";
import CategoryImage from "../components/CategoryImage";
import { useSettings } from "../context/ConfigurationContext";
import Tickets from "../Home/components/Tickets";
import { BILLETTERIE_CATEGORY } from "../utils/config";
import useScript from "../utils/useScript";

export default function Billetterie(namePath, categoryName) {
  const { config } = useSettings();
  useScript(`https://www.billetweb.fr/js/export.js?nnn=${Date.now()}`);

  if (!config || Object.entries(config).length === 0) return null;

  ReactGA.send({
    hitType: "pageview",
    page: namePath,
    title: categoryName,
  });

  return (
    <>
      <CategoryImage
        categoryId={BILLETTERIE_CATEGORY}
        categoryName="Billetterie"
      />

      <div className="overflow-hidden bg-[#F3F3F3] bg-repeat">
        <section className="pb-36">
          <Tickets />
          <div className="max-w-[1200px] m-auto">
            <h1 className="mb-2 text-center font-heading_bold text-[40px] lg:text-[38px] tracking-[0.566667px] leading-[.95] uppercase text-black">
              {config.event_date}
            </h1>
            <ul className="grid">
              <div className="text-white mt-20 w-full h-full" id="div_id">
                <a
                  title="Vente de billets en ligne"
                  href={`https://www.billetweb.fr/shop.php?event=${config.ticket_link}`}
                  className="shop_frame"
                  target="_blank"
                  data-src={`https://www.billetweb.fr/shop.php?event=${config.ticket_link}`}
                  data-max-width="100%"
                  data-initial-height="600"
                  data-scrolling="no"
                  data-id={config.ticket_link}
                  data-resize="1"
                  rel="noreferrer"
                >
                  Vente de billets en ligne
                </a>
              </div>
            </ul>
          </div>
        </section>
      </div>
      {/* <BeforeFooter /> */}
    </>
  );
}
