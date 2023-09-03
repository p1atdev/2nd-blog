"use client";

import { HTMLProps, ReactNode, useEffect, useState } from "react";

import { isMobile } from "react-device-detect";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export default function MouseParallax({ children, ...props }: Props) {
  const [transform, setTransform] = useState([0, 0]);

  useEffect(() => {
    function onMouseMove(this: Window, ev: MouseEvent) {
      if (!isMobile) {
        setTransform([ev.pageX / 100, ev.pageY / 100]);
      }
    }
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  });

  // useEffect(() => {
  //   function onDeviceOrientation(this: Window, ev: DeviceOrientationEvent) {
  //     if (isMobile) {
  //       setTransform([ev?.gamma ?? 0 / 100, ev?.beta ?? 0 / 100]);
  //     }
  //   }
  //   window.addEventListener("deviceorientation", onDeviceOrientation);
  //   return () =>
  //     window.removeEventListener("deviceorientation", onDeviceOrientation);
  // });

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
