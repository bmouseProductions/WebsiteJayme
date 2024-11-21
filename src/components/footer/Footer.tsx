import React from "react";
import logo from "../../assets/logo_footer.png";
import logoFooter from "../../assets/decorationFooter.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#4B5426] text-white">
      {/* Parte superior do footer: Logo, navegação e botão */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 flex items-center justify-between">
        {/* Logo */}
        <div>
          <img
            src={logo} // Substitua pelo caminho da logo principal
            alt="Jayme Monjardim Logo"
            className="h-12"
          />
        </div>

        {/* Navegação */}
        <nav className="flex space-x-6 text-sm uppercase">
          <a href="#home" className="hover:text-gray-400 transition">
            Home
          </a>
          <a href="#vida" className="hover:text-gray-400 transition">
            Vida
          </a>
          <a href="#obras" className="hover:text-gray-400 transition">
            Obras
          </a>
          <a href="#videos" className="hover:text-gray-400 transition">
            Vídeo
          </a>
          <a href="#palestras" className="hover:text-gray-400 transition">
            Palestras
          </a>
        </nav>

        {/* Botão de voltar ao topo */}
        <div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:text-black transition"
          >
            ↑
          </button>
        </div>
      </div>

      {/* Parte inferior do footer: Informações e redes sociais */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 items-center">
        {/* Informações à esquerda */}
        <div className="flex flex-col space-y-4">
          <p className="text-sm">TODOS OS DIREITOS RESERVADOS</p>
          <p className="text-sm">©2024 EMOUSE</p>
        </div>

        {/* Texto central (Endereço) */}
        <div className="text-center">
          <p className="text-sm">RUA FULANO DE TAL, 123</p>
          <p className="text-sm">RIO DE JANEIRO - BRASIL</p>
        </div>

        {/* Redes sociais */}
        <div className="flex flex-col items-end space-y-4">
          <p className="text-sm">INSTAGRAM</p>
          <p className="text-sm">FACEBOOK</p>
        </div>
      </div>

      {/* Logo decorativa no centro inferior */}
      <div className="relative flex justify-center">
        <img
          src={logoFooter} // Substitua pelo caminho da logo decorativa
          alt="Logo Decorativa"
          className=" opacity-75"
        />
      </div>
    </footer>
  );
};

export default Footer;
