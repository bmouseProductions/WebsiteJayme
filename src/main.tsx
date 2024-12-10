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
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);
