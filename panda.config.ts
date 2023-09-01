import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./src/app/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          home: {
            black: {
              value: "#050404",
            },
            yellow: {
              value: "#FFFF21",
            },
          },
        },
      },
      keyframes: {
        infinite_loop_left: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
        // 1, 3, 5...
        infinite_loop_left_odd: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
        // 2, 4, 6...
        infinite_loop_left_even: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
