"use client";

import { Props } from "./@types";
import { CloudContainer } from "../../elements";
import { SlugIcon } from "../../elements/SlugIcon";

export const CloudStack = ({ iconSlugs }: Props) => {
  return (
    <CloudContainer>
      <SlugIcon slugs={iconSlugs} />
    </CloudContainer>
  );
};
