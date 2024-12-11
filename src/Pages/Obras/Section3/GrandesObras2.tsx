import pantanalImage from "../../../assets/longaSeries.png";
import miniSeries from "../../../assets/miniSeries.png";
// import filmes from "../../../assets/filmes.png";
// import lancamentos from "../../../assets/lancamentos.png";
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
                Jayme Monjardim traz luz às suas obras com um olhar único e
                mágico. Há 37 anos é diretor da Rede Globo, onde já dirigiu mais
                de 21 novelas e 11 minisséries.
              </span>{" "}
              Também é cineasta, e sua estreia nas telonas foi com o
              longa-metragem "Olga"...
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
                  Longas Séries
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
                  Mini séries
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-1 sm:py-2 px-3 sm:px-4">
                  <a href="/Mini-Series">Saiba Mais</a>
                </button>
              </div>
            </div>
            <div className="relative p-2 sm:p-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/9dc7/07b9/baaad8b589ff07a9194760a3988849ce?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exIaAJkRKYwD0uZ0Q7EQFxVFZQSYDCqCzEbNHYdDspKYqw50u6dI56LFZulsEEeMb8gIh7DgwmUHLVtdjsP6JpM7oKqqSZ-sz79wHCfYBqOwznc0wDsTOlf3irThKDekwzdDGbChxvqJS-UWNBXJMmTCuzNxkh05~XMXpbm9i-zqF8j~Qum4f2DfnrVRzNDdGSFzr-xPHHccmDNyQHhAjBxbG6xJpVR0ktJQQ7rlPdc-0jrChu4ZAWvo-vuRGeBccVVUfgfBQUk1FSSj9Ba62e0cwO-xtDNSbdFruxI~y3V5X~vll2OotXcslalYDueLvPn0L7M2UswP1Vcn8mdsuA__"
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
                src="https://s3-alpha-sig.figma.com/img/184d/de8a/f2d8935dda0d787f1d068a4932a86134?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L2OuTM~rGCz~n-CqKbmQCsJ~gIoy7y-Rka9rfmkkX8hBGJgek6Z48NuystTuyFBZ1QpftuuDm9JEpKsJ~8VB7EZhPkHfjYfCUNhSf~yvIGv5xYFaud8oJ6psYsPkUs0NJd~EO6ulMF6gXhLiAZwiRaJ52iaSyCVAeIF2hJCq9ifRSJmdHKA6Y18B0c8YnISq2QAsormbTaVD0W290Qw9665nA86moipqmZuknHhTsHFo2gR33oYX5TGFU2gqC5uJ2xMRhzya9nfzRlygT3jOJ2VbgeJU8KxABc8z6P1oO0r7HSQuqag7CX7cApoNZpZdAOCYv8TF6HjecnlWJMTfGg__"
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
