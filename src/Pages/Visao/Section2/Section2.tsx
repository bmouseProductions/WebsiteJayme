import React, { useEffect, useRef, useState } from "react";
import quero from "../../../assets/ondequeremos.png";
import queroMobile from "../../../assets/queremos-mobile.png";
import Player from "@vimeo/player";
import { Play } from "lucide-react"; // Ícones para os botões

const OndeQueremosChegar: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (iframeRef.current) {
      playerRef.current = new Player(iframeRef.current);

      // Verifica se o vídeo está tocando ou pausado
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
    <section className="bg-[#1C2415] text-white py-16">
      {/* Título */}
      <h2 className="text-left lg:text-center px-3 lg:px-0 text-6xl md:text-5xl text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        Aonde queremos chegar?
      </h2>

      {/* Imagem do autor */}
      <div className="flex justify-center lg:mb-8">
        <img
          src={quero}
          alt="Jayme Monjardim"
          className="w-full container rounded-md hidden lg:block"
        />
      </div>

      {/* Texto */}
      <div className="container px-4 lg:px-8 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p>
          Entender aonde queremos chegar, é sobre entender o propósito que nos
          move, honrar as histórias que nos trouxeram até aqui e traçar novos
          caminhos com coragem e paixão. É sobre emocionar, transformar, e levar
          adiante a chama que ilumina nossa trajetória. Eu quero chegar aonde os
          sonhos me chamam, sempre mais longe, sempre mais fundo, conectando o
          passado, o presente e o futuro em cada passo que eu der.
        </p>
        <p>
          E meu propósito vai além das telas. Minha missão é dar voz ao que é
          essencialmente humano, trazer para a tela emoções tão reais que nos
          fazem sentir parte de algo maior. É isso que me move: a magia de
          emocionar, de criar pontes entre a ficção e a vida.
        </p>
      </div>

      <div>
        <img
          src={queroMobile}
          alt="Jayme Monjardim"
          className="w-full container rounded-md px-10 lg:hidden"
        />
      </div>

      {/* Vídeo com overlay de botão de play/pause */}
      <div className="flex justify-center mt-12 relative">
        {/* Container para capturar cliques e exibir botão */}
        <div
          className="w-[90vw] md:w-[80vw] h-[50vw] md:h-[45vw] rounded-md relative cursor-pointer"
          onClick={togglePlay}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1054254834?h=876b4de4eb&badge=0&autopause=0&controls=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full h-full rounded-md"
          ></iframe>

          {/* Botão de Play/Pause - Exibido apenas quando o vídeo está pausado */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-md">
              <button
                onClick={togglePlay}
                className="bg-white/80 hover:bg-white/90 p-6 rounded-full transition duration-200"
              >
                <Play className="w-12 h-12 text-black" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-32"></div>
    </section>
  );
};

export default OndeQueremosChegar;
