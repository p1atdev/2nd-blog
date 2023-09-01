import Image from "next/image";

import { css } from "@panda/css";

import MouseParallax from "../common/mouseParallax";

export default function ParallaxBG() {
  return (
    <MouseParallax
      className={css({
        position: "absolute",
        top: 0,
        right: 0,
        w: "full",
        maxW: {
          base: "full",
          lg: "2/3",
        },
        h: "100svh",
      })}
    >
      <figure
        className={css({
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
    </MouseParallax>
  );
}
