import vendedorDeSonhos from "../../../assets/vendedor-de-sonhos.jpg";
import oTempoeoVento from "../../../assets/O-Tempo-e-o-Vento-5.jpeg";
import olga from "../../../assets/Olga-7.jpg";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const Filme = () => {
  const data = {
    title: "Filmes",
    description:
      "Do cinema para o coração. Jayme transporta sua visão sensível para a telona, criando obras que permanecem vivas na memória.",
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
