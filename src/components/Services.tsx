import React from "react";
import Ai from "../assets/Ai.jpg";
import Cloud from "../assets/cloud_solution.jpg";
import Consulting from "../assets/Cybersecurity.avif";
import Cybersecurity from "../assets/Data_Analyst.avif";
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'

const services = [
  { title: "Artificial Intelligence", image: Ai },
  { title: "Cloud", image: Cloud },
  { title: "Consulting", image: Consulting },
  { title: "Cybersecurity", image: Cybersecurity },
  { title: "Artificial Intelligence", image: img1 },
  { title: "Cloud", image: img2 },
  { title: "Consulting", image: img3 },
  { title: "Cybersecurity", image: img4 },
];

const ServicesSection = () => {
  return (
    <div className=" text-gray-800 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 uppercase text-purple-950 text-center">Services</h2>
        <p className="text-xl text-gray-900 mb-12 text-center">
          Transform your business with advanced technologies
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-64 w-full rounded-xl overflow-hidden bg-gray-900 shadow-lg"
            >
              {/* Zoomable Background Layer */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-950/50 to-transparent opacity-100 z-10"></div>

              {/* Title */}
              <div className="absolute uppercase bottom-0 left-0 w-full p-4 text-center text-white text-lg font-semibold z-20">
                {service.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
