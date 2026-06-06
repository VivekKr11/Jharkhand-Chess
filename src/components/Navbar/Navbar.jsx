import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubSubmenu, setActiveSubSubmenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null);
    setActiveSubSubmenu(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setActiveSubSubmenu(null);
  };

  const toggleSubSubmenu = (subSub) => {
    setActiveSubSubmenu(activeSubSubmenu === subSub ? null : subSub);
  };

  const desktopDropdownItems = [
    {
      title: "Players",
      items: [
        {
          text: "AJCA Player Registration (2026–27)",
          target: "_blank",
          link: "https://jharkhandchess.in/playerregistration.aspx",
        },
        {
          text: "Players List (2026–27)",
          target: "_blank",
          link: "https://jharkhandchess.in/playerlist.aspx",
        },
        {
          text: "Payment for T-shirt (For National)",
          target: "_blank",
          link: "https://jharkhandchess.in/ajcatshirt.aspx",
        },
        {
          text: "Other Payment",
          link: "#",
        },
      ],
    },
    {
      title: "Calendar",
      items: [
        { text: "AJCA 2026", link: "/eventcalendar2026" },
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
        { text: "Certificates", link: "/certificates" },
      ],
    },
    {
      title: "Tournament Entry",
      isMultiTournament: true,
      tournaments: [
        {
          title: "Under 19 Chess Championship 2026",
          items: [
            {
              text: "Brochure",
              target: "_blank",
              link: "https://jharkhandchess.in/pdf/25-JHARKHAND-STATE-JUNIOR-CHESS-CHAMPIONSHIP-2026.pdf",
            },
            {
              text: "Registration",
              target: "_blank",
              link: "https://jharkhandchess.in/registrationu19.aspx",
            },
            {
              text: "Players List",
              target: "_blank",
              link: "https://jharkhandchess.in/registrationu19list.aspx",
            },
          ],
        },
        {
          title: "39th National Under-9 Open & Girls Chess Championship 2026",
          items: [
            {
              text: "Brochure",
              target: "_blank",
              link: "https://jharkhandchess.in/pdf/National%20Under%209%20(open%20&%20girls).pdf",
            },
            {
              text: "Payment for Accommodation, Boarding & Pick-Drop",
              target: "_blank",
              link: "https://jharkhandchess.in/nrb/",
            },
          ],
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
          <div className="hidden md:flex justify-start gap-10 items-center">
            {desktopDropdownItems.map((dropdown) => (
              <div key={dropdown.title} className="relative group">
                <button className="text-[#2C1B16] font-bold text-lg hover:text-[#E1DBD8] transition-colors flex items-center gap-1">
                  {dropdown.title}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 group-hover:rotate-180 ${
                      activeDropdown === dropdown.title ? "rotate-180" : ""
                    }`}
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

                {/* Main Dropdown Panel (min-w-[280px]) */}
                <div className="absolute hidden group-hover:block top-full left-0 bg-[#E1DBD8] min-w-[330px] rounded-xl shadow-lg py-3 space-y-2 transition-all duration-300 origin-top transform opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2">
                  
                  {!dropdown.isMultiTournament ? (
                    dropdown.items.map((item) =>
                      item?.target === "_blank" ? (
                        <a
                          key={item.text}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 text-[#2C1B16] hover:bg-[#2C1B16] hover:text-[#E1DBD8] transition-colors duration-150"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <Link
                          key={item.text}
                          to={item.link}
                          className="block px-4 py-2 text-[#2C1B16] hover:bg-[#2C1B16] hover:text-[#E1DBD8] transition-colors duration-150"
                        >
                          {item.text}
                        </Link>
                      )
                    )
                  ) : (
                  
                    dropdown.tournaments.map((tournament) => (
                      <div key={tournament.title} className="relative group/sub">
                        <button className="w-full flex justify-between items-center px-4 py-2 text-[#2C1B16] hover:bg-[#2C1B16] hover:text-[#E1DBD8] transition-colors duration-150 font-semibold text-left leading-tight">
                          <span className="pr-2">{tournament.title}</span>
                          <svg
                            className="w-4 h-4 transform group-hover/sub:translate-x-1 transition-transform ml-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>

                        
                        <div className="absolute hidden group-hover/sub:block left-full top-0 pl-1 origin-left">
                          <div className="bg-[#E1DBD8] w-[260px] rounded-xl shadow-lg py-2 space-y-1">
                            {tournament.items.map((subItem) => (
                              <a
                                key={subItem.text}
                                href={subItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block px-4 py-2 text-[#2C1B16] hover:bg-[#2C1B16] hover:text-[#E1DBD8] transition-colors duration-150 text-sm font-medium whitespace-normal leading-snug"
                              >
                                {subItem.text}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}

            {/* AJCA T-shirt standalone link */}
            <a
              href="https://jharkhandchess.in/ajcatshirt.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2C1B16] font-bold text-lg hover:text-[#E1DBD8] transition-colors"
            >
              AJCA T-shirt Order
            </a>
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
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === dropdown.title ? "rotate-180" : ""
                  }`}
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
                  
                  {!dropdown.isMultiTournament ? (
                    dropdown.items.map((item) =>
                      item?.target === "_blank" ? (
                        <a
                          key={item.text}
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-[#2C1B16] text-lg py-1.5 hover:pl-2 transition-all duration-200"
                        >
                          {item.text}
                        </a>
                      ) : (
                        <Link
                          key={item.text}
                          to={item.link}
                          className="block text-[#2C1B16] text-lg py-1.5 hover:pl-2 transition-all duration-200"
                        >
                          {item.text}
                        </Link>
                      )
                    )
                  ) : (
                    /* Mobile Tournaments Loop */
                    dropdown.tournaments.map((tournament) => (
                      <div key={tournament.title} className="py-1">
                        <button
                          onClick={() => toggleSubSubmenu(tournament.title)}
                          className="w-full text-left text-[#2C1B16] font-semibold text-base py-1.5 flex justify-between items-center opacity-90"
                        >
                          <span className="pr-2">{tournament.title}</span>
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 flex-shrink-0 ${
                              activeSubSubmenu === tournament.title ? "rotate-180" : ""
                            }`}
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
                        
                        {activeSubSubmenu === tournament.title && (
                          <div className="ml-3 mt-1 space-y-2 border-l border-dashed border-[#2C1B16] pl-3">
                            {tournament.items.map((subItem) => (
                              <a
                                key={subItem.text}
                                href={subItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block text-[#2C1B16] text-sm py-1 hover:pl-1 transition-all duration-200"
                              >
                                {subItem.text}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))
                  )}
                </div>
              )}
            </div>
          ))}

          {/* AJCA T-shirt standalone link for mobile */}
          <div className="mb-4">
            <a
              href="https://jharkhandchess.in/ajcatshirt.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left text-[#2C1B16] font-bold text-lg py-2 flex justify-between items-center hover:pl-2 transition-all duration-200"
            >
              AJCA T-shirt Order
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <button className="w-full mt-4 bg-[#2C1B16] p-3 rounded-2xl shadow-lg font-bold cursor-pointer text-[#E1DBD8] hover:bg-[#3a2a24] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;