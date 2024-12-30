"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { Props } from "./@types";
import { cn } from "@/app/utils/utils";

export const NumberTicker = ({
  value = 0,
  delay = 0,
  className,
  direction = "up",
  decimalPlaces = 0,
}: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });
  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value || 0);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces) || 0));
        }
      }),
    [springValue, decimalPlaces]
  );

  return (
    <>
      <span
        className={cn(
          "inline-block text-[3rem] tabular-nums text-title tracking-wider max-[465px]:text-[2.19rem]",
          className
        )}
        ref={ref}
      >
        {ref.current?.textContent ?? "0"}
      </span>
    </>
  );
};
