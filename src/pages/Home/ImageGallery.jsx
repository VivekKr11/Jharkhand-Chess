import React, { useEffect } from "react";

const ImageGallery = () => {
  useEffect(() => {
    const items = document.querySelectorAll("[data-carousel-item]");
    let activeIndex = 0;

    const showItem = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle("hidden", i !== index);
        item.classList.toggle("block", i === index);
      });
    };

    showItem(activeIndex);

    const prevButton = document.querySelector("[data-carousel-prev]");
    const nextButton = document.querySelector("[data-carousel-next]");

    prevButton.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + items.length) % items.length;
      showItem(activeIndex);
    });

    nextButton.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % items.length;
      showItem(activeIndex);
    });
  }, []);

  return (
    <div className="bg-[] mt-16 container m-auto">
      <div className="flex items-center gap-4 flex-row m-auto w-full justify-center">
        <img src="/logo/horse.png" className=" w-20 h-20" alt="First Slide" />
        <h1 className="font-cinzel font-bold flex justify-center text-[60px] text-[#2C1B16]  text-center leading-[60px] ">
          Image Gallery
        </h1>
        <img
          src="/logo/horse.png"
          className="scale-x-[-1]  w-20 h-20"
          alt="First Slide"
        />
      </div>
      <div
        id="gallery"
        className="relative w-full flex justify-center mt-4"
        data-carousel="slide"
      >
        <div className="relative h-[600px] overflow-hidden rounded-lg w-4/5 ">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/props/first.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="First Slide"
            />
          </div>
          <div
            className="hidden duration-700 ease-in-out"
            data-carousel-item="active"
          >
            <img
              src="/props/second.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Second Slide"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/props/third.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Third Slide"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/props/fourth.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Fourth Slide"
            />
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/props/five.jpg"
              className="absolute inset-0 w-full h-full object-cover"
              alt="Fifth Slide"
            />
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
