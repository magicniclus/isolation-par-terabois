import React, { useState, useEffect } from "react";

const AnalysePresentation = () => {
  const textValue = ["votre demande", "vos données", "vos aides"];
  const [currentText, setCurrentText] = useState(textValue[0]);

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const changeText = () => {
      setIsVisible(false);
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % textValue.length;
        setCurrentText(textValue[currentIndex]);
        setIsVisible(true);
      }, 500);
    };

    const intervalId = setInterval(changeText, 2000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:block hidden">
      <div>
        <h1 className="text-xl lg:text-3xl lg:w-FULL lg:mt-0 mt-10 text-gray-700">
          Patientez quelques secondes, analysons{" "}
          <div
            style={{
              overflow: "hidden",
              height: "1.5em",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              className={`text-xl lg:text-4xl transition-all ease-in-out duration-500 text-blue-500 ${
                isVisible
                  ? "opacity-100 transform translateY(0)"
                  : "opacity-0 -translate-y-1/2"
              }`}
            >
              {currentText}
            </span>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default AnalysePresentation;
