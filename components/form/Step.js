import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AppartementMaison from "./step/AppartementMaison";
import { useRouter } from "next/router";

const Step = () => {
  const [error, setError] = useState(null);
  const step = useSelector((state) => state?.stepInProgress);

  const type = useSelector((state) => state?.clientInfomation?.type);
  const surface = useSelector((state) => state?.clientInfomation?.surface);
  const nbrPieces = useSelector((state) => state?.clientInfomation?.pieces);
  const nbrChambres = useSelector((state) => state?.clientInfomation?.chambres);
  const annee = useSelector((state) => state?.clientInfomation?.annee);
  const etages = useSelector((state) => state?.clientInfomation?.etages);
  const niveaux = useSelector((state) => state?.clientInfomation?.niveaux);
  const espacesExterieurs = useSelector(
    (state) => state?.clientInfomation?.espacesExterieurs
  );
  const standing = useSelector((state) => state?.clientInfomation?.standing);
  const vue = useSelector((state) => state?.clientInfomation?.vue);
  const oriantation = useSelector(
    (state) => state?.clientInfomation?.oriantation
  );
  const travaux = useSelector((state) => state?.clientInfomation?.travaux);
  const atouts = useSelector((state) => state?.clientInfomation?.atouts);
  const dpe = useSelector((state) => state?.clientInfomation?.dpe);
  const ges = useSelector((state) => state?.clientInfomation?.ges);
  const contrat = useSelector((state) => state?.clientInfomation?.contrat);
  const vente = useSelector((state) => state?.clientInfomation?.vente);

  const dispatch = useDispatch();

  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  const currentSlug = pathSegments[1];

  const handleRoute = (e) => {
    e.preventDefault();
    router.push(`/estimation/analyse`);
  };

  const handleComponent = () => {
    switch (step) {
      case 2:
        return <AppartementMaison />;

      default:
        return <AppartementMaison />;
    }
  };
  const handleStep = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_SIMULATEUR_STEP" });
  };

  useEffect(() => {
    if (step === 5 && nbrChambres > nbrPieces) {
      setError(
        "Le nombre de chambres ne peut pas être supérieur au nombre de pièces"
      );
    } else setError(null);
  }, [nbrChambres]);

  const isButtonDisabled = () => {
    switch (step) {
      case 2:
        return !type;

      case 3:
        return !surface;

      case 4:
        return !nbrPieces;

      case 5:
        return !nbrChambres || nbrChambres > nbrPieces;

      case 6:
        return !annee;

      case 7:
        if (type === "Appartement") {
          return !etages || !niveaux;
        }
        return !etages;

      case 8:
        return false;

      case 9:
        return !standing;

      case 10:
        return !vue || oriantation.length === 0;

      case 11:
        return travaux === null || travaux === undefined;

      case 12:
        return false;

      case 13:
        return !dpe || !ges;

      case 14:
        return !contrat || !vente;

      default:
        return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="w-full min-h-[300px] h-full flex flex-col justify-between bg-opacity-50 rounded-md mt-10">
      {handleComponent()}
      <div className="flex items-center lg:mb-0 mb-5">
        <button
          disabled={isButtonDisabled()}
          type="button"
          className={`text-white py-1.5 px-5 rounded-full transition ease-in-out duration-100 w-max`}
          style={{
            backgroundColor: "#3b82f6",
            opacity: isButtonDisabled() ? 0.6 : 1,
          }}
          onClick={(e) => (step === 14 ? handleRoute(e) : handleStep(e))}
        >
          {step === 14 ? "Voir l'estimation" : "Suivant"}
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
