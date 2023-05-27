import Image from "next/image";
import React from "react";
import ArrowLearnMoreIcon from "~/icons/arrow-learn-more.svg";

export default function OurServiceCard() {
  return (
    <div className="group w-[373px] h-[243px] bg-white hover:bg-[#7F56D9] rounded-xl shadow-md border-[#D8D8D866] hover:border-[#7F56D9] border-[1px] px-10 py-[30px] flex flex-col justify-between">
      <div className="flex items-center gap-5">
        <div className="p-3 bg-[#E0EAFF] group-hover:bg-[#F4EBFF] rounded-[10px]">
          <Image
            src="/images/web-development.png"
            width={24}
            height={24}
            alt="our-service-icon"
          />
        </div>
        <h3 className="text-[24px] text-[#101828] group-hover:text-white font-bold">
          Web Development
        </h3>
      </div>

      <p className="text-base text-[#646464] group-hover:text-white">
        Classes in development that cover the most recent advancements in web.
      </p>

      <div className="flex items-center gap-5 group-hover:text-white">
        <p className="text-[18px] text-[#7F56D9] group-hover:text-white font-medium">Learn More</p>
        <ArrowLearnMoreIcon className="text-[#7F56D9] group-hover:fill-current group-hover:text-white" />
      </div>
    </div>
  );
}
