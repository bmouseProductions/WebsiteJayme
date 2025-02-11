import React, { useState } from "react";
import decoration1 from "../../../assets/decoration1.png"; // Substitua pela imagem correta
import video from "../../../assets/cloud.mp4";

const SectionMagia: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  
  const togglePlayPause = () => {
    const videoElement = document.getElementById("magia-video") as HTMLVideoElement;
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative bg-[#18231E] text-white py-16">
      <div className="relative max-w-screen-lg mx-auto text-center px-8">
        <div className="flex justify-center mb-6">
          <img src={decoration1} alt="Logo" className="w-16 h-16 object-contain" />
        </div>

        <h1 className="text-4xl md:text-6xl font-light font-glonimove">
          <span className="text-[#DBB781] font-bold">JUNTOS</span> PODEMOS
          TRANSFORMAR A MAGIA EM <span className="text-[#DBB781] font-bold">ARTE</span> E DAR VIDA AOS <span className="text-[#DBB781] font-bold">SONHOS</span>.
        </h1>

        <button className="mt-8 px-6 py-3 bg-[#E0471E] text-white text-lg rounded-full hover:bg-red-600 transition font-semibold font-glonimove">
          <a href="/Visao">Saiba Mais</a>
        </button>

        <div className="mt-12 relative">
          <video
            id="magia-video"
            src={video}
            className="rounded-xl shadow-lg mx-auto hidden sm:block"
            autoPlay
            loop
          ></video>
          <button
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 bg-gray-900 bg-opacity-75 text-white px-3 py-2 rounded-full text-sm"
          >
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>

      <div className="md:mt-10 mx-auto text-center hidden sm:flex">
        <img src={decoration1} className="mx-auto mt-20 mb-20" />
      </div>
    </section>
  );
};

export default SectionMagia;
