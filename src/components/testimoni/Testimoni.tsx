import React from "react";
import { CustomDots } from "../global/CustomCarousel";
import Carousel from "react-multi-carousel";
import TestimoniCard from "./TestimoniCard";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    slidesToSlide: 0,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 700,
    },
    items: 1,
    partialVisibilityGutter: 20,
  },
  mobileL: {
    breakpoint: {
      max: 700,
      min: 480,
    },
    items: 1,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: {
      max: 480,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 70,
  },
};

export default function Testimoni() {
  return (
    <div className="mt-20 relative">
      {/* @ts-ignore */}
      <Carousel
        swipeable
        draggable={false}
        showDots
        customDot={<CustomDots />}
        responsive={responsive}
        ssr
        infinite
        autoPlay
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType="desktop"
        renderDotsOutside
        containerClass="pb-10"
        dotListClass="gap-3"
        arrows={false}
      >
        <TestimoniCard />
        <TestimoniCard />
        <TestimoniCard />
      </Carousel>
    </div>
  );
}
