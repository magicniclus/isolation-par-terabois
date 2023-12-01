import React from "react";
import Logos from "./Logos";

const LogoContainer = (props) => {
  const data = props.data;

  return (
    <section>
      <div className="mx-auto flex max-w-5xl  p-6 lg:px-8 py-20 flex-col justify-center items-center text-text">
        <h2 className="text-2xl md:text-4xl text-gray-700 md:w-10/12 text-center">
          Prestations éligibles aux aides de l'état :
        </h2>
        <div className="flex flex-wrap justify-around">
          {data &&
            data.map((item, index) => (
              <Logos
                key={index}
                title={item.title}
                img={item.img}
                text={item.text}
              />
            ))}
        </div>
        <div className="mt-16 flex items-center">
          <a
            href="#estimation"
            className="text-white py-2 px-8 rounded-lg transition ease-in-out duration-100 bg-blue-500 max-w-[170px] text-center hover:shadow-lg"
          >
            Connaître mes droits
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoContainer;
