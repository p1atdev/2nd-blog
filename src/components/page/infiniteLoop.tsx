import { ReactNode } from "react";

import { css, cx } from "@panda/css";
import { flex } from "@panda/patterns";

interface Props {
  children: ReactNode;
  parentCSS?: string;
  itemCSS?: string;
}

export default function InfiniteLoop({ children, parentCSS, itemCSS }: Props) {
  return (
    <div
      className={cx(
        flex({
          whiteSpace: "nowrap",
          overflow: "hidden",
        }),
        parentCSS
      )}
    >
      {[...Array(10)].map((_, i) => {
        return (
          <span
            className={cx(
              css({
                //   _hover: {
                //     animationPlayState: "paused",
                //   },
                _odd: {
                  // 1, 3...
                  display: "inline-block",
                  animation: "infinite_loop_left 20s linear infinite",
                },
                _even: {
                  // 2, 4...
                  display: "inline-block",
                  animation: "infinite_loop_left 20s linear infinite",
                },
                // なんで odd と even に分けてんのか意味がわからん
              }),
              itemCSS
            )}
            key={i}
            aria-hidden={i !== 0}
          >
            {children}
          </span>
        );
      })}
    </div>
  );
}
