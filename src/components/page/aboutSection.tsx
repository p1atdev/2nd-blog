import { Noto_Serif_JP } from "next/font/google";

import { css, cx } from "@panda/css";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "600"],
});

export default function AboutSection() {
  return (
    <section
      className={css({
        h: "100svh",
        bg: "white",
      })}
    >
      <p
        className={cx(
          css({
            fontSize: "6xl",
            fontWeight: "extrabold",
            p: "12",
          }),
          serif.className
        )}
      >
        About
      </p>
      <p className={serif.className}>本文です。</p>

      {/* <ParallaxWhiteBG /> */}
    </section>
  );
}
