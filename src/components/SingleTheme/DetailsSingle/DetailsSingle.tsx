import React from "react";
import ObrasCarrossel from "../../ObrasCarrossel";

type WorkDetailsProps = {
  title: string;
  synopsis: string;
  image: string;
  technicalDetails: {
    label: string;
    value: string;
  }[];
};

const WorkDetails: React.FC<WorkDetailsProps> = ({
  title,
  synopsis,
  image,
  technicalDetails,
}) => {
  return (
    <div className="bg-[#18231E] text-white font-sans p-8 md:p-16">
      {/* Sinopse */}
      <div className="max-w-6xl mx-auto mb-12">
        <h1 className="text-[#FF2E00] text-4xl font-bold mb-4">SINOPSE.</h1>
        <p className="leading-relaxed text-lg">{synopsis}</p>
      </div>

      {/* Ficha Técnica */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Imagem */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={title}
            className="rounded-md shadow-lg max-w-full h-auto"
          />
        </div>

        {/* Texto */}
        <div>
          <h2 className="text-[#FF2E00] text-4xl font-bold mb-4">
            FICHA TÉCNICA.
          </h2>
          <ul className="text-lg leading-relaxed">
            {technicalDetails.map((detail, index) => (
              <li key={index}>
                <strong>{detail.label}:</strong> {detail.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ObrasCarrossel />
    </div>
  );
};

export default WorkDetails;
