import React, { useRef, } from "react";
import quero from "../../../assets/ondequeremos.png";
import queroMobile from "../../../assets/queremos-mobile.png";
// import Player from "@vimeo/player";

const OndeQueremosChegar: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  // // const [isPlaying, setIsPlaying] = useState(false);
  // const playerRef = useRef<Player | null>(null);

  // useEffect(() => {
  //   if (iframeRef.current) {
  //     playerRef.current = new Player(iframeRef.current);

  //     playerRef.current.on("play", () => setIsPlaying(true));
  //     playerRef.current.on("pause", () => setIsPlaying(false));
  //   }
  // }, []);

  // const togglePlayPause = async () => {
  //   if (playerRef.current) {
  //     try {
  //       const isPaused = await playerRef.current.getPaused();
  //       if (isPaused) {
  //         await playerRef.current.play();
  //       } else {
  //         await playerRef.current.pause();
  //       }
  //     } catch (error) {
  //       console.error("Erro ao alternar play/pause:", error);
  //     }
  //   }
  // };

  return (
    <section className="bg-[#1C2415] text-white py-16">
      <h2 className="text-left lg:text-center px-3 lg:px-0 text-6xl md:text-5xl text-[#FF4A20] uppercase lg:mb-12 font-normal font-glonimove">
        Aonde queremos chegar?
      </h2>

      <div className="flex justify-center lg:mb-8">
        <img src={quero} alt="Jayme Monjardim" className="w-full container rounded-md hidden lg:block" />
      </div>

      <div className="container px-4 lg:px-8 mx-auto lg:text-left space-y-12 text-lg md:text-xl py-10 leading-relaxed font-extralight font-glonimove">
        <p>Entender aonde queremos chegar é sobre entender o propósito que nos move...</p>
        <p>E meu propósito vai além das telas. Minha missão é dar voz ao que é essencialmente humano...</p>
      </div>

      <div>
        <img src={queroMobile} alt="Jayme Monjardim" className="w-full container rounded-md px-10 lg:hidden" />
      </div>

      <div className="flex justify-center mt-12 relative">
        <div className="w-[90vw] md:w-[80vw] h-[50vw] md:h-[45vw] rounded-md relative">
          <iframe
            ref={iframeRef}
            src="https://player.vimeo.com/video/1054254834?h=876b4de4eb&badge=0&autopause=0&controls=1&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full h-full rounded-md"
          ></iframe>

          {/* Botão de play/pause adaptado do SectionMagia */}
          {/* <button
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-75 text-white px-3 py-2 rounded-full text-sm"
          >
            {isPlaying ? "Pause" : "Play"}
          </button> */}
        </div>
      </div>

      <div className="container mx-auto border border-b-2 border-[#E0471E] w-full mt-32"></div>
    </section>
  );
};

export default OndeQueremosChegar;
