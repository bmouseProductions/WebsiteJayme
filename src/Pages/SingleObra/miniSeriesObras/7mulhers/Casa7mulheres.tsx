import React from "react";
import seteMulheres from "../../../../assets/A-Casas-das-7-Mulheres.jpg";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import casa7 from "../../../../assets/Casa-Sete-Mulheres-4.jpg";

const Casa7: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "A Casa das Sete Mulheres" },
    { label: "Data de Lançamento", value: "7 de Janeiro de 2003" },
    {
      label: "Direção",
      value: "Jayme Monjardim e Marcos Schechtman",
    },
    { label: "Autor", value: "Maria Adelaide Amaral e Walther Negrão" },
    { label: "Direção", value: "Teresa Lampreia" },
    { label: "Direção de núcleo", value: "Jayme Monjardim" },
    { label: "Direção de produção", value: "Guilherme Bokel" },
    {
      label: "Direção de imagem",
      value: "Cassiano Filho",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={casa7}
        title="A Casa das Sete Mulheres"
        subtitle="Mini Series"
      />
      <WorkDetails
        title="A Casa das Sete Mulheres"
        synopsis="A Casa das Sete Mulheres” tem sua trama desenvolvida durante a Revolução Farroupilha, no sul do Brasil. A minissérie tem sua história contada a partir da visão das sete figuras femininas da família de Bento Gonçalves – líder dos farrapos. Em meio aos conflitos, um de seus maiores aliados, Giuseppe Garibaldi, se apaixona por Anita – uma mulher guerreira e revolucionária, desencadeando uma forte história de amor."
        image={seteMulheres}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Casa7;
