import React from "react";
import OurServiceCard from "./OurServiceCard";
import CustomCarousel from "../global/CustomCarousel";

export default function OurServices() {
  return (
    <div className="flex flex-col items-center mt-[100px] px-[10%]">
      <p className="text-[#6941C6] text-base font-semibold">Our Services</p>
      <h2 className="text-[#101828] text-[36px] leading-[44px] font-semibold mt-3">
        Fostering a playful & engaging learning environment
      </h2>

      <div className="relative w-full mt-10">
        <CustomCarousel>
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
          <OurServiceCard />
        </CustomCarousel>
      </div>
    </div>
  );
}
