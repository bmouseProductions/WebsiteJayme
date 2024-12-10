import pantanalImage from "../../../assets/longaSeries.png";
import miniSeries from "../../../assets/miniSeries.png";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuasObras = () => {
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
    <section className="relative bg-[#18231E] text-white py-16">
      <div className="relative max-w-screen-2xl mx-auto px-8">
        <div className="mx-auto max-w-screen-xl gap-8 items-center">
          <div>
            <h1 className="text-6xl text-red-500 mb-4 font-medium font-glonimove">
              SUAS <br /> OBRAS.
            </h1>
          </div>

          <div>
            <p className="text-lg leading-relaxed font-normal font-glonimove">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              officiis molestiae rem vero! Hic sunt laboriosam, voluptate in
              labore, eveniet repudiandae architecto itaque explicabo omnis
              quod!
            </p>
            <button className="bg-transparent text-white py-2 px-4 rounded-full border-2 border-white lg:mt-5">
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
                  Longas Séries
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
                  Mini séries
                </h2>
                <button className="bg-[#E0471E] rounded-full text-white py-2 px-4 font-semibold font-glonimove">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative p-4">
              <img
                src="https://s3-alpha-sig.figma.com/img/9dc7/07b9/baaad8b589ff07a9194760a3988849ce?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exIaAJkRKYwD0uZ0Q7EQFxVFZQSYDCqCzEbNHYdDspKYqw50u6dI56LFZulsEEeMb8gIh7DgwmUHLVtdjsP6JpM7oKqqSZ-sz79wHCfYBqOwznc0wDsTOlf3irThKDekwzdDGbChxvqJS-UWNBXJMmTCuzNxkh05~XMXpbm9i-zqF8j~Qum4f2DfnrVRzNDdGSFzr-xPHHccmDNyQHhAjBxbG6xJpVR0ktJQQ7rlPdc-0jrChu4ZAWvo-vuRGeBccVVUfgfBQUk1FSSj9Ba62e0cwO-xtDNSbdFruxI~y3V5X~vll2OotXcslalYDueLvPn0L7M2UswP1Vcn8mdsuA__"
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
                src="https://s3-alpha-sig.figma.com/img/184d/de8a/f2d8935dda0d787f1d068a4932a86134?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L2OuTM~rGCz~n-CqKbmQCsJ~gIoy7y-Rka9rfmkkX8hBGJgek6Z48NuystTuyFBZ1QpftuuDm9JEpKsJ~8VB7EZhPkHfjYfCUNhSf~yvIGv5xYFaud8oJ6psYsPkUs0NJd~EO6ulMF6gXhLiAZwiRaJ52iaSyCVAeIF2hJCq9ifRSJmdHKA6Y18B0c8YnISq2QAsormbTaVD0W290Qw9665nA86moipqmZuknHhTsHFo2gR33oYX5TGFU2gqC5uJ2xMRhzya9nfzRlygT3jOJ2VbgeJU8KxABc8z6P1oO0r7HSQuqag7CX7cApoNZpZdAOCYv8TF6HjecnlWJMTfGg__"
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

export default SuasObras;
