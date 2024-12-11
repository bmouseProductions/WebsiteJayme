import React from "react";
import olga from "../../../../assets/Olga-7.jpg";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import olga2 from "../../../../assets/Olga-4.jpg";

const Olga: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Olga" },
    { label: "Data de Lançamento", value: "20 de Agosto de 2004" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Roteiro ", value: "Rita Buzzar" },
    { label: "Fotografia", value: "Ricardo Della Rosa" },
    { label: "Diretor de Arte", value: "Tiza de Oliveira" },
    {
      label: "Direção de produção",
      value: "Cláudia Braga",
    },
    {
      label: "Produtor executivo",
      value: "Guilherme Bokel",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={olga2}
        title="Olga"
        subtitle="Filme"
      />
      <WorkDetails
        title="Olga"
        synopsis="Baseado em fatos reais, o longa metragem conta a história de Olga Benário Prestes, uma jovem, alemã, judia e militante do movimento comunista. Perseguida em Berlim pela polícia, a alemã foge para Moscou onde recebe treinamento militar e acaba sendo responsável por acompanhar Luís Carlos Prestes em sua viagem de volta ao Brasil. Os dois acabam se envolvendo tanto na política quanto na vida pessoal."
        image={olga}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Olga;
