import pantanal from "../../../assets/pantanal2.png";
import roque from "../../../assets/roquesanteiro.png";
import clone from "../../../assets/clone.png";
import decoration3 from "../../../assets/decoration3.png";

const ObrasImage = () => {
  return (
    <section className="bg-[#18231E]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-10">
        {/* Pantanal */}
        <div className="relative mt-10">
          <img
            src={pantanal}
            className="rounded-lg w-full object-cover"
            alt="Pantanal"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-4 bg-[#00000080] rounded-lg">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-white text-lg sm:text-xl font-semibold font-glonimove">
                Pantanal
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-normal font-glonimove">
                27 de março de 1990
              </p>
            </div>
            <button className="bg-transparent text-white py-2 px-4 text-sm sm:text-base rounded-full border-2 border-white font-normal font-glonimove">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Roque Santeiro */}
        <div className="relative mt-10">
          <img
            src={roque}
            className="rounded-lg w-full object-cover"
            alt="Roque Santeiro"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-4 bg-[#00000080] rounded-lg">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-white text-lg sm:text-xl font-semibold font-glonimove">
                Roque Santeiro
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-normal font-glonimove">
                24 de Junho de 1985
              </p>
            </div>
            <button className="bg-transparent text-white py-2 px-4 text-sm sm:text-base rounded-full border-2 border-white font-normal font-glonimove">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* O Clone */}
        <div className="relative mt-10">
          <img
            src={clone}
            className="rounded-lg w-full object-cover"
            alt="O Clone"
          />
          <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center p-4 bg-[#00000080] rounded-lg">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-white text-lg sm:text-xl font-semibold font-glonimove">
                O Clone
              </h2>
              <p className="text-gray-300 text-sm sm:text-base font-normal font-glonimove">
                1 de outubro de 2001
              </p>
            </div>
            <button className="bg-transparent text-white py-2 px-4 text-sm sm:text-base rounded-full border-2 border-white font-normal font-glonimove">
              Saiba Mais
            </button>
          </div>
        </div>

        {/* Decoration */}
        <div className="flex justify-center mt-20 mb-20">
          <img
            src={decoration3}
            className="rounded-lg max-w-full h-auto"
            alt="Decoration"
          />
        </div>
      </div>
    </section>
  );
};

export default ObrasImage;
