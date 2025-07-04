import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react";
const industries= [
  "Banking",
  "Consulting",
  "Communications and Media",
  "E-commerce",
  "Ed-Tech / Education",
  "Government & Public Services",
  "HealthCare",
  "High-Tech",
  "Recruitment",
  "Software and Platforms",
  "Transportation & Logistics",
];
const services =[
  "Cloud",
  "Consulting",
  "Cybersecurity",
  "Cognitive Business Operations",
  "Data & Analytics",
  "Enterprises solution",
  "Network Solution and Services",
];
const information=[
  "Career",
  "Contact us",
  "Privacy Notice",
  "Disclaimer",
]

const Footer = () => {
  return (
    <footer className="bg-black text-slate-400/90 ">
      {/* Top Section */}
      <div className=" max-w-7xl mx-auto px-6 py-16 grid grid-cols-3 gap-12 justify-center text-left">
        {/* Industries */}
        <div className=" mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-700">Industries</h3>
          <ul className="space-y-3 text-base">
            {industries.map((item) => (
              <li key={item} className="hover:underline cursor-pointer hover:text-slate-50">{item}</li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className=" mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-700">Services</h3>
          <ul className="space-y-3 text-base">
            {services.map((item) => (
              <li key={item} className="hover:underline cursor-pointer hover:text-slate-50">{item}</li>
            ))}
          </ul>
        </div>

        {/* More Info */}
        <div className=" mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-purple-700 ">More Information</h3>
          <ul className="space-y-3 text-base">
            {information.map((item) => (
              <li key={item} className="hover:underline cursor-pointer hover:text-slate-50">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10-700 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center">
          {/* Logo/Brand */}
          <div className="flex items-center">
          <h1 className=" font-bold text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ">
            Wyreflow
          </h1>
        </div>

          {/* Copyright */}
          <div className="text-base text-gray-400">
            © 2024 Wyreflow. All Rights Reserved
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <Facebook className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            <Youtube className="w-6 h-6 hover:text-red-600 cursor-pointer" />
            <Linkedin className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
