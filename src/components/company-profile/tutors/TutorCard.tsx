import Image from "next/image";
import React from "react";
import TwitterIcon from "~/icons/twitter.svg";
import LinkedinIcon from "~/icons/linkedin.svg";

export default function TutorCard() {
  return (
    <div className="bg-white shadow-md rounded-lg border-[1px] border-gray-200 w-full h-[292px] flex flex-col items-center p-6">
      <Image src="/images/avatar-2.png" width={80} height={80} alt="avatar" />
      <h3 className="text-lg text-[#101828] font-medium mt-5">Antoni Luthfi</h3>
      <p className="text-base text-[#6941C6]">
        Application Support Analyst Lead
      </p>
      <p className="text-base text-[#667085] mt-2 text-center">
        Former co-founder of Opendoor. Early staff at Spotify and Clearbit.
      </p>

      <div className="flex items-center gap-5 mt-4">
        <TwitterIcon />
        <LinkedinIcon />
      </div>
    </div>
  );
}
