import type { Config } from "tailwindcss";

/**
 * Cadwell Realty Group — design tokens.
 * Color channels are exposed as RGB triplets in `app/globals.css` so Tailwind
 * `<alpha-value>` works for every brand token.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "rgb(var(--color-paper) / <alpha-value>)",
        "paper-deep": "rgb(var(--color-paper-deep) / <alpha-value>)",
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        charcoal: "rgb(var(--color-charcoal) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        mist: "rgb(var(--color-mist) / <alpha-value>)",
        cadwell: "rgb(var(--color-cadwell) / <alpha-value>)",
        "cadwell-deep": "rgb(var(--color-cadwell-deep) / <alpha-value>)",
        "cadwell-soft": "rgb(var(--color-cadwell-soft) / <alpha-value>)",
        // Backwards-compatible alias so legacy `primary` utilities still resolve.
        primary: "rgb(var(--color-cadwell) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Cormorant Garamond", "ui-serif", "Georgia", "serif"],
        sub: ["var(--font-sub)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        editorial: "84rem",
        measure: "62ch",
        "measure-wide": "44rem",
      },
      boxShadow: {
        lift: "0 1px 0 rgba(0, 0, 0, 0.05), 0 28px 60px -28px rgba(0, 0, 0, 0.22)",
        "lift-hover": "0 1px 0 rgba(0, 0, 0, 0.06), 0 38px 70px -28px rgba(0, 0, 0, 0.30)",
        surface: "0 1px 0 rgba(0, 0, 0, 0.05), 0 22px 52px -24px rgba(0, 0, 0, 0.18)",
        "surface-hover": "0 1px 0 rgba(0, 0, 0, 0.06), 0 30px 58px -22px rgba(0, 0, 0, 0.22)",
        "inset-frame": "inset 0 0 0 1px rgba(0, 0, 0, 0.07)",
        glow: "0 0 0 1px rgba(192, 0, 0, 0.18), 0 30px 80px -30px rgba(192, 0, 0, 0.32)",
        glass: "0 1px 0 rgba(255,255,255,0.6) inset, 0 24px 60px -30px rgba(0,0,0,0.25)",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        cinema: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        editorial: "720ms",
        cinema: "900ms",
      },
      spacing: {
        "section-y-sm": "4.5rem",
        "section-y": "6.5rem",
        "section-y-md": "8.5rem",
        "section-y-lg": "11rem",
        "section-y-xl": "14rem",
      },
      backgroundImage: {
        "halo-red":
          "radial-gradient(120% 80% at 50% 0%, rgba(192,0,0,0.10), transparent 60%)",
        "fade-down":
          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
        "fade-up":
          "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
