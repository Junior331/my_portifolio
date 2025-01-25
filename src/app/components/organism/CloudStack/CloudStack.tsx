"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";

import { icons } from "@/app/assets/icons";
import { IconData, Props } from "./@types";
import { cn, fetchIcons } from "@/app/utils/utils";
import { CloudContainer, RenderIcon } from "../../elements";


export const CloudStack = ({ iconSlugs }: Props) => {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    fetchIcons(iconSlugs).then(setData);
  }, [iconSlugs]);
  
  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) => {
      const emptyIcon = icon.path.length >= 5;
      return (
        <div
          key={icon.slug}
          className={cn(
            `h-12 w-12 p-3 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`
          )}
        >
          {!emptyIcon ? (
            <div className="flex items-center justify-center relative cursor-pointer">
              <Image
                className="h-6 w-6"
                alt={`Icons ${icon.slug}`}
                src={icons[icon.slug as keyof typeof icons]}
              />
              <p className="absolute text-[#d5d6d0] left-[0.95rem] top-[1.52rem] text-xs font-thin  bg-[#1e2424] !border-[0.1px] py-[0.27rem] px-[0.38rem] border-[#fcfffc]">
                {icon.slug[0].toUpperCase() + icon.slug.substring(1)}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center relative cursor-pointer">
              <RenderIcon icon={icon} theme={theme || "dark"} />
            </div>
          )}
        </div>
      );
    });
  }, [data, theme]);

  return (
    <CloudContainer>
      {renderedIcons}
    </CloudContainer>
  );
};