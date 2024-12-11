import vendedorDeSonhos from "../../../assets/vendedor-de-sonhos.jpg";
import oTempoeoVento from "../../../assets/O-Tempo-e-o-Vento-5.jpeg";
import olga from "../../../assets/Olga-7.jpg";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const Filme = () => {
  const data = {
    title: "Filmes",
    description:
      "Jayme Monjardim traz luz às suas obras com um olhar único e mágico. Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21 novelas e 11 minisséries.",
    themeColor: "#E0471E",
    images: [
      {
        src: vendedorDeSonhos,
        title: "Vendedor de Sonhos",
        url: "/vendedor-de-sonhos",
      },
      {
        src: oTempoeoVento,
        title: "O tempo e o vento",
        url: "/o-tempo-e-o-vento",
      },
      { src: olga, title: "Olga", url: "/Olga" },
    ],
  };

  return <ThemeObras {...data} />;
};

export default Filme;
