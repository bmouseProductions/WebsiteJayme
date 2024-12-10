import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import decoration3 from "../../../assets/decoration3.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Usando react-icons para os ícones

const Section1: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/1343982015119693441/TEAM/67e8/3b54/-1d07-4bdc-927b-9f97ac35f579?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qUTJkD7qYpXVjQLlibhkFoZqydTMmK~IPs5~vcYnC6ZHJAeuAzXKaeVjrpj8lc1RyXYmzjJXv3oKF1bAemLCA7nLaRzGP6EU7PteMS23LzkBeO7R1v3WSaP3KKc50Xqzf~k7duEkiBXy5jquIVSt4-0acrtIblu-53IIX86N9eTT1aXzHuOuCdO4tUHGpNmel~jLb3jgn2QVxVkMQUP6ZLUljCp6oOd9xOHse0q9F1AXdqkxYKv68RJ5DGL5T3PUpb~p~DJSo-0Jk9B~4Tn2agK~zN2-S5Lzpm4q4rvmiz6bEbIBnJG-vV3qBCdR6kKKWeG3rYVQhMbeOTCRl-Qavw__"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay escurecido para dar contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      {/* Navegação, logo e botão de contato no topo */}
      <div className="absolute top-10 left-0 w-full flex items-center justify-between p-4 md:p-16 z-50 text-white">
        {/* Menu hambúrguer no mobile */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>

        {/* Logo visível apenas no desktop */}
        <a href="#home" className="hidden md:flex items-center">
          <img src={logo} alt="Jayme Monjardim Logo" className="w-24" />
        </a>

        {/* Ícones do Instagram e WhatsApp no mobile */}
        <div className="md:hidden flex space-x-4 absolute top-4 right-4 z-50">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-2xl hover:text-orange-500" />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-white text-2xl hover:text-green-500" />
          </a>
        </div>

        {/* Navegação no desktop */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8 text-lg font-normal font-glonimove">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/vida" className="hover:underline">
            Vida
          </a>
          <a href="/Obras" className="hover:underline">
            Obras
          </a>
          <a href="/Visao" className="hover:underline">
            Visão
          </a>
          <a href="/Palestra" className="hover:underline">
            Palestra
          </a>
        </nav>

        {/* Botão de contato no desktop */}
        <a
          href="/Contato"
          className="hidden md:block px-4 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-colors font-normal font-glonimove"
        >
          Contato
        </a>
      </div>

      {/* Menu lateral no mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#18231E] text-white z-50 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Fechar menu */}
        <button
          className="absolute top-4 right-4 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(false)}
        >
          ✕
        </button>

        {/* Logo dentro do menu */}
        <div className="flex justify-center mt-16">
          <img src={logo} alt="Logo" className="w-24" />
        </div>

        {/* Itens do menu */}
        <ul className="mt-8 space-y-4 px-6 text-lg font-glonimove">
          <li>
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="/vida" onClick={() => setIsMenuOpen(false)}>
              Vida
            </a>
          </li>
          <li>
            <a href="/Obras" onClick={() => setIsMenuOpen(false)}>
              Obras
            </a>
          </li>
          <li>
            <a href="/Visao" onClick={() => setIsMenuOpen(false)}>
              Visão
            </a>
          </li>
          <li>
            <a href="/Palestra" onClick={() => setIsMenuOpen(false)}>
              Palestra
            </a>
          </li>
          <li>
            <a href="/Contato" onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
          </li>
        </ul>
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <img src={decoration3} className="md:w-6 md: mb-2" />
        <h1 className="text-4xl md:text-4xl max-w-xl tracking-wide leading-relaxed font-light font-glonimove">
          Conheça a trajetória dos trabalhos realizados por Jayme Monjardim
        </h1>
      </div>
    </div>
  );
};

export default Section1;