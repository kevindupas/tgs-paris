import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { createGlobalStyle } from "styled-components";
import Loader from "../components/Loader";
import { SALON_ID, URL } from "../utils/config";
import useScript from "../utils/useScript";

const GlobalStyle = createGlobalStyle`
  ul {
    list-style: disc !important;
    margin: 2% !important;
    padding-left: 2% !important;
  }
`;

function PhotosInvites() {
  useScript(`https://www.billetweb.fr/js/export.js?nnn=${Date.now()}`);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [photos, setPhotos] = useState(false);

  ReactGA.send({
    hitType: "pageview",
    page: "/photos",
    title: "Photos Invités",
  });

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
    fetch(`${URL}/api/salon/${SALON_ID}/photos`, options)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setPhotos(data.data[0]);
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

  if (photos) {
    return (
      <>
        <GlobalStyle />
        <div className="bg-[#4FC0F0] pt-32">
          <h1 className="text-left text-white text-lg w-fit px-6 font-bold py-1">
            {photos.mini_title}
          </h1>
          <h1 className="text-left text-white text-2xl bg-[#F27B7B] w-fit px-6 font-bold py-1">
            {photos.title}
          </h1>
          <div className="p-6">
            <div className="relative mb-6">
              <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
              >
                <div className="w-full border-t border-black" />
              </div>
              <div className="relative flex justify-start">
                <span className="bg-[#4FC0F0] pr-3 text-base font-semibold leading-6 text-black">
                  {photos.first_subtitle}
                </span>
              </div>
            </div>
            <div
              className="p-6"
              dangerouslySetInnerHTML={{ __html: photos.first_content }}
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
            <div className="p-6">
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-black" />
                </div>
                <div className="relative flex justify-start">
                  <span className="bg-[#4FC0F0] pr-3 text-base font-semibold leading-6 text-black">
                    {photos.second_subtitle}
                  </span>
                </div>
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: photos.second_content }}
              />
              <div className="grid grid-cols-1 space-y-6 mt-6">
                <a
                  href={photos.second_link}
                  target="_blank"
                  className="rounded-sm bg-[#F36D61] px-3.5 py-5 text-sm font-semibold text-white text-center shadow-sm hover:bg-[#fe5043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F36D61]"
                  rel="noreferrer"
                >
                  {photos.second_title_link}
                </a>
                <a
                  href={photos.first_link}
                  target="_blank"
                  className="rounded-sm bg-[#F36D61] px-3.5 py-5 text-sm font-semibold text-white text-center shadow-sm hover:bg-[#fe5043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F36D61]"
                  rel="noreferrer"
                >
                  {photos.first_title_link}
                </a>
              </div>
            </div>
            <div className="p-6">
              <div className="relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-black" />
                </div>
                <div className="relative flex justify-start">
                  <span className="bg-[#4FC0F0] pr-3 text-base font-semibold leading-6 text-black">
                    {photos.third_subtitle}
                  </span>
                </div>
              </div>
              <div className="text-white w-full h-full px-5 mt-8" id="div_id">
                <a
                  title="Vente de billets en ligne"
                  href="https://www.billetweb.fr/shop.php?event=paris-manga-sci-fi-show-by-tgs-photos-numeriques"
                  className="shop_frame"
                  target="_blank"
                  data-src="https://www.billetweb.fr/shop.php?event=paris-manga-sci-fi-show-by-tgs-photos-numeriques"
                  data-max-width="100%"
                  data-initial-height="600"
                  data-scrolling="no"
                  data-id="paris-manga-sci-fi-show-by-tgs-photos-numeriques"
                  data-resize="1"
                  rel="noreferrer"
                >
                  Vente de billets en ligne
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PhotosInvites;
