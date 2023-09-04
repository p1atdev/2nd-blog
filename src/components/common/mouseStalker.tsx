"use client";

import { ReactNode, useEffect } from "react";

import { useSpring } from "@react-spring/web";
import { HTMLMotionProps, motion } from "framer-motion";

import { css, cx } from "@panda/css";

import { useMouse } from "@/hooks/useMouse";

interface Props extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export default function MouseStalker({ children, className, ...props }: Props) {
  const position = useMouse();

  const [springPosition, setSpringPosition] = useSpring(() => ({
    to: {
      x: position.x,
      y: position.y,
    },
    config: {
      frequency: 0.2,
      damping: 10,
      tension: 200,
    },
  }));

  useEffect(() => {
    setSpringPosition({
      x: position.x,
      y: position.y,
    });
  }, [position, setSpringPosition]);

  return (
    <motion.div
      className={cx(
        css({
          position: "fixed",
          zIndex: 100,
          pointerEvents: "none",
          visibility: {
            base: "hidden",
            md: "visible",
          },
        }),
        className
      )}
      style={{
        top: springPosition.y.get(),
        left: springPosition.x.get(),
      }}
      initial={"hidden"}
      animate={"visible"}
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.5,
        },
        visible: {
          opacity: 1,
          scale: 1,
        },
      }}
      transition={{
        type: "spring",
        delay: 1.5,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
