import pantanalImage from "../../../assets/longaSeries.png";
import miniSeries from "../../../assets/miniSeries.png";
import filmes from "../../../assets/filmes-thumb.png";
import lancamentos from "../../../assets/romaria.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GrandesObras2 = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "ease",
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768, // Para dispositivos móveis
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="relative bg-[#18231E] text-white py-16">
      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-8">
        {/* Título e descrição */}
        <div className="grid grid-cols-1 gap-6 text-center md:text-left md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-6xl text-red-500 mb-4 font-normal font-glonimove">
              GRANDES <br /> OBRAS.
            </h1>
          </div>
          <div>
            <p className="text-base sm:text-lg leading-relaxed font-normal font-glonimove">
              <span className="text-[#E0471E]">
                Jayme Monjardim ilumina histórias com sua sensibilidade única,
                transformando roteiros em experiências que tocam a alma. Cada
                obra carrega sua marca: uma direção que dá vida a emoções
                profundas e traz o público para mais perto de histórias que
                refletem a essência humana.
              </span>{" "}
              Convido você a conhecer essas grandes narrativas, que deixaram sua
              marca na memória e no coração de tantos.
            </p>
          </div>
        </div>

        {/* Slider */}
        <div className="relative mt-8">
          <Slider {...settings}>
            <div className="relative p-2 sm:p-4">
              <img
                src={pantanalImage}
                alt="Imagem 1"
                className="w-full h-64 sm:h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white text-left">
                <h2 className="text-xl sm:text-3xl font-normal font-glonimove mb-2 sm:mb-4">
                  Novelas
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-1 sm:py-2 px-3 sm:px-4 font-normal font-glonimove">
                  <a href="/Longas-Serie">Saiba Mais</a>
                </button>
              </div>
            </div>
            <div className="relative p-2 sm:p-4">
              <img
                src={miniSeries}
                alt="Imagem 2"
                className="w-full h-64 sm:h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white text-left">
                <h2 className="text-xl sm:text-3xl font-normal font-glonimove mb-2 sm:mb-4">
                  Minisséries e Séries
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-1 sm:py-2 px-3 sm:px-4">
                  <a href="/Mini-Series">Saiba Mais</a>
                </button>
              </div>
            </div>
            <div className="relative p-2 sm:p-4">
              <img
                src={filmes}
                alt="Imagem 3"
                className="w-full h-64 sm:h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white text-left">
                <h2 className="text-xl sm:text-3xl font-normal font-glonimove mb-2 sm:mb-4">
                  Filmes
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-1 sm:py-2 px-3 sm:px-4 font-normal font-glonimove">
                  <a href="/Filmes">Saiba Mais</a>
                </button>
              </div>
            </div>
            <div className="relative p-2 sm:p-4">
              <img
                src={lancamentos}
                alt="Imagem 4"
                className="w-full h-64 sm:h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white text-left">
                <h2 className="text-xl sm:text-3xl font-normal font-glonimove mb-2 sm:mb-4">
                  Lançamentos
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-1 sm:py-2 px-3 sm:px-4 font-normal font-glonimove">
                  <a href="/Lancamentos">Saiba Mais</a>
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default GrandesObras2;
