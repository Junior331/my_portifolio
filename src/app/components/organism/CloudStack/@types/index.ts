import { fetchSimpleIcons } from "react-icon-cloud";

export type Props = {
  iconSlugs: string[];
};
export type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;
