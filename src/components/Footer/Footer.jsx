import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#F8F4E1]">
      <footer className="container m-auto">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="./logo/logo.png"
                className="h-[50px] w-[50px]"
                alt="AJCA Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#2C1B16]">
                AJCA
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#2C1B16] sm:mb-0 justify-around">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="https://jharkhandchess.in/playerlist.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline me-4 md:me-6"
                >
                  Players
                </a>
              </li>
              <li>
                <Link to="/eventcalendar2026" className="hover:underline me-4 md:me-6">
                  Event & Calendar
                </Link>
              </li>
              <li>
                <Link to="/privacyPolicy" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/termsAndCondition" className="hover:underline me-4 md:me-6">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-[#2C1B16] sm:mx-auto lg:my-8" />
          <div className="flex justify-center">
            <div className="flex md:w-1/2 md:justify-around justify-around">
              <img className="h-[45px] md:h-[75px]" src="./logo/footerLogo1.png" alt="" />
              <img className="h-[45px] md:h-[75px]" src="./logo/footerLogo2.png" alt="" />
              <img className="h-[45px] md:h-[75px]" src="./logo/footerLogo3.png" alt="" />
              <img className="h-[45px] md:h-[75px]" src="./logo/footerLogo4.png" alt="" />
              <img className="h-[45px] md:h-[75px]" src="./logo/footerLogo5.png" alt="" />
            </div>
          </div>
        </div>
      </footer>
      <div className="w-full bg-[#2C1B16] text-[#E1DBD8] flex justify-center font-semibold text-[14px] p-2 text-center">
        <p>© Copyright 2024 PyxisBlu. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
