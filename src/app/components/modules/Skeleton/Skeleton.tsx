"use client";

import { motion } from "framer-motion";

import { Props } from "./@types";
import { random } from "./utils";
import { randomMove, randomOpacity } from "./utils";
import { SlugIcon } from "../../elements/SlugIcon";

export const Skeleton = ({ slugs = [] }: Props) => {
  return (
    <div className={"h-[15rem] md:h-[20rem] rounded-xl z-0"}>
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          <SlugIcon isSecondary slugs={slugs} />
        </div>

        <div className="h-40 w-px absolute top-12 md:top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
          <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.span
                  key={`star-${i}`}
                  animate={{
                    top: `calc(${random() * 100}% + ${randomMove()}px)`,
                    left: `calc(${random() * 100}% + ${randomMove()}px)`,
                    opacity: randomOpacity(),
                    scale: [1, 1.2, 0],
                  }}
                  transition={{
                    duration: random() * 2 + 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    top: `${random() * 100}%`,
                    left: `${random() * 100}%`,
                    width: `2px`,
                    height: `2px`,
                    borderRadius: "50%",
                    zIndex: 1,
                  }}
                  className="inline-block bg-black dark:bg-white"
                ></motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
