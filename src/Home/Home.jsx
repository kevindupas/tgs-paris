/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React from "react";
import ReactGA from "react-ga4";
import Video from "./components/Video";
import VideoMobile from "./components/VideoMobile";
// import Countdown from './components/Countdown';
import StackAdaptPixel from "../components/StackAdaptPixel";
import { useSettings } from "../context/ConfigurationContext";
import { INVITE_CATEGORY, PROGRAMME_CATEGORY, SALON_ID } from "../utils/config";
import useMedia from "../utils/useMedia";
import AllSalon from "./components/AllSalon";
import InformationTest from "./components/InformationTest";
import Infos from "./components/Infos";
import InviteTest from "./components/InviteTest";
import NewCountdown from "./components/NewCountdown";
import Newsletter from "./components/Newsletter";
import PartnerTest from "./components/PartnerTest";
import ProgrammeTest from "./components/ProgrammeTest";
import Salon from "./components/Salon";
import SalonMobile from "./components/SalonMobile";
import TicketsHome from "./components/TicketsHome";
import Words from "./components/Words";

export default function Home() {
  const isDesktop = useMedia("(min-width: 900px)");

  const { config } = useSettings();

  ReactGA.send({
    hitType: "pageview",
    page: "/",
    title: "Accueil",
  });

  return (
    <div className="bg-[url('/dist/images/pattern-dark.jpeg')] bg-repeat h-full w-full">
      <StackAdaptPixel />
      <main className="block">
        {isDesktop ? (
          <Video
            className="object-cover h-full w-full pt-[5em]"
            source="/dist/video/paris_manga.webm"
            safariSource="/dist/video/paris_manga_safari.mp4"
          />
        ) : (
          <VideoMobile />
        )}
        <NewCountdown date={config.countdown} />
        <InformationTest />
        <InviteTest category={INVITE_CATEGORY} salon={SALON_ID} limit={5} />
        {isDesktop ? <Salon /> : <SalonMobile />}
        <ProgrammeTest
          category={PROGRAMME_CATEGORY}
          salon={SALON_ID}
          limit={5}
        />
        <Words />
        <TicketsHome />
        {isDesktop && <Infos />}
        <PartnerTest />
        <AllSalon />
        <Newsletter />
      </main>
    </div>
  );
}
