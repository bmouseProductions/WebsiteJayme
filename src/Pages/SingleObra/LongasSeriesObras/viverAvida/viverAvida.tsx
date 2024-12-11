import React from "react";
import viverAvida from "../../../../assets/viveravida.jpg";
import WorkDetails from "../../../../components/SingleTheme/DetailsSingle/DetailsSingle";
import HeaderThemeSingle from "../../../../components/SingleTheme/HeaderThemeSingle/HeaderThemeSingle";
import viveravida from "../../../../assets/jose-mayer-tais-araujo-viver-a-vida-casal-sem-sal-0617-1400x800.jpg";

const ViveraVida: React.FC = () => {
  const technicalDetails = [
    { label: "Título", value: "Viver a Vida" },
    { label: "Data de Lançamento", value: "14 de Setembro de 2009" },
    {
      label: "Direção",
      value: "Jayme Monjardim e Fabrício Mamberti",
    },
    { label: "Autor", value: "Manoel Carlos" },
    {
      label: "Colaboração",
      value:
        "Angela Chaves, Claudia Lage, Daisy Chaves, Juliana Peres, Maria Carolina Campos de Almeida",
    },
    {
      label: "Direção",
      value:
        "Adriano Melo, Teresa Lampreia, Maria Rodrigues, Leonardo Nogueira, Frederico Mayrink, Luciano Sabino",
    },
    { label: "Direção de Produção", value: "Flavio Nascimento" },
    {
      label: "Direção de Fotografia",
      value: "Paulo Roberto Souza, Francisco Rufino, Rodrigo Graciosa",
    },
  ];

  return (
    <>
      <HeaderThemeSingle
        backgroundImage={viveravida}
        title="Viver a Vida"
        subtitle="Longas Series"
      />
      <WorkDetails
        title="Viver a Vida"
        synopsis="A trama central parte da modelo internacional Helena, que se apaixona por Marcos, um empresário com o dobro de sua idade, com quem se casa. Ele é pai de Luciana, top model que enxerga Helena como sua principal rival nas passarelas. Enquanto isso Bruno e Luciana se envolvem na Jordânia, mas tempo depois descobrirão que são irmãos. Ao longo da novela, Luciana sofre um acidente de carro que a deixa tetraplégica. No final de cada episódio, há um depoimento de pessoas que sofreram acidentes, conseguiram superar as dificuldades e venceram na vida.

        "
        image={viverAvida}
        technicalDetails={technicalDetails}
      />
    </>
  );
};

export default ViveraVida;
