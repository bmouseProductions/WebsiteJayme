import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Pages/Home/App.tsx";
import Footer from "./components/footer/Footer.tsx";
import Vida from "./Pages/Vida/index.tsx";
import Obras from "./Pages/Obras/index.tsx";
import Visao from "./Pages/Visao/index.tsx";
import Palestra from "./Pages/Palestra/index.tsx";
import Contato from "./Pages/Contato/index.tsx";
import LongaSerie from "./Pages/LongasSeries/index.tsx";
import MiniSerie from "./Pages/MiniSerie/index.tsx";
import Filmes from "./Pages/Filmes/Index.tsx";
import Lancamentos from "./Pages/Lancamentos/index.tsx";
import Roque from "./Pages/SingleObra/LongasSeriesObras/Roque/Roque.tsx";
import TempoDeAmar from "./Pages/SingleObra/LongasSeriesObras/TempoDeAmar/TempoDeAmar.tsx";
import SeteVidas from "./Pages/SingleObra/LongasSeriesObras/SeteVidas/SeteVidas.tsx";
import Avidadagente from "./Pages/SingleObra/LongasSeriesObras/avidadagente/avidadagente.tsx";
import ViveraVida from "./Pages/SingleObra/LongasSeriesObras/viverAvida/viverAvida.tsx";
import Clone from "./Pages/SingleObra/LongasSeriesObras/Clone/Clone.tsx";
import Terra from "./Pages/SingleObra/LongasSeriesObras/terraNostra/Terranostra.tsx";
import Pantanal from "./Pages/SingleObra/LongasSeriesObras/Pantanal/Pantanal.tsx";
import Direito from "./Pages/SingleObra/LongasSeriesObras/direitodeamar/DireitodeAmar.tsx";
import Maysa from "./Pages/SingleObra/miniSeriesObras/Maysa/Maysa.tsx";
import Casa7 from "./Pages/SingleObra/miniSeriesObras/7mulhers/Casa7mulheres.tsx";
import Chiquinho from "./Pages/SingleObra/miniSeriesObras/chiquinho/Chiquinho.tsx";
import Vendedor from "./Pages/SingleObra/Filmes/vendedordesonhos/VendedordeSonhos.tsx";
import Tempo from "./Pages/SingleObra/Filmes/tempoeovento/TempoEoVento.tsx";
import Olga from "./Pages/SingleObra/Filmes/Olga/Olga.tsx";
import Avental from "./Pages/SingleObra/Lancamentos/Avental/Avental.tsx";
import Romaria from "./Pages/SingleObra/Lancamentos/romaria/Romaria.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Vida" element={<Vida />} />
          <Route path="/Obras" element={<Obras />} />
          <Route path="/Visao" element={<Visao />} />
          <Route path="/Palestra" element={<Palestra />} />
          <Route path="/Contato" element={<Contato />} />
          <Route path="/Longas-Serie" element={<LongaSerie />} />
          <Route path="/Mini-Series" element={<MiniSerie />} />
          <Route path="/Filmes" element={<Filmes />} />
          <Route path="/Lancamentos" element={<Lancamentos />} />
          <Route path="/roque-santeiro" element={<Roque />} />
          <Route path="/tempo-de-amar" element={<TempoDeAmar />} />
          <Route path="/sete-vidas" element={<SeteVidas />} />
          <Route path="/a-vida-da-gente" element={<Avidadagente />} />
          <Route path="/viver-a-vida" element={<ViveraVida />} />
          <Route path="/o-clone" element={<Clone />} />
          <Route path="/terra-nostra" element={<Terra />} />
          <Route path="/pantanal" element={<Pantanal />} />
          <Route path="/direito-de-amar" element={<Direito />} />
          <Route path="/maysa-quando-fala-o-coracao" element={<Maysa />} />
          <Route path="/a-casa-das-7-mulheres" element={<Casa7 />} />
          <Route path="/chiquinho-gonzaga" element={<Chiquinho />} />
          <Route path="/vendedor-de-sonhos" element={<Vendedor />} />
          <Route path="/o-tempo-e-o-vento" element={<Tempo />} />
          <Route path="/Olga" element={<Olga />} />
          <Route path="/o-avental-rosa" element={<Avental />} />
          <Route path="/romaria" element={<Romaria />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
