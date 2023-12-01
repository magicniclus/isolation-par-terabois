import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import SituationPersonnelle from "./step/SituationPersonnelle";
import RevenusFiscal from "./step/RevenusFiscal";
import NbrPartFoyer from "./step/NbrPartFoyer";
import Prestations from "./step/Prestations";
import Projet from "./step/Projet";
import Surface from "./step/Surface";
import Secteur from "./step/Secteur";

const Step = () => {
  const [error, setError] = useState(null);
  const step = useSelector((state) => state?.stepInProgress);

  const combles = useSelector((state) => state?.clientInfomation?.combles);
  const rampants = useSelector((state) => state?.clientInfomation?.rampants);
  const iti = useSelector((state) => state?.clientInfomation?.iti);
  const surface = useSelector((state) => state?.clientInfomation?.surface);
  const secteur = useSelector((state) => state?.clientInfomation?.secteur);
  const situationPersonnelle = useSelector(
    (state) => state?.clientInfomation?.situationPersonnelle
  );
  const revenusFiscal = useSelector(
    (state) => state?.clientInfomation?.revenusFiscal
  );
  const nbrDePart = useSelector((state) => state?.clientInfomation?.nbrDePart);
  const projet = useSelector((state) => state?.clientInfomation?.projet);

  const dispatch = useDispatch();

  const router = useRouter();
  const pathSegments = router.asPath.split("/");

  const handleRoute = (e) => {
    e.preventDefault();
    router.push(`/estimation/analyse`);
  };

  const handleComponent = () => {
    switch (step) {
      case 2:
        return <Prestations />;

      case 3:
        return <Surface />;

      case 4:
        return <Secteur />;

      case 5:
        return <SituationPersonnelle />;

      case 6:
        return <RevenusFiscal />;

      case 7:
        return <NbrPartFoyer />;

      case 8:
        return <Projet />;

      default:
        return;
    }
  };
  const handleStep = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_SIMULATEUR_STEP" });
  };

  const isButtonDisabled = () => {
    switch (step) {
      case 2:
        return !(combles || rampants || iti);

      case 3:
        return !surface;

      case 4:
        return !secteur;

      case 5:
        return !situationPersonnelle;

      case 6:
        return !revenusFiscal;

      case 7:
        return !nbrDePart;

      case 8:
        return !projet;

      default:
        return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full min-h-[250px] h-full flex flex-col justify-between bg-opacity-50 rounded-md mt-10">
      {handleComponent()}
      <div className="flex items-center lg:my-0 my-5">
        <button
          disabled={isButtonDisabled()}
          type="button"
          className={`text-white py-1.5 px-5 rounded-full transition ease-in-out duration-100 w-max`}
          style={{
            backgroundColor: "#3b82f6",
            opacity: isButtonDisabled() ? 0.6 : 1,
          }}
          onClick={(e) => (step === 8 ? handleRoute(e) : handleStep(e))}
        >
          {step === 8 ? "Voir l'estimation" : "Suivant"}
        </button>
        {error ? (
          <p className="text-red-300 text-xs font-light lg:w-3/5 text-start ml-2">
            {error}
          </p>
        ) : null}
      </div>
    </form>
  );
};

export default Step;
