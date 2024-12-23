import React from "react";
import quero from "../../../assets/ondequeremos.png";
import queroMobile from "../../../assets/queremos-mobile.png";

const OndeQueremosChegar: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 ">
      {/* Título */}
      <h2 className="text-left lg:text-center px-3 lg:px-0 text-6xl md:text-5xl  text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        Aonde queremos chegar?
      </h2>

      {/* Imagem do autor */}
      <div className="flex justify-center lg:mb-8">
        <img
          src={quero} // Substitua pelo caminho correto da imagem
          alt="Jayme Monjardim"
          className="w-full container rounded-md  border-4 border-[#13633E] hidden lg:block"
        />
      </div>

      {/* Texto */}
      <div className="container px-4   lg:px-0 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p>
          Entender aonde queremos chegar, é sobre entender o propósito que nos
          move, honrar as histórias que nos trouxeram até aqui e traçar novos
          caminhos com coragem e paixão. É sobre emocionar, transformar, e levar
          adiante a chama que ilumina nossa trajetória. Eu quero chegar aonde os
          sonhos me chamam, sempre mais longe, sempre mais fundo, conectando o
          passado, o presente e o futuro em cada passo que eu der.
        </p>
        <p>
          E meu propósito vai além das telas. Minha missão é dar voz ao que é
          essencialmente humano, trazer para a tela emoções tão reais que nos
          fazem sentir parte de algo maior. É isso que me move: a magia de
          emocionar, de criar pontes entre a ficção e a vida.
        </p>
      </div>

      <div>
        <img
          src={queroMobile} // Substitua pelo caminho correto da imagem
          alt="Jayme Monjardim"
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

export default OndeQueremosChegar;
