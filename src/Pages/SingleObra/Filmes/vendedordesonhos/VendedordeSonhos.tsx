import React from "react";
import vendedorDeSonhos from "../../../../assets/vendedor-de-sonhos.jpg";

import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import vendedor from "../../../../assets/O-Vendedor-de-Sonhos-6.jpeg";

const Vendedor: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "O Vendedor de Sonhos" },
    { label: "Data de Lançamento", value: "8 de Dezembro de 2016" },
    {
      label: "Direção",
      value: "Jayme Monjardim",
    },
    { label: "Autor", value: "Augusto Cury" },
    { label: "Roteirista", value: "L.G. Bayão" },
    { label: "Produtor", value: "LG Tubaldini Jr" },
    { label: "Produção", value: "Executiva: Heloisa Rezende e Valéria Amorim" },
    {
      label: "Fotografia",
      value: "Nonato Estrela",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={vendedor}
        title="O Vendedor de Sonhos"
        subtitle="Filme"
      />
      <WorkDetails
        title="O Vendedor de Sonhos"
        synopsis="O filme, adaptação do livro homônimo de Augusto Cury, relata a história do renomado Júlio César e de sua tentativa de suicídio, interrompida, a tempo, pelo chamado “Mestre”.  A trama aborda temáticas como sonhos, esperança, fazendo uma crítica a sociedade atual e seu direcionamento."
        image={vendedorDeSonhos}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default Vendedor;
