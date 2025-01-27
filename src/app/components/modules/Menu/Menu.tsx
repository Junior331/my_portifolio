"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

import { cn } from "@/app/utils/utils";
import { routes } from "../Header/utils";
import { hideNavItemsVariant } from "./utils";
import { ControllerTheme } from "../../elements";
import { ControllerLanguage } from "../../elements";

export const Menu = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <div className="navbar lg:hidden">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={cn(
              "relative menu menu-sm dropdown-content rounded-box mt-3 w-52 p-2 shadow z-50",
              theme === "dark"
                ? "transform-gpu bg-[#000000de] backdrop-blur-md [border:1px_solid_rgba(255,255,255,.1)]"
                : "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
            )}
          >
            {routes.map((route) => {
              const isActive = pathname === route.path;
              return (
                <li key={route.id}>
                  <Link href={route.path} className="!bg-transparent text-foreground">
                    {route.label}
                    {isActive && (
                      <div className="absolute flex w-2 h-2 rounded-lg bg-foreground top-[0.65rem] left-[4.25rem]" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <div className="logo-container">
          <motion.h1 variants={hideNavItemsVariant}>
            <p className="text-[1.7rem] jetbrains-mono btn btn-ghost ">
              <span className="khula-extrabold text-[#00FF99]">{`{`} </span>
              Jaja
              <span className="khula-extrabold text-[#00FF99]"> {`}`}</span>
            </p>
          </motion.h1>
        </div>
      </div>
      <div className="navbar-end">
        <ControllerLanguage />
        <ControllerTheme />
      </div>
    </div>
  );
};
