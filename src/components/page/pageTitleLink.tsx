import Link from "next/link";

import { css } from "@panda/css";

interface Props {
  title: string;
  href: string;
}

const pageTitleText = css({
  base: {
    fontSize: "6xl",
    color: "white",
    WebkitTextStroke: "1px black",
    _active: {
      bg: "white",
    },
  },
  sm: {
    fontSize: "7xl",
  },
  md: {
    fontSize: "8xl",
    WebkitTextStroke: "1px black",
    color: "white",

    // 左半分白、右半分透明の背景を用意する
    backgroundImage: "linear-gradient(90deg, white 50%, transparent 50%)",
    // 背景を元のニ倍の長さ用意する
    backgroundSize: "201%",
    // はじめは透明の右半分を表示
    backgroundPosition: "100%",

    _hover: {
      // ホバー時に左の白い部分を表示
      backgroundPosition: "0%",
      color: "black",
    },
    // 背景と文字色のトランジション設定
    transition:
      "background-position 0.2s ease-in-out, color 0.2s ease-in-out, text-shadow 0.2s ease-in-out",
  },
  lg: {
    fontSize: "9xl",
    WebkitTextStroke: "1px white",
    color: "transparent",

    _active: {
      textDecoration: "none",
    },
  },
  verticalAlign: "middle",
  textTransform: "uppercase",
  lineHeight: "none",
});

const titleSpan = css({
  verticalAlign: "middle",
});

export function PageTitleLink({ title, href }: Props) {
  return (
    <Link href={href}>
      <p className={pageTitleText}>
        <span className={titleSpan}>{title}</span>
      </p>
    </Link>
  );
}
