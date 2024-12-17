import roqueImage from "../../../assets/roque-santeiro.png";
import pantanalImage from "../../../assets/pantanal.png";
import maysaImage from "../../../assets/maysa.png";
import decoration2 from "../../../assets/decoration2.png";

const SectionNovelas = () => {
  return (
    <section className="relative bg-[#1C2415] text-white py-8 sm:py-16">
      <div className="relative max-w-screen-xl mx-auto px-4 sm:px-8">
        {/* Navegação */}
        <nav className="flex justify-center overflow-x-auto">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 text-base sm:text-lg font-normal font-glonimove">
            <li>
              <a className="opacity-40 cursor-pointer hover:opacity-100 transition-opacity">
                Mini Séries
              </a>
            </li>
            <li>
              <a className="opacity-30 cursor-pointer hover:opacity-100 transition-opacity">
                Séries
              </a>
            </li>
            <li>
              <a className="font-bold cursor-pointer">Novelas</a>
            </li>
            <li>
              <a className="opacity-20 cursor-pointer hover:opacity-100 transition-opacity">
                Filmes
              </a>
            </li>
            <li>
              <a className="opacity-30 cursor-pointer hover:opacity-100 transition-opacity">
                Outros
              </a>
            </li>
          </ul>
        </nav>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={roqueImage}
              alt="Roque Santeiro"
              className="w-full max-w-sm h-auto object-cover rounded-md mb-4"
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={pantanalImage}
              alt="Pantanal"
              className="w-full max-w-sm h-auto object-cover rounded-md mb-4"
            />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={maysaImage}
              alt="Maysa: Quando Fala o Coração"
              className="w-full max-w-sm h-auto object-cover rounded-md mb-4"
            />
          </div>
        </div>
      </div>

      {/* Decoração */}
      <div className="md:mt-10 flex mx-auto text-center">
        <img src={decoration2} className="mx-auto mt-20 mb-20" />
      </div>
    </section>
  );
};

export default SectionNovelas;
