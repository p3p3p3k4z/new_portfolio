import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gruvbox: {
          // Backgrounds (Dark mode hard contrast)
          dark0: "#1d2021", // bg0_h (The darkest one)
          dark1: "#282828", // bg0 / bg
          dark2: "#3c3836", // bg1
          dark3: "#504945", // bg2
          dark4: "#665c54", // bg3
          
          // Foreground (Text)
          light0: "#fbf1c7", // fg0
          light1: "#ebdbb2", // fg1 / fg
          light2: "#d5c4a1", // fg2
          
          // Accent Colors (Normal and Bold/Bright)
          red: { DEFAULT: "#cc241d", bright: "#fb4934" },
          green: { DEFAULT: "#98971a", bright: "#b8bb26" },
          yellow: { DEFAULT: "#d79921", bright: "#fabd2f" },
          blue: { DEFAULT: "#458588", bright: "#83a598" },
          purple: { DEFAULT: "#b16286", bright: "#d3869b" },
          aqua: { DEFAULT: "#689d6a", bright: "#8ec07c" },
          orange: { DEFAULT: "#d65d0e", bright: "#fe8019" },
          gray: "#928374",
        },
      },
      fontFamily: {
        // Suggested professional tech fonts
        sans: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-fira-code)', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;