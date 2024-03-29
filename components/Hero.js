import React from "react";
import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";
import FirstStep from "./form/FirstStep";
import CertificationsBanner from "./CertificationsBanner";
import AppartementMaison from "./form/step/AppartementMaison";

const avantages = [
  {
    title: "Vous achetez un logement neuf en vue de sa première occupation.",
    icon: (
      <CheckBadgeIcon className="h-4 w-4 text-yellow-500" aria-hidden="true" />
    ),
  },
  {
    title:
      "Votre futur logement neuf financé avec le PTZ doit devenir votre résidence principale.",
    icon: (
      <CheckBadgeIcon className="h-4 w-4 text-yellow-500" aria-hidden="true" />
    ),
  },
  {
    title:
      "Vos revenus ne doivent pas dépasser le plafond de ressources de votre zone géographique.",
    icon: (
      <CheckBadgeIcon className="h-4 w-4 text-yellow-500" aria-hidden="true" />
    ),
  },
];

const Hero = () => {
  return (
    <section
      id="estimation"
      className="flex w-full justify-between items-center overflow-hidden bg-gray-50 rounded-md lg:mb-10 lg:py-5 lg:flex-row flex-col lg:mt-10"
    >
      <div className="w-full lg:w-5/12 flex flex-col justify-center lg:min-h-[500px] lg:mb-0 mb-10 relative lg:bg-gray-50 bg-white px-6 lg:px-10 lg:mt-0">
        <div>
          <h1 className="lg:text-4xl text-2xl lg:w-11/12 mt-10 lg:mt-3 text-gray-700">
            Estimez vos aides pour
            <br />
            <span className="lg:text-6xl text-4xl inline bg-gradient-to-r from-blue-500 via-blue-300 to-blue-500 bg-clip-text font-display font-bold tracking-tight text-transparent min-h-max">
              isolez votre bien
            </span>{" "}
          </h1>
          <div className="bg-yellow-500 w-20 h-2 rounded-full my-5"></div>
          <h2 className="text-xl text-gray-700 mt-5 w-9/12 mb-3">
            Votre isolation subventionnée par l'état : <br />
          </h2>
          <span className="text-blue-500">+</span> Isolation des combles <br />
          <span className="text-blue-500">+</span> Isolation des rampants <br />
          <span className="text-blue-500">+</span> Isolation des murs interieurs
          (ITI)
          <br />
          <h3 className="font-thin text-xs mt-5 flex items-end">
            <DocumentCheckIcon className="h-4 w-4 text-yellow-500 mr-2" />
            Gestion complet des dossiers administratifs*
          </h3>
          <CertificationsBanner />
        </div>
      </div>
      {/* <div className="w-9/12 h-0.5 bg-gray-100 lg:hidden flex mb-7 mt-0 " /> */}
      <AppartementMaison />
    </section>
  );
};

export default Hero;
