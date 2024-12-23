import React from "react";
import bemVindo from "../../../assets/BemVindo.png";
import icons from "../../../assets/all-icons.png";

const InspirationSection: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 px-4 md:px-24">
      <h1 className="text-center text-[#F12730] text-5xl md:text-6xl font-medium font-glonimove mb-12">
        PARA SE INSPIRAR
      </h1>

      <div className="flex justify-center space-x-8 text-lg text-gray-300 mb-12 font-normal font-glonimove">
        <a href="#" className="hover:text-white">
          Fotos
        </a>
        <a href="#" className="hover:text-white">
          Artigos
        </a>
        <a href="#" className="hover:text-white">
          Para ouvir
        </a>
        <a href="#" className="hover:text-white">
          Outros
        </a>
      </div>

      <div className="bg-[#435332] rounded-lg max-w-[1280px] mx-auto overflow-hidden">
        <img
          src={bemVindo}
          alt="Imagem de destaque"
          className="w-full object-cover h-80"
        />

        <div className="p-8">
          <div className="flex space-x-4 mb-6">
            <img src={icons} />
          </div>

          <h2 className="text-[#F12730] text-3xl md:text-4xl font-medium font-glonimove mb-6">
            BEM-VINDO
          </h2>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Olá, seja bem-vindo! Começo, aqui, uma nova experiência em minha
            trajetória. A decisão de compartilhar algumas vivências, reflexões e
            aprendizados, transmitindo emoção e trazendo leveza, motivação e
            otimismo ao mundo.
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            A humanidade precisa, cada vez mais, de pessoas engajadas para o
            bem, de pessoas que queiram inspirar através de suas histórias. Mais
            do que isso, o mundo precisa de pessoas que acreditem que sonhos se
            realizam. Eu sou uma delas. Como DreamCreator, busco resgatar no
            imaginário de cada um a vontade de alcançar seus objetivos e
            de nunca parar de tentar.
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Com a proporção que a internet tomou e a explosão das redes sociais,
            todos conquistamos a incrível possibilidade de tornar nosso legado
            em algo palpável, acessível… algo compartilhável.
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Entretanto, apenas compartilhar minhas histórias, sem um propósito,
            faz com que elas se limitem a histórias. Compartilhá-las só se torna
            relevante quando elas emocionam quem as conhece, quando inspiram uma
            mudança na vida de quem está do outro lado. Minha jornada foi
            norteada por isso, e este novo capítulo não é diferente.
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Amo me desafiar, e a ideia de trazer mais profundidade e menos
            superficialidade ao mundo é algo que me inspira. As pessoas precisam
            de histórias que tragam conexões emocionais, de algo que as motive a
            correr atrás de seus sonhos. 
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Meu objetivo é que cada um consiga encontrar, dentro de si, seu
            próprio motivo para não deixar de persistir até alcançar seus mais
            profundos anseios. Através de uma jornada de criatividade e
            dedicação, quero impulsionar sonhos. Sem a capacidade de contagiar
            pessoas não há um líder, e as pessoas precisam de uma liderança
            criativa que as ensine a sonhar e, mais do que isso, a realizar e
            criar.
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Inovar é um caminho sem volta. É uma força que move o mundo e que
            nos permitiu chegar a este momento. Como criador, estou sempre
            buscando me reinventar, mas sem nunca perder minha essência,
            contagiar com a arte, e propósito, que é dar vida aos sonhos.
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Vamos sonhar juntos?
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Grande abraço,
          </p>
          <p className="text-lg leading-8 mb-4 font-extralight font-glonimove">
            Jayme
          </p>
        </div>
      </div>
    </section>
  );
};

export default InspirationSection;
