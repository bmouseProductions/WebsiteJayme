import React from "react";
import jaymeImage from "../../../assets/camera-mobile.png"; // Substitua pela imagem correta
import recording from "../../../assets/recording.png"; // Substitua pela imagem correta
import decoration1 from "../../../assets/decoration1.png"; // Substitua pela imagem correta
import decoration2 from "../../../assets/decoration2.png"; // Substitua pela imagem correta

const JaymeSection1: React.FC = () => {
  return (
    <section className="relative bg-[#18231E] text-white py-16">
      {/* Fundo com listras */}

      <div className="relative max-w-screen-xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Bloco esquerdo */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl sm:text-6xl font-semibold text-red-500 mb-4 font-glonimove">
            JAYME <br /> MONJARDIM
          </h1>
          <div className="flex space-x-4 items-center">
            {/* Ícones de navegação */}
            <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-red-500 transition">
              &#x276E; {/* Ícone de seta esquerda */}
            </button>
            <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center hover:bg-red-500 transition">
              &#x276F; {/* Ícone de seta direita */}
            </button>
          </div>
        </div>

        {/* Bloco direito */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed font-glonimove">
            Jayme Monjardim traz luz às suas obras com um olhar único e mágico.
            Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21
            novelas e 11 minisséries. Também é cineasta, e sua estreia nos
            telões foi com o longa-metragem "Olga"...
          </p>
          <button className="mt-6 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition font-glonimove">
            Saiba Mais
          </button>
        </div>
      </div>

      {/* Imagem grande */}
      <div className="relative mt-12">
        <img
          src={jaymeImage}
          alt="Jayme Monjardim"
          className="mx-auto w-full p-9 lg:p-0 lg:max-w-9xl lg:container lg:hidden"
        />
        <img
          src={recording}
          alt="Jayme Monjardim"
          className="mx-auto w-full p-9 lg:p-0 lg:max-w-9xl lg:container hidden lg:block"
        />

        {/* Ícones decorativos */}
        <div className="absolute -bottom-10 lg:bottom-4 left-4  sm:block">
          <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full">
            <img src={decoration1} alt="" />
          </div>
        </div>
        <div className="absolute -bottom-10 lg:bottom-4 right-4  sm:block">
          <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full">
            <img src={decoration2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JaymeSection1;