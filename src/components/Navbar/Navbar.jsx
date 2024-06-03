import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex w-full container m-auto">
        <div className="">
          <img className="w-[80px]" src="./logo/logo.jpg" alt="" />
        </div>
        <ul className="flex justify-start gap-11 w-full p-2  font-semibold text-[23px] text-center items-center ">
          <li className="cursor-pointer flex ">About Us <img className="w-[30px]" src="./props/arrowdown.svg" alt="" /></li>
          <li className="cursor-pointer flex  ">Players  <img className="w-[30px]" src="./props/arrowdown.svg" alt="" /></li>
          <li className="cursor-pointer flex">Calendar  <img className="w-[30px]" src="./props/arrowdown.svg" alt="" /></li>
          <li className="cursor-pointer flex">Information  <img className="w-[30px]" src="./props/arrowdown.svg" alt="" /></li>
          <li className="cursor-pointer flex">Affilliates  </li>
          <li className="cursor-pointer flex">Archives  <img className="w-[30px]" src="./props/arrowdown.svg" alt="" /></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
