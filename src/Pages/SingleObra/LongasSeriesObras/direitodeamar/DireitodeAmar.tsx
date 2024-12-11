import React from "react";
import DireitoDeAmar from "../../../../assets/Direito_de_Amar.jpg";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import direito from "../../../../assets/direitodeamar.jpeg";

const Direito: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Direito de Amar" },
    { label: "Data de Lançamento", value: "16 de Fevereiro de 1987" },
    {
      label: "Direção",
      value: "Jayme Monjardim e José Carlos Pieri",
    },
    { label: "Autor", value: "Walther Negrão" },
    {
      label: "Colaboração",
      value: "Marilu Saldanha, Ana Maria Moretzsohn e Alcides Nogueira",
    },
    { label: "Direção-geral", value: "Jayme Monjardim" },
    { label: "Direção executiva", value: "PNilton Travesso" },
    { label: "Direção de imagem", value: "Milton Valinho" },
    { label: "Abertura", value: "Hans Donner e Ricardo Nauemberg" },
    { label: "Produção executiva", value: "Bruno Villas Boas" },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={direito}
        title="Direito de Amar"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Direito de Amar"
        synopsis="A trama foi baseada na radionovela Noiva das Trevas, de Janete Clair, escrita nos anos 50. Direito de Amar, abordou a disputa de um amor entre pai e filho. Para salvar-se da falência o pai de Rosário promete a mão da filha para um banqueiro. No entanto, Rosalia se apaixona por Adriano, em um baile de máscaras, sem saber que ele é filho do banqueiro que ela está prometida. A história se inspira no mote universal da luta entre pai e filho pelo amor de uma mulher."
        image={DireitoDeAmar}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Direito;
