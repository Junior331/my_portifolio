import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { fetchSimpleIcons } from "react-icon-cloud";

import { stack } from "@/app/types";

export const getCurrentDate = (): string => {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const year = now.getFullYear();
  return `${day}-${month}-${year}`;
};

export const generateRandomNumber = (untilNumbers: number) =>
  Math.floor(Math.random() * untilNumbers);

export const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;

export const generateRandomStacks = (stacks: stack[]) => {
  const selectedStacks = new Set();

  while (selectedStacks.size < 4) {
    const randomStack = stacks[getRandomInt(0, stacks.length)];
    selectedStacks.add(randomStack);
  }

  return Array.from(selectedStacks);
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const fetchIcons = (iconSlugs: string[]) => {
  return fetchSimpleIcons({ slugs: iconSlugs });
};

export const handleRedirect = (router: string) => {
  if (router) {
    window.open(router, "_blank");
  }
};
