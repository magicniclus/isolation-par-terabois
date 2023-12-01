import React, { useEffect, useState } from "react";
import InputNumber from "../inputs/InputNumber";
import { useDispatch } from "react-redux";

const Secteur = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { secteur: selectedType },
    });
  }, [selectedType]);
  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Votre code postal
      </h2>
      <div className="flex flex-col">
        <InputNumber onChange={setSelectedType} type="CP" />
      </div>
    </>
  );
};

export default Secteur;
