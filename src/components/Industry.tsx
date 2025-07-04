import React, { useState } from "react";
import {
  PiggyBank,
  Headset,
  BaggageClaim,
  Hospital,
  BookOpenText,
  FolderCode,
  SmartphoneNfc,
  School,
  Landmark,
  Cpu,
  Users,
  Forklift,
  StepForward,
} from "lucide-react";

const items = [
  { title: "Banking", icon: PiggyBank },
  { title: "Consulting", icon: Headset },
  { title: "Ecommerce", icon: BaggageClaim },
  { title: "HealthCare", icon: Hospital },
  { title: "Research and Development", icon: BookOpenText },
  { title: "Software and Platforms", icon: FolderCode },
  { title: "Communication and Media", icon: SmartphoneNfc },
  { title: "Ed-Tech/Education", icon: School },
  { title: "Government & Public Sector", icon: Landmark },
  { title: "High-Tech", icon: Cpu },
  { title: "Recruitment", icon: Users },
  { title: "Transport and Logistics", icon: Forklift },
];

const Industry = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 ">
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold max-w-6xl mx-auto my-8 md:my-16 text-purple-950">
        Pick Your Industry. See Our Result.{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-20 gap-y-6  max-w-6xl mx-auto">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex gap-4 items-center justify-start p-4 group">
                <Icon className="w-8 h-8 text-indigo-600 group-hover:text-indigo-700" />
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-medium text-slate-900">
                    {item.title}
                  </span>
                  {hoveredIndex === i && (
                    <StepForward className="w-5 h-5 text-indigo-600 transition duration-200" />
                  )}
                </div>
              </div>
              <hr className="h-0.5 rounded-full bg-gray-200 group-hover:bg-gray-900 transition-all duration-300" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Industry;
