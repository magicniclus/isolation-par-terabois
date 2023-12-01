import React from "react";
import Basic from "../../../layout/Basic";

const index = () => {
  return (
    <Basic
      height="min-h-[calc(100vh-78px)]"
      title="Résultats de Simulation de Prêt à Taux Zéro - Info PTZ | Vos Estimations en Un Clic"
      metaDescription="Découvrez les résultats de votre simulation de prêt à taux zéro avec Info PTZ. Obtenez des estimations claires et précises pour planifier votre projet immobilier en toute confiance. Consultez vos résultats maintenant et avancez vers votre objectif."
    >
      <div className="p-8 text-gray-700 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-center">
          <span className="lg:text-5xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
            Rssultat d'estimation pour <br />
          </span>
          <span className="lg:text-6xl text-4xl inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
            votre projet
          </span>{" "}
        </h1>
        <div className="bg-yellow-500 w-20 h-2 rounded-full my-5"></div>
        <p className="mb-4 text-center">
          Au vu des informations que vous nous avez communiquées, nous ne
          pouvons vous donner un résultat en ligne, un expert vous appelera afin
          d'en savoir plus sur votre projet et votre situation.
        </p>
      </div>
    </Basic>
  );
};

export default index;
