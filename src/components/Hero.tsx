import React from "react";
import Hero_img from "../assets/Hero_image.jpg";
import { ChevronRight } from "lucide-react";
const Hero = () => {
  return (
    <div>
      <div
        className="relative flex items-center justify-center text-white "
        style={{
          backgroundImage: `url(${Hero_img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "90vh",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-950/70 z-0" />
        {/* Content container */}
        <div className=" flex flex-col  justify-center items-center relative z-0 text-center max-w-7xl mx-auto gap-8">
          {/* Left Side: Heading */}
          <h1 className=" mx-auto text-purple-400 text-shadow-purple-50 text-shadow-2xs text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-0  leading-tight whitespace-nowrap overflow-hidden  border-r-4  border-white animate-typing">
            Leading the Way in Digital Innovation
          </h1>

          {/* Right Side: Description + Button */}
          <div className="text-center px-12 md:max-w-4xl">
            <h3 className="text-sm sm:text-lg md:text-xl  mb-4 leading-relaxed">
              Unlock the Potential of Digital Transformation with Our Expertise
              in Cloud, AI, Cybersecurity, and Data Analytics
            </h3>
            <button
              onClick={() => {
                console.log("Navigate to services");
              }}
              className="group px-4 text-lg md:text-2xl inline-flex items-center gap-2 font-semibold cursor-pointer py-3 rounded-lg "
            >
              See what we do
              <ChevronRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 "/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
