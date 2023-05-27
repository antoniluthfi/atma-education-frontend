import React from "react";
import PublicSpeakingIcon from "~/icons/public-speaking.svg";
import CareerOrientedIcon from "~/icons/career-oriented.svg";
import CreativeThinkingIcon from "~/icons/creative-thinking.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full px-[10%]">
      <div className="grid grid-cols-2">
        <div>
          <h2 className="text-[#101828] text-[64px] leading-[82px] font-bold mt-[100px]">
            Up Your <span className="text-[#7F56D9]">Skills</span> to{" "}
            <span className="text-[#7F56D9]">Advance</span> Your{" "}
            <span className="text-[#7F56D9]">Career</span> Path
          </h2>
          <p className="mt-5 text-[#646464] text-[16px]">
            Provides you with the latest online learning system and material
            that help your knowledge growing.
          </p>

          <div className="flex gap-7 mt-9">
            <input
              type="button"
              value="Get Started"
              className="bg-[#7F56D9] hover:bg-[#7551c4] text-white rounded-lg w-[157px] h-[60px] font-semibold shadow-md cursor-pointer"
            />

            <input
              type="button"
              value="Get Free Trial"
              className="bg-[#F4EBFF] hover:bg-[#e6e5e7] text-[#7F56D9] rounded-lg w-[157px] h-[60px] font-semibold shadow-md cursor-pointer"
            />
          </div>

          <div className="flex gap-8 mt-[50px]">
            <div className="flex items-center justify-center gap-[10px]">
              <PublicSpeakingIcon />
              <p className="text-[16px] leading-10 text-[#1D2939B2]">
                Public Speaking
              </p>
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <CareerOrientedIcon />
              <p className="text-[16px] leading-10 text-[#1D2939B2]">
                Career-Oriented
              </p>
            </div>

            <div className="flex items-center justify-center gap-[10px]">
              <CreativeThinkingIcon />
              <p className="text-[16px] leading-10 text-[#1D2939B2]">
                Creative Thinking
              </p>
            </div>
          </div>
        </div>

        <div className="hero-model" />
      </div>

      <div className="flex gap-[60px] mt-[73px] justify-center items-center">
        <div>
          <p className="text-[#7F56D9] text-[34px] leading-[34px] font-bold">
            250+
          </p>
          <p className="text-[#101828] text-[25px] leading-[34px] font-light">
            Collaboration
          </p>
        </div>

        <Image
          src="/images/duolingo.png"
          width={153}
          height={36}
          alt="Duolingo"
        />

        <Image
          src="/images/codecov.png"
          width={186}
          height={36}
          alt="Duolingo"
        />

        <Image
          src="/images/user-testing.png"
          width={140}
          height={36}
          alt="Duolingo"
        />

        <Image
          src="/images/magic-leap.png"
          width={234}
          height={36}
          alt="Duolingo"
        />
      </div>
    </div>
  );
}
