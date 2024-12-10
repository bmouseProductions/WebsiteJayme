import Section1 from "./Section/Section1";
import SectionCriadorSonhador from "./Section2/Section2";
import SectionOrigens from "./Section3/SectionOrigens";
import SectionNovelas from "./Section4/SectionNovelas";

const Vida = () => {
  return (
    <div>
      <Section1 />
      <SectionCriadorSonhador />
      <SectionOrigens />
      <SectionNovelas />
    </div>
  );
};

export default Vida;
