"use client";

import ExplorePrograms from "@/components/company-profile/explore-programs/ExplorePrograms";
import Footer from "@/components/company-profile/Footer";
import Hero from "@/components/company-profile/Hero";
import Navbar from "@/components/company-profile/Navbar";
import OurServices from "@/components/company-profile/our-services/OurServices";
import RecentBlog from "@/components/company-profile/recent-blog/RecentBlog";
import Testimoni from "@/components/company-profile/testimoni/Testimoni";
import Tutors from "@/components/company-profile/tutors/Tutors";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurServices />
      <ExplorePrograms />
      <Tutors />
      <Testimoni />
      <RecentBlog />
      <Footer />
    </div>
  );
}
