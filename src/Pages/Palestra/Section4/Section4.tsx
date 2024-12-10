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
            <h1 className="text-[#F12730] text-3xl sm:text-4xl md:text-6xl uppercase font-medium font-glonimove mb-4 text-center md:text-left">
              Inspire-se
            </h1>
            <p className="text-xl sm:text-2xl leading-relaxed mb-4 font-extralight font-glonimove text-center md:text-left">
              Como palestrante, Jayme se conecta com as pessoas, gerando mais
              proximidade com seu público e compartilhando seus aprendizados e
              experiências.
            </p>
            <p className="text-xl sm:text-2xl leading-relaxed font-extralight font-glonimove text-center md:text-left">
              Em sua palestra, fala sobre um tema que acredita ser fundamental:
              A História por trás do Sonho – Como uma jornada de criatividade e
              dedicação podem impulsionar os sonhos.
            </p>
            <div className="mt-8 text-center md:text-left">
              <button className="bg-transparent text-white py-2 px-4 rounded-full border-2 border-white font-semibold font-glonimove">
                Saiba Mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PalestraCard;
