"use client";

import React from "react";
import { motion } from "framer-motion";

import { Props } from "./@types";
import { cn } from "@/app/utils/utils";
import { containerVariants, pathVariants } from "./utils";

export const PortfolioText = ({ isOpen }: Props) => {
  return (
    <div
      className={cn(
        "w-screen flex justify-center items-center min-h-screen max-[1000px]:portfolio_text_custom z-0",
        isOpen ? "hidden" : ""
        // isOpen ? "!fixed !right-[21px]" : ""
      )}
    >
      <motion.svg
        fill="none"
        width="856"
        height="290"
        className="z-20"
        initial="hidden"
        animate="visible"
        viewBox="0 0 856 290"
        variants={containerVariants}
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M18.5 171.121H1V1H43.6744C60.7952 1 74.6744 14.8792 74.6744 32V97C74.6744 114.121 60.7953 128 43.6744 128H18.5V171.121ZM18.5 17.0744V113.521H42.2605C50.5447 113.521 57.2605 106.805 57.2605 98.5209V32.0744C57.2605 23.7901 50.5447 17.0744 42.2605 17.0744H18.5Z"
        />
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M215.326 65.2977V172.46H234.079V126.916H247.474L272.926 169.781H291.679L264.888 125.577L273.568 122.421C277.542 120.975 281.094 118.564 283.904 115.403V115.403C288.05 110.739 290.34 104.716 290.34 98.4758V95.7937C290.34 87.4516 286.866 79.4863 280.753 73.8099L280.219 73.3139C274.67 68.1613 267.378 65.2977 259.805 65.2977H215.326ZM234.079 78.693V113.521H261.586C267.109 113.521 271.586 109.044 271.586 103.521V88.693C271.586 83.1702 267.109 78.693 261.586 78.693H234.079Z"
        />

        <motion.path
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M402.86 65.2977V169.781H420.274V122.898H493.949V110.842H420.274V76.0139H503.326V65.2977H402.86Z"
        />

        <motion.path
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M309.093 62.6186V76.0139H337.223V169.781H355.977V76.0139H382.767V62.6186H309.093Z"
        />

        <motion.path
          variants={pathVariants}
          transition={{ duration: 1 }}
          d="M669.428 272.926V289H747.121V272.926H669.428Z"
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
        />

        <motion.path
          variants={pathVariants}
          transition={{ duration: 1 }}
          d="M713.633 65.2977V254.172H728.367V65.2977H713.633Z"
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
        />
        <motion.path
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M645.316 63.9581V231.4H698.898V216.665H661.391V63.9581H645.316Z"
        />
        <motion.path
          strokeWidth="7"
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="stroke-[#3e4a69]/[0.2]"
          d="M96 118.25V116.75C96 91.2068 116.707 70.5 142.25 70.5C167.793 70.5 188.5 91.2068 188.5 116.75V118.25C188.5 143.793 167.793 164.5 142.25 164.5C116.707 164.5 96 143.793 96 118.25Z"
        />
        <motion.path
          strokeWidth="7"
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="stroke-[#3e4a69]/[0.2]"
          d="M753.966 118.997L753.993 116.211C754.248 90.1678 775.623 69.2929 801.664 69.6532C827.56 70.0115 848.292 91.2418 848.034 117.139L848.007 119.925C847.75 145.704 826.786 166.47 801.005 166.481C774.848 166.491 753.709 145.153 753.966 118.997Z"
        />
        <motion.path
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M777.93 129.595C777.93 136.993 783.928 142.991 791.326 142.991V142.991V142.991C798.724 142.991 804.721 136.993 804.721 129.595V128.256C804.721 120.858 798.724 114.86 791.326 114.86V114.86V114.86C783.928 114.86 777.93 120.858 777.93 128.256V129.595Z"
        />
        <motion.path
          strokeWidth="7"
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="stroke-[#3e4a69]/[0.2]"
          d="M521.466 118.997L521.493 116.211C521.748 90.1678 543.123 69.2929 569.164 69.6532C595.06 70.0115 615.792 91.2418 615.534 117.139L615.507 119.925C615.25 145.704 594.286 166.47 568.505 166.481C542.348 166.491 521.209 145.153 521.466 118.997Z"
        />
        <motion.path
          variants={pathVariants}
          transition={{ duration: 1 }}
          className="fill-[#3e4a69]/[0.2] stroke-transparent"
          d="M544.851 129.595C544.851 136.993 550.848 142.991 558.247 142.991V142.991V142.991C565.645 142.991 571.642 136.993 571.642 129.595V128.256C571.642 120.858 565.645 114.86 558.247 114.86V114.86V114.86C550.848 114.86 544.851 120.858 544.851 128.256V129.595Z"
        />
      </motion.svg>
    </div>
  );
};
