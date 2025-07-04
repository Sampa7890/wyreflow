import React from "react";
import { FileCog, Handshake, BriefcaseBusiness } from "lucide-react";
import Header from "../src/Navbar";
import Footer from "../src/Footer";
import Globe from "../src/assets/contact-image.png";
const Career = () => {
  return (
    <>
      <Header />
      <div className="min-h-[90vh] flex  justify-center px-6 bg-gray-950/90">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 ">
          {/* Left Content */}
          <div className="mt-8 mx-auto pl-8 space-y-4 items-center justify-center lg:my-auto">
            <div className="space-y-4 my-8 p-0">
              <h1 className="text-purple-800 text-shadow-2xs text-shadow-amber-50 text-5xl lg:text-6xl font-bold leading-tight">
                Let's talk business.
              </h1>
            </div>

            <div className="space-y-4 my-8 p-0">
              <h3 className="text-xl lg:text-3xl font-medium leading-tight ">
                Let us know how we can make your experience better.
              </h3>

              <div className="space-y-4 my-8 p-0">
                <h3 className="text-xl lg:text-2xl font-light leading-relaxed">
                  Available for support: support@wyreflow.com
                </h3>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-8 mb-8 lg:mt-8 flex flex-col justify-center items-center">
            <div className="w-96 cursor-pointer p-4 rounded-3xl border bg-purple-950/30 border-white/80 shadow-xl flex flex-col items-center text-center space-y-4">
              <div className="p-2 rounded-2xl">
                <FileCog className="w-12 h-12 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold">Request for Service</h3>
            </div>

            <div className="w-96 cursor-pointer p-4 rounded-3xl border bg-purple-950/30 border-white/80 shadow-xl flex flex-col items-center text-center space-y-4">
              <div className="p-2 rounded-2xl">
                <Handshake className="w-12 h-12 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold">Partnership</h3>
            </div>

            <div className="w-96 cursor-pointer p-4 rounded-3xl border bg-purple-950/30 border-white/80 shadow-xl flex flex-col items-center text-center space-y-4">
              <div className="p-2 rounded-2xl">
                <BriefcaseBusiness className="w-12 h-12 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold">Business Consulting</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8  bg-gradient-to-b from-gray-950 via-slate-800 to-slate-900 border-t-1">
        <div className="border rounded-2xl pt-16">
          <h1 className="text-purple-800 text-shadow-2xs text-shadow-amber-50 text-3xl md:text-5xl font-bold mb-12 max-w-7xl mx-auto my-8 text-center">
            Our Global Presence
          </h1>

          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center">
              <img
                src={Globe}
                className="max-w-full h-auto"
                alt="Global presence map"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
