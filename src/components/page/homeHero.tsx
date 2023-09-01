import { Poppins } from "next/font/google";

import { css, cx } from "@panda/css";
import { vstack } from "@panda/patterns";

import InfiniteLoop from "@/components/page/infiniteLoop";
import { PageTitleLink } from "@/components/page/pageTitleLink";

import ParallaxBG from "./parallaxBG";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
});

const LoopTextBanner = () => {
  return (
    <InfiniteLoop
      parentCSS={css({
        gap: "2rem",
      })}
    >
      <p
        className={cx(
          css({
            fontSize: {
              base: "7xl",
              md: "8xl",
            },
            textTransform: "uppercase",
            lineHeight: "none",
            color: "home.yellow",
          }),
          poppins.className
        )}
      >
        Hello, World
      </p>
    </InfiniteLoop>
  );
};

export default function HomeHero() {
  return (
    <section
      className={css({
        bg: "home.black",
        h: "100svh",
        w: "full",
        position: "relative",
        overflow: "hidden",
      })}
    >
      <div
        className={css({
          position: "absolute",
          top: 0,
          left: 0,
          w: "full",
          zIndex: 1,
        })}
      >
        <LoopTextBanner />
      </div>
      <div
        className={css({
          position: "absolute",
          bottom: 0,
          w: "full",
          zIndex: 1,
        })}
      >
        <LoopTextBanner />
      </div>
      <section
        className={cx(
          vstack({
            position: "absolute",
            bottom: 0,
            mixBlendMode: {
              base: "difference",
              md: "unset",
              lg: "difference",
            },
            h: {
              base: "unset",
              md: "full",
            },
            w: {
              lg: "full",
            },
            zIndex: 10,
            gap: {
              base: "0",
              lg: "0",
            },
            alignItems: "left",
            justifyContent: "space-evenly",
            py: {
              base: "20",
              sm: "24",
              md: "32",
              lg: "36",
            },
            pl: {
              base: "4",
              sm: "12",
              lg: "24",
            },
            mt: "auto",
          }),
          poppins.className
        )}
      >
        <PageTitleLink title="About" href="/about" />
        <PageTitleLink title="Works" href="/works" />
        <PageTitleLink title="Blog" href="/blog" />
        <PageTitleLink title="Hobbies" href="/hobbies" />
        <PageTitleLink title="Links" href="/links" />
      </section>

      <ParallaxBG />
    </section>
  );
}
