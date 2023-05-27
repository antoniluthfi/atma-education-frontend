"use client";

import ExplorePrograms from "@/components/explore-programs/ExplorePrograms";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurServices from "@/components/our-services/OurServices";
import RecentBlog from "@/components/recent-blog/RecentBlog";
import Testimoni from "@/components/testimoni/Testimoni";
import Tutors from "@/components/tutors/Tutors";

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
