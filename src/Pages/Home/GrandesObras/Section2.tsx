import React from "react";
import roqueImage from "../../../assets/roque-santeiro.png"; // Substitua pelas imagens reais
import pantanalImage from "../../../assets/pantanal.png";
import maysaImage from "../../../assets/maysa.png";

const GrandesObrasSection: React.FC = () => {
  return (
    <section className="relative bg-[#18231E] text-white py-16">
      {/* Fundo com listras */}

      <div className="relative max-w-screen-xl mx-auto px-8">
        {/* Bloco superior */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Esquerda: Título e botão */}
          <div>
            <h1 className="text-6xl font-bold text-red-500 mb-4 font-glonimove">
              GRANDES <br /> OBRAS.
            </h1>
            <button className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition">
              Saiba Mais
            </button>
          </div>

          {/* Direita: Texto */}
          <div>
            <p className="text-lg leading-relaxed font-glonimove">
              Jayme Monjardim traz luz às suas obras com um olhar único e
              mágico. Há 37 anos é diretor da Rede Globo, onde já dirigiu mais
              de 21 novelas e 11 minisséries. Também é cineasta, e sua estreia
              nas telonas foi com o longa-metragem "Olga"...
            </p>
          </div>
        </div>
        <div className="border border-b-2 border-[#E0471E] w-full container mt-10"></div>

        {/* Bloco inferior: Grade de obras */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={roqueImage}
              alt="Roque Santeiro"
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-xl font-normal font-glonimove">
              ROQUE SANTEIRO
            </h3>
            <p className="text-gray-400 font-normal font-glonimove">1986</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={pantanalImage}
              alt="Pantanal"
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-xl font-normal font-glonimove">PANTANAL</h3>
            <p className="text-gray-400 font-normal font-glonimove">1986</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={maysaImage}
              alt="Maysa: Quando Fala o Coração"
              className="w-full rounded-md mb-4"
            />
            <h3 className="text-xl font-normal font-glonimove ">
              MAYSA: QUANDO <br /> FALA O CORAÇÃO
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrandesObrasSection;
