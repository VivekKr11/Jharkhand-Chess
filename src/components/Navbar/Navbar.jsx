import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const desktopDropdownItems = [
    {
      title: "Players",
      items: [
        { text: "AJCA Player Registration (2025–26)", link: "#" },
        { text: "Players List (2025–26)", link: "#" },
        { text: "Payment for T-shirt (For National)", link: "#" },
        { text: "Other Payment", link: "#" },
      ],
    },
    {
      title: "Calendar",
      items: [
        { text: "AJCA 2025", link: "#" },
        { text: "AJCA 2024", link: "#" },
        { text: "AJCA 2023", link: "#" },
      ],
    },
    {
      title: "Information",
      items: [
        { text: "AJCA Office Bearers", link: "#" },
        { text: "Affiliated Units", link: "#" },
        { text: "Committees", link: "#" },
        { text: "Arbiters", link: "#" },
        { text: "Coaches", link: "#" },
        { text: "Download", link: "#" },
      ],
    },
    {
      title: "Tournament Entry",
      items: [
        {
          text: "Brochure",
          link: "https://jharkhandchess.in/pdf/24th-Jharkhand-State-FIDE-Rating-Chess-Championship-2025.pdf",
        },
        {
          text: "Registration for State Championship",
          link: "https://jharkhandchess.in/srstate.aspx",
        },
        {
          text: "Players List",
          link: "https://jharkhandchess.in/RegPlayersFor.aspx",
        },
      ],
    },
  ];

  return (
    <nav className="bg-transparent absolute top-0 w-full z-10 container left-0 right-0 m-auto p-5">
      <div className="flex justify-between items-center">
        <div className="flex items-center justify-start gap-5">
          <Link to="/" className="text-white font-bold text-xl">
            <img className="h-[50px]" src="./logo/logo.png" alt="Logo" />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex justify-start gap-10">
            {desktopDropdownItems.map((dropdown) => (
              <div key={dropdown.title} className="relative group">
                <button className="text-[#2C1B16] font-bold text-lg hover:text-[#E1DBD8] transition-colors flex items-center gap-1">
                  {dropdown.title}
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${activeDropdown === dropdown.title ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div className="absolute hidden group-hover:block top-full left-0 bg-[#E1DBD8] min-w-[280px] rounded-xl shadow-lg py-3 space-y-2 transition-all duration-300 origin-top transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.text}
                      to={item.link}
                      className="block px-4 py-2 text-[#2C1B16] hover:bg-[#2C1B16] hover:text-[#E1DBD8] transition-colors duration-150"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            
          </div>
        </div>

        {/* Desktop Contact Button */}
        <div className="hidden md:flex items-center">
          <button className="bg-[#E1DBD8] p-3 rounded-xl shadow-lg font-bold cursor-pointer text-[#2C1B16] hover:text-[#E1DBD8] hover:bg-[#2C1B16] transition-colors duration-300 text-lg">
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-[#2C1B16] focus:outline-none transition-transform duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 p-6 rounded-lg glass bg-white bg-opacity-90 transition-all duration-300 ease-in-out">
          {desktopDropdownItems.map((dropdown) => (
            <div key={dropdown.title} className="mb-4">
              <button
                onClick={() => toggleDropdown(dropdown.title)}
                className="w-full text-left text-[#2C1B16] font-bold text-lg py-2 flex justify-between items-center"
              >
                {dropdown.title}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === dropdown.title ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === dropdown.title && (
                <div className="ml-3 space-y-2 border-l-2 border-[#2C1B16] pl-3 transition-all duration-300 ease-in-out">
                  {dropdown.items.map((item) => (
                    <Link
                      key={item.text}
                      to={item.link}
                      className="block text-[#2C1B16] text-lg py-1.5 hover:pl-2 transition-all duration-200"
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {/* Standalone Tournament Entry in Mobile */}
          <Link
            to="#"
            className="block text-[#2C1B16] font-bold text-lg py-2 hover:pl-2 transition-all duration-200"
          >
            Tournament Entry
          </Link>
          <button className="w-full mt-4 bg-[#2C1B16] p-3 rounded-2xl shadow-lg font-bold cursor-pointer text-[#E1DBD8] hover:bg-[#3a2a24] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;