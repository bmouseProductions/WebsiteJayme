import roqueImage from "../../../assets/roque-santeiro.png"; // Substitua pelas imagens reais
import pantanalImage from "../../../assets/pantanal.png";
import maysaImage from "../../../assets/maysa.png";
import decoration2 from "../../../assets/decoration2.png";

const SectionNovelas = () => {
  return (
    <section className="relative bg-[#1C2415] text-white py-16">
      <div className="relative max-w-screen-xl mx-auto px-8">
        <nav className="flex-1 ">
          <ul className="flex justify-center space-x-8 text-lg font-normal font-glonimove">
            <li>
              <a className="opacity-40">Mini Séries</a>
            </li>
            <li>
              <a className="opacity-30">Séries</a>
            </li>
            <li>
              <a className="font-bold">Novelas</a>
            </li>
            <li>
              <a className="opacity-20">Filmes</a>
            </li>
            <li>
              <a className="opacity-30">Outros</a>
            </li>
          </ul>
        </nav>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={roqueImage}
              alt="Roque Santeiro"
              className="w-full rounded-md mb-4"
            />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={pantanalImage}
              alt="Pantanal"
              className="w-full rounded-md mb-4"
            />
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={maysaImage}
              alt="Maysa: Quando Fala o Coração"
              className="w-full rounded-md mb-4"
            />
          </div>
        </div>
      </div>
      <div className="md:mt-10 flex mx-auto text-center">
        <img src={decoration2} className="mx-auto mt-20 mb-20" />
      </div>
    </section>
  );
};

export default SectionNovelas;
