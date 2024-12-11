import React from "react";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import TempodeAmar from "../../../../assets/tempodeamorthumb.png";
import tempodeamor from "../../../../assets/tempodeamarthumb.jpg";

const TempoDeAmar: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Tempo de Amar" },
    { label: "Data de Lançamento", value: "26 de Setembro de 2017" },
    {
      label: "Direção",
      value: "Adriano Melo e Jayme Monjardim",
    },
    { label: "Autor", value: "Alcides Nogueira e Bia Corrêa do Lago" },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={TempodeAmar}
        title="Tempo de Amar"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Tempo de Amar"
        synopsis="O fio condutor da trama “Tempo de Amar” é o romance entre Maria Vitória e Inácio na aldeia fictícia de Morros Verdes, em Portugal. Tendo vidas diferentes, o casal que se apaixonou a primeira vista,  enfrenta diversas barreiras para se manterem juntos, mostrando a força do verdadeiro amor."
        image={tempodeamor}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default TempoDeAmar;
