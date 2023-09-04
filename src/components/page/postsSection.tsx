import { M_PLUS_1 } from "next/font/google";

import { css, cx } from "@panda/css";
import { stack } from "@panda/patterns";

const m_plus = M_PLUS_1({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function PostsSection() {
  return (
    <section
      className={cx(
        stack({
          h: "100svh",
          bg: "white",
          px: "12",
          gap: "2",
        }),
        m_plus.className
      )}
    >
      <h3
        className={css({
          fontSize: "5xl",
          fontWeight: "bold",
        })}
      >
        書いた記事
      </h3>
      <p>Zennなど</p>
    </section>
  );
}
