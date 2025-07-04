import  { useState } from "react";
import { ChevronDown, SquareMenu, X } from "lucide-react";
import { Link } from "react-router-dom";
const menu = [
  { title: "Home" , link:"/"},
  {
    title: "Services",
    dropdown: [
      "Artificial Intelligence",
      "Cloud",
      "Consulting",
      "Cybersecurity",
      "Cognitive Business Operations",
      "Data And Analytics",
      "Enterprise Solutions",
      "Network Solutions And Services",
    ],
  },
  { title: "About Us" },
  { title: "Career", link: "/Career" },
  {
    title: "Industries",
    dropdown: [
      "E-commerce",
      "Transportation And Logistics",
      "Research And Development",
      "HealthCare",
      "Consulting",
      "Software And Platforms",
      "Ed-tech/Education",
      "Government And Public Services",
      "Recruitment",
      "Communications And Media",
      "High Tech",
      "Banking",
    ],
  },
  { title: "Contact" },
];

const Navbar = () => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDropdownToggle = (index) => {
    setOpenDropdownIndex((prev) => (prev === index ? null : index));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdownIndex(null); // Close any open dropdowns when toggling mobile menu
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdownIndex(null);
  };

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 backdrop-blur-lg border-b border-white/10">
      <div className="flex justify-between items-center px-8 py-6 text-white max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className=" font-bold text-3xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent ">
            Wyreflow
          </h1>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {menu.map((item, i) => (
              <li key={i} className="relative group">
                <div
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-lg cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  onClick={() => item.dropdown && handleDropdownToggle(i)}
                >
                  <span key={i} className="relative group">
                    {item.link ? (
                      <Link
                        to={item.link}
                        onClick={closeMobileMenu}
                        className="relative"
                      >
                        {item.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                    ) : (
                      <>
                        {item.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                      </>
                    )}
                  </span>
                  {item.dropdown && (
                    <div
                      className={`transition-transform duration-300 ${
                        openDropdownIndex === i ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={18} className="text-blue-300" />
                    </div>
                  )}
                </div>

                {/* Desktop Dropdown Menu */}
                {item.dropdown && openDropdownIndex === i && (
                  <div className=" border-1 border-slate-600 rounded-xl absolute top-20 left-1/5 transform -translate-x-1/2 mt-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                    <div className=" bg-slate-950/95 backdrop-blur-5xl rounded-2xl shadow-2xl border border-white/10 p-6 min-w-[650px]">
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 items-center">
                        {item.dropdown.map((subItem, idx) => (
                          <div
                            key={idx}
                            className="  group/item px-4 py-2 cursor-pointer transition-all duration-300"
                          >
                            <span className="font-medium text-lg text-gray-200 group-hover/item:text-white transition-colors duration-300">
                              {subItem}
                            </span>
                            <hr className="invisible group-hover/item:visible bg-white mt-2 transition-all duration-300" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <X
              size={24}
              className="text-white hover:text-blue-300 transition-colors duration-300"
            />
          ) : (
            <SquareMenu
              size={24}
              className="text-white hover:text-blue-300 transition-colors duration-300"
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-950 backdrop-blur-xl border-b border-white/10 z-50 lg:hidden animate-in fade-in-0 slide-in-from-top-2 duration-200">
          <nav className="px-8 py-6">
            <ul className="space-y-4">
              {menu.map((item, i) => (
                <li
                  key={i}
                  className="border-b border-white/10 last:border-b-0 pb-4 last:pb-0"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() =>
                      item.dropdown
                        ? handleDropdownToggle(i)
                        : closeMobileMenu()
                    }
                  >
                    <span
                      className={`${
                        openDropdownIndex === i ? "text-blue-300" : "text-white"
                      } font-medium text-lg group-hover:text-blue-300 transition-colors duration-300`}
                    >
                      {item.title}
                    </span>
                    {item.dropdown && (
                      <div
                        className={`transition-transform duration-300 ${
                          openDropdownIndex === i ? "rotate-180" : ""
                        }`}
                      >
                        <ChevronDown size={18} className="text-blue-300" />
                      </div>
                    )}
                  </div>

                  {/* Mobile Dropdown Items */}
                  {item.dropdown && openDropdownIndex === i && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in-0 slide-in-from-top-2 duration-200">
                      {item.dropdown.map((subItem, idx) => (
                        <div
                          key={idx}
                          className="group/item px-4 py-2 rounded-xl cursor-pointer transition-all duration-300"
                        >
                          <span className="font-base text-gray-200 group-hover/item:text-white transition-colors duration-300">
                            {subItem}
                          </span>
                          <hr className="invisible group-hover/item:visible bg-white mt-2 transition-all duration-300" />
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
