import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import InputNumber from "../inputs/InputNumber";

const Surface = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: { surface: selectedType },
    });
  }, [selectedType]);
  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Surface total du bien à isoler :
      </h2>
      <div className="flex flex-col">
        <InputNumber onChange={setSelectedType} type="m2" />
      </div>
    </>
  );
};

export default Surface;
