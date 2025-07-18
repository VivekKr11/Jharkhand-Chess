import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-marquee-slider";
import EmblaCarousel from "../../js/EmblaCarousel.jsx";
import Info from "./Info/Info.jsx";
import ImageGallery from "./ImageGallery.jsx";
import News from "../../pages/Home/News/News.jsx";
import InfiniteMovingCard from "../InfiniteMovingCard.jsx";
import "../../css/embla.css";

const OPTIONS = { align: "start", loop: true };
const SLIDES = [
  {
    number: "100",
    info: "Registered Players",
    img: "./gotis/registered.svg",
  },
  {
    number: "100",
    info: "Tournaments in 2018",
    img: "./gotis/tournaments.svg",
  },
  {
    number: "100",
    info: "International Masters",
    img: "./gotis/international.svg",
  },
  {
    number: "100",
    info: "FIDE Rated Players",
    img: "./gotis/rated.svg",
  },
];
const data = [
  "Aditya Birla Memorial: 23rd Jharkhand State FIDE Rating Chess Championship 2024 to be Held from 20th to 23rd July",
  "23rd Jharkhand State FIDE Rating Chess Championship: Eligibility, Rules, and Prize Details Announced",
  "Register Now for the Jharkhand State FIDE Chess Championship 2024: Key Dates and Entry Requirements",
  "Jharkhand Chess Championship 2024: Prizes, Programme, and Accommodation Details Released",
];

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#BCADA7] via-[#FDD8B7] to-[#BA9C87] flex flex-col justify-between relative min-h-screen">
        <div className="container mx-auto flex-grow">
          <div className="flex flex-col justify-start md:w-full relative">
            <div className="flex flex-col p-3 md:w-1/2 h-full">
              <div className="mt-20 md:mt-28 mb-2 md:mb-10 font-playfair justify-center md:text-left text-center">
                <p className=" text-3xl md:text-[80px] font-bold text-[#2C1B16]">
                  All Jharkhand
                </p>
                <p className="text-[88px] md:text-[150px] font-extrabold text-[#2C1B16]">
                  CHESS{" "}
                </p>
                <p className="text-3xl md:text-[80px] font-bold text-[#2C1B16]">
                  Association
                </p>
              </div>
              <div className="text-center md:text-left mb-2 md:mb-5 ">
                <p className="text-[15px] font-bold text-[#815b4f] tracking-tighter sm:tracking-normal ">
                  Jharkhand Society Regn. No. 282 / 2013-14
                </p>
                <p className="text-[15px] font-bold text-[#815b4f] tracking-tighter sm:tracking-normal ">
                  An Affiliated to AICF & Recognised by Jharkhand Olympic
                  Association
                </p>
              </div>
              <div className="flex justify-center md:justify-start gap-10 py-2">
                <a href="https://jharkhandchess.in/srstate.aspx" target="_blank">
                  <button className="bg-[#2C1B16] text-white md:p-3 p-2 px-2 md:w-60 rounded-md md:rounded-2xl gap-1 md:font-bold flex justify-start transform transition-transform duration-300 hover:scale-110 text-sm md:text-lg  md:mt-6">
                    Chess Festival-2025
                    <img
                      className="h-[20px] md:h-[30px]"
                      src="./props/chesspion.svg"
                      alt=""
                    />
                  </button>
                </a>
                <a
                  href="https://jharkhandchess.in/pdf/24th-Jharkhand-State-FIDE-Rating-Chess-Championship-2025.pdf"
                  target="_blank">
                  <button className="bg-[#2C1B16] text-white md:p-3 p-2 px-2 md:w-fit rounded-md md:rounded-2xl gap-1 md:font-bold flex justify-start transform transition-transform duration-300 hover:scale-110 text-sm md:text-lg  md:mt-6">
                    Brochure
                    <img
                      className="h-[20px] md:h-[30px]"
                      src="./props/chesspion.svg"
                      alt=""
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="md:absolute right-9 -top-16 flex items-center">
              <img
                className="flex justify-center items-center md:h-[1000px]"
                src="./props/board.png"
                alt=""
              />
            </div>
          </div>
          <div className="container flex justify-center  md:justify-end">
            <div className="">
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end h-full z-50 relative">
          <div className="flex">
            <div className="bg-[#2C1B16] text-white text-xs md:text-lg md:py-2 py-1 px-2 whitespace-nowrap">
              Latest News
            </div>
            <div
              id="Headline-div"
              className="overflow-x-hidden custom-gradient py-0 md:py-2 flex-1">
              <Marquee className="py-2" pauseOnHover={true} speed={100}>
                {data.map((item, index) => (
                  <span
                    key={index}
                    className="md:text-lg text-xs mx-6 text-yellow-900 font-bold inline-block ml-5">
                    <img
                      src="/star.svg"
                      alt="Star"
                      className="inline-block md:w-6 md:h-6 w-4 h-4 mr-2"
                    />
                    {item}
                  </span>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[20px] md:mt-[50px] container mx-auto">
        <Info />
      </div>

      <News />
      <div>
        <ImageGallery />
      </div>
      {/* moving card */}
      <div>
        <InfiniteMovingCard />
      </div>
    </>
  );
};

export default Home;
