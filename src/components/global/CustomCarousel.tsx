import React, { ReactNode } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    slidesToSlide: 0,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 700,
    },
    items: 3,
    partialVisibilityGutter: 20,
  },
  mobileL: {
    breakpoint: {
      max: 700,
      min: 480,
    },
    items: 2,
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

export function CustomDots({
  onClick,
  active,
}: {
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.();
        e.preventDefault();
      }}
      className={`${
        active ? "w-12 bg-[#7F56D9]" : "w-3 bg-[#D9D9D9]"
      } h-3 rounded-full`}
    ></button>
  );
}

export default function CustomCarousel({ children }: { children: ReactNode }) {
  return (
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
      containerClass="p-10"
      dotListClass="gap-3"
    >
      {children}
    </Carousel>
  );
}
