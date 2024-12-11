import React from "react";
import aventalRosa from "../../../../assets/O-avental-rosa-scaled.jpg";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import avental2 from "../../../../assets/O-AVENTAL-ROSA_CYRIA-COENTRO_Credito_Mariana-Catalane-1-scaled.jpg";

const Avental: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "O Avental Rosa" },
    { label: "Data de Lançamento", value: "Em breve" },
    { label: "Direção", value: "Jayme Monjardim" },
    { label: "Coprodução", value: "Accorde Filmes, Globo Filmes" },
    { label: "Roteiro", value: "Jayme Monjardim e Claudia Netto" },
    { label: "Coordenação de Produção", value: "Paulo Nascimento" },
    { label: "Direção de Fotografia", value: "Nonato Estrela" },
    { label: "Direção de Arte", value: "Lara Tausz" },
    { label: "Produção Executiva", value: "Marilaine Castro da Costa" },
    { label: "Montagem", value: "Marcio Papel" },
    { label: "Captação de Som", value: "André Sittoni" },
    {
      label: "Desenho de Som",
      value: "Alessandro Laroca, Eduardo Virmond Lima, Renan Deodato",
    },
    { label: "Trilha Sonora", value: "Alexandre Guerra" },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={avental2}
        title="O Avental Rosa"
        subtitle="Lançamento"
      />
      <WorkDetails
        title="O Avental Rosa"
        synopsis="O novo filme de Jayme Monjardim conta a história de Alice, uma mulher de 50 anos que cuida de pacientes terminais. No dia a dia do trabalho em diferentes hospitais, ela se envolve com as histórias surpreendentes dos pacientes e, aos poucos, reencontra sua autoestima e a força necessária para seguir em frente. Está em fase de lançamento e produção."
        image={aventalRosa}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Avental;
