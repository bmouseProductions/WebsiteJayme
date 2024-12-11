import React from "react";
import terra from "../../../../assets/Terra-Nostra-4.jpeg";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import terraNostra from "../../../../assets/terra-nostra.jpg";

const Terra: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Terra Nostra" },
    { label: "Data de Lançamento", value: "20 de Setembro de 1999" },
    {
      label: "Direção",
      value: "Jayme Monjardim e Carlos Magalhães",
    },
    { label: "Autor", value: "Benedito Ruy Barbosa" },
    {
      label: "Colaboração",
      value: "Edmara Barbosa e Edilene Barbosa",
    },
    {
      label: "Direção",
      value: "Jayme Monjardim, Carlos Magalhães e Marcelo Travesso",
    },
    {
      label: "Direção de produção",
      value: "Ruy Mattos",
    },
    {
      label: "Direção de Fotografia",
      value: "Adriano Valentim e Chico Boya",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={terra}
        title="Terra Nostra"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Terra Nostra"
        synopsis="Um grande épico, que mostra a emoção da saga do povo brasileiro no século XX. Conta como trama principal a história da imigração italiana e mostra a importância desse período na formação da sociedade brasileira. Destaque para o romance de Giuliana e Matteo, imigrantes que foram tentar uma vida melhor e se conhecem a bordo do navio para o Brasil.

        "
        image={terraNostra}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Terra;
