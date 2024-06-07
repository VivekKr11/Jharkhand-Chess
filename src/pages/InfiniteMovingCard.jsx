import React, { useEffect, useState, useRef } from "react";

const InfiniteMovingCard = () => {
  const testimonials = [
    {
      quote: "Seven share lead; Meghna stuns Kunte",
      clock: "./gotis/clock.svg",
      name: "10 Jan - 24 Feb ",
      title: "dolorum cupiditate",
      img: "./gotis/goti1.svg",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",
      clock: "./gotis/clock.svg",
      name: "10 Jan - 24 Feb",
      title: "dolorum cupiditate",
      img: "./gotis/goti2.svg",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",
      clock: "./gotis/clock.svg",
      name: "10 Jan - 24 Feb ",
      title: "dolorum cupiditate",
      img: "./gotis/goti3.svg",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",
      clock: "./gotis/clock.svg",
      name: "10 Jan - 24 Feb ",
      title: "dolorum cupiditate",
      img: "./gotis/goti4.svg",
    },
    {
      quote: "Seven share lead; Meghna stuns Kunte",
      clock: "./gotis/clock.svg",
      name: "10 Jan - 24 Feb",
      title: "dolorum cupiditate",
      img: "./gotis/goti5.svg",
    },
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-white dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
      <img src="" alt="" />
    </div>
  );
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <>
      <h1 className="font-cinzel font-bold flex justify-center text-[60px] text-[#2C1B16]  text-center leading-[60px] ">
        Announcement
      </h1>
      <div
        ref={containerRef}
        className="mt-5 scroller relative z-20  max-w-7xl overflow-hidden  mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)"
      >
        <ul
          ref={scrollerRef}
          className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
            start && "animate-scroll "
          } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
        >
          {items.map((item, idx) => (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 bg-[#2C1B16] px-8 py-6 md:w-[450px]/"
              key={item.name}
            >
              <blockquote>
                <div
                  aria-hidden="true"
                  className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                ></div>
                <span className=" relative z-20 text-sm leading-[1.6] text-[#E1DBD8] font-normal">
                  {item.quote}
                </span>
                <div className="relative z-20 mt-6 flex flex-row items-center">
                  <span className="flex gap-1">
                    <span className="flex items-center"><img className="h-5" src={item.clock} alt="" /></span>
                    <span className=" text-sm leading-[1.6] text-[#b9b3b0] font-semibold">
                      {item.name}
                    </span>
                    {/* <span className=" text-sm leading-[1.6] text-[#b9b3b0] font-semibold">
                      {item.title}
                    </span> */}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <img className="h-14" src={item.img} alt="" />
                </div>
              </blockquote>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default InfiniteMovingCard;
