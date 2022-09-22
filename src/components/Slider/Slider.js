import React, { useEffect, useState } from "react";
import SliderContent from "./Slider-Content";
import Dots from "./Dots";
import sliderImage from "./slider-Image";
import "./Slider.css";

const count = sliderImage.length - 1;

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === count ? 0 : activeIndex + 1);
    }, 7500);
    return () => clearInterval(interval);
  }, [activeIndex]);
  return (
    <div className="slider-container">
      <section>
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <Dots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
      </section>
    </div>
  );
}

export default Slider;