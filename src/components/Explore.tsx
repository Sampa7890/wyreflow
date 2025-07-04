import React from "react";
import Innovations from "../assets/Innovation.jpg";

const Explore = () => {
  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url(${Innovations})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        maxHeight: "70vh",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center ">
        <div className="w-full lg:w-2/3 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Explore the Tech Universe with Wyreflow
          </h1>
          <div className="flex justify-center md:justify-normal">
                  <div className="bg-purple-400 w-12 h-1 rounded-full z-10" />
                  <div className="bg-purple-500 w-12 h-1 rounded-full -ml-2 z-20" />
                  <div className="bg-purple-600 w-12 h-1 rounded-full -ml-2 z-30" />
                  <div className="bg-purple-700 w-12 h-1 rounded-full -ml-2 z-40" />
                  <div className="bg-purple-800 w-12 h-1 rounded-full -ml-2 z-50" />
                  <div className="bg-purple-950 w-12 h-1 rounded-full -ml-2 z-60" />
                </div>
          <p
            className="text-base md:font-semibold leading-relaxed my-8"
            style={{ wordSpacing: "0.3rem" }}
          >
            Experience a new era of digital transformation, where every step is a
            leap towards a brighter future.
          </p>
          <button className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-200 transition duration-300">
            JOIN NOW →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
