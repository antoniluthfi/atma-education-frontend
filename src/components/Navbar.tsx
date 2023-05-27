import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-[100px] grid grid-cols-2 px-[10%]">
      <div className="h-full flex items-center">
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

      <div className="h-full flex items-center gap-[92px]">
        <ul className="flex gap-[25px] items-center justify-center">
          <li>
            <Link href="/" className="text-[#101828] text-base">
              Program
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#101828] text-base">
              Enterprise
            </Link>
          </li>
          <li>
            <Link href="/" className="text-[#101828] text-base">
              Universities
            </Link>
          </li>
        </ul>

        <div className="flex gap-5 items-center justify-center">
          <Link href="/" className="text-[#101828] text-base">
            Sign In
          </Link>

          <input
            type="button"
            value="Create free account"
            className="bg-[#7F56D9] hover:bg-[#7150b8] w-[167px] h-10 text-white rounded-lg flex items-center justify-center text-sm font-semibold cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
