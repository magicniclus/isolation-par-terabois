import { CheckBadgeIcon } from "@heroicons/react/20/solid";
import React from "react";

const Logos = ({ title, img, text }) => {
  return (
    <div className="md:w-5/12 w-full flex justify-center items-center flex-col mt-12 bg-gray rounded-lg p-5 bg-white relative">
      <CheckBadgeIcon className="h-10 w-10 text-yellow-500 absolute top-3 right-3" />
      <div className="flex items-center justify-around flex-col">
        <div className="rounded-full overflow-hidden bg-gray-50 border border-gray-500 h-[100px] w-[100px] flex justify-center items-center">
          <img
            src={img}
            className="max-h-[200px] h-auto"
            alt="Image Description"
          />
        </div>
        <h3 className="text-xl text-textSecondary ml-5 mt-3 text-center">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default Logos;
