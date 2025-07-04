import React from "react";
import { useState, useEffect } from "react";

// Mock images for demonstration
const mockImage1 =
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=800&fit=crop";
const mockImage2 =
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop";
const mockImage3 =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop";
const mockImage4 =
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop";
const mockImage5 =
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop";

const workflows = [
  {
    title: "Shaping the Future of Business",
    description:
      "Empowering organizations to thrive in a digital-first world with our advanced technology",
    image: mockImage1,
  },
  {
    title: "Innovative Solutions for Tomorrow",
    description:
      "Delivering cutting-edge technology solutions that transform how businesses operate",
    image: mockImage2,
  },
  {
    title: "Digital Transformation Excellence",
    description:
      "Leading the way in digital innovation with scalable and sustainable business solutions",
    image: mockImage3,
  },
  {
    title: "Strategic Technology Partnership",
    description:
      "Building lasting partnerships through innovative technology solutions that drive success",
    image: mockImage4,
  },
  {
    title: "Modern Workspace Solutions",
    description:
      "Creating collaborative environments that enhance productivity and foster innovation",
    image: mockImage5,
  },
];

const Workflow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workflows.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  console.log(
    "Current slide:",
    currentSlide,
    "Total workflows:",
    workflows.length
  );

  return (
    <section className="relative w-full overflow-hidden">
      {/* Slider Container */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {workflows.map((item, index) => (
            <div
              key={index}
              className="min-w-full h-full relative flex items-center justify-start"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Text Content */}
              <div className="relative z-10 px-6 md:px-12 lg:px-20 text-white max-w-4xl">
                <h2 className="py-4 md:py-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-2 opacity-90  bg-gradient-to-r  from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {`Workflow ${index + 1}`}
                </h2>
                <div className="flex ">
                  <div className="bg-purple-400 w-12 h-1 rounded-full z-10" />
                  <div className="bg-purple-500 w-12 h-1 rounded-full -ml-2 z-20" />
                  <div className="bg-purple-600 w-12 h-1 rounded-full -ml-2 z-30" />
                  <div className="bg-purple-700 w-12 h-1 rounded-full -ml-2 z-40" />
                  <div className="bg-purple-800 w-12 h-1 rounded-full -ml-2 z-50" />
                  <div className="bg-purple-950 w-12 h-1 rounded-full -ml-2 z-60" />
                </div>
                <h3 className="py-2 md:py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {workflows.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70"
            }`}
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          />
        ))}
      </div>

      {/* Play/Pause Toggle */}
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 transition-all duration-200"
      >
        {isPlaying ? (
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </section>
  );
};

export default Workflow;
