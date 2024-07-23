import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-transparent absolute top-0 w-full z-10 container left-0 right-0 m-auto p-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-start gap-5">
            <a href="#" className="text-white font-bold text-xl">
              <img className="h-[50px]" src="./logo/logo.png" alt="" />
            </a>
            <div className="hidden md:flex justify-start gap-10">
              <Link to="/" className="text-[#2C1B16] font-bold text-lg">About Us</Link>
              <Link to="/playerlist" className="text-[#2C1B16] font-bold text-lg">Players</Link>
              <Link to="/" className="text-[#2C1B16] font-bold text-lg">Calendars</Link>
              <Link to="/" className="text-[#2C1B16] font-bold text-lg">Events</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <button className="bg-[#E1DBD8] p-3 rounded-xl shadow-lg font-bold cursor-pointer text-[#2C1B16] hover:text-[#E1DBD8] hover:bg-[#2C1B16] text-lg">
             Contact Us
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-[#2C1B16] focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4  p-10 rounded-lg glass">
            <a href="#" className="block text-[#2C1B16] font-bold text-lg mb-2">About Us</a>
            <a href="#" className="block text-[#2C1B16] font-bold text-lg mb-2">Players</a>
            <a href="#" className="block text-[#2C1B16] font-bold text-lg mb-2">Calendars</a>
            <a href="#" className="block text-[#2C1B16] font-bold text-lg mb-2">Info</a>
            <button className="w-full mt-4 bg-[#2C1B16] p-3 rounded-2xl shadow-lg font-bold cursor-pointer text-[#E1DBD8] hover:text-[#E1DBD8] hover:bg-[#2C1B16]">
              Registration for CHESS FESTIVAL-2024
            </button>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
