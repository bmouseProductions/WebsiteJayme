import { useState } from "react";

const SuasObras = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  return (
    <section className="relative bg-[#1C2415] text-white py-16">
      <h1 className="text-center text-[#F12730] text-4xl sm:text-5xl md:text-6xl font-medium font-glonimove mb-12 ">
        Pronto para inspirar seu evento?
      </h1>
      <p className="text-center p-5 mb-10 max-w-xl mx-auto">
        Transforme seu evento em uma experiência inesquecível com Jayme
        Monjardim. Entre em contato com nossa equipe para mais informações.
      </p>
      <form className="max-w-3xl mx-auto space-y-6">
        {/* Nome */}
        <div>
          <input
            type="text"
            placeholder="Seu Nome"
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-[#F12730]"
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            placeholder="Seu Email"
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-[#F12730]"
          />
        </div>

        {/* Mensagem */}
        <div>
          <textarea
            placeholder="Mensagem"
            rows={4}
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-[#F12730]"
          />
        </div>

        {/* Assuntos */}
        <div className="space-y-4">
          <p className="text-gray-300 text-center font-normal font-glonimove">
            Assuntos da nossa conversa <br />
            <span className="text-sm font-normal font-glonimove">
              (Você pode escolher mais de um assunto)
            </span>
          </p>
          <div className="flex justify-center space-x-4 flex-wrap font-normal font-glonimove">
            {["Palestra", "Direção", "Entrevista", "Outro"].map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                className={`px-4 py-2 rounded-full border ${
                  selectedTopics.includes(topic)
                    ? "bg-[#F12730] text-white"
                    : "bg-transparent text-gray-300 border-gray-300"
                } hover:border-white`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Botão de Enviar */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#F12730] text-white py-2 px-8 rounded-full hover:bg-[#c41d25] transition duration-300 font-normal font-glonimove"
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default SuasObras;
