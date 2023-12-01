import React, { useEffect, useState } from "react";
import CardWithImg from "../cards/CardWithImg";
import { useDispatch } from "react-redux";
import CardWithSize from "../cards/CardsWithSize";

const Prestations = () => {
  const dispatch = useDispatch();
  const [combles, setCombles] = useState(null);
  const [rampants, setRampants] = useState(null);
  const [iti, setIti] = useState(null);

  useEffect(() => {
    dispatch({
      type: "SET_CLIENT_INFORMATION",
      payload: {
        combles: combles ? true : false,
        rampants: rampants ? true : false,
        iti: iti ? true : false,
      },
    });
  }, [combles, rampants, iti]);

  return (
    <>
      <h2
        className="text-2xl font-light lg:my-0 my-5"
        style={{ color: "#3b82f6" }}
      >
        Que souhaitez-vous isoler ?
      </h2>
      <div className="flex flex-col">
        <div className="mt-5">
          <CardWithSize
            title="Combles"
            selected={combles}
            setSelected={setCombles}
          />
        </div>
        <CardWithSize
          title="Rampants"
          selected={rampants}
          setSelected={setRampants}
        />
        <div className="mb-5">
          <CardWithSize
            title="Isolation des murs interieurs (ITI)"
            selected={iti}
            setSelected={setIti}
          />
        </div>
      </div>
    </>
  );
};

export default Prestations;
