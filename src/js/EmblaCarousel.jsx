import React from "react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import "../css/embla.css";
const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

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
            <div className="embla__slide cursor-pointer w-auto" key={index}>
              <div className="embla__slide__number text-[#2C1B16] font-playfair  flex md:justify-between gap-2 md:gap-1 w-[300px] md:w-[500px] h-[7rem] md:h-[10rem]">
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
