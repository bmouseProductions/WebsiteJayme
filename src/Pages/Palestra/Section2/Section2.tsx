import React, { useEffect, useRef, useState } from "react";
import palestraMobile from "../../../assets/palestra-mobile.png";
import Player from "@vimeo/player";

const HistoriaPorTras: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      playerRef.current = new Player(iframeRef.current);

      playerRef.current.on("play", () => setIsPlaying(true));
      playerRef.current.on("pause", () => setIsPlaying(false));
    }
  }, []);

  const togglePlay = async () => {
    if (playerRef.current) {
      const isPaused = await playerRef.current.getPaused();
      if (isPaused) {
        await playerRef.current.play();
      } else {
        await playerRef.current.pause();
      }
    }
  };

  return (
    <section className="bg-[#1C2415] text-white py-16 ">
      <h2 className="text-left mx-auto lg:text-center px-3 lg:px-8 text-2xl md:text-2xl text-[#FF4A20] lg:mb-12 font-normal font-glonimove">
        A trajetória de um dos maiores diretores do Brasil em palestras que unem
        arte, emoção e propósito, inspirando pessoas e profissionais a sonharem
        grande e alcançarem o extraordinário.
      </h2>

      <div className="container px-4 lg:px-8 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p className="font-bold">
          Uma jornada que fala sobre emoções e gera inspirações.
        </p>
        <p>
          Com uma trajetória única, Jayme Monjardim é um dos diretores mais
          icônicos do Brasil, responsável por obras que marcaram a história da
          televisão e emocionaram milhões. Filho de Maysa, herdeiro das raízes
          da família Matarazzo e com uma carreira que atravessa fronteiras,
          Jayme traz em suas palestras vivências pessoais e profissionais que
          inspiram em qualquer área.
        </p>
        <ul className="lg:list-disc">
          <li>40 anos de carreira e experiência na direção artística.</li>
          <li>Obras que emocionaram e se tornaram patrimônios nacionais.</li>
          <li>
            Histórias de superação, conexão com as raízes e transformação
            pessoal.
          </li>
        </ul>
      </div>

      <div>
        <img
          src={palestraMobile}
          alt="Palestra Mobile"
          className="w-full container rounded-md px-10 lg:hidden"
        />
      </div>

      <div className="flex justify-center mt-12 relative">
        <div
          className="w-[90vw] md:w-[80vw] h-[50vw] md:h-[45vw] rounded-md relative cursor-pointer"
          onClick={togglePlay}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1043520308?h=3c0aff8184&autoplay=0&controls=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full h-full rounded-md"
          ></iframe>

          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
              <button
                onClick={togglePlay}
                className="bg-white/80 hover:bg-white/90 p-6 rounded-full transition duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="black"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 3l14 9-14 9V3z"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-32"></div>
    </section>
  );
};

export default HistoriaPorTras;
