"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CSSProperties, useEffect, useState } from "react";

import { handleDownload } from "./utils";
import { AnimatedSubscribeButtonProps } from "./@types";

export const Button = ({
  changeText = "",
  initialText = "",
  downloadFileUrl = "",
  downloadStatus = false,
  buttonColor = "#15161A",
  buttonTextColor = "#ffffff",
}: AnimatedSubscribeButtonProps) => {
  const [isDownload, setIsDownload] = useState<boolean>(downloadStatus);

  useEffect(() => {
    if (isDownload) {
      const timeoutId = setTimeout(() => {
        setIsDownload(false);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [isDownload]);

  return (
    <AnimatePresence mode="wait">
      {isDownload ? (
        <motion.button
          disabled
          className="relative flex w-full max-w-80 h-14 items-center justify-center overflow-hidden rounded-md bg-[#15161A] p-2"
          onClick={() => setIsDownload(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.span
            key="action"
            className="relative flex h-full w-full font-semibold items-center justify-center"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            style={{ color: buttonColor }}
          >
            {changeText}
          </motion.span>
        </motion.button>
      ) : (
        <motion.button
          className="relative flex w-full max-w-80 h-14 cursor-pointer items-center justify-center rounded-md border-none p-2 animate-pulse bg-[#15161A]"
          style={
            {
              backgroundColor: buttonColor,
              color: buttonTextColor,
              "--pulse-color": "#212222",
              "--duration": "1.5s",
            } as CSSProperties
          }
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => handleDownload({ downloadFileUrl, setIsDownload })}
        >
          <motion.span
            key="reaction"
            initial={{ x: 0 }}
            className="relative block font-semibold"
            exit={{ x: 50, transition: { duration: 0.1 } }}
          >
            {initialText}
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
