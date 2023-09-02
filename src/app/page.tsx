"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { vstack } from "@panda/patterns";

import AboutSection from "@/components/page/aboutSection";
import HomeHeroSection from "@/components/page/homeHeroSection";

export default function Home() {
  return (
    // <main className={vstack()}>
    <Parallax className={vstack()} pages={3}>
      <ParallaxLayer offset={0} speed={0.1}>
        <HomeHeroSection />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: 1,
          end: 2,
        }}
        // {/* // offset={1} */}
        factor={2}
        speed={0.5}
      >
        <AboutSection />
      </ParallaxLayer>
    </Parallax>
    // {/* </main> */}
  );
}
