import React from "react";
import Romaria1 from "../../../../assets/romaria.png";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";

const Romaria: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Romaria" },
    { label: "Data de Lançamento", value: "Último trimestre de 2025." },
    { label: "Direção", value: "Jayme Monjardim" },
    { label: "Roteiro", value: "Letícia Wierzchowski." },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={Romaria1}
        title="Romaria"
        subtitle="Lançamento"
      />
      <WorkDetails
        title="Romaria"
        synopsis="Romaria é uma emocionante novela que acompanha a jornada de sete irmãos, separados pelas divergências da vida, mas unidos pelo último desejo de sua mãe. Durante uma romaria no interior do Brasil, eles embarcam em um caminho de fé, reconciliação e redescoberta dos laços familiares, em uma trama que celebra a devoção, o amor e a força da união."
        image={Romaria1}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Romaria;
