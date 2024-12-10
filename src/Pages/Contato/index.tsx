import React from "react";
import Section1 from "./Section1/Section1";
import ContactForm from "./Section2/Section2";
import RedesSociaisSection from "./Section3/Section3";
import MaisSobreContato from "./Section4/Section4";
import SuasObrasContato from "./Section5/Section5";

const Contato = () => {
  return (
    <div>
      <Section1 />
      <ContactForm />
      <RedesSociaisSection />
      <MaisSobreContato />
      <SuasObrasContato />
    </div>
  );
};

export default Contato;
