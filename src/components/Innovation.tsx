// import React from "react";
import Innovations from "../assets/img2.avif";

const Innovation = () => {
  return (
    <div
      className="relative flex items-center justify-center text-white "
      style={{
        backgroundImage: `url(${Innovations})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "70vh",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Content container */}
      <div className="flex flex-col lg:flex-row justify-self-start items-center relative z-0 text-center lg:text-left  gap-8">
        <div className="lg:w-2/3 mx-4 px-6">
          <h1 className=" text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Welcome to a New Era of Innovation
          </h1>
          <div className="flex justify-center md:justify-normal">
            <div className="bg-purple-400 w-32 h-1 rounded-full z-10" />
            <div className="bg-purple-500 w-12 h-1 rounded-full -ml-2 z-20" />
            <div className="bg-purple-600 w-12 h-1 rounded-full -ml-2 z-30" />
            <div className="bg-purple-700 w-12 h-1 rounded-full -ml-2 z-40" />
            <div className="bg-purple-800 w-12 h-1 rounded-full -ml-2 z-50" />
            <div className="bg-purple-950 w-12 h-1 rounded-full -ml-2 z-60" />
          </div>

          <p
            className="py-4 text-base md:font-semibold leading-relaxed"
            style={{ wordSpacing: "0.3rem" }}
          >
            Relax and let Wyreflow guide your business into the future with
            seamless technology solutions that simplify, secure, and enhance
            your operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
