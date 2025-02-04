"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Props } from "./@types";
import { icons } from "@/app/assets/icons";
import { RenderIcon } from "../RenderIcon";
import { cn, fetchIcons } from "@/app/utils/utils";
import { IconData } from "../../organism/CloudStack/@types";
import { listClassNameIcon } from "../../modules/Skeleton/utils";

export const SlugIcon = ({ slugs, isSecondary }: Props) => {
  const { theme } = useTheme();
  const [data, setData] = useState<IconData | null>(null);
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  useEffect(() => {
    fetchIcons(slugs).then((response) => {
      setData(response);
    });
  }, [slugs]);

  if (!data) return null;

  return Object.values(data.simpleIcons).map((icon, index) => {
    const emptyIcon = icon.path.length >= 5;

    return (
      <div
        key={icon.slug}
        className={cn(
          `cursor-pointer max-w-[70px] max-h-[70px] h-full p-5 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)] ${
            isSecondary ? listClassNameIcon[index] : ""
          }`
        )}
        onMouseLeave={() => setHoveredIcon(null)}
        onMouseEnter={() => setHoveredIcon(icon.slug)}
      >
        {!emptyIcon ? (
          <div className="flex items-center justify-center relative">
            <Image
              className="h-full w-full"
              alt={`Icons ${icon.slug}`}
              src={icons[icon.slug as keyof typeof icons]}
            />
            {hoveredIcon === icon.slug && (
              <p className="absolute text-[#d5d6d0] left-[1.75rem] top-[2.52rem] z-10 text-xs font-thin bg-[#1e2424] !border-[0.1px] py-[0.27rem] px-[0.38rem] border-[#fcfffc]">
                {icon.slug[0].toUpperCase() + icon.slug.substring(1)}
              </p>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center relative">
            <RenderIcon icon={icon} theme={theme || "dark"} />
          </div>
        )}
      </div>
    );
  });
};
