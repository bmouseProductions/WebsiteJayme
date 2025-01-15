import React, { useState } from "react";
import origens from "../../../assets/origens.webp";
import carreira from "../../../assets/carreira.webp";
import presente from "../../../assets/presente.webp";

const SectionOrigens: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Origens");

  const getImageForTab = () => {
    switch (activeTab) {
      case "Origens":
        return origens; // Substitua pelo caminho da imagem de "Origens"
      case "Carreira":
        return carreira; // Substitua pelo caminho da imagem de "Carreira"
      case "Presente":
        return presente; // Substitua pelo caminho da imagem de "Presente"
      default:
        return "/path/to/default-image.jpg"; // Substitua pelo caminho de uma imagem padrão
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Origens":
        return (
          <div className="mb-10">
            <p className="leading-relaxed font-extralight font-glonimove">
              Jayme Monjardim carrega em seu DNA a força de dois legados
              poderosos: a tradição ítalo-brasileira dos Matarazzo e a história
              nobre dos Monjardim, do Espírito Santo. Filho da icônica cantora
              Maysa e do empresário André Matarazzo, ele é herdeiro de uma
              história que combina arte, liderança e visão.
            </p>
          </div>
        );
      case "Carreira":
        return (
          <div className="mb-10">
            <p className="leading-relaxed font-extralight font-glonimove">
              Com uma trajetória marcada pela emoção e pela sensibilidade, Jayme
              Monjardim dirigiu sucessos como Terra Nostra, A Casa das Sete
              Mulheres, Páginas da Vida, O Clone e Maysa - Quando Fala o
              Coração. Sua arte atravessa décadas, unindo gerações ao redor de
              histórias que capturam o coração e a alma.
            </p>
          </div>
        );
      case "Presente":
        return (
          <div className="mb-10">
            <p className="leading-relaxed font-extralight font-glonimove">
              Hoje, Jayme Monjardim continua movido pela arte, na direção da
              nova novela da Rede Bandeirantes, “Romaria”, desenvolvendo
              projetos que carregam o nome Matarazzo e compartilhando sua
              experiência em palestras inspiradoras. Entre câmeras e palavras,
              ele segue contando histórias que emocionam e conectam, sempre com
              a essência de um verdadeiro Dream Creator.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#1C2415] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-12">
      {/* Imagem dinâmica */}
      <div
        className="bg-cover bg-center w-full md:w-1/2 h-96 rounded-md"
        style={{ backgroundImage: `url(${getImageForTab()})` }}
      ></div>

      {/* Conteúdo */}
      <div className="w-full md:w-1/2 space-y-8">
        {/* Navbar apenas no Mobile */}
        <div className="md:hidden flex flex-col justify-center gap-4 mb-8">
          <button
            className={`py-2 px-4 rounded-md font-glonimove uppercase tracking-wide ${
              activeTab === "Origens"
                ? "bg-[#FF4A20] text-white"
                : "bg-transparent text-[#FF4A20] border border-[#FF4A20]"
            }`}
            onClick={() => setActiveTab("Origens")}
          >
            Origens
          </button>
          <button
            className={`py-2 px-4 rounded-md font-glonimove uppercase tracking-wide ${
              activeTab === "Carreira"
                ? "bg-[#FF4A20] text-white"
                : "bg-transparent text-[#FF4A20] border border-[#FF4A20]"
            }`}
            onClick={() => setActiveTab("Carreira")}
          >
            Carreira
          </button>
          <button
            className={`py-2 px-4 rounded-md font-glonimove uppercase tracking-wide ${
              activeTab === "Presente"
                ? "bg-[#FF4A20] text-white"
                : "bg-transparent text-[#FF4A20] border border-[#FF4A20]"
            }`}
            onClick={() => setActiveTab("Presente")}
          >
            Presente
          </button>
        </div>

        {/* Conteúdo dinâmico no Mobile */}
        <div className="md:hidden">
          <h2 className="text-3xl font-normal font-glonimove text-[#FF4A20] uppercase tracking-wide">
            {activeTab}
          </h2>
          {renderContent()}
        </div>

        {/* Conteúdo dinâmico no Desktop */}
        <div className="hidden md:block">
          <h2 className="text-3xl md:text-4xl font-normal font-glonimove text-[#FF4A20] uppercase tracking-wide">
            {activeTab}
          </h2>
          {renderContent()}

          <div className="space-y-4">
            <button
              className={`w-full border py-3 text-lg uppercase font-normal font-glonimove rounded-md transition duration-300 ${
                activeTab === "Origens"
                  ? "bg-[#FF4A20] text-white"
                  : "border-[#FF4A20] text-[#FF4A20] hover:bg-[#FF4A20] hover:text-white"
              }`}
              onClick={() => setActiveTab("Origens")}
            >
              Origens
            </button>
            <button
              className={`w-full border py-3 text-lg uppercase font-normal font-glonimove rounded-md transition duration-300 ${
                activeTab === "Carreira"
                  ? "bg-[#FF4A20] text-white"
                  : "border-[#FF4A20] text-[#FF4A20] hover:bg-[#FF4A20] hover:text-white"
              }`}
              onClick={() => setActiveTab("Carreira")}
            >
              Carreira
            </button>
            <button
              className={`w-full border py-3 text-lg uppercase font-normal font-glonimove rounded-md transition duration-300 ${
                activeTab === "Presente"
                  ? "bg-[#FF4A20] text-white"
                  : "border-[#FF4A20] text-[#FF4A20] hover:bg-[#FF4A20] hover:text-white"
              }`}
              onClick={() => setActiveTab("Presente")}
            >
              Presente
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOrigens;
