import Image from "next/image";
import React from "react";

export default function TestimoniCard() {
  return (
    <div className="bg-[#f7f7f7] px-[10%] w-full h-[578px] flex flex-col items-center justify-center">
      <div className="flex items-center">
        <Image
          src="/images/logo.png"
          width={34}
          height={24}
          alt="Logo"
          className="object-cover mr-2"
        />
        <h2 className="text-[#101828] text-[20px] leading-[24px] font-extrabold">
          Atma Education
        </h2>
      </div>

      <h3 className="text-[48px] leading-[60px] text-[#101828] font-medium mt-8 text-center">
        Courses was fantastic! It is Master platform for those looking to start
        a new career, or need a refresher.
      </h3>

      <Image src="/images/avatar-3.png" width={64} height={64} alt="avatar" className="mt-8" />
      <p className="text-lg text-[#101828] font-medium mt-4">Jacob Jones</p>
      <p className="text-sm text-[#667085] mt-1">Student, National University</p>
    </div>
  );
}
