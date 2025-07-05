import React, { useState, useCallback, useMemo, useRef, useEffect } from "react";
import Cloud_Solution from "../assets/cloud_solution.jpg";
import Ai from "../assets/Ai.jpg";
import Cybersecurity from "../assets/Cybersecurity.avif";
import Data_Analyst from "../assets/Data_Analyst.avif";
// import Cloud from "../assets/cloud.mov";
// import Ai_video from "../assets/ai.mp4";
// import Cyber from "../assets/cyber.mp4";
// import DataAnalyst from "../assets/Data_Analyst.mp4";

// Memoized card data to prevent recreation on each render
const cardData: CardItem[] = [
  {
    id: 'cloud-solution',
    title: "Cloud Solution",
    description:
      "Driving progress with tailored technology solutions for a dynamic marketplace",
    image: Cloud_Solution,
    video: "",
  },
  {
    id: 'ai-automation',
    title: "AI & Automation",
    description:
      "Transforming businesses through smart decision-making and intelligent automation",
    image: Ai,
    video: "",
  },
  {
    id: 'cybersecurity',
    title: "Cybersecurity",
    description:
      "Safeguarding digital infrastructure with proactive and resilient security strategies",
    image: Cybersecurity,
    video: "",
  },
  {
    id: 'data-analytics',
    title: "Data Analytics",
    description:
      "Turning raw data into actionable insights for strategic growth",
    image: Data_Analyst,
    video: "",
  },
];

const CardSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Memoized event handlers to prevent unnecessary re-renders
  const handleMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredIndex(null);
  }, []);

  // Memoize the cards to prevent unnecessary re-renders
  const renderedCards = useMemo(() => 
    cardData.map((item, index) => (
      <Card
        key={item.id}
        item={item}
        index={index}
        isHovered={hoveredIndex === index}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
    )), [hoveredIndex, handleMouseEnter, handleMouseLeave]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6 lg:p-8">
      {renderedCards}
    </div>
  );
};

// Define proper TypeScript interfaces
interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  video: string;
}

interface CardProps {
  item: CardItem;
  index: number;
  isHovered: boolean;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

// Extracted Card component for better performance and readability
const Card = React.memo<CardProps>(({ item, index, isHovered, onMouseEnter, onMouseLeave }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = useCallback(() => {
    onMouseEnter(index);
  }, [index, onMouseEnter]);

  // Handle video play/pause based on hover state
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered) {
      video.currentTime = 0; // Reset to start
      video.play().catch(console.error);
    } else {
      video.pause();
    }
  }, [isHovered]);

  return (
    <div
      className="group relative min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] w-full overflow-hidden shadow-xl cursor-pointer border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:z-10 rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Image with improved loading */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700 transform group-hover:scale-110"
        style={{ 
          backgroundImage: `url(${item.image})`,
          filter: isHovered ? 'blur(1px)' : 'none'
        }}
      />

      {/* Optimized Video Element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 transform ${
          isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={item.video} type="video/mp4" />
      </video>

      {/* Enhanced Gradient Overlay */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isHovered 
          ? 'bg-gradient-to-t from-black/60 via-black/30 to-black/20' 
          : 'bg-gradient-to-t from-black/40 via-black/20 to-transparent'
      }`} />

      {/* Animated Border on Hover */}
      <div className={`absolute inset-0 border-2 transition-all duration-300 ${
        isHovered 
          ? 'border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.3)]' 
          : 'border-transparent'
      }`} />

      {/* Content Container */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center p-6 md:p-8 lg:p-10">
        {/* Title with Enhanced Typography */}
        <h1 className={`text-white font-bold drop-shadow-2xl transition-all duration-500 mb-4 ${
          isHovered 
            ? 'text-3xl md:text-4xl lg:text-5xl transform -translate-y-2' 
            : 'text-2xl md:text-3xl lg:text-4xl transform translate-y-0'
        }`}>
          {item.title}
        </h1>

        {/* Animated Divider */}
        <div className={`transition-all duration-500 overflow-hidden mb-6 ${
          isHovered ? 'max-h-4 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <hr className="w-16 md:w-20 lg:w-24 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent border-none shadow-lg" />
        </div>

        {/* Description with Smooth Animation */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isHovered ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-white text-sm md:text-base lg:text-lg px-4 md:px-6 py-3 md:py-4 bg-black/30 rounded-xl max-w-sm md:max-w-md lg:max-w-lg backdrop-blur-sm border border-white/20 shadow-2xl transform transition-all duration-300">
            {item.description}
          </p>
        </div>
      </div>

      {/* Subtle Glow Effect */}
      <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      } bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10`} />
    </div>
  );
});

Card.displayName = 'Card';

export default CardSection;