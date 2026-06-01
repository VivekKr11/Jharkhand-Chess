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
          {/* Hero: two-column on desktop, single column on mobile */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full relative">
            
            {/* Left: Text + Buttons */}
            <div className="flex flex-col p-3 w-full md:w-[48%] lg:w-[45%] h-full  mt-5">
              <div className="mt-20 md:mt-28 mb-2 md:mb-6 font-playfair justify-center md:text-left text-center">
                <p className="text-3xl md:text-[56px] lg:text-[72px] xl:text-[80px] font-bold text-[#2C1B16] leading-tight">
                  All Jharkhand
                </p>
                <p className="text-[88px] md:text-[100px] lg:text-[130px] xl:text-[150px] font-extrabold text-[#2C1B16] leading-none">
                  CHESS
                </p>
                <p className="text-3xl md:text-[56px] lg:text-[72px] xl:text-[80px] font-bold text-[#2C1B16] leading-tight">
                  Association
                </p>
              </div>

              <div className="text-center md:text-left mb-3 md:mb-5">
                <p className="text-[13px] md:text-[14px] font-bold text-[#815b4f] tracking-tighter sm:tracking-normal">
                  Jharkhand Society Regn. No. 282 / 2013-14
                </p>
                <p className="text-[13px] md:text-[14px] font-bold text-[#815b4f] tracking-tighter sm:tracking-normal">
                  An Affiliated to AICF & Recognised by Jharkhand Olympic Association
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-row flex-wrap justify-center md:justify-start items-center gap-3 py-2">
                {/* Championship Button */}
                <a href="https://jharkhandchess.in/nrb/" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#2C1B16] text-white px-3 py-2 md:px-4 md:py-3 rounded-lg md:rounded-2xl font-bold flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105 text-xs md:text-sm min-h-[48px] md:min-h-[64px] w-[225px] md:w-[270px]">
                    <span className="flex-1 text-center leading-snug">
                      National Under-9 Open & Girls Chess Championship 2026
                    </span>
                    <img className="h-[15px] md:h-[20px] shrink-0" src="./props/chesspion.svg" alt="" />
                  </button>
                </a>

                {/* Brochure Button */}
                <a href="https://jharkhandchess.in/pdf/National%20Under%209%20(open%20&%20girls).pdf" target="_blank" rel="noopener noreferrer">
                  <button className="bg-[#2C1B16] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-2xl font-bold flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105 text-xs md:text-sm min-h-[48px] md:min-h-[64px] whitespace-nowrap">
                    <span>Brochure</span>
                    <img className="h-[15px] md:h-[20px] shrink-0" src="./props/chesspion.svg" alt="" />
                  </button>
                </a>
              </div>
            </div>

            {/* Right: Chess board image */}
            <div className="hidden md:flex md:w-[52%] lg:w-[55%] items-center justify-end -mt-16">
              <img
                className="w-full max-w-[600px] lg:max-w-[750px] xl:max-w-[900px]"
                src="./props/board.png"
                alt="Chess Board"
              />
            </div>

            {/* Mobile: show board below text */}
            <div className="flex md:hidden justify-center mt-4">
              <img
                className="w-full max-w-[420px]"
                src="./props/board.png"
                alt="Chess Board"
              />
            </div>
          </div>

          <div className="container flex justify-center md:justify-end">
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
              className="overflow-x-hidden custom-gradient py-0 md:py-2 flex-1"
            >
              <Marquee className="py-2" pauseOnHover={true} speed={100}>
                {data.map((item, index) => (
                  <span
                    key={index}
                    className="md:text-lg text-xs mx-6 text-yellow-900 font-bold inline-block ml-5"
                  >
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
      <div>
        <InfiniteMovingCard />
      </div>
    </>
  );
};

export default Home;