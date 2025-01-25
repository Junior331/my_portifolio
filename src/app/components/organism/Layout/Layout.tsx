"use client";

import { LayoutProps } from "./@types";
import { cn } from "@/app/utils/utils";
import { DotPattern } from "./DotPattern";
import { Header } from "@/app/components/modules";

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-between relative overflow-y-auto">
      <div className="fixed top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border md:shadow-xl">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
          )}
        />
      </div>
      <div className="fixed pointer-events-none inset-0 flex items-center justify-center bg-transparent [mask-image:radial-gradient(ellipse_at_center,transparent_20%, black)]" />
      <div className="flex flex-col w-full min-h-screen h-auto items-center justify-items-center overflow-y-auto relative z-50 p-7 px-8">
        <Header />
        {children}
      </div>
    </div>
  );
};
