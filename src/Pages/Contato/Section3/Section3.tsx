import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import video from "../../../assets/header.mp4";

const RedesSociaisSection: React.FC = () => {
  return (
    <section className="bg-[#112011] text-white py-16 px-4 md:px-24 relative">
      <div className="relative lg:w-3/4 mx-auto">
        {/* Texto sobreposto */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
          <h2 className="text-2xl md:text-3xl font-medium font-glonimove mb-4">
            Siga nossas redes sociais
          </h2>
          <div className="flex justify-center items-center space-x-4 bg-[#F12730] rounded-full">
            <div className=" p-3 rounded-full text-white hover:bg-[#c41d25] transition duration-300">
              <FaInstagram size={24} />
            </div>
            <div className=" p-3 rounded-full text-white hover:bg-[#c41d25] transition duration-300">
              <FaTwitter size={24} />
            </div>
            <div className=" p-3 rounded-full text-white hover:bg-[#c41d25] transition duration-300">
              <FaWhatsapp size={24} />
            </div>
            <div className=" p-3 rounded-full text-white hover:bg-[#c41d25] transition duration-300">
              <FaFacebook size={24} />
            </div>
            <div className=" p-3 rounded-full text-white hover:bg-[#c41d25] transition duration-300">
              <FaYoutube size={24} />
            </div>
          </div>
        </div>

        {/* Vídeo */}
        <video
          className="w-full mx-auto rounded-lg object-cover relative z-0"
          src={video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </section>
  );
};

export default RedesSociaisSection;
