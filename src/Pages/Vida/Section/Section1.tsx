import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import decoration2 from "../../../assets/decoration2.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa"; // Usando react-icons para os ícones

const Section1: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Vídeo de fundo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://s3-figma-videos-production-sig.figma.com/video/1343982015119693441/TEAM/d014/ead5/-3fbc-4153-a7f2-da0e8d1eb8ff?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qWIeE9glM6Bw9F5YxLYMGUe-M7t~cjcmVbVwI6hREqhcB0Y2uI5WWnTfdeZatAGwDqqAFp4XrEcyG1WY-t09szsATLd8whDyWlOsW19N900y3NKF4AN8PRyXSKwFeUyGNUObEpitq9K0pkLOgOUZ5xOLCYPaM7R0cgVHWAPVQWbibJ5ABzUp7dcITr4j67LhiDXTdpTcmfFtHV0iRbQM-w12xuoQT52ScwUt2zr2tDGTzetwSsv1OzAZjQNvsNeYHvKqxJ4JEVP6nNkGmtMq8rmC9OEp9v37Irso4xR1za9Z-su-aCIHALID15T0LRK6V5mlfg3kc~a1fc2pdWTuew__"
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
        <img src={decoration2} className="md:w-6 md: mb-2" />
        <h1 className="text-4xl md:text-4xl max-w-xl tracking-wide leading-relaxed font-light font-glonimove">
          “Contagiar com a arte e educar com histórias move meu propósito de dar
          vida aos sonhos.”
        </h1>
      </div>
    </div>
  );
};

export default Section1;
