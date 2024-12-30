import { getIcons } from "@/app/assets/icons";
import { stack } from "@/app/types";

export const stacks: stack[] = [
  {
    id: 1,
    name: "figma",
    url: getIcons('figma'),
  },
  {
    id: 2,
    name: "typescript",
    url: getIcons('typescript'),
  },
  {
    id: 3,
    name: "react",
    url: getIcons('react'),
  },
  {
    id: 4,
    name: "metamask",
    url: getIcons('metamask'),
  },
  {
    id: 5,
    name: "aws",
    url: getIcons('aws'),
  },
];
