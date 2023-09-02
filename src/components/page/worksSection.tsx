import { Ubuntu_Mono } from "next/font/google";

import { css, cx } from "@panda/css";
import { stack } from "@panda/patterns";

const ubuntu = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function WorksSection() {
  return (
    <section
      className={cx(
        stack({
          h: "100svh",
          bg: "white",
          px: "12",
          gap: "2",
        }),
        ubuntu.className
      )}
    >
      <h3
        className={css({
          fontSize: "6xl",
          fontWeight: "extrabold",
        })}
      >
        ### Works
      </h3>
      <p>制作物とか</p>
    </section>
  );
}
