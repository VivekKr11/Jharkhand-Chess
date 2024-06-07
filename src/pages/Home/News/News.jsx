import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function News() {
  return (
    <>
      <div className="flex items-center gap-4 flex-row m-auto w-full justify-center mt-20 ">
        <img src="/logo/horse.png" className=" w-20 h-20" alt="First Slide" />
        <h1 className="font-cinzel font-bold flex justify-center text-[60px] text-[#2C1B16]  text-center leading-[60px] ">
          FEATURED EVENTS
        </h1>
        <img
          src="/logo/horse.png"
          className="scale-x-[-1]  w-20 h-20"
          alt="First Slide"
        />
      </div>
      <div className="container m-auto py-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="max-w-sm bg-[#F8F4E1] h-[460px] flex items-center justify-between flex-col border m-4 rounded-lg shadow-xl "
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            >
              <a href="#">
                <img
                  className="rounded-t-lg w-full "
                  src="/News/1.jpg"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-[#2C1B16]">
                    State Open Champion for 2018, Ranchi
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-[#2C1B16] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  luctus lacinia leo et iaculis. Fusce.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2C1B16] rounded-lg hover:bg-[#2C1B16] focus:ring-4 focus:outline-none focus:ring-gray-300  "
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="max-w-sm bg-[#F8F4E1] h-[460px] flex items-center justify-between flex-col border m-4 rounded-lg shadow-xl "
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            >
              <a href="#">
                <img className="rounded-t-lg w-full" src="/News/2.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-[#2C1B16]">
                    The champions of 32nd National under-9 : Sneha Halder and
                    Ilamparthi A R,Ranchi
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-[#2C1B16] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  luctus lacinia leo et iaculis. Fusce.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2C1B16] rounded-lg hover:bg-[#2C1B16] focus:ring-4 focus:outline-none focus:ring-gray-300 "
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="max-w-sm bg-[#F8F4E1] h-[460px] flex items-center justify-between flex-col border m-4 rounded-lg shadow-xl "
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            >
              <a href="#">
                <img className="rounded-t-lg w-full" src="/News/3.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-[#2C1B16]">
                    Arpan Das wins 2nd Dalmia Cements All India Open FIDE Rating
                    Chess Tournament 2018
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-[#2C1B16] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  luctus lacinia leo et iaculis. Fusce.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2C1B16] rounded-lg hover:bg-[#2C1B16] focus:ring-4 focus:outline-none focus:ring-gray-300 "
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="max-w-sm bg-[#F8F4E1] h-[460px] flex items-center justify-between flex-col border m-4 rounded-lg shadow-xl "
              style={{
                boxShadow:
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
              }}
            >
              <a href="#">
                <img className="rounded-t-lg w-full" src="/News/4.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-[#2C1B16]">
                    3rd Jharkhand State Blitz Chess Championship 2023
                  </h5>
                </a>
                <p className="mb-3 text-sm font-normal text-[#2C1B16] ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  luctus lacinia leo et iaculis. Fusce.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2C1B16] rounded-lg hover:bg-[#2C1B16] focus:ring-4 focus:outline-none focus:ring-gray-300 "
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
