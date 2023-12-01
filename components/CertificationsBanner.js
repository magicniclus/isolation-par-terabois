import React from "react";

const CertificationsBanner = () => {
  return (
    <section className="flex justify-start items-center rounded-md mt-5 lg:flex-row flex-wrap mb-5">
      <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
        <img
          src="/maprimerenov.png"
          alt="maprimerenov"
          className="h-[60%] w-auto "
        />
      </div>
      <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
        <img src="/CEE.png" alt="CEE" className="h-[40%] w-auto" />
      </div>
      <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
        <img
          src="/france-renov.png"
          alt="francerenov"
          className="h-[40%] w-auto"
        />
      </div>
      <div className="flex justify-center items-center bg-white border-2 border-dark/20 rounded-full overflow-hidden w-16 h-16 mr-3 mt-2">
        <img src="/RGE.png" alt="RGE" className="h-[40%] w-auto" />
      </div>
    </section>
  );
};

export default CertificationsBanner;
