import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

type ImageItem = {
  src: string;
  title: string;
  url: string;
};

interface GrandesObrasProps {
  title: string;
  description: string;
  themeColor?: string; // Cor principal do tema
  images: ImageItem[];
}

const ThemeObras = ({
  title,
  description,
  themeColor = "#E0471E",
  images,
}: GrandesObrasProps) => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: "ease",
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <div className="grid grid-cols-1 gap-6 text-center md:text-left md:grid-cols-2 items-center">
          <div>
            <h1
              className="text-4xl sm:text-6xl mb-4 font-normal font-glonimove"
              style={{ color: themeColor }}
            >
              {title}
            </h1>
          </div>
          <div>
            <p className="text-base sm:text-lg leading-relaxed font-normal font-glonimove">
              <span style={{ color: themeColor }}>{description}</span>
            </p>
          </div>
        </div>

        <div className="relative mt-8">
          <Slider {...settings}>
            {images.map((item, index) => (
              <div key={index} className="relative p-2 sm:p-4">
                <Link to={item.url}>
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-auto h-64 sm:h-[400px] object-cover rounded-md mx-auto"
                  />
                </Link>
                <div className="text-white text-left">
                  <h2 className="text-xl  text-center  mt-4 sm:text-3xl font-normal font-glonimove mb-2 sm:mb-4">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ThemeObras;
