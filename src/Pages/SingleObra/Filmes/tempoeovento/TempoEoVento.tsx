import React from "react";
import oTempoeoVento from "../../../../assets/O-Tempo-e-o-Vento-5.jpeg";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import tempo from "../../../../assets/O-Tempo-e-o-Vento-3.jpeg";

const Tempo: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "O Tempo e o Vento" },
    { label: "Data de Lançamento", value: "27 de Setembro de 2013" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Roteiro ", value: "Érico Veríssimo" },
    { label: "Diretor de Fotografia", value: "Affonso Beato" },
    { label: "Produção", value: "Beto Rodrigues" },
    {
      label: "Diretor de Arte",
      value: "Tiza de Oliveira",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={tempo}
        title="O Tempo e o Vento"
        subtitle="Filme"
      />
      <WorkDetails
        title="O Tempo e o Vento"
        synopsis="“O Tempo e o Vento” é baseado na maior obra do escritor Érico Veríssimo. O filme retrata a história de 300 anos da família Terra Cambará e da oponente família Amaral, a partir da perspectiva de Bibiana. A luta entre as duas famílias começa nas Missões na cidade de Santa Fé. A trama apresenta também o período de formação do estado Rio Grande do Sul e a disputa de território entre as coroas portuguesa e espanhola."
        image={oTempoeoVento}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Tempo;
