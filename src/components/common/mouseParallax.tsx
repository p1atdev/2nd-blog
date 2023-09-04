"use client";

import { HTMLProps, ReactNode } from "react";

import { useMouse } from "@/hooks/useMouse";

interface Props extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export default function MouseParallax({ children, ...props }: Props) {
  const position = useMouse();

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
        transform: `translate(-${position.x / 100}px, -${position.y / 100}px)`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
