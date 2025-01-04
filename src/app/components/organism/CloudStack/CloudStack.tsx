"use client";

import { useTheme } from "next-themes";
import { IconData, Props } from "./@types";
import { fetchIcons } from "@/app/utils/utils";
import { useEffect, useMemo, useState } from "react";
import { CloudContainer, RenderIcon } from "../../elements";


export const CloudStack = ({ iconSlugs }: Props) => {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();
  
  useEffect(() => {
    fetchIcons(iconSlugs).then(setData);
  }, [iconSlugs]);
  
  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) => (
      <RenderIcon key={icon.slug} icon={icon} theme={theme || "dark"} />
    ));
  }, [data, theme]);

  return (
    <CloudContainer>
      <>{renderedIcons}</>
    </CloudContainer>
  );
};
