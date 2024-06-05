import React from "react";

const Navbar = () => {
  return (
    <>
        <nav className="bg-transparent absolute top-0 w-full z-10 container left-0 right-0 m-auto ">
            <div className="flex justify-between p-5">
                <div className="flex items-center justify-start gap-5">
                    <div className="">
                        <a href="#" className="text-white font-bold text-xl"><img className="h-[50px]" src="./logo/logo.png" alt="" /></a>
                    </div>
                    
                        <div className="flex justify-start gap-10">
                            <a href="#" className="text-[#2C1B16] font-bold text-lg">About Us</a>
                            <a href="#" className="text-[#2C1B16] font-bold text-lg">Players</a>
                            <a href="#" className="text-[#2C1B16] font-bold text-lg">Calendars</a>
                            <a href="#" className="text-[#2C1B16] font-bold text-lg">Info</a>
                        </div>
                </div>
                <div className="flex items-center">
                  <button className="bg-[#E1DBD8] p-3 rounded-2xl shadow-lg font-bold cursor-pointer text-[#2C1B16] hover:text-[#E1DBD8] hover:bg-[#2C1B16] ">Registration for CHESS FESTIVAL-2024</button>
                </div>
            </div>
        </nav>
    </>
  );
};

export default Navbar;
