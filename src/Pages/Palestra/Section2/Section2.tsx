import React from "react";
import historia from "../../../assets/historia.png";
import palestraMobile from "../../../assets/palestra-mobile.png";

const HistoriaPorTras: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 ">
      {/* Título */}
      <h2 className="text-left lg:text-center px-3 lg:px-0 text-6xl md:text-5xl  text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        A História por trás do Sonho
      </h2>

      {/* Imagem do autor */}
      <div className="flex justify-center lg:mb-8">
        <img
          src={historia} // Substitua pelo caminho correto da imagem
          alt="Palestra"
          className="w-full container rounded-md  border-4 border-[#13633E] hidden lg:block"
        />
      </div>

      {/* Texto */}
      <div className="container px-4   lg:px-0 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
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
          src={palestraMobile} // Substitua pelo caminho correto da imagem
          alt="Palestra Mobile"
          className="w-full container rounded-md  px-10  lg:hidden"
        />
      </div>

      {/* Imagem inferior */}
      <div className="flex justify-center mt-12">
        <video
          src="https://s3-figma-videos-production-sig.figma.com/video/1343982015119693441/TEAM/bcb4/9cc7/-fa0f-4814-86fc-5d24e4eef65c?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AOvi8wM1cOswiudQbbvq1SCz4Gh6sLr-Pk7STDvGNQupXvVkV4jkvhF3U57vLe6bf7Llu7ySGF9k5-l2qgXKYT4Bhtvyt7dKM3VZENWwi9C0k4COFnGJFTk50a7mkKYo45i8zGnnVRTifd0thlfwtB5v-iiJAmi7BkShcLMXiUBZkqz-b0QLMyXgrS-fWns8m7q7kTJG65v0ptQWr1hWLdU4NC8cAH7pq--DLLmwSzWQzXmUAaY-umt9DS4DhJywi~KQGg12XD8y-ze1fq58mJaNDdbAs2TLOCkUKDiI8yfbsomTc7gdQExcijeV1fLw~mKURqGCERErcACl8AELhQ__"
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
