import palestra from "../../../assets/palestra.png";
import icons from "../../../assets/all-icons.png";

const PalestraCard = () => {
  return (
    <section className="bg-[#1C2415] px-4 py-16 md:px-32">
      <div className="p-4">
        <div className="bg-[#2B3A1D] pb-10 lg:pb-0  rounded-lg flex flex-col md:flex-row items-center gap-8 container mx-auto">
          {/* Imagem */}
          <div className="w-full md:w-auto flex justify-center mb-8 md:mb-0">
            <img
              src={palestra}
              alt="Grandes Narrativas"
              className="rounded-md object-cover w-full h-auto md:h-[50rem] "
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center px-4">
            <img src={icons} className="w-56 mb-6 md:pl-2 mx-auto md:mx-0" />
            <h1 className="text-[#F12730] text-3xl sm:text-4xl md:text-6xl uppercase font-medium font-glonimove mb-4  md:text-left">
              Inspire o seu público.
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed mb-4 font-extralight font-glonimove  md:text-left">
              Cada palestra é cuidadosamente estruturada para envolver o público
              com histórias reais, momentos emocionantes e reflexões profundas.
            </p>
            <p className="text-xl sm:text-2xl mb-2 leading-relaxed font-extralight font-glonimove  md:text-left">
              As palestras de Jayme Monjardim são perfeitas para:
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed font-extralight font-glonimove  md:text-left">
              <ul className="list-disc list-inside text-lg sm:text-xl md:text-2xl leading-relaxed font-extralight font-glonimove  md:text-left space-y-2">
                <li>
                  Empresas e eventos corporativos: Motivação e engajamento
                  profissional.
                </li>
                <li>
                  Universidades e escolas: Inspiração para jovens em busca de
                  propósito.
                </li>
                <li>Eventos artísticos: Reflexões sobre arte e cultura.</li>
                <li>
                  Congressos: Histórias emocionantes e conexões profundas.
                </li>
              </ul>
            </p>
            <div className="mt-8 text-center md:text-left">
              <button className="bg-transparent text-white py-2 px-4 rounded-full border-2 border-white font-semibold font-glonimove">
                Agende sua palestra
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalestraCard;
