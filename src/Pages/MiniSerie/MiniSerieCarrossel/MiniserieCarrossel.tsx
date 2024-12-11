import maysa from "../../../assets/maysa.png";
import seteMulheres from "../../../assets/A-Casas-das-7-Mulheres.jpg";
import chiquinho from "../../../assets/chiquinho.jpg";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const MiniSeries = () => {
  const data = {
    title: "Mini Séries",
    description:
      "Jayme Monjardim traz luz às suas obras com um olhar único e mágico. Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21 novelas e 11 minisséries.",
    themeColor: "#E0471E",
    images: [
      {
        src: maysa,
        title: "Maysa: Quando fala o coração",
        url: "/maysa-quando-fala-o-coracao",
      },
      {
        src: seteMulheres,
        title: "A casa das 7 Mulheres",
        url: "/a-casa-das-7-mulheres",
      },
      { src: chiquinho, title: "Chiquinho Gonzaga", url: "/chiquinho-gonzaga" },
    ],
  };

  return <ThemeObras {...data} />;
};

export default MiniSeries;
