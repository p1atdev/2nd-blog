import { Poppins } from "next/font/google";

import { css, cx } from "@panda/css";
import { vstack } from "@panda/patterns";

import HomeHero from "@/components/page/homeHero";
import InfiniteLoop from "@/components/page/infiniteLoop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
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
            fontSize: "8xl",
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

export default function Home() {
  return (
    <main className={vstack()}>
      <HomeHero />
      <section
        className={css({
          h: "100vh",
        })}
      >
        Second section
      </section>
    </main>
  );
}
