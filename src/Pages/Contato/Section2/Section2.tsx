import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [feedback, setFeedback] = useState<string | null>(null);

  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      message,
      topics: selectedTopics,
    };

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFeedback("Formulário enviado com sucesso!");
        setName("");
        setEmail("");
        setMessage("");
        setSelectedTopics([]);
      } else {
        setFeedback(data.error || "Ocorreu um erro ao enviar o formulário.");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setFeedback("Ocorreu um erro ao enviar o formulário.");
    }
  };

  return (
    <section className="bg-[#1C2415] text-white py-16 px-4 md:px-24">
      <h1 className="text-center text-[#F12730] text-4xl sm:text-5xl md:text-6xl font-medium font-glonimove mb-12 ">
        VAMOS SONHAR JUNTOS?
      </h1>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div>
          <input
            type="text"
            placeholder="Seu Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-[#F12730]"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="Seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-[#F12730]"
          />
        </div>

        <div>
          <textarea
            placeholder="Mensagem"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full bg-transparent border-b border-gray-400 text-white py-2 focus:outline-none focus:border-[#F12730]"
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-300 text-center font-normal font-glonimove">
            Assuntos da nossa conversa <br />
            <span className="text-sm font-normal font-glonimove">
              (Você pode escolher mais de um assunto)
            </span>
          </p>
          <div className="flex justify-center flex-wrap gap-2 sm:gap-4 font-normal font-glonimove">
            {["Palestra", "Direção", "Entrevista", "Outro"].map((topic) => (
              <button
                key={topic}
                type="button"
                onClick={() => toggleTopic(topic)}
                className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full border text-sm sm:text-base ${
                  selectedTopics.includes(topic)
                    ? "bg-[#F12730] text-white"
                    : "bg-transparent text-gray-300 border-gray-300"
                } hover:border-white transition-all duration-300`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-[#F12730] text-white py-2 px-8 rounded-full hover:bg-[#c41d25] transition duration-300 font-normal font-glonimove"
          >
            Enviar
          </button>
        </div>
      </form>

      {feedback && (
        <p className="text-center mt-6 text-lg text-[#F12730]">{feedback}</p>
      )}
    </section>
  );
};

export default ContactForm;
