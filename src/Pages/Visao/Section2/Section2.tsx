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
          className="w-full container rounded-md   hidden lg:block"
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

export default OndeQueremosChegar;
