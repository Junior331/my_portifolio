import { Cloud } from "react-icon-cloud";

import { Props } from "./@types";
import { cloudProps } from "@/app/utils/emptys";

export const CloudContainer = ({ children }: Props) => {
  return <Cloud {...cloudProps}>{children}</Cloud>;
};
