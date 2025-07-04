import React from "react";
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    icon: <Facebook className="w-6 h-6 md:w-8 md:h-8" />,
    url: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6 md:w-8 md:h-8" />,
    url: "https://instagram.com",
  },
  {
    name: "YouTube",
    icon: <Youtube className="w-6 h-6 md:w-8 md:h-8" />,
    url: "https://youtube.com",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 md:w-8 md:h-8" />,
    url: "https://linkedin.com",
  },
];

const SocialSection = () => {
  return (
    <section className="text-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 uppercase text-purple-950 text-center">Social</h2>
        <p className="text-xl text-gray-900 mb-12 text-center">Follow us for the latest update</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 transition"
            >
              <div className="bg-gradient-to-r  from-blue-400 via-purple-400 to-pink-400 text-black rounded-full p-3">
                {link.icon}
              </div>
              <span className="font-bold text-lg text-purple-950">Wyreflow</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialSection;
