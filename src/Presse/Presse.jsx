/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import useScript from "../utils/useScript";
import { SALON_ID, URL } from "../utils/config";
import Loader from "../components/Loader";
import { useSettings } from "../context/ConfigurationContext";

const GlobalStyle = createGlobalStyle`
  ul {
    list-style: disc !important;
    margin: 2% !important;
    padding-left: 2% !important;
  }
`;

export default function Presse() {
  const { config } = useSettings();
  useScript(`https://www.billetweb.fr/js/export.js?nnn=${Date.now()}`);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [presses, setPresses] = useState(false);

  if (!config || Object.entries(config).length === 0) return null;

  useEffect(() => {
    const options = {
      method: "GET",
      mode: "cors",
      cache: "default",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    fetch(`${URL}/api/salon/${SALON_ID}/presses`, options)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPresses(data.data[0]);
        },
        (err) => {
          setIsLoaded(true);
          setError(err);
        }
      );
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }
  if (!isLoaded) {
    return <Loader />;
  }

  if (presses) {
    return (
      <>
        <GlobalStyle />
        <div className="bg-[#4FC0F0] pt-32">
          <h1 className="text-left text-white text-2xl bg-[#F27B7B] w-fit px-6 font-bold py-1">
            {presses.first_title}
          </h1>
          <div
            className="p-6 w-full overflow-x-hidden"
            dangerouslySetInnerHTML={{ __html: presses.first_content }}
          />
        </div>

        <div className="bg-[#3575A2] text-white">
          <div className="flex justify-end">
            <h1 className="text-right text-white text-2xl bg-[#F27B7B] w-max px-6 font-bold py-1">
              {presses.second_title}
            </h1>
          </div>
          <div
            className="text-justify p-6  w-full overflow-x-hidden"
            dangerouslySetInnerHTML={{ __html: presses.second_content }}
          />
        </div>

        <div className="bg-[#4FC0F0]">
          <div className="pt-6">
            <h1 className="text-left text-white text-2xl bg-[#F27B7B] w-fit px-6 font-bold py-1">
              {presses.third_title}
            </h1>
          </div>
          <div
            className="p-6"
            dangerouslySetInnerHTML={{ __html: presses.third_content }}
          />
          <div
            className="text-white mt-4 w-full h-full bg-white p-4"
            id="div_id"
          >
            <a
              title="Vente de billets en ligne"
              href={`https://www.billetweb.fr/shop.php?event=${presses.ticket_link}`}
              className="shop_frame"
              target="_blank"
              data-src={`https://www.billetweb.fr/shop.php?event=${presses.ticket_link}`}
              data-max-width="100%"
              data-initial-height="600"
              data-scrolling="no"
              data-id={presses.ticket_link}
              data-resize="1"
              rel="noreferrer"
            >
              Vente de billets en ligne
            </a>
          </div>
        </div>
      </>
    );
  }
}
