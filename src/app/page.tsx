"use client";

import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import ParticleCanvas from "@/components/ParticleCanvas";
import GradientOrbs from "@/components/GradientOrbs";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import Marquee from "@/components/Marquee";
import WaveSection from "@/components/WaveSection";
import Gallery from "@/components/Gallery";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <ParticleCanvas />
      <div className="noise" />
      <GradientOrbs />
      <Hero />
      <Showcase />
      <Marquee />
      <WaveSection />
      <Gallery />
      <FooterCTA />
      <Footer />
    </>
  );
}
