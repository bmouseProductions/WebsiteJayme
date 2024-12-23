import React, { useState } from "react";
import bemVindo from "../../../assets/BemVindo.png";
import icons from "../../../assets/all-icons.png";

type TabContent = {
  image: string;
  title: string;
  text?: string[]; // Alterado para aceitar múltiplos parágrafos
  spotifyEmbedUrl?: string; // Adicionado para o link do Spotify
};

const InspirationSection: React.FC = () => {
  const [activeTab, setActiveTab] =
    useState<keyof typeof content>("Bem - Vindo");

  const content: Record<string, TabContent> = {
    "Bem - Vindo": {
      image: bemVindo,
      title: "BEM-VINDO",
      text: [
        "Olá, seja bem-vindo! Começo, aqui, uma nova experiência em minha trajetória. A decisão de compartilhar algumas vivências, reflexões e aprendizados, transmitindo emoção e trazendo leveza, motivação e otimismo ao mundo.",
        "A humanidade precisa, cada vez mais, de pessoas engajadas para o bem, de pessoas que queiram inspirar através de suas histórias. Mais do que isso, o mundo precisa de pessoas que acreditem que sonhos se realizam. Eu sou uma delas. Como DreamCreator, busco resgatar no imaginário de cada um a vontade de alcançar seus objetivos e de nunca parar de tentar.",
        "Com a proporção que a internet tomou e a explosão das redes sociais, todos conquistamos a incrível possibilidade de tornar nosso legado em algo palpável, acessível… algo compartilhável.",
        "Entretanto, apenas compartilhar minhas histórias, sem um propósito, faz com que elas se limitem a histórias. Compartilhá-las só se torna relevante quando elas emocionam quem as conhece, quando inspiram uma mudança na vida de quem está do outro lado. Minha jornada foi norteada por isso, e este novo capítulo não é diferente.",
        "Amo me desafiar, e a ideia de trazer mais profundidade e menos superficialidade ao mundo é algo que me inspira. As pessoas precisam de histórias que tragam conexões emocionais, de algo que as motive a correr atrás de seus sonhos.",
        "Meu objetivo é que cada um consiga encontrar, dentro de si, seu próprio motivo para não deixar de persistir até alcançar seus mais profundos anseios. Através de uma jornada de criatividade e dedicação, quero impulsionar sonhos. Sem a capacidade de contagiar pessoas não há um líder, e as pessoas precisam de uma liderança criativa que as ensine a sonhar e, mais do que isso, a realizar e criar.",
        "Inovar é um caminho sem volta. É uma força que move o mundo e que nos permitiu chegar a este momento. Como criador, estou sempre buscando me reinventar, mas sem nunca perder minha essência, contagiar com a arte, e propósito, que é dar vida aos sonhos.",
        "Vamos sonhar juntos?",
        "Grande abraço,",
        "Jayme",
      ],
    },
    // Fotos: {
    //   image: bemVindo,
    //   title: "BEM-VINDO",
    //   text: [
    //     "Este é o conteúdo de fotos. Explore imagens incríveis e se inspire com momentos capturados ao redor do mundo.",
    //   ],
    // },
    Artigos: {
      image: bemVindo,
      title: "ARTIGOS INSPIRADORES",
      text: [
        "As constantes mudanças enfrentadas atualmente, em todos os âmbitos da sociedade, exigem que todos estejam em um processo contínuo de evolução, adaptação e aprendizado. Em todos os papéis, é preciso perceber o que vem mudando à nossa volta e o que precisamos mudar em nossa forma de agir.",

        "Quem desempenha o papel de líder deve desenvolver novas habilidades, que um dia nunca seriam esperadas de alguém em posição de comando. Uma liderança humanizada, reconhecendo as qualidades e dificuldades da equipe, tem se mostrado essencial para o bom funcionamento das organizações no século XXI e, principalmente, para pessoas mais motivadas e inspiradas a darem o melhor de si. ",

        "O distanciamento entre a instituição (representada pelo líder) e seus colaboradores é um dos principais problemas notados nos ambientes de trabalho, devido à cultura do medo instaurada em muitas organizações. A concepção de um líder inalcançável não condiz com o momento em que estamos. ",

        "As pessoas precisam, sim, de orientação, de alguém para nortear o que está sendo produzido e pensar no interesse do coletivo e da organização, mas isso pode – e deve – ser feito de forma humana. É este o objetivo da liderança horizontal, onde o líder trata seu time de igual para igual. ",

        "Um dos pilares da liderança horizontal é a flexibilidade. Cada vez mais, vemos pessoas de diferentes culturas, gerações e classes inseridas em um mesmo ambiente, e o líder precisa ser aquele que sabe lidar com as adversidades enfrentadas no cotidiano, para que possa obter engajamento e comprometimento por parte de todos. ",

        " Neste modelo, a tomada de decisões acontece de forma mais participativa e compartilhada, e o time percebe que tem voz dentro do projeto, desenvolvendo um sentimento de pertencimento. O líder, entretanto, segue tendo o papel de orientar e motivar.",

        "Para alcançar o resultado esperado ou superá-lo ao dirigir um filme, por exemplo, preciso que todos estejam apaixonados pelo projeto, do elenco à equipe, passando por cada pessoa envolvida, começando por mim. Para comandar um time, é preciso entender a importância de cada uma daquelas pessoas para o resultado final. ",

        "Como diretor, quando estou produzindo um filme, série ou novela, meu trabalho é também saber tirar o melhor de todos dentro do set. Tenho que aproveitar o potencial de cada pessoa envolvida na produção de forma positiva, além de reconhecer a melhora e o esforço de todos inseridos naquela temática. ",

        "A equipe precisa ser estimulada, e um líder de verdade é aquele que inspira e influencia positivamente todos a seu redor. Liderar não é apenas dar ordens, é conquistar a confiança das pessoas com quem se trabalha. ",

        "Ser líder não é ter a sala maior ou a cadeira com seu nome, é honrar a responsabilidade de gerir uma equipe de forma que os resultados sejam positivos e que todos estejam motivados e satisfeitos com o ambiente em que estão inseridos. ",

        " Uma pessoa estimulada profissionalmente, que entende seu valor para o local onde está, é mais feliz e consegue produzir mais, tanto em sua vida profissional quanto na pessoal. ",

        "Para alcançar um ambiente equilibrado, saudável e produtivo, a relação entre o líder e os liderandos deve ser positiva, com respeito mútuo e confiança. A única forma de atingir este objetivo, por experiência própria, é por meio da liderança horizontal. Se seu objetivo é inspirar e melhorar a produtividade de sua equipe, este é o caminho. ",
      ],
    },
    "Para ouvir": {
      image: bemVindo,
      title: "MÚSICAS QUE INSPIRAM",
      text: ["Descubra músicas que tocam o coração e motivam a sua jornada."],
      spotifyEmbedUrl:
        "https://open.spotify.com/embed/playlist/37BChrDmxfFsLX1P7X7eCh",
    },
  };

  const handleTabClick = (tab: keyof typeof content) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-[#1C2415] text-white py-16 px-4 md:px-24">
      <h1 className="text-center text-[#F12730] text-5xl md:text-6xl font-medium font-glonimove mb-12">
        PARA SE INSPIRAR
      </h1>

      <div className="flex justify-center space-x-8 text-lg text-gray-300 mb-12 font-normal font-glonimove">
        {Object.keys(content).map((tab) => (
          <a
            key={tab}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleTabClick(tab as keyof typeof content);
            }}
            className={`hover:text-white ${
              activeTab === tab ? "text-white font-bold" : ""
            }`}
          >
            {tab}
          </a>
        ))}
      </div>

      <div className="bg-[#435332] rounded-lg max-w-[1280px] mx-auto overflow-hidden">
        <img
          src={content[activeTab].image}
          alt="Imagem de destaque"
          className="w-full object-cover h-80"
        />

        <div className="p-8">
          <div className="flex space-x-4 mb-6">
            <img src={icons} alt="Ícones decorativos" />
          </div>

          <h2 className="text-[#F12730] text-3xl md:text-4xl font-medium font-glonimove mb-6">
            {content[activeTab].title}
          </h2>

          {activeTab === "Para ouvir" && content[activeTab].spotifyEmbedUrl ? (
            <div className="spotify-embed">
              <iframe
                src={content[activeTab].spotifyEmbedUrl}
                width="100%"
                height="380"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="rounded-lg"
                title="Spotify Playlist"
              ></iframe>
            </div>
          ) : (
            content[activeTab].text?.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg leading-8 mb-4 font-extralight font-glonimove"
              >
                {paragraph}
              </p>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
