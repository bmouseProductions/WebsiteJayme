import maysa from "../../../assets/maysa.png";
import seteMulheres from "../../../assets/A-Casas-das-7-Mulheres.jpg";
import chiquinho from "../../../assets/chiquinho.jpg";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const MiniSeries = () => {
  const data = {
    title: "Minisséries e Séries",
    description:
      "Narrativas intensas e inesquecíveis, onde cada detalhe conduz o espectador a mundos repletos de sentimento e verdade.",
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
