import React from "react";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import seteVidas3 from "../../../../assets/Sete-Vidas-3.jpeg";
import seteVidas from "../../../../assets/Sete-Vidas.jpg";

const SeteVidas: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Sete Vidas" },
    { label: "Data de Lançamento", value: "9 de Março de 2015" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Autor", value: "Lícia Manzo e Daniel Adjafre" },
    {
      label: "Colaboração",
      value: "Cecília Giannetti, Dora Castelar, Marta Góes e Rodrigo Castilh",
    },
    {
      label: "Direção",
      value: "Adriano Melo, Thiago Teitelroit, Bruno Martins e Pedro Freire",
    },
    {
      label: "Direção de fotografia",
      value: "Alexandre Berra e Roberto Soares do Nascimento",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={seteVidas3}
        title="Sete Vidas"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Sete Vidas"
        synopsis="Baseada em uma história real, a trama da novela gira em torno da doação de sémen feita pelo protagonista Miguel. Dessa doação são gerados seis dos seus sete filhos, que se unem em busca do pai biológico. São sete vidas ligadas por Miguel, um oceanógrafo que é dado como morto depois de uma expedição."
        image={seteVidas}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default SeteVidas;
