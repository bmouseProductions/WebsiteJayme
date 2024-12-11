import React from "react";
import pantanal3 from "../../../../assets/Pantanal-3.jpg";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import pantanal from "../../../../assets/pantanal-thumb.jpg";

const Pantanal: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Pantanal" },
    { label: "Data de Lançamento", value: "27 de Março de 1990" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Autor", value: "Benedito Ruy Barbosa" },
    {
      label: "Direção",
      value: "Carlos Magalhães, Roberto Naar e Marcelo de Barreto",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={pantanal3}
        title="Pantanal"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Pantanal"
        synopsis="Sucesso nos anos 90 na extinta TV Manchete, foi um verdadeiro fenômeno de audiência e conquistou o público com suas belas imagens da biodiversidade brasileira. A novela narrou a história da Família Leôncio, proprietária de uma fazenda que criava gado na região. A narrativa também abordou temáticas baseadas no folclore do Pantanal, como a história de Juma Marruá, uma mulher que dizia se transformar em onça, e “O Velho do Rio”, um curandeiro idoso da região.

        "
        image={pantanal}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Pantanal;
