import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#F8F4E1] ">
      <footer className="container m-auto">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="./logo/logo.png"
                className="h-[50px] w-[50px]"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#2C1B16] ">
                AJCA
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#2C1B16] sm:mb-0 ">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Player
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Calendars
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-[#2C1B16] sm:mx-auto  lg:my-8" />
          <div className="flex justify-between">
          <div className="flex gap-4">
            <img src="./logo/footerLogo1.png" alt="" />
            <img src="./logo/footerLogo2.png" alt="" />
            <img src="./logo/footerLogo3.png" alt="" />
            <img src="./logo/footerLogo4.png" alt="" />
            <img src="./logo/footerLogo5.png" alt="" />
          </div>
          <div className="flex justify-end">
            <div className="flex flex-row justify-end items-center ">
              <img
                src="https://www.pyxisblu.com/images/logo/PyxisNameLogo1.svg"
                className="h-20"
                alt="PyxisBlu Logo"
              />
              <span className="block text-sm text-[#2C1B16] sm:text-center ">
                <a href="https://flowbite.com/" className="hover:underline"></a>
                © pyxisblu.com. All rights reserved.
              </span>
            </div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
