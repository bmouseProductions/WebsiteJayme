import React from "react";
import decoration1 from "../../../assets/decoration1.png"; // Substitua pela imagem correta
import video from "../../../assets/cloud.mp4";

const SectionMagia: React.FC = () => {
  return (
    <section className="relative bg-[#18231E] text-white py-16">
      {/* Fundo com listras */}

      {/* Conteúdo */}
      <div className="relative max-w-screen-lg mx-auto text-center px-8">
        {/* Logo (substitua pelo caminho do logo) */}
        <div className="flex justify-center mb-6">
          <img
            src={decoration1}
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Título */}
        <h1 className="text-4xl md:text-6xl font-light font-glonimove">
          <span className="text-[#DBB781] font-bold">JUNTOS</span> PODEMOS
          TRANSFORMAR A MAGIA EM{" "}
          <span className="text-[#DBB781] font-bold">ARTE</span> E DAR VIDA AOS{" "}
          <span className="text-[#DBB781] font-bold">SONHOS</span>.
        </h1>

        {/* Botão */}
        <button className="mt-8 px-6 py-3 bg-red-500 text-white text-lg  rounded-full hover:bg-red-600 transition font-semibold font-glonimove">
          Saiba Mais
        </button>

        {/* Imagem */}
        <div className="mt-12">
          <video
            src={video}
            className="rounded-xl shadow-lg mx-auto hidden sm:block"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>

      <div className="md:mt-10  mx-auto text-center hidden sm:flex">
        <img src={decoration1} className="mx-auto mt-20 mb-20" />
      </div>
    </section>
  );
};

export default SectionMagia;
