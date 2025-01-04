/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { Props } from "./@types";
import { cn } from "@/app/utils/utils";
import { routes } from "../Header/utils";
import { hideNavItemsVariant } from "./utils";
import { ControllerTheme } from "../../elements";
import { ControllerLanguage } from "../../elements";
import { useMenuAnimation } from "@/app/hooks/useMenuAnimation";

const Path = (props: any) => (
  <path
    strokeWidth="3"
    fill="transparent"
    strokeLinecap="round"
    stroke="hsl(var(--background))"
    {...props}
  />
);

export const Menu = ({ isOpen, setIsOpen }: Props) => {
  const pathname = usePathname();
  const scope = useMenuAnimation(isOpen);

  return (
    <div
      className="w-full flex gap-2 justify-between items-center lg:hidden"
      ref={scope}
    >
      <div className="logo-container">
        <motion.h1 variants={hideNavItemsVariant}>
          {" "}
          <p className="text-[1.7rem] jetbrains-mono">
            <span className="khula-extrabold text-[#00FF99]">{`{`} </span>
            Jaja
            <span className="khula-extrabold text-[#00FF99]"> {`}`}</span>
          </p>
        </motion.h1>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "btn btn-circle button_menu z-10",
          isOpen ? "fixed left-[88%]" : "absolute "
        )}
      >
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            d="M 2 2.5 L 20 2.5"
            className="top"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
          <Path
            d="M 2 16.346 L 20 16.346"
            className="bottom"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>

      <nav className="menu">
        <ul >
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <li key={route.id}>
                <Link href={route.path} className="!bg-transparent">
                  {route.label}
                  {isActive && (
                    <div className="absolute flex w-2 h-2 rounded-lg bg-background top-7 left-3" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-1 items-end mb-10">
          <ControllerLanguage />
          <ControllerTheme />
        </div>
      </nav>
    </div>
  );
};
