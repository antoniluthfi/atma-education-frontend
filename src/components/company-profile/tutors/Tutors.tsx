import React from "react";
import TutorCard from "./TutorCard";

export default function Tutors() {
  return (
    <div className="flex flex-col items-center mt-[100px] px-[10%]">
      <p className="text-[#6941C6] text-base font-semibold">Tutors</p>
      <h2 className="text-[#101828] text-[36px] leading-[44px] font-semibold mt-3">
        Meet The Heroes
      </h2>
      <p className="text-[#667085] text-[20px] leading-[30px] mt-5">
        On Atma Education, instructors from all over the world instruct millions
        of students. We offer the knowledge and abilities.
      </p>

      <div className="relative w-full mt-10 grid grid-cols-4 gap-5">
        <TutorCard />
        <TutorCard />
        <TutorCard />
        <TutorCard />
      </div>
    </div>
  );
}
