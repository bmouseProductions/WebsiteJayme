import React from "react";
// import historia from "../../../assets/historia.png";
import palestraMobile from "../../../assets/palestra-mobile.png";

const HistoriaPorTras: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 ">
      {/* Título */}
      <h2 className="text-left  mx-auto lg:text-center px-3 lg:px-0 text-2xl md:text-2xl  text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
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
      <div className="container px-4   lg:px-0 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
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
          src={palestraMobile} // Substitua pelo caminho correto da imagem
          alt="Palestra Mobile"
          className="w-full container rounded-md  px-10  lg:hidden"
        />
      </div>

      {/* Imagem inferior */}
      <div className="flex justify-center mt-12">
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/1343982015119693441/TEAM/bcb4/9cc7/-fa0f-4814-86fc-5d24e4eef65c?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ftoOq5FDwJmo78XSleeE-GT5nunkBM1KxwEa~FCz270baQbVXMpHb0EefrD9CDBoL9alYAvFAgQ7GQD0BGrHNoFS4nyARwbUrL3tOca2Qh1jDy3ADYxA33kdZZvxr6Zfjzznre3qkqBxrb8nczHGe0E07DJMCAT~kvsAAd90WjJaK3FHeb0ll8wxLAYQhCJS3JEwxf58HOrDPO989Mx2zaHGEaAzU1-0G1GhDb6aJMQjeqSDXd9IKUAJIyIeuFvgDLWmArPrgtYkoOWbTv-hZ5TbrwFFfoFdrdy1eQii8gWEJcb~-QxSCr-iki1P-Onob7cCDhAQ2SG8fIKLiCV1DQ__"
          autoPlay
          loop
          muted
          className="w-full  container rounded-md px-10 lg:px-0"
        ></video>
      </div>
      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-32 "></div>
    </section>
  );
};

export default HistoriaPorTras;
