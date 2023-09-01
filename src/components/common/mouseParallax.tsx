"use client";

import { HTMLProps, ReactNode, useEffect, useState } from "react";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export default function MouseParallax({ children, ...props }: Props) {
  const [transform, setTransform] = useState([0, 0]);

  useEffect(() => {
    function onMouseMove(this: Window, ev: MouseEvent) {
      setTransform([ev.pageX / 100, ev.pageY / 100]);
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  return (
    <div
      style={{
        scale: 1.05,
        transform: `translate(${transform[0]}px, ${transform[1]}px)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
