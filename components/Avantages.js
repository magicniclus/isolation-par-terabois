import {
  ArrowTrendingUpIcon,
  CloudArrowUpIcon,
  HandThumbUpIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import { useSelector } from "react-redux";

const Avantages = () => {
  const primaryColor = useSelector((state) => state?.user?.settings?.fontColor);
  const secondaryColor = useSelector(
    (state) => state?.user?.settings?.fontColor2
  );
  const avantages = [
    {
      title: "Aides de l'état",
      text: "Découvrez rapidement les subventions et aides auxquelles vous êtes éligible pour financer vos travaux d'isolation.",
      icon: (
        <ArrowTrendingUpIcon
          className="h-4 w-4 text-yellow-500 mr-3"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Accompagnement personnalisé",
      text: "Bénéficiez d'un accompagnement pour constituer votre dossier.",
      icon: (
        <HandThumbUpIcon
          className="h-4 w-4 text-yellow-500 mr-3"
          aria-hidden="true"
        />
      ),
    },
    {
      title: "Sécurité et confidentialité",
      text: "Nous garantissions la sécurité de vos informations. Les détails de votre prêt et votre éligibilité sont traités avec la plus stricte confidentialité.",
      icon: (
        <CloudArrowUpIcon
          className="h-4 w-4 text-yellow-500 mr-3"
          aria-hidden="true"
        />
      ),
    },
  ];
  return (
    <div>
      <div className="lg:my-0 my-10 flex flex-col">
        {avantages.map((avantage, index) => (
          <div key={index} className="flex flex-col mb-7 justify-center">
            <div
              className="lg:text-xl text-lg font-normal lg:mb-2 flex items-center"
              style={{ color: secondaryColor }}
            >
              {avantage.icon}
              {avantage.title}
            </div>
            <p
              className="text-sm font-light lg:w-full w-11/12"
              style={{ color: primaryColor }}
            >
              {avantage.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Avantages;
