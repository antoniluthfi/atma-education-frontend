import Image from "next/image";
import React from "react";
import TwitterIcon from "~/icons/twitter.svg";
import LinkedinIcon from "~/icons/linkedin.svg";
import FacebookIcon from "~/icons/facebook.svg";
import GithubIcon from "~/icons/github.svg";

export default function Footer() {
  return (
    <div className="w-full px-[10%] bg-[#101828] pt-16 mt-20">
      <div className="flex gap-16">
        <div>
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              width={34}
              height={24}
              alt="Logo"
              className="object-cover mr-2"
            />
            <h2 className="text-white text-[20px] leading-[24px] font-extrabold">
              Atma Education
            </h2>
          </div>

          <p className="text-base text-[#EAECF0] mt-9">
            Top learning experiences that create more talent in the world.
          </p>
        </div>

        <div className="w-full grid grid-cols-4">
          <div>
            <p className="text-sm text-[#98A2B3] font-semibold">Product</p>
            <ul className="grid grid-flow-row gap-3 mt-4">
              <li className="text-base text-white font-medium">Overview</li>
              <li className="text-base text-white font-medium">Features</li>
              <li className="text-base text-white font-medium">Solutions</li>
              <li className="text-base text-white font-medium">Tutorials</li>
              <li className="text-base text-white font-medium">Pricing</li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-[#98A2B3] font-semibold">Company</p>
            <ul className="grid grid-flow-row gap-3 mt-4">
              <li className="text-base text-white font-medium">About Us</li>
              <li className="text-base text-white font-medium">Carrers</li>
              <li className="text-base text-white font-medium">News</li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-[#98A2B3] font-semibold">Social</p>
            <ul className="grid grid-flow-row gap-3 mt-4">
              <li className="text-base text-white font-medium">Twitter</li>
              <li className="text-base text-white font-medium">LinkedIn</li>
              <li className="text-base text-white font-medium">Facebook</li>
              <li className="text-base text-white font-medium">Instagram</li>
              <li className="text-base text-white font-medium">Github</li>
            </ul>
          </div>

          <div>
            <p className="text-sm text-[#98A2B3] font-semibold">Legal</p>
            <ul className="grid grid-flow-row gap-3 mt-4">
              <li className="text-base text-white font-medium">Terms</li>
              <li className="text-base text-white font-medium">Privacy</li>
              <li className="text-base text-white font-medium">Cookies</li>
              <li className="text-base text-white font-medium">Contact</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between py-12">
        <p className="text-base text-[#98A2B3]">
          © {new Date().getFullYear()} Atma Education. All rights reserved.
        </p>
        <div className="flex justify-center items-center gap-6">
          <TwitterIcon className="w-6 h-6" />
          <LinkedinIcon className="w-6 h-6" />
          <FacebookIcon className="w-6 h-6" />
          <GithubIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
