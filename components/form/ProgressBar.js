import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const ProgressBar = () => {
  const step = useSelector((state) => state.stepInProgress);
  const initialStep = useSelector((state) => state.simulateurStep);

  const dispatch = useDispatch();

  const router = useRouter();

  const handleClick = () => {
    if (step > 2) {
      dispatch({ type: "DOWN_SIMULATEUR_STEP" });
    } else {
      router.push(`/`);
    }
  };

  return (
    <div className="">
      <div className="relative w-full h-2 bg-gray-200 rounded-md z-0">
        <div
          className={`absolute rounded-md h-[80%] top-1/2 transform -translate-y-1/2 transition-all duration-500 ease-out`}
          style={{
            width: `${(step * 100) / initialStep}%`,
            backgroundColor: "#3b82f6",
          }}
        ></div>
      </div>
      {step !== 0 ? (
        <button onClick={handleClick} className="flex mt-2">
          <ChevronLeftIcon className=" w-4" style={{ color: "#3b82f6" }} />
          <p className="text-xs font-light" style={{ color: "#3b82f6" }}>
            Retour
          </p>
        </button>
      ) : null}
    </div>
  );
};

export default ProgressBar;
