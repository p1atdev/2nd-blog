"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { vstack } from "@panda/patterns";

import AboutSection from "@/components/page/aboutSection";
import HomeHeroSection from "@/components/page/homeHeroSection";
import PostsSection from "@/components/page/posts";
import WorksSection from "@/components/page/worksSection";

export default function Home() {
  return (
    // <main className={vstack()}>
    <Parallax className={vstack()} pages={6}>
      <ParallaxLayer offset={0} speed={0.1}>
        <HomeHeroSection />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: 1,
          end: 2,
        }}
        speed={0.1}
      >
        <AboutSection />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: 3,
          end: 4,
        }}
        speed={0.1}
      >
        <WorksSection />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{
          start: 5,
          end: 6,
        }}
        speed={0.1}
      >
        <PostsSection />
      </ParallaxLayer>
    </Parallax>
  );
}
