import React from "react";
import sonho from "../../../assets/sonho.png";

const CriatividadeeSonho: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-12">
      <div className="">
        <img src={sonho} alt="" />
      </div>

      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-3xl md:text-6xl font-medium font-glonimove text-[#FF4A20] uppercase tracking-wide">
          O que esperar das palestras?
        </h2>

        <p className="leading-relaxed text-lg font-extralight font-glonimove ">
          As palestras de Jayme Monjardim são mais que apresentações; são
          experiências emocionais e reflexivas que despertam o potencial humano.
          Ideal para eventos corporativos, artísticos ou educacionais, Jayme
          compartilha sua visão de mundo, abordando temas que tocam a essência
          da vida e da carreira de diferentes profissionais.
        </p>
        <p className="leading-relaxed text-lg font-extralight font-glonimove">
          <ul className="lg:list-disc space-y-2">
            <li>
              Raízes e trajetória: A influência da família e a força das
              origens.
            </li>
            <li>O poder do sonho: Como transformar ideias em realizações.</li>
            <li>
              Liderança e colaboração: Histórias de trabalho em equipe que
              marcaram sua carreira.
            </li>
            <li>
              A emoção como ferramenta: Impactando vidas através do propósito.
            </li>
            <li>
              Adaptabilidade: Enfrentando mudanças e ciclos na vida pessoal e
              profissional.
            </li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default CriatividadeeSonho;
