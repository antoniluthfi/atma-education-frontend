import React from "react";
import RecentBlogCardA from "./RecentBlogCardA";
import RecentBlogCardB from "./RecentBlogCardB";

export default function RecentBlog() {
  return (
    <div className="w-full px-[10%] mt-20">
      <h2 className="text-2xl text-[#101828] font-semibold">Our Recent Blog</h2>
      <div className="grid grid-cols-2 mt-5 gap-8">
        <div className="grid grid-rows-2 gap-8">
          <RecentBlogCardA />
          <RecentBlogCardA />
        </div>

        <RecentBlogCardB />
      </div>
    </div>
  );
}
