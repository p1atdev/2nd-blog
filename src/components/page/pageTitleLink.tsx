import Link from "next/link";

import { css } from "@panda/css";

interface Props {
  title: string;
  href: string;
}

const pageTitleText = css({
  base: {
    fontSize: "8xl",
    color: "white",
    _active: {
      textDecoration: "underline",
      textDecorationThickness: "2px",
    },
  },
  md: {
    fontSize: "9xl",
  },
  lg: {
    position: "relative",
    WebkitTextStroke: "1px white",
    color: "unset",

    // 左半分白、右半分透明の背景を用意する
    backgroundImage: "linear-gradient(90deg, white 50%, transparent 50%)",
    // 背景を元のニ倍の長さ用意する
    backgroundSize: "201%",
    // はじめは透明の右半分を表示
    backgroundPosition: "100%",

    _hover: {
      // ホバー時に左の白い部分を表示
      backgroundPosition: "0%",
    },
    // 背景のトランジション設定
    transition: "background-position 0.2s ease-in-out",

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
    <>
      <Link href={href}>
        <p className={pageTitleText}>
          <span className={titleSpan}>{title}</span>
        </p>
      </Link>
    </>
  );
}
