"use client";

import { motion } from "motion/react";
import { useInViewAnimation } from "@/hooks/useInViewAnimation";

export const FadeInSection = ({
  children,
  animation,
}: {
  children: React.ReactNode;
  animation?: any;
}) => {
  const { ref, isInView } = useInViewAnimation();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? animation || { opacity: 1, y: 0 } : { opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};