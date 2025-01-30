/* eslint-disable @typescript-eslint/no-unused-vars */
import roqueImage from "../../../assets/roque-santeiro.png";
import pantanalImage from "../../../assets/pantanal.png";
import maysaImage from "../../../assets/maysa.png";
import decoration2 from "../../../assets/decoration2.png";
import vendedorDeSonhos from "../../../assets/vendedor-de-sonhos.jpg";
import oTempoeoVento from "../../../assets/O-Tempo-e-o-Vento-5.jpeg";
import seteMulheres from "../../../assets/A-Casas-das-7-Mulheres.jpg";
import chiquinho from "../../../assets/chiquinho.jpg";
import terraNostra from "../../../assets/terra-nostra.jpg";

import AventalRosa from "../../../assets/O-avental-rosa-scaled.jpg";
import romaria from "../../../assets/romaria.png";

import olga from "../../../assets/Olga-7.jpg";
import { useState } from "react";

type ContentImage = {
  image: string[];
};

const SectionNovelas = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof content>("Filmes");

  const content: Record<string, ContentImage> = {
    Novelas: {
      image: [roqueImage, pantanalImage, terraNostra],
    },
    Filmes: {
      image: [vendedorDeSonhos, oTempoeoVento, olga], // Adicione imagens específicas para Filmes
    },
    "Mini-Series e Series": {
      image: [seteMulheres, chiquinho, maysaImage],
    },
    Lançamentos: {
      image: [AventalRosa, romaria],
    },
  };

  const handleTabClick = (tab: keyof typeof content) => {
    setActiveTab(tab);
  };

  return (
    <section className="relative bg-[#1C2415] text-white py-8 sm:py-16">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8">
        {/* Navegação */}
        <nav className="flex justify-center overflow-x-auto">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg font-normal font-glonimove">
            {Object.keys(content).map((tab) => (
              <a
                key={tab}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab as keyof typeof content);
                }}
                className={`hover:text-white ${
                  activeTab === tab
                    ? "text-white font-bold opacity-100"
                    : "opacity-50"
                }`}
              >
                {tab}
              </a>
            ))}
          </ul>
        </nav>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {content[activeTab].image.map((img, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={img}
                alt={`Imagem ${index + 1}`}
                className="w-full  sm:h-[500px] object-cover rounded-md mb-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decoração */}
      <div className="md:mt-10 flex mx-auto text-center">
        <img src={decoration2} className="mx-auto mt-20 mb-20" />
      </div>
    </section>
  );
};

export default SectionNovelas;
