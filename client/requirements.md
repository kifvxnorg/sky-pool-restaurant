## Packages
framer-motion | Essential for cinematic animations and page transitions
react-icons | For social icons and UI elements (Lucide is base, but react-icons gives more variety if needed, though Lucide is usually sufficient. Stick to Lucide for consistency if possible, or add this if specific brand icons are needed)
date-fns | For date formatting in reservation forms

## Notes
Tailwind Config - extend fontFamily:
fontFamily: {
  serif: ["var(--font-serif)"],
  sans: ["var(--font-sans)"],
}
colors:
  gold: {
    DEFAULT: "#D4A373",
    light: "#F8E9A1",
    dark: "#9C7653"
  }
  midnight: "#0c0c0c"
  neon: "#3AB0FF"
