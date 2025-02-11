import pantanalImage from "../../../assets/longaSeries.png";
import miniSeries from "../../../assets/miniSeries.png";
import filmes from "../../../assets/filmes-thumb.png";
import lancamentos from "../../../assets/romaria.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuasObrasContato = () => {
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
        breakpoint: 1024, // Para telas menores que 1024px (tablets e dispositivos maiores)
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768, // Para telas menores que 768px (telas de smartphones)
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480, // Para telas menores que 480px (smartphones pequenos)
        settings: {
          slidesToShow: 1,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <section className="relative bg-[#1C2415] text-white py-16">
      <div className="relative max-w-screen-2xl mx-auto px-8">
        <div className="mx-auto max-w-screen-xl gap-8 items-center">
          <div>
            <h1 className="text-6xl text-[#E0471E] mb-4 font-medium font-glonimove">
              SUAS <br /> OBRAS.
            </h1>
          </div>

          <div>
            <p className="text-lg leading-relaxed font-normal font-glonimove">
              Conheça outras histórias marcantes, que tocaram profundamente a
              memória e o coração do público.
            </p>
            <button className="bg-transparent text-white py-2 px-4 my-10 rounded-full border-2 border-white lg:mt-5">
              Saiba Mais
            </button>
          </div>
        </div>

        <div className="relative">
          <Slider {...settings}>
            <div className="relative p-4">
              <img
                src={pantanalImage}
                alt="Imagem 1"
                className="w-full h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-8 left-8 text-white text-left">
                <h2 className="text-3xl mb-4 font-normal font-glonimove">
                  Novelas
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-2 px-4 font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative p-4">
              <img
                src={miniSeries}
                alt="Imagem 2"
                className="w-full h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-8 left-8 text-white text-left">
                <h2 className="text-3xl mb-4 font-normal font-glonimove">
                  Minisséries e Séries
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-2 px-4 font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative p-4">
              <img
                src={filmes}
                alt="Imagem 3"
                className="w-full h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-8 left-8 text-white text-left">
                <h2 className="text-3xl mb-4 font-normal font-glonimove">
                  Filmes
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-2 px-4 font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative p-4">
              <img
                src={lancamentos}
                alt="Imagem 4"
                className="w-full h-[400px] object-cover rounded-md"
              />
              <div className="absolute bottom-8 left-8 text-white text-left">
                <h2 className="text-3xl mb-4 font-normal font-glonimove">
                  Lançamentos
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-2 px-4 font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SuasObrasContato;
