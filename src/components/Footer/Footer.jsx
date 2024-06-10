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
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#2C1B16] sm:mb-0 justify-around">
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
            <div className="flex md:w-1/2 md:justify-around justify-around">
              <img className="h-[45px] md:h-[75px]" src="./logo/footerLogo1.png" alt="" />
              <img className="h-[45px]  md:h-[75px]" src="./logo/footerLogo2.png" alt="" />
              <img className="h-[45px]  md:h-[75px]" src="./logo/footerLogo3.png" alt="" />
              <img className="h-[45px]  md:h-[75px]" src="./logo/footerLogo4.png" alt="" />
              <img className="h-[45px]  md:h-[75px]" src="./logo/footerLogo5.png" alt="" />
            </div>
          </div>
          
        </div>
       
      </footer>
      <div className="w-full bg-[#2C1B16] text-[#E1DBD8] flex justify-center font-semibold md:text-xl p-2 text-center" ><p>© pyxisblu.com. All rights reserved.</p></div>
    </div>
  );
};

export default Footer;

