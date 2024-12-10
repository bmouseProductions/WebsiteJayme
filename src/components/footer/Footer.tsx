import React from "react";
import logo from "../../assets/logo_footer.png"; // Substitua pela nova logo
import logoFooter from "../../assets/decorationFooter.png";
import logoMobile from "../../assets/logoMoble.svg";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#4B5426] text-white">
      {/* Parte superior do footer: Logo, navegação e botão */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-12 flex flex-col md:flex-row items-center justify-between">
        {/* Logo à esquerda no mobile */}
        <div className="flex justify-between w-full md:w-auto items-center mb-6 md:mb-0">
          <img
            src={logo} // Substitua pela nova logo
            alt="Logo"
            className="h-12 md:h-12 hidden lg:block"
          />
          <img
            src={logoMobile} // Substitua pela nova logo
            alt="Logo"
            className="h-12 lg:hidden flex md:h-12"
          />
        </div>

        {/* Navegação no mobile */}
        <nav className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0 text-sm uppercase text-center md:text-left w-full md:w-auto">
          <a
            href="#home"
            className="hover:text-gray-400 transition font-light font-glonimove"
          >
            Home
          </a>
          <a
            href="#vida"
            className="hover:text-gray-400 transition font-light font-glonimove"
          >
            Vida
          </a>
          <a
            href="#obras"
            className="hover:text-gray-400 transition font-light font-glonimove"
          >
            Obras
          </a>
          <a
            href="#videos"
            className="hover:text-gray-400 transition font-light font-glonimove"
          >
            Vídeo
          </a>
          <a
            href="/Palestras"
            className="hover:text-gray-400 transition font-light font-glonimove"
          >
            Palestras
          </a>
        </nav>

        {/* Botão de voltar ao topo à direita no mobile */}
        <div className="mt-6 md:mt-0 w-full md:w-auto flex justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            ↑
          </button>
        </div>
      </div>

      {/* Parte inferior do footer: Informações e redes sociais */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 items-center font-light font-glonimove">
        {/* Informações à esquerda */}
        <div className="flex flex-col space-y-4 text-center md:text-left">
          <p className="text-sm">TODOS OS DIREITOS RESERVADOS</p>
          <p className="text-sm">©2024 BMOUSE</p>
        </div>

        {/* Texto central (Endereço) */}
        <div className="text-center">
          <p className="text-sm">RUA FULANO DE TAL, 123</p>
          <p className="text-sm">RIO DE JANEIRO - BRASIL</p>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-center md:items-end space-y-4 text-center md:text-right">
          <p className="text-sm">INSTAGRAM</p>
          <p className="text-sm">FACEBOOK</p>
        </div>
      </div>

      {/* Logo decorativa no centro inferior */}
      <div className="relative flex justify-center lg:pb-6 md:pb-0">
        <img
          src={logoFooter} // Substitua pelo caminho da logo decorativa
          alt="Logo Decorativa"
          className="opacity-75"
        />
      </div>
    </footer>
  );
};

export default Footer;
