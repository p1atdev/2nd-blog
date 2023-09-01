import { Poppins } from "next/font/google";
import Image from "next/image";

import { css, cx } from "@panda/css";
import { vstack } from "@panda/patterns";

import InfiniteLoop from "@/components/page/infiniteLoop";
import { PageTitleLink } from "@/components/page/pageTitleLink";

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

export default function HomeHero() {
  return (
    <section
      className={css({
        bg: "home.black",
        h: "100vh",
        w: "full",
        position: "relative",
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
            position: "relative",
            mixBlendMode: {
              base: "difference",
              lg: "difference",
            },
            h: "full",
            zIndex: 10,
            gap: {
              base: "4",
              lg: "0",
            },
            alignItems: "left",
            justifyContent: "space-evenly",
            py: {
              base: "48",
              md: "32",
              lg: "36",
            },
            pl: {
              base: "8",
              lg: "24",
            },
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
      <figure
        className={css({
          position: "absolute",
          top: 0,
          right: 0,
          maxW: {
            base: "full",
            lg: "2/3",
          },
          w: "full",
          h: "100vh",
          bg: "home.black",
          zIndex: 0,
        })}
      >
        <Image
          className={css({
            objectFit: "cover",
          })}
          src="/images/girl_dark_bright.jpg"
          alt="illustraion of a girl as a background image"
          fill
        />
      </figure>
    </section>
  );
}
