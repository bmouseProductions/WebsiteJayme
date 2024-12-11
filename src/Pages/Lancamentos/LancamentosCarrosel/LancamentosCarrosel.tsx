import AventalRosa from "../../../assets/O-avental-rosa-scaled.jpg";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const LancamentosCarrossel = () => {
  const data = {
    title: "Lançamentos",
    description:
      "Jayme Monjardim traz luz às suas obras com um olhar único e mágico. Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21 novelas e 11 minisséries.",
    themeColor: "#E0471E",
    images: [
      { src: AventalRosa, title: "O avental rosa", url: "/o-avental-rosa" },
      { src: AventalRosa, title: "O avental rosa", url: "/o-avental-rosa" },
    ],
  };

  return <ThemeObras {...data} />;
};

export default LancamentosCarrossel;
