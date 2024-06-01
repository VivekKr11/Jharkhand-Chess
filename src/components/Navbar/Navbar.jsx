import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full container m-auto">
        <div className="p-2">
          <img className="w-[80px]" src="./logo/logo.jpg" alt="" />
        </div>
        <ul className="flex justify-start gap-9 w-full  font-semibold text-[23px] text-center items-center ">
          <li className="cursor-pointer ">About Us</li>
          <li className="cursor-pointer">Players</li>
          <li className="cursor-pointer">Calendar</li>
          <li className="cursor-pointer">Information</li>
          <li className="cursor-pointer">Affilliates</li>
          <li className="cursor-pointer">Archives</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
