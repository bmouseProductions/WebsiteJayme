import React from "react";
import sonho from "../../../assets/sonho.png";

const CriatividadeeSonho: React.FC = () => {
  return (
    <section className="bg-[#1C2415] text-white py-16 px-6 md:px-12 flex flex-col md:flex-row justify-center items-center gap-12">
      <div className="">
        <img src={sonho} alt="" />
      </div>

      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-3xl md:text-6xl font-medium font-glonimove text-[#FF4A20] uppercase tracking-wide">
          Criatividade e sonho
        </h2>

        <p className="leading-relaxed text-lg font-extralight font-glonimove ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt sapien eget facilisis sagittis. Nullam purus enim, suscipit
          a facilisis eu, pretium sit amet est. Aenean rutrum risus mauris, sit
          amet euismod eros interdum quis.
        </p>
        <p className="leading-relaxed text-lg font-extralight font-glonimove">
          Phasellus ultricies lorem in viverra convallis. Proin sodales sapien
          vel metus ultrices scelerisque. Etiam malesuada tortor quam, ut
          convallis velit porttitor dictum. Cras molestie pellentesque massa,
          vitae pellentesque nisi pharetra a.
        </p>
        <p className="leading-relaxed text-lg font-extralight font-glonimove">
          Fusce in sem bibendum, mollis erat eu, consectetur odio. Curabitur
          euismod arcu vitae pharetra vestibulum. Nulla aliquam molestie arcu eu
          pharetra.
        </p>
      </div>
    </section>
  );
};

export default CriatividadeeSonho;
