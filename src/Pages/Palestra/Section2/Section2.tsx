/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import video from "/corte_unico_jayme.mp4";

const HistoriaPorTras: React.FC = () => {
  const [, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="bg-[#1C2415] text-white py-16">
      <h2 className="text-center px-6 lg:px-12 text-2xl md:text-3xl text-[#FF4A20] mb-8 font-normal font-glonimove">
        A trajetória de um dos maiores diretores do Brasil em palestras que unem
        arte, emoção e propósito, inspirando pessoas e profissionais a sonharem
        grande e alcançarem o extraordinário.
      </h2>

      <div className="container px-6 lg:px-16 mx-auto flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-6">
        {/* Texto */}
        <div className="lg:w-5/12 text-lg md:text-xl leading-relaxed font-extralight font-glonimove text-center lg:text-left">
          <p className="font-bold text-lg md:text-xl mb-4">
            Uma jornada que fala sobre emoções e gera inspirações.
          </p>
          <p className="mb-6">
            Com uma trajetória única, Jayme Monjardim é um dos diretores mais
            icônicos do Brasil, responsável por obras que marcaram a história da
            televisão e emocionaram milhões. Filho de Maysa, herdeiro das raízes
            da família Matarazzo e com uma carreira que atravessa fronteiras,
            Jayme traz em suas palestras vivências pessoais e profissionais que
            inspiram em qualquer área.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>40 anos de carreira e experiência na direção artística.</li>
            <li>Obras que emocionaram e se tornaram patrimônios nacionais.</li>
            <li>
              Histórias de superação, conexão com as raízes e transformação
              pessoal.
            </li>
          </ul>
        </div>

        {/* Vídeo */}
        <div className="lg:w-6/12 flex justify-center lg:justify-start relative">
          <div className="w-full max-w-[600px] lg:w-auto rounded-md relative">
            {/* Vídeo com controle de play/pause no clique */}
            <video
              ref={videoRef}
              src={video}
              className="w-full h-auto rounded-md cursor-pointer"
              preload="auto"
              onClick={togglePlay}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-24"></div>
    </section>
  );
};

export default HistoriaPorTras;
