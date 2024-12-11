import React from "react";
import roque from "../../../../assets/roque-santeiro.png";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import RoqueImage from "../../../../assets/roqueSanteiro-thumb.png";

const Roque: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Roque Santeiro" },
    { label: "Data de Lançamento", value: "24 de junho de 1985" },
    {
      label: "Direção",
      value: "Paulo Ubiratan, Jayme Monjardim, Gonzaga Blota e Marcos Paulo",
    },
    { label: "Autor", value: "Dias Gomes" },
    { label: "Coautoria", value: "Aguinaldo Silva" },
    { label: "Colaboração", value: "Marcílio Moraes e Joaquim Assis" },
    { label: "Supervisão", value: "Daniel Filho" },
    { label: "Direção-geral", value: "Paulo Ubiratan" },
    { label: "Edição", value: "Sérgio Louzada e Célio Fonseca" },
    { label: "Produção de arte", value: "Ana Maria Magalhães" },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={RoqueImage}
        title="Roque Santeiro"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Roque Santeiro"
        synopsis="Roque Santeiro é uma das melhores novelas já produzidas e um marco na história da televisão brasileira. Baseado na peça de teatro 'O Berço do Herói', a novela se passa na cidade fictícia de Asa Branca. Roque Santeiro era conhecido na cidade por seus supostos milagres realizados. Dado como morto após uma briga com o bandido Navalhada, o coroinha e artesão de santos reaparece ameaçando e criticando o poder e autoridades locais."
        image={roque}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Roque;
