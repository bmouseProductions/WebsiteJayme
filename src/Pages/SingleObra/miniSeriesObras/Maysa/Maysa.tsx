import React from "react";
import maysa from "../../../../assets/maysa.png";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import MaysaImage from "../../../../assets/Maysa-1.jpg";

const Maysa: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Maysa: Quando Fala O Coração" },
    { label: "Data de Lançamento", value: "5 de Janeiro de 2009" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Autor", value: "Manoel Carlos e Angela Chaves" },
    { label: "Direção dos musicais", value: "Mário Meirelles" },
    { label: "Colaboração", value: "Maria Carolina e Mariana Torres" },
    { label: "Direção de produção", value: "Guilherme Boke" },
    {
      label: "Produção de arte",
      value: "Tiza de Oliveira, André Soeiro, Jussara Xavier",
    },
    { label: "Direção de fotografia", value: "Affonso Beato" },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={MaysaImage}
        title="Maysa: Quando Fala O Coração"
        subtitle="Mini Series"
      />
      <WorkDetails
        title="Maysa: Quando Fala O Coração"
        synopsis="Sucesso absoluto de audiência, em “Maysa – Quando fala o Coração” Jayme Monjardim traz para as telas a vida de sua mãe. A minissérie emocionou o público com a história de um dos maiores ícones da música nacional. Intensa, ousada, transgressora, mas também sensível, romântica e talentosa, ela era muitas em uma só. Em tudo que fez nos palcos, e fora deles, Maysa seguiu seu coração, quebrou paradigmas, lutou pelos seus sonhos e se tornou uma das maiores cantoras do Brasil."
        image={maysa}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Maysa;
