import React from "react";
import chiquinho from "../../../../assets/chiquinho.jpg";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import casa7 from "../../../../assets/gabriela-duarte-chiquinha-gonzaga-globo-divulgacao_fixed_large.jpg";

const Chiquinho: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Chiquinha Gonzaga" },
    { label: "Data de Lançamento", value: "12 de Janeiro de 1999" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Autor", value: "Lauro César Muniz" },
    { label: "Colaboração", value: "Marcílio Moraes" },
    {
      label: "Direção",
      value: "Jayme Monjardim, Marcelo Travesso e Luiz Armando Queiroz",
    },
    { label: "Direção de fotografia", value: "Adriano Valentim" },
    { label: "Direção de produção", value: "Eduardo Figueira" },
    { label: "Direção geral de criação", value: "Daniel Filho" },
    {
      label: "Direção de imagem",
      value: "Milton Valinho",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={casa7}
        title="Chiquinha Gonzaga"
        subtitle="Mini Series"
      />
      <WorkDetails
        title="Chiquinha Gonzaga"
        synopsis="Boemia, ideias libertárias e muita música. A minissérie, que foi sucesso de crítica e público, mostrou com primor a efervescência cultural carioca através da figura forte de Chiquinha, uma mulher que contribuiu para a popularização do mais brasileiro dos ritmos: o samba! Além da superprodução e grande elenco, Chiquinha Gonzaga emocionou o público e ficou para a história da televisão brasileira."
        image={chiquinho}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Chiquinho;
