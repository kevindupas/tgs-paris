import React, { useEffect, useRef } from "react";
import { useSettings } from "../../context/ConfigurationContext";

export default function Video() {
  const { config } = useSettings();
  const videoRef = useRef(null);

  useEffect(() => {
    // Fonction pour essayer de lancer la vidéo
    const playVideo = async () => {
      try {
        if (videoRef.current) {
          // Attendre que la vidéo soit chargée
          await videoRef.current.load();
          // Forcer la lecture
          const playPromise = videoRef.current.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // Si l'autoplay échoue, on peut ajouter un gestionnaire de clic pour lancer la vidéo
              console.log("Autoplay prevented:", error);

              // Ajouter un écouteur d'événements pour le premier clic/toucher sur la page
              const handleUserInteraction = () => {
                videoRef.current.play();
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

    // Essayer de lire la vidéo quand le composant est monté
    playVideo();
  }, []);

  return (
    <section className="relative h-[calc(100vh-80px)]">
      <div className="relative z-20 max-w-[1200px] mx-auto h-full content-end flex items-center flex-row-reverse">
        <blockquote className="text-white font-oswald tracking-[0.566667px] leading-[.95] indent-0 uppercase text-4xl border-l-[15px] border-[#E97665] pl-5 py-4 relative">
          <span
            className="drop-shadow-2xl"
            style={{
              transform: "translate(0px, 0px)",
              opacity: "1",
              visibility: "inherit",
            }}
          >
            {config.event_date}
          </span>
        </blockquote>

        <div className="absolute w-20 left-5 bottom-[-53px] z-20">
          <img
            style={{
              transform: "translate(0px, 0px)",
              opacity: "1",
              visibility: "inherit",
            }}
            src="/dist/images/icons-test.png"
            alt=""
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 mx-auto top-0 md:right-[calc(50%-300px)] lg:right-[calc(50%-516px)] z-10">
        <div className="relative h-full w-full">
          <div className="absolute top-0 left-0 h-full w-full bg-black opacity-50 z-10"></div>
          <video
            ref={videoRef}
            loop
            muted
            autoPlay
            playsInline
            preload="auto"
            className="object-cover h-full w-full pt-[5em] z-0"
          >
            <source src="/dist/video/paris_manga.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
