import tempodeamor from "../../../assets/tempodeamarthumb.jpg";
import seteVidas from "../../../assets/Sete-Vidas.jpg";
import aVidadaGente from "../../../assets/a-vida-da-gente.jpg";
import viverAvida from "../../../assets/viveravida.jpg";
import oClone from "../../../assets/oClone.jpg";
import terraNostra from "../../../assets/terra-nostra.jpg";
import pantanal from "../../../assets/pantanal-thumb.jpg";
import DireitoDeAmar from "../../../assets/Direito_de_Amar.jpg";
import RoqueSanteiro from "../../../assets/Roque-Santeiro-scaled.jpg";

import ThemeObras from "../../../components/ThemeObras/ThemeObras";

const LongasSeries = () => {
  const data = {
    title: "Longas Series",
    description:
      "Jayme Monjardim traz luz às suas obras com um olhar único e mágico. Há 37 anos é diretor da Rede Globo, onde já dirigiu mais de 21 novelas e 11 minisséries.",
    themeColor: "#E0471E",
    images: [
      { src: tempodeamor, title: "Tempo de Amar", url: "/tempo-de-amar" },
      { src: seteVidas, title: "Sete Vidas", url: "/sete-vidas" },
      { src: aVidadaGente, title: "A Vida da Gente", url: "/a-vida-da-gente" },
      { src: viverAvida, title: "Viver a Vida", url: "/viver-a-vida" },
      { src: oClone, title: "O Clone", url: "/o-clone" },
      { src: terraNostra, title: "Terra Nostra", url: "/terra-nostra" },
      { src: pantanal, title: "Pantanal", url: "/pantanal" },
      { src: DireitoDeAmar, title: "Direito de Amar", url: "/direito-de-amar" },
      { src: RoqueSanteiro, title: "Roque Santeiro", url: "/roque-santeiro" },
    ],
  };

  return <ThemeObras {...data} />;
};

export default LongasSeries;
