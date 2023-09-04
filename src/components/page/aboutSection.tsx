import { Noto_Serif_JP } from "next/font/google";
import Image from "next/image";

import { motion } from "framer-motion";

import { css, cx } from "@panda/css";
import { stack } from "@panda/patterns";

const serif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "600"],
});

const returnSymbol = (fontSize: string = "inherit") => {
  return css({
    _after: {
      content: "'↵'",
      fontSize: fontSize,
      opacity: 0.5,
      pl: "2",
    },
  });
};

const aboutMeParagraph: string[] = [
  "そう、私です。",
  "新しいものや楽しいものが好きです。",
];

const aboutThisWebsiteParagraph: string[] = [
  "最近の技術を使ってみたくて作ったサイトです。",
  "Next.js v13 (App Router) と Panda CSS を使っています。",
  "ホスティングは Vercel です。",
  "サイトのいろんなところに出てくるイラストは niji・journey 製です。",
];

const Heading3 = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3
      className={css({
        fontSize: "5xl",
        fontWeight: "extrabold",
      })}
    >
      <span
        className={cx(
          css({
            // 本当は token() 関数でやりたいが、pandacssがバグってるのでとりあえずは直で書く
            bg: `linear-gradient(transparent 60%, var(--colors-home-purple-light) 60%)`,
            pr: "6",
          }),
          returnSymbol("4xl")
        )}
      >
        {children}
      </span>
    </h3>
  );
};

export default function AboutSection() {
  return (
    <section
      className={cx(
        stack({
          h: "100svh",
          bg: "white",
          px: {
            base: "2",
            sm: "12",
          },
          gap: "2",
        }),
        serif.className
      )}
    >
      <div
        className={stack({
          zIndex: 1,
          h: "full",
          justifyContent: "space-evenly",
          mb: {
            base: "20",
          },
        })}
      >
        <div>
          <Heading3>About me</Heading3>
          {aboutMeParagraph.map((text, i) => {
            return (
              <p
                className={cx(
                  css({
                    my: {
                      base: "2",
                      md: "4",
                    },
                  }),
                  returnSymbol()
                )}
                key={i}
              >
                {text}
              </p>
            );
          })}
        </div>
        <div>
          <Heading3>About this website</Heading3>
          {aboutThisWebsiteParagraph.map((text, i) => {
            return (
              <p
                className={cx(
                  css({
                    my: "4",
                  }),
                  returnSymbol()
                )}
                key={i}
              >
                {text}
              </p>
            );
          })}
        </div>
      </div>

      <motion.figure
        className={css({
          position: "absolute",
          right: 0,
          w: "full",
          maxW: {
            base: "full",
            lg: "4/6",
          },
          h: "100svh",
          zIndex: 0,
        })}
        initial={"hidden"}
        whileInView={"visible"}
        transition={{ type: "tween", duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: "10%" },
        }}
      >
        <Image
          className={css({
            objectFit: "cover",
            objectPosition: {
              base: "unset",
              md: "top right",
            },
          })}
          src="/images/girl_purple.jpg"
          alt="illustration of a girl as a background image"
          fill
        />
      </motion.figure>
    </section>
  );
}
