import React from "react";
import ReactDOM from "react-dom/client";
import "../../css/embla.css";
import EmblaCarousel from "../../js/EmblaCarousel.jsx";
import Info from "../Info/Info.jsx";

const OPTIONS = { align: "start" };
const SLIDES = [
  { content: <b>Slide 1 Content</b> },
  { content: <b>Slide 2 Content</b> },
  { content: <b>Slide 3 Content</b> },
  { content: <b>Slide 4 Content</b> },
  { content: <b>Slide 5 Content</b> },
  { content: <b>Slide 6 Content</b> },
];

const Home = () => {
  return (
    <>
      <div className="bg-custom-gradient min-h-[400vh] flex flex-col justify-between">
        <div className=" h-screen container m-auto flex-grow">
          <div className="flex justify-start w-full relative">
            <div className="flex flex-col p-3 w-1/2 h-full">
              <div className="mt-20 font-playfair -space-y-11 justify-center text-center">
                <p className="text-[80px] font-bold text-[#2C1B16]">
                  All Jharkhand
                </p>
                <p className="text-[150px] font-extrabold text-[#2C1B16]">
                  CHESS{" "}
                </p>
                <p className="text-[80px] font-bold text-[#2C1B16]">
                  Association
                </p>
              </div>
              <div className="text-center">
                <p className="text-[15px] font-bold text-[#815b4f]">
                  Jharkhand Society Regn. No. 282 / 2013-14
                </p>
                <p className="text-[15px] font-bold text-[#815b4f]">
                  An Affiliated to AICF & Recognised by Jharkhand Olympic
                  Association
                </p>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#2C1B16] text-white p-3 w-60 rounded-2xl gap-1 font-bold flex justify-center  transform transition-transform duration-300 hover:scale-110 text-lg mt-6">
                  Chess Festival-2024{" "}
                  <img
                    className="h-[30px]"
                    src="./props/chesspion.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
            <div className="right-28 absolute mt-24 flex items-center">
              <img
                className="flex justify-center items-center h-[450px]"
                src="./props/board.png"
                alt=""
              />
            </div>
          </div>

          <div className=" right-5 top-[530px] ">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
          <div className="mt-[50px]">
            <Info />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
