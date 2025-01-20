import React from "react";
// import historia from "../../../assets/historia.png";
import palestraMobile from "../../../assets/palestra-mobile.png";

const HistoriaPorTras: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 ">
      {/* Título */}
      <h2 className="text-left  mx-auto lg:text-center px-3 lg:px-8 text-2xl md:text-2xl  text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        A trajetória de um dos maiores diretores do Brasil em palestras que unem
        arte, emoção e propósito, inspirando pessoas e profissionais a sonharem
        grande e alcançarem o extraordinário.
      </h2>

      {/* Imagem do autor */}
      {/* <div className="flex justify-center lg:mb-8">
        <img
          src={historia} // Substitua pelo caminho correto da imagem
          alt="Palestra"
          className="w-full container rounded-md   hidden lg:block"
        />
      </div> */}

      {/* Texto */}
      <div className="container px-4 lg:px-8 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p className="font-bold">
          Uma jornada que fala sobre emoções e gera inspirações.
        </p>
        <p>
          Com uma trajetória única, Jayme Monjardim é um dos diretores mais
          icônicos do Brasil, responsável por obras que marcaram a história da
          televisão e emocionaram milhões. Filho de Maysa, herdeiro das raízes
          da família Matarazzo e com uma carreira que atravessa fronteiras,
          Jayme traz em suas palestras vivências pessoais e profissionais que
          inspiram em qualquer área.
        </p>
        <p>
          <ul className="list-disc">
            <li>40 anos de carreira e experiência na direção artística.</li>
            <li>Obras que emocionaram e se tornaram patrimônios nacionais.</li>
            <li>
              Histórias de superação, conexão com as raízes e transformação
              pessoal.
            </li>
          </ul>
        </p>
      </div>

      <div>
        <img
          src={palestraMobile}
          alt="Palestra Mobile"
          className="w-full container rounded-md  px-10  lg:hidden"
        />
      </div>

      {/* Imagem inferior */}
      <div className="flex justify-center mt-12">
        <iframe
          src="https://player.vimeo.com/video/1043520308?h=3c0aff8184&autoplay=1&loop=1&muted=1&controls=0&badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          className="w-[80vw] h-[45vw] rounded-md"
        ></iframe>
      </div>
      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-32 "></div>
    </section>
  );
};

export default HistoriaPorTras;
