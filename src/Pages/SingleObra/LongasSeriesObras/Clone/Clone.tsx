import React from "react";
import clone from "../../../../assets/O-Clone-5.jpg";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import oClone from "../../../../assets/oClone.jpg";

const Clone: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "O Clone" },
    { label: "Data de Lançamento", value: "1 de Outubro de 2001" },
    {
      label: "Direção",
      value: "Jayme Monjardim, Marcos Schechtman e Mário Márcio Bandarra",
    },
    { label: "Autor", value: "Gloria Perez" },
    {
      label: "Direção de núcleo",
      value: "Jayme Monjardim",
    },
    {
      label: "Direção de produção",
      value: "Guilherme Bokel",
    },
    {
      label: "Direção de Fotografia",
      value: "Adriano Calheiro Valentim",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={clone}
        title="O Clone"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="O Clone"
        synopsis="O Clone conta a história de um amor impossível entre a muçulmana Jade e o brasileiro Lucas, que se conheceram no Marrocos. Após ter seu irmão gêmeo morto, Lucas tem seus genes congelados originando a primeira clonagem humana, um tema inovador para a época. A trama aborda a busca da identidade muçulmana em crise com a sua cultura, os gêmeos idênticos, o conflito entre clone e clonado e do homem diante de Deus.

        "
        image={oClone}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Clone;
