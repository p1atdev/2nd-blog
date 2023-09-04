import { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";

import { css } from "@panda/css";

import MouseParallax from "../common/mouseParallax";

export default function ParallaxDarkBG() {
  // ref: https://prototypr.io/post/using-framer-motion-to-create-smooth-lazy-load-image-effects
  const [imageLoading, setImageLoading] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
  };

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
      <motion.figure
        className={css({
          bg: "home.black",
          zIndex: 0,
        })}
        initial={{ opacity: 0 }}
        animate={{
          opacity: imageLoading ? 0 : 1,
        }}
        transition={{
          height: { delay: 0, duration: 0.4 },
          opacity: { delay: 0.5, duration: 0.4 },
        }}
        onLoad={imageLoaded}
      >
        <Image
          className={css({
            objectFit: "cover",
          })}
          src="/images/girl_dark_bright.jpg"
          alt="illustraion of a girl as a background image"
          fill
        />
      </motion.figure>
    </MouseParallax>
  );
}
