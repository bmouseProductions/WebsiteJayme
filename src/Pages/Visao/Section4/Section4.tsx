import React from "react";
import jaymeImage from "../../../assets/recording.png"; // Substitua pela imagem correta
import decoration1 from "../../../assets/decoration1.png";

const MaisSobre: React.FC = () => {
  return (
    <section className="relative bg-[#1C2415] text-white py-16">
      {/* Fundo com listras */}

      <div className="relative max-w-screen-xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Bloco esquerdo */}
        <div className="flex flex-col">
          <h1 className="text-6xl \ text-[#E0471E] mb-4 font-medium font-glonimove">
            MAIS <br /> SOBRE
          </h1>
        </div>

        {/* Bloco direito */}
        <div>
          <p className="text-lg leading-relaxed font-medium font-glonimove">
            Jayme Monjardim traz luz às suas obras com um olhar único e mágico.
            Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21
            novelas e 11 minisséries. Também é cineasta, e sua estreia nas
            telonas foi com o longa-metragem “Olga”...
          </p>
          <button className="mt-6 px-6 py-2 bg-[#E0471E] text-white rounded-full hover:bg-red-600 transition font-semibold font-glonimove">
            <a href="/vida">Saiba Mais</a>
          </button>
        </div>
      </div>

      {/* Imagem grande */}
      <div className="relative mt-12">
        <img src={jaymeImage} alt="Jayme Monjardim" className=" mx-auto " />
      </div>

      <div className="md:mt-10 flex mx-auto text-center">
        <img src={decoration1} className="mx-auto mt-20 mb-20" />
      </div>
    </section>
  );
};

export default MaisSobre;
