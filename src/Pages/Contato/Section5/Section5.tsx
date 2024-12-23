import pantanalImage from "../../../assets/longaSeries.png";
import miniSeries from "../../../assets/miniSeries.png";

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
                src="https://s3-alpha-sig.figma.com/img/9dc7/07b9/baaad8b589ff07a9194760a3988849ce?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jjtAMo97-uMyVuG8qcE2kT2xpW0TsXq-HmqEmEuCKEPNLSVBUZIBGo6JlQYK961Ao~1z3eHjoVHnLIzfOilaUAbeizNgpU7oXjP-nf3VJobllDrnBKQBWLUSjbvG8XA~8CPBqHuxOqTu1f3Hduj511rQvOrVgyyP~4tjrFumkWsSUadpRfCzlEN4JMrD2LNlVIferK7TZN6py-ejaJaKnrmS8sCIbPYKHLDObU54dE3o6B3JGzq9aFS-~rck6erwfSXU7nizyngMY-Br7e3SKdYByWjeQI0KCIpMp-lsWtcVBH9SHGzyHfza4qtDWPHg9e5LKcPI2GSbOAEHgHglYg__"
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
                src="https://s3-alpha-sig.figma.com/img/184d/de8a/f2d8935dda0d787f1d068a4932a86134?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SRhvm6vQSqDLvIfL9YPb7N8l5-goyWCjO3PwKl~dTrGSBo~V3Yeel-wFWYGgxhc~pbZB5Sgt9lsQO1bRqCa1KnfsJ6EJXTiAP5KMNXXwuC9Z4zLwKyto~OBIoab7NT4zTYt1KfAyVBd8zaNWvjKwwTHQ4kv4qn-E0~MWUz1NAYKk1t87Z7E8N6GvppY7T-QuegvZ5r~~Jczcpb-OeUWlNTz~nxNrWdtilaraidebhLrTzNjU~fDWdhnYQOfRqKIxS-IlTGAaWZiBBGBbdzrLUqgo-ZAkHOdbWObUBAIPp3o88HGFiuljiLCNIYs4E2704VCQz6m6NJpTYw83Di5Xrw__"
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
