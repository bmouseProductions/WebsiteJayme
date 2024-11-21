import "./App.css";
import GrandesObrasSection from "./components/GrandesObras/Section2";
import Header from "./components/Header/Index";
import JaymeSection1 from "./components/Section/Section";
import SectionMagia from "./components/Section3/Section3";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <JaymeSection1 />
      <GrandesObrasSection />
      <SectionMagia />
      <Footer />
    </div>
  );
}

export default App;
