import palestra from "../../../assets/palestra.png";
import icons from "../../../assets/all-icons.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Palestra = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1, // Mostra um card por vez
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "ease",
    dots: false, // Adiciona navegação por pontos
    arrows: false, // Exibe setas para navegação
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="bg-[#1C2415] px-4 py-16 md:py-24 lg:py-32">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="p-4 md:p-10">
          <div className="bg-[#2B3A1D] h-screen lg:h-auto rounded-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {/* Imagem */}
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={palestra}
                alt="Grandes Narrativas"
                className="rounded-md object-cover h-[200px]  lg:h-[50rem] w-full "
              />
            </div>
            {/* Texto */}
            <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4 md:p-6">
              <img src={icons} className="w-48 md:w-64 mb-6" alt="Ícones" />
              <h1 className="text-[#F12730] text-2xl md:text-4xl lg:text-5xl font-medium font-glonimove mb-4">
                Palestra
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 font-extralight font-glonimove">
                Como palestrante, Jayme se conecta com as pessoas, gerando mais
                proximidade com seu público e compartilhando seus aprendizados e
                experiências.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed font-extralight font-glonimove">
                Em sua palestra, fala sobre um tema que acredita ser
                fundamental: A História por trás do Sonho – Como uma jornada de
                criatividade e dedicação podem impulsionar os sonhos.
              </p>
              <div className="mt-6">
                <button className="bg-transparent text-white py-2 px-4 rounded-full border-2 border-white font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="p-4 md:p-10">
          <div className="bg-[#2B3A1D] lg:h-auto h-screen rounded-lg flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {/* Imagem */}
            <div className="w-full md:w-auto flex justify-center">
              <img
                src={palestra}
                alt="Grandes Narrativas"
                className="rounded-md object-cover h-[200px] lg:h-[50rem] w-full "
              />
            </div>
            {/* Texto */}
            <div className="w-full md:w-1/2 text-white flex flex-col justify-center p-4 md:p-6">
              <img src={icons} className="w-48 md:w-64 mb-6" alt="Ícones" />
              <h1 className="text-[#F12730] text-2xl md:text-4xl lg:text-5xl font-medium font-glonimove mb-4">
                DreamLab
              </h1>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed mb-4 font-extralight font-glonimove">
                Um ambiente criativo com conteúdos inspiradores e uma boa dose
                de sonho. O DreamLab (Laboratório dos Sonhos) tem como missão
                mudar a maneira que a educação encontra o futuro.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed font-extralight font-glonimove">
                Em um ambiente inspirador, o objetivo do Lab é estimular o poder
                dos sonhos, do imaginário e da criatividade.
              </p>
              <div className="mt-6">
                <button className="bg-transparent text-white py-2 px-4 rounded-full border-2 border-white font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Palestra;
