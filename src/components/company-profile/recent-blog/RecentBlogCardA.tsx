import Image from "next/image";
import React from "react";

export default function RecentBlogCardA() {
  return (
    <div className="w-full grid grid-cols-2 gap-6">
      <Image
        src="/images/blog-1.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "100%", objectFit: 'contain' }} // optional
        alt="blog"
      />

      <div>
        <p className="text-sm text-[#6941C6] font-semibold">
          November 16, 2014
        </p>
        <h3 className="text-lg text-[#101828] font-semibold mt-3">
          Three Pillars of User Delight
        </h3>
        <p className="text-base text-[#667085] mt-2">
          Delight can be experienced viscerally, behaviourally, and
          reflectively. A great design is ...
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          <span className="px-[10px] py-[2px] bg-[#FDF2FA] rounded-2xl text-[#C11574] text-sm justify-center items-center">
            Research
          </span>
          <span className="px-[10px] py-[2px] bg-[#ECFDF3] rounded-2xl text-[#027A48] text-sm justify-center items-center">
            UI UX
          </span>
        </div>
      </div>
    </div>
  );
}
