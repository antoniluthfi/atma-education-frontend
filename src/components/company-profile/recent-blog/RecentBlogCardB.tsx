import Image from "next/image";
import React from "react";

export default function RecentBlogCardB() {
  return (
    <div className="w-full">
      <Image
        src="/images/blog-2.png"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: 240 }} // optional
        alt="blog"
      />

      <p className="text-sm text-[#6941C6] font-semibold mt-8">
        March 13, 2014
      </p>
      <h3 className="text-2xl text-[#101828] font-semibold mt-3">
        Agile Development Projects and Usability
      </h3>
      <p className="text-base text-[#667085] mt-3">
        Agile methods aim to overcome usability barriers in traditional
        development, but post new threats to user experience quality.
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        <span className="px-[10px] py-[2px] bg-[#F9F5FF] rounded-2xl text-[#6941C6] text-sm justify-center items-center">
          Programming
        </span>
        <span className="px-[10px] py-[2px] bg-[#EEF4FF] rounded-2xl text-[#3538CD] text-sm justify-center items-center">
          Research
        </span>
        <span className="px-[10px] py-[2px] bg-[#FDF2FA] rounded-2xl text-[#C11574] text-sm justify-center items-center">
          Developments
        </span>
      </div>
    </div>
  );
}
