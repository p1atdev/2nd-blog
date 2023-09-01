import { Poppins } from "next/font/google";
import Image from "next/image";

import { css, cx } from "@panda/css";
import { vstack } from "@panda/patterns";

import { PageTitleLink } from "@/components/page/pageTitleLink";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <main
      className={css({
        bg: "home.background",
        h: "100vh",
        position: "relative",
      })}
    >
      <div
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
      </div>
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
          bg: "home.background",
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
    </main>
  );
}
