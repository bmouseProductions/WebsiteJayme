import React, { useEffect, useRef, useState } from "react";
import Livro from "../../../assets/HomemLivro.png";
import LivroMobile from "../../../assets/livro-mobile.png";
import Player from "@vimeo/player";
import { Play } from "lucide-react"; // Ícones para os botões


const SectionCriadorSonhador: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isPlaying,setIsPlaying] = useState(false);
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
    <section className="bg-[#1C2415] text-white py-16 px-6">
      {/* Título */}
      <h2 className="text-center text-4xl md:text-5xl  text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        Criador e Sonhador
      </h2>

      {/* Imagem do autor */}
      <div className="flex justify-center lg:mb-8">
        <img
          src={Livro} // Substitua pelo caminho correto da imagem
          alt="Jayme Monjardim"
          className="w-full container rounded-md   hidden lg:block"
        />
      </div>

      {/* Texto */}
      <div className="container px-3 lg:px-0 mx-auto text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p>
          Jayme Monjardim é um diretor que transforma emoções em obras eternas.
          Em mais de 40 anos de carreira, ele aprendeu a capturar a essência da
          vida e a traduzi-la em histórias que tocam a alma. Diretor consagrado
          da Rede Globo, com mais de 21 novelas e 11 minisséries, Jayme
          construiu um legado em que o universo feminino ocupa um papel central,
          trazendo força e sensibilidade em igual medida.
        </p>
        <p>
          Seu olhar único e mágico se estende além das telas da televisão,
          alcançando os cinemas com produções marcantes como Olga. Com uma
          formação que traz às raízes do cinema italiano, onde trabalhou ao lado
          de Michelangelo Antonioni, Jayme desenvolveu uma sensibilidade
          artística que se reflete em cada cena que dirige. Ele é um criador de
          sonhos, guiado pelo propósito de dar vida a histórias que inspiram,
          emocionam e transformam.
        </p>
        <p>
          Assim como Walt Disney declarou que “se você pode sonhar, você pode
          realizar”, Jayme acredita no poder dos sonhos e na capacidade de cada
          um de resgatar sua própria magnitude. Suas obras não apenas encantam,
          mas se tornam patrimônios nacionais, um reflexo do amor que dedica à
          arte de contar histórias.
        </p>
      </div>

      <div>
        <img
          src={LivroMobile} // Substitua pelo caminho correto da imagem
          alt="Jayme Monjardim"
          className="w-full container rounded-md  px-10  lg:hidden"
        />
      </div>

      {/* Imagem inferior */}
      <div className="flex justify-center mt-12 relative">
        {/* Container para capturar cliques e exibir botão */}
        <div
          className="w-[90vw] md:w-[80vw] h-[50vw] md:h-[45vw] rounded-md relative cursor-pointer"
          onClick={togglePlay}
        >
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1054251427?h=cb23e36b33&badge=0&autoplay=0&controls=0&autopause=0&player_id=0&app_id=58479"
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
      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-32 "></div>
    </section>
  );
};

export default SectionCriadorSonhador;


//https://player.vimeo.com/video/1054251427?h=cb23e36b33&badge=0&autoplay=0&controls=0&autopause=0&player_id=0&app_id=58479