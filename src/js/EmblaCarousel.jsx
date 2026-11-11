import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from 'embla-carousel-autoplay'
import "../css/embla.css";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options,[
    Autoplay({ playOnInit: true, delay: 3000 })
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls">
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="embla__button embla__button--next"
        />
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="embla__button embla__button--prev"
        />
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide cursor-pointer" key={index}>
              <div className="embla__slide__number text-[#2C1B16] font-playfair flex items-center justify-between gap-3 md:gap-4 w-[300px] md:w-[500px] h-[7rem] md:h-[10rem] p-3 md:p-4 text-left">
                {slide.title ? (
                  <div className="flex items-center gap-3 md:gap-4 w-full">
                    <div>
                      <img
                        className="h-[45px] md:h-[60px] shrink-0"
                        src={slide.img || "./gotis/tournaments.svg"}
                        alt=""
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <div className="text-xs sm:text-sm md:text-base font-bold leading-snug">
                        {slide.title}
                      </div>
                      {slide.brochure && (
                        <div className="mt-1.5 md:mt-2">
                          <a
                            href={slide.brochure}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-[11px] md:text-xs font-sans font-bold uppercase tracking-wider text-white bg-[#2C1B16] hover:bg-[#3d2412] px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg transition-colors shadow-sm"
                          >
                            <span>Brochure</span>
                            <img className="h-3 w-3 shrink-0" src="./props/chesspion.svg" alt="" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex md:justify-between items-center gap-2 md:gap-1 w-full">
                    <div>
                      <img
                        className="h-[60px] md:h-[70px] md:-mt-3"
                        src={slide.img}
                        alt=""
                      />
                    </div>
                    <div>
                      <div className="text-3xl md:text-5xl font-bold md:-mt-3">
                        {slide.number}
                      </div>
                      <div className="text-xl md:text-2xl font-semibold">
                        {slide.info}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div> */}
    </section>
  );
};

export default EmblaCarousel;
