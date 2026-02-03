import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export function SectionHeading({ title, subtitle, alignment = "center", className = "" }: SectionHeadingProps) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <div className={`flex flex-col mb-16 ${alignClass[alignment]} ${className}`}>
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight"
      >
        {title}
      </motion.h2>
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className={`h-1 w-24 bg-gradient-to-r from-primary to-primary/40 mt-6 ${alignment === "center" ? "mx-auto" : ""}`}
      />
    </div>
  );
}
