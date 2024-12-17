import React, { useState } from "react";

const SectionOrigens: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Origens");

  const renderContent = () => {
    switch (activeTab) {
      case "Origens":
        return (
          <div className="mb-10">
            <p className="leading-relaxed font-extralight font-glonimove">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              tincidunt sapien eget facilisis sagittis. Nullam purus enim,
              suscipit a facilisis eu, pretium sit amet est. Aenean rutrum risus
              mauris, sit amet euismod eros interdum quis.
            </p>
            <p className="leading-relaxed font-extralight font-glonimove">
              Phasellus ultricies lorem in viverra convallis. Proin sodales
              sapien vel metus ultrices scelerisque. Etiam malesuada tortor
              quam, ut convallis velit porttitor dictum. Cras molestie
              pellentesque massa, vitae pellentesque nisi pharetra a.
            </p>
          </div>
        );
      case "Carreira":
        return (
          <div className="mb-10">
            <p className="leading-relaxed font-extralight font-glonimove">
              Fusce in sem bibendum, mollis erat eu, consectetur odio. Curabitur
              euismod arcu vitae pharetra vestibulum. Nulla aliquam molestie
              arcu eu pharetra. Sed posuere orci non libero interdum, vitae
              suscipit odio auctor.
            </p>
            <p className="leading-relaxed font-extralight font-glonimove">
              Vivamus eget nibh in neque hendrerit rhoncus ut vitae risus.
              Maecenas ultrices tellus a eros porttitor, vel ultricies ipsum
              aliquet.
            </p>
          </div>
        );
      case "Presente":
        return (
          <div className="mb-10">
            <p className="leading-relaxed font-extralight font-glonimove">
              Aliquam erat volutpat. Vivamus vel lectus eros. Donec vehicula
              justo vel tincidunt suscipit. Ut dignissim congue nisl, at
              lobortis purus pulvinar in.
            </p>
            <p className="leading-relaxed font-extralight font-glonimove">
              Nulla facilisi. Etiam eget felis eget elit malesuada congue at
              vitae tortor. Cras venenatis ligula a libero euismod consequat.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-[#1C2415] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-12">
      {/* Imagem no lado esquerdo no desktop */}
      <div className="bg-[#333] w-full md:w-1/2 h-96 rounded-md"></div>

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
