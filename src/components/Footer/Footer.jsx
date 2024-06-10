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
          <div className="flex justify-center">
            <div className="flex w-1/2 justify-around">
              <img src="./logo/footerLogo1.png" alt="" />
              <img src="./logo/footerLogo2.png" alt="" />
              <img src="./logo/footerLogo3.png" alt="" />
              <img src="./logo/footerLogo4.png" alt="" />
              <img src="./logo/footerLogo5.png" alt="" />
            </div>
          </div>
          
        </div>
       
      </footer>
      <div className="w-full bg-[#2C1B16] text-[#E1DBD8] flex justify-center font-semibold text-xl p-2" ><p>© pyxisblu.com. All rights reserved.</p></div>
    </div>
  );
};

export default Footer;

