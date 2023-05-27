import React from "react";
import CustomCarousel from "../global/CustomCarousel";
import ExploreProgramCard from "./ExploreProgramCard";

export default function ExplorePrograms() {
  return (
    <div className="flex flex-col items-center mt-20 px-[10%]">
      <p className="text-[#6941C6] text-base font-semibold">Explore Programs</p>
      <h2 className="text-[#101828] text-[36px] leading-[44px] font-semibold mt-3">
        Our Most Popular Class
      </h2>
      <p className="text-[#667085] text-[20px] leading-[30px] mt-5">
        Let&apos;s join our famous class, the knowledge provided will definitely
        be useful for you.
      </p>

      <div className="relative w-full mt-10">
        <CustomCarousel>
          <ExploreProgramCard />
          <ExploreProgramCard />
          <ExploreProgramCard />
          <ExploreProgramCard />
          <ExploreProgramCard />
        </CustomCarousel>
      </div>

      <button className="bg-[#D0D5DD] hover:bg-[#c9ccd1] w-[173px] h-10 rounded-lg flex justify-center items-center mt-10 self-center">
        <p className="text-[14px] text-[#101828] font-bold">Explore All Programs</p>
      </button>
    </div>
  );
}
