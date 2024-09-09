import Image from "next/image";
import React from "react";
import ArrowUprightIcon from "~/icons/arrow-up-right.svg";
import StarIcon from "~/icons/star.svg";

export default function ExploreProgramCard() {
  return (
    <div className="w-[384px] h-[553px] bg-white shadow-md rounded-lg p-6 border-[1px] border-gray-200">
      <Image
        src="/images/learn-figma.png"
        width={336}
        height={240}
        alt="Explore Program"
      />

      <p className="text-sm text-[#6941C6] font-semibold mt-5">Design</p>
      <div className="flex justify-between items-center mt-3">
        <h3 className="text-2xl text-[#101828] font-semibold">
          Figma UI UX Design..
        </h3>
        <button>
          <ArrowUprightIcon className="w-6 h-6" />
        </button>
      </div>

      <p className="text-base text-[#667085] mt-3">
        Use Figma to get a job in UI Design, User Interface, User Experience
        design.
      </p>

      <div className="flex items-center gap-2 mt-3">
        <p className="text-[14px] leading-[17px] text-[#7F56D9] font-medium">
          4.3
        </p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((num) => (
            <StarIcon key={num} />
          ))}
        </div>
        <p className="text-[14px] leading-[17px] text-[#969696]">(16,325)</p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex items-center gap-3">
          <Image src="/images/avatar.png" width={40} height={40} alt="avatar" />
          <div>
            <p className="text-sm text-[#101828] font-medium">Jane Cooper</p>
            <p className="text-sm text-[#667085]">2023 Enrolled</p>
          </div>
        </div>

        <p className="text-[26px] leading-[31px] text-[#7F56D9] font-bold">
          $17.38
        </p>
      </div>
    </div>
  );
}
