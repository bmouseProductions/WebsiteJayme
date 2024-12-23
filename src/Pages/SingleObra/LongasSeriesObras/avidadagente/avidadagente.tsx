import React from "react";
import aVidadaGente from "../../../../assets/a-vida-da-gente.jpg";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import vidadagente from "../../../../assets/casal-novela-a-vida-da-gente-0717-1400x800.jpg";

const Avidadagente: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "A Vida da Gente" },
    { label: "Data de Lançamento", value: "26 de setembro de 2011" },
    {
      label: "Direção",
      value: "Jayme Monjardim e Fabrício Mamberti",
    },
    { label: "Autor", value: "Lícia Manzo" },
    { label: "Escrita por", value: "Lícia Manzo e Marcos Bernstein" },
    {
      label: "Colaboração",
      value:
        "Álvaro Ramos, Carlos Gregório, Giovana Moraes, Marta Goes e Tati Bernardi",
    },
    { label: "Direção de núcleo", value: "Daniel Filho" },
    {
      label: "Direção",
      value:
        "Teresa Lampreia, Luciano Sabino, Adriano Melo e Leonardo Nogueira",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={vidadagente}
        title="A Vida da Gente"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="A Vida da Gente"
        synopsis="Movida pelo amor familiar, a novela “A Vida da Gente” narra a história de uma linda amizade entre duas irmãs e um amor em comum. Ana engravida, mas tem um acidente que a deixa em coma, e Manu, sua irmã, passa a cuidar da sua sobrinha com Rodrigo. Da convivência nasce uma paixão. Quando Ana sai do coma, existe um triângulo amoroso e um conflito que eles não poderiam imaginar."
        image={aVidadaGente}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Avidadagente;
