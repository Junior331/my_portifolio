import { ReactNode } from "react";

export interface Props {
  boxColor?: string;
  duration?: number;
  children: ReactNode;
  width?: "fit-content" | "100%";
}
