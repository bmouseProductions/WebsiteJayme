import React from "react";
import jaymeImage from "../../../assets/camera-mobile.png"; // Substitua pela imagem correta
import recording from "../../../assets/recording.png"; // Substitua pela imagem correta
// import decoration1 from "../../../assets/decoration1.png"; // Substitua pela imagem correta
// import decoration2 from "../../../assets/decoration2.png"; // Substitua pela imagem correta

const JaymeSection1: React.FC = () => {
  return (
    <section className="relative bg-[#18231E] text-white py-16">
      {/* Fundo com listras */}

      <div className="relative max-w-screen-xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        {/* Bloco esquerdo */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-4xl sm:text-6xl font-semibold text-[#E0471E] mb-4 font-glonimove">
            JAYME <br /> MONJARDIM
          </h1>
          <div className="flex space-x-4 items-center">
            {/* Ícones de navegação */}
          </div>
        </div>

        {/* Bloco direito */}
        <div>
          <p className="text-base sm:text-lg leading-relaxed font-glonimove">
            Jayme Monjardim é um diretor que transforma emoções em obras
            eternas. Em mais de 40 anos de carreira, ele aprendeu a capturar a
            essência da vida e a traduzi-la em histórias que tocam a alma.
          </p>
          <button className="mt-6 px-6 py-2 bg-[#E0471E] text-white rounded-full hover:bg-red-600 transition font-glonimove">
            <a href="/vida">Saiba Mais</a>
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
        {/* <div className="absolute -bottom-10 lg:bottom-4 left-4  sm:block">
          <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full">
            <img src={decoration1} alt="" />
          </div>
        </div> */}
        {/* <div className="absolute -bottom-10 lg:bottom-4 right-4  sm:block">
          <div className="w-12 h-12 bg-red-500 flex items-center justify-center rounded-full">
            <img src={decoration2} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default JaymeSection1;
