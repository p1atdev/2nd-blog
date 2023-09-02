import { Noto_Serif_JP } from "next/font/google";

import { css, cx } from "@panda/css";
import { stack } from "@panda/patterns";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "600"],
});

export default function AboutSection() {
  return (
    <section
      className={cx(
        stack({
          h: "100svh",
          bg: "white",
          px: "12",
          gap: "2",
        }),
        serif.className
      )}
    >
      <h3
        className={css({
          fontSize: "6xl",
          fontWeight: "extrabold",
        })}
      >
        About
      </h3>
      <p>そう、私です。</p>
    </section>
  );
}
