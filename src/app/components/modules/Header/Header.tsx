"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { routes } from "./utils";
import { ControllerLanguage, ControllerTheme } from "@/app/components/elements";

export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex gap-2 justify-between items-center max-[1024px]:hidden">
      <p className="text-[1.7rem] jetbrains-mono">
        <span className="khula-extrabold text-[#00FF99]">{`{`} </span>
        Jaja
        <span className="khula-extrabold text-[#00FF99]"> {`}`}</span>
      </p>

      <div className="flex gap-16 justify-center items-center flex-1 max-w-96">
        {routes.map((route) => {
          const isActive =
            route.path === "/"
              ? pathname === route.path
              : pathname.startsWith(route.path);
          return (
            <Link
              key={route.id}
              href={route.path}
              className="relative flex gap-2 flex-col place-items-center h-auto"
            >
              <span className="inter text-base">{route.label}</span>
              {isActive && (
                <div className="absolute flex w-2 h-2 rounded-lg bg-accent-foreground top-7" />
              )}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-2 items-center w-auto">
        <ControllerLanguage />
        <ControllerTheme />
      </div>
    </div>
  );
};
