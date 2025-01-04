"use client";

import Image from "next/image";
import { useEffect } from "react";
import { animate, motion } from "framer-motion";

import {
  random,
  sequence,
  randomMove,
  listClassName,
  randomOpacity,
  listClassNameIcon,
} from "./utils";
import { Props } from "./@types";
import { cn } from "@/app/utils/utils";
import { mocks } from "@/app/services/mocks";

export const Skeleton = ({ stacks = mocks.projects[0].stacks }: Props) => {

  useEffect(() => {
    sequence.forEach((item) => {
      animate(item[0], item[1], {
        repeat: Infinity,
        repeatDelay: 1,
      });
    });
  }, []);

  return (
    <div className={"h-[15rem] md:h-[20rem] rounded-xl z-0"}>
      <div className="p-8 overflow-hidden h-full relative flex items-center justify-center">
        <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
          {stacks.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
                listClassName[idx]
              )}
            >
              <Image
                src={item.url}
                alt={`Icons ${item.name}`}
                className={listClassNameIcon[idx]}
              />
            </div>
          ))}
        </div>

        <div className="h-40 w-px absolute top-12 md:top-20 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move ">
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
