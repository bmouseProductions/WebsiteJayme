/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import video from "/corte_unico_jayme.mp4";
import direita from "../../../assets/decoration1.png";

const HistoriaPorTras: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
      <h2 className="lg:text-center px-6 lg:px-12 text-2xl md:text-3xl text-[#FF4A20] mb-8 font-normal font-glonimove">
        A trajetória de um dos maiores diretores do Brasil em palestras que unem
        arte, emoção e propósito, inspirando pessoas e profissionais a sonharem
        grande e alcançarem o extraordinário.
      </h2>

      {/* Texto */}
      <div className="container px-6 lg:px-16 mx-auto text-lg md:text-xl leading-relaxed font-extralight font-glonimove  lg:text-left mb-10">
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

      {/* Vídeo com Ícones */}
      <div className="container px-6 lg:px-16 mx-auto flex items-center justify-center space-x-4">
        {/* Ícone esquerdo */}
        <div className="hidden lg:flex items-center justify-center">
        <img src={direita} alt="" />

        </div>

        {/* Vídeo */}
        <div className="w-full max-w-[720px] lg:w-full md:h-[40vw] lg:h-[450px] rounded-md relative">
          <video
            ref={videoRef}
            src={video}
            className="w-full h-full rounded-md cursor-pointer"
            preload="auto"
            onClick={togglePlay}
          />

          {/* Botão Play/Pause */}
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

        {/* Ícone direito */}
        <div className="hidden lg:flex items-center justify-center">
          <img src={direita} alt="" />
        </div>
      </div>

      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-24"></div>
    </section>
  );
};

export default HistoriaPorTras;
