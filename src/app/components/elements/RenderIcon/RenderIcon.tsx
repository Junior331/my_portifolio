/* eslint-disable @typescript-eslint/no-explicit-any */
import { renderSimpleIcon, SimpleIcon } from "react-icon-cloud";

export function RenderIcon({
  icon,
  theme,
}: {
  icon: SimpleIcon;
  theme: string;
}) {
  const bgHex = theme === "dark" ? "#080510" : "#f3f2ef";
  const fallbackHex = theme === "dark" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  const renderedIcon = renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      rel: undefined,
      href: undefined,
      target: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });

  return (
    <div className="relative flex flex-col items-center">{renderedIcon}</div>
  );
}
