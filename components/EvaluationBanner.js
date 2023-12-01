import { ChatBubbleBottomCenterTextIcon } from "@heroicons/react/20/solid";
import React from "react";

const EvaluationBanner = () => {
  return (
    <section className="w-full px-5 lg:flex lg:justify-between items-start flex-col max-w-[1250px] mx-auto">
      <div className=" lg:full mb-10">
        <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12">
          <span className="text-blue-500">Isoler sa maison</span>, quels sont
          les aides disponibles ?
        </h2>
        <p className="text-gray-500 text-xs md:text-base font-light w-6/6 mt-5">
          Pour obtenir des aides pour l'isolation de votre bien immobilier,
          plusieurs options sont disponibles, dont MaPrimeRénov', les
          Certificats d'Économie d'Énergie (CEE), le label RGE, et l'éco-prêt à
          taux zéro. Chacune de ces aides a ses propres conditions d'éligibilité
          et avantages :
        </p>
        <ul className="w-full text-gray-500 text-xs md:text-base font-light">
          <li className="mt-3 list-disc">
            <span className="font-semibold">MaPrimeRénov' :</span> Cette aide
            est accessible à tous les propriétaires, quel que soit leur revenu,
            pour financer des travaux de rénovation énergétique. Elle est
            calculée en fonction des revenus du foyer et du gain écologique des
            travaux.
          </li>
          <li className="mt-3 list-disc">
            <span className="font-semibold">
              Certificats d'Économie d'Énergie (CEE) :
            </span>{" "}
            Ce dispositif oblige les fournisseurs d'énergie à promouvoir
            l'efficacité énergétique. En tant que propriétaire, vous pouvez
            bénéficier d'aides financières de la part de ces fournisseurs pour
            vos travaux de rénovation.
          </li>
          <li className="mt-3 list-disc">
            <span className="font-semibold">
              Label RGE (Reconnu Garant de l'Environnement) :
            </span>{" "}
            Pour bénéficier de certaines aides, les travaux doivent être
            réalisés par un professionnel certifié RGE. Ce label assure la
            qualité et l'efficacité des travaux effectués
          </li>
          <li className="mt-3 list-disc">
            <span className="font-semibold">
              Éco-prêt à taux zéro (éco-PTZ) :
            </span>{" "}
            Ce prêt vous permet de financer des travaux de rénovation
            énergétique sans intérêt. Il est accessible sans condition de
            ressources et peut être combiné avec d'autres aides comme
            MaPrimeRénov'.
          </li>
        </ul>
      </div>
      <div className="lg:w-6/12 min-h-full rounded-lg bg-blue-500 py-5 lg:py-5 px-12 flex justify-around flex-col my-4 lg:my-0">
        <h3 className="text-white text-xl md:text-2xl font-normal lg:mb-0 flex items-center">
          <ChatBubbleBottomCenterTextIcon className="h-auto w-7 lg:mb-0 mr-2 text-yellow-500" />
          Notre conseil :
        </h3>
        <p className="text-white text-xs md:text-base font-light w-6/6 mt-5">
          Il est conseillé d'utiliser des outils de simulation en ligne pour
          estimer votre éligibilité et le montant des aides auxquelles vous
          pouvez prétendre. Ces outils prennent en compte la localisation de
          votre bien, la composition de votre foyer, et vos revenus.
        </p>
      </div>
    </section>
  );
};

export default EvaluationBanner;
