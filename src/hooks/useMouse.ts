import { useEffect, useId, useState } from "react";

export const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const key = useId();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent, _key: string) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const onMouseStopped = (e: MouseEvent, _key: string) => {};

    let timeout = setTimeout(() => onMouseStopped, 300);

    window.addEventListener("mousemove", (e) => {
      onMouseMove(e, key);
      clearTimeout(timeout);
      timeout = setTimeout(() => onMouseStopped(e, key), 300); // 100ms 以内に再びマウスが動かなければ、位置をマウスに持っていく
    });
    return () => {
      window.removeEventListener("mousemove", (e) => {
        onMouseMove(e, key);
      });
    };
  });

  return mousePosition;
};
