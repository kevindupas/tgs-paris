/* eslint-disable no-console */
/* eslint-disable no-new */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-danger */
/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useRef, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { useSettings } from "../../context/ConfigurationContext";
import { LoaderContext } from "../../context/LoaderContext";

export default function Video({ className }) {
  const { config } = useSettings();
  const { isLoading } = useContext(LoaderContext);
  const videoRef = useRef(null);

  useEffect(() => {
    // Fonction pour essayer de lancer la vidéo
    const playVideo = async () => {
      try {
        if (videoRef.current && !isLoading) {
          // Forcer la lecture
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              console.log("Autoplay prevented:", error);

              // Ajouter un écouteur d'événements pour le premier clic/toucher sur la page
              const handleUserInteraction = () => {
                if (videoRef.current) {
                  videoRef.current.play();
                }
                document.removeEventListener(
                  "touchstart",
                  handleUserInteraction
                );
                document.removeEventListener("click", handleUserInteraction);
              };

              document.addEventListener("touchstart", handleUserInteraction);
              document.addEventListener("click", handleUserInteraction);
            });
          }
        }
      } catch (err) {
        console.error("Erreur de lecture vidéo:", err);
      }
    };

    // Essayer de lire la vidéo quand le composant est monté et que isLoading est false
    if (!isLoading) {
      playVideo();
    }
  }, [isLoading]); // Relancer l'effet quand isLoading change

  if (!config || Object.entries(config).length === 0) return null;

  return (
    <section className="relative h-[calc(100vh-80px)]">
      <div className="absolute lg:right-0 bottom-48 xl:right-28  lg:bottom-12 z-20">
        {isLoading === false && (
          <Fade delay={500} direction="up" triggerOnce>
            <blockquote className="text-white font-oswald tracking-[0.566667px] leading-tight indent-0 uppercase text-6xl lg:text-6xl fix-width border-l-[15px] border-[#E97665] pl-5 py-4 relative">
              <span
                className="drop-shadow-2xl"
                style={{
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                  visibility: "inherit",
                }}
              >
                {" "}
                {config.event_date}
              </span>
            </blockquote>
          </Fade>
        )}
      </div>

      <div className="absolute w-20 lg:w-[216px] left-3 lg:left-60 -bottom-14 lg:bottom-[-53px] z-10">
        {isLoading === false && (
          <Fade delay={500} direction="up" triggerOnce>
            <img
              style={{
                transform: "translate(0px, 0px)",
                opacity: "1",
                visibility: "inherit",
              }}
              src="/dist/images/icons-test.png"
              alt=""
            />
          </Fade>
        )}
      </div>
      <div className="absolute bottom-0 left-0 mx-auto top-0 md:right-[calc(50%-300px)] lg:right-[calc(50%-516px)]">
        <div className="relative h-full w-full blur-[3px] lg:blur-none">
          <video
            loop
            muted
            autoPlay
            playsInline
            src={source}
            className={className}
          />
        </div>
      </div>
    </section>
  );
}
