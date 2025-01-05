import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs': '400px', // Extra small screens for small smartphones
        'sm': '500px', // Small screens for slightly larger devices
        'md': '640px', // Medium screens (default sm breakpoint)
        'lg': '768px', // Large screens (default md breakpoint)
        'xl': '1024px', // Extra large screens (default lg breakpoint)
        '2xl': '1280px', // Double extra large screens (default xl breakpoint)
        '3xl': '1536px', // Triple extra large screens (default 2xl breakpoint)
      },
    },
  },
  plugins: [],
};

export default config;
