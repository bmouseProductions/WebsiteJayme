import AventalRosa from "../../../assets/O-avental-rosa-scaled.jpg";
import Romaria from "../../../assets/romaria.png";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const LancamentosCarrossel = () => {
  const data = {
    title: "Lançamentos",
    description:
      "Histórias que se renovam com a marca de Jayme Monjardim. Descubra as criações mais recentes que continuam emocionando e surpreendendo o público.",
    themeColor: "#E0471E",
    images: [
      { src: AventalRosa, title: "O avental rosa", url: "/o-avental-rosa" },
      { src: Romaria, title: "Romaria", url: "/romaria" },
    ],
  };

  return <ThemeObras {...data} />;
};

export default LancamentosCarrossel;
