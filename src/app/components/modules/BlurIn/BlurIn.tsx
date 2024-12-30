"use client";

import { cn } from "@/app/utils/utils";
import { motion } from "framer-motion";
import { Props } from "./@types";


export const BlurIn = ({ word, className, variant, duration = 1 }: Props) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display tracking-[-0.02em] drop-shadow-sm",
        className,
      )}
    >
      {word}
    </motion.h1>
  );
};

