"use client";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { css } from "@panda/css";
import { vstack } from "@panda/patterns";

import MouseStalker from "@/components/common/mouseStalker";
import AboutSection from "@/components/page/aboutSection";
import HomeHeroSection from "@/components/page/homeHeroSection";
import PostsSection from "@/components/page/postsSection";
import WorksSection from "@/components/page/worksSection";

export default function Home() {
  return (
    <>
      <MouseStalker
        className={css({
          mixBlendMode: "difference",
        })}
      >
        <div
          className={css({
            h: "24",
            w: "24",
            bg: "home.yellow",
            rounded: "full",
            transform: "translate(-50%, -50%)",
          })}
        />
      </MouseStalker>
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
    </>
  );
}
