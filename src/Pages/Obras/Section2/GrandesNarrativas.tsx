import grande from "../../../assets/grande.png";
import icons from "../../../assets/all-icons.png";

const GrandesNarrativas = () => {
  return (
    <section className="bg-[#18231E] p-8 md:p-16 lg:p-32">
      <div className="bg-[#2B3A1D] rounded-lg flex flex-col md:flex-row items-center gap-8 container mx-auto">
        {/* Imagem no topo no mobile */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={grande}
            alt="Grandes Narrativas"
            className="rounded-md object-cover h-64 sm:h-[30rem] md:h-[50rem] w-full md:w-auto md:order-1"
          />
        </div>
        {/* Texto abaixo no mobile */}
        <div className="w-full md:w-1/2 text-white flex flex-col justify-center px-4 py-4 lg:py-0 md:px-8">
          <img
            src={icons}
            alt="Ícones"
            className="w-48 md:w-72 mb-6 md:mb-9 mx-auto md:mx-0"
          />
          <h1 className="text-[#F12730] text-3xl sm:text-4xl lg:text-6xl font-normal font-glonimove mb-4  md:text-left">
            GRANDES NARRATIVAS.
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl leading-relaxed mb-4 font-extralight font-glonimove  md:text-left">
            Contar histórias é dar vida a sentimentos que muitas vezes
            permanecem ocultos, esperando um olhar que os traduza em palavras,
            imagens e emoção. Cada obra que dirigi foi mais do que um projeto;
            foi uma jornada compartilhada com os personagens e o público.
          </p>
          <p className="text-base sm:text-xl lg:text-2xl leading-relaxed font-extralight font-glonimove  md:text-left">
            Acredito que grandes histórias não apenas entretêm, mas aproximam as
            pessoas de si mesmas, de suas dores, sonhos e possibilidades. Elas
            têm o poder de transformar, de fazer o coração bater mais forte, de
            inspirar.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default GrandesNarrativas;
