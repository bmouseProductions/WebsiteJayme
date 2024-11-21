import React from "react";
import video from "../../assets/header.mp4";
import logo from "../../assets/logo.png";
import jaymeImage from "../../assets/jayme-monjardim.png"; // Imagem com o texto "JAYME MONJARDIM"

const Header: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay escurecido para dar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Navegação, logo e botão de contato no topo */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-16 z-10 text-white">
        {/* Logo à esquerda */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="Jayme Monjardim Logo" className="w-24" />
        </a>

        {/* Navegação centralizada */}
        <nav className="flex-1">
          <ul className="flex justify-center space-x-8 text-lg">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#vida" className="hover:underline">
                Vida
              </a>
            </li>
            <li>
              <a href="#obras" className="hover:underline">
                Obras
              </a>
            </li>
            <li>
              <a href="#visao" className="hover:underline">
                Visão
              </a>
            </li>
            <li>
              <a href="#palestra" className="hover:underline">
                Palestra
              </a>
            </li>
          </ul>
        </nav>

        {/* Botão de contato à direita */}
        <a
          href="#contato"
          className="px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
        >
          Contato
        </a>
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <img
          src={jaymeImage}
          alt="Jayme Monjardim"
          className="w-1/2 max-w-lg mb-4"
        />
      </div>
    </div>
  );
};

export default Header;
