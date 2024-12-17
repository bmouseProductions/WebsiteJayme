import React from "react";
import Livro from "../../../assets/HomemLivro.png";
import LivroMobile from "../../../assets/livro-mobile.png";

const SectionCriadorSonhador: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 px-6">
      {/* Título */}
      <h2 className="text-center text-4xl md:text-5xl  text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        Criador e Sonhador
      </h2>

      {/* Imagem do autor */}
      <div className="flex justify-center lg:mb-8">
        <img
          src={Livro} // Substitua pelo caminho correto da imagem
          alt="Jayme Monjardim"
          className="w-full container rounded-md   hidden lg:block"
        />
      </div>

      {/* Texto */}
      <div className="container px-3 lg:px-0 mx-auto text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p>
          Jayme Monjardim traz luz aos seus dramas com um olhar único e mágico.
          Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21 novelas
          e 11 minisséries. Também é cineasta, e sua estreia nos telões foi com
          o longa-metragem “Olga”.
        </p>
        <p>
          Através do universo feminino, Jayme transmite força e poder por meio
          das suas protagonistas. Personagens que além de serem referências e
          inspirações, exalam sensibilidade e representam um forte movimento de
          liderança.
        </p>
        <p>
          Liderar por si só, Jayme Monjardim é emoção. A magia de suas criações
          movem seu propósito de dar vida aos sonhos. O Dream Creator resgata, a
          magnitude de cada um e estimula da nunca parar de tentar. E como diz
          Walt Disney, “Se você pode sonhar, você pode realizar”.
        </p>
      </div>

      <div>
        <img
          src={LivroMobile} // Substitua pelo caminho correto da imagem
          alt="Jayme Monjardim"
          className="w-full container rounded-md  px-10  lg:hidden"
        />
      </div>

      {/* Imagem inferior */}
      <div className="flex justify-center mt-12">
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/1343982015119693441/TEAM/d014/ead5/-3fbc-4153-a7f2-da0e8d1eb8ff?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bzp5unf4yiU99s~I2idiczUk-tylGWHbptqkZq1dcr4AjttjznBv6ks9ghgaQOvDpDkl7Ct~BFLytmDWGoxOf378rPvWeyLx0qNNb7k0o9xs7ky1tFm7Dor2zJZvHgj91IR3UTDppBrusB7cciRHFgnKkgt2PHkJBtbDtlUl6xx1dxEn3tsCuklw6XZvgAR~fESpy3lOg5Xer-HMpP4MxKsCgJWQxHExD1vaftR7dTn7HosvEHu91~L6f~Wv5w2hx1n7WqWzffUUDKXQ2~JH40kodTUQgFLKZiPoofNVoUPy5~0lydOwUDC8HLnEvA2AovXRpn6JcwHoB21UDc8Kwg__"
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

export default SectionCriadorSonhador;
