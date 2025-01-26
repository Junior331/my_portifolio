"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { CSSProperties, useEffect } from "react";

import { images } from "@/app/assets/images";
import { mocks } from "@/app/services/mocks";
import { cn, handleRedirect } from "@/app/utils/utils";
import { Text, Title } from "@/app/components/elements";
import { Layout, Timeline } from "@/app/components/organism";
import { SlugIcon } from "@/app/components/elements/SlugIcon";
import { dataFreelance, dataHackathons, data as dataTimeLine } from "./utils";
import { icons } from "@/app/assets/icons";

export default function About() {
  const { theme } = useTheme();

  useEffect(() => {
    console.log("theme ::", theme);
  }, [theme]);

  if (!theme) return null;

  return (
    <Layout>
      <div className="w-full h-auto flex-1 flex flex-col justify-between items-center pb-6 gap-10">
        <div className="w-full h-full gap-5 grid grid-cols-1 lg:grid-cols-2 pb-5 place-items-start lg:pr-20 ">
          <div className="flex flex-col w-full h-full lg:px-9 gap-4 lg:order-1 order-2">
            <Title className="text-5xl mb-5 mt-10">Top ? Vamos lá =)</Title>
            <Text className="text-lg max-w-4xl">
              Desenvolvedor Mobile e Web Com 6 anos de experiência na área de
              Tecnologia da Informação e 5 anos de atuação no mercado com foco
              em aplicações React, React Native e TypeScript. Procuro trabalhar
              em projetos que melhorem a vida das pessoas por meio da
              tecnologia. Não quero ser apenas um desenvolvedor de código, mas
              entender a finalidade e o usuário alvo do produto em que vou
              trabalhar.
            </Text>
            <Text className="text-lg max-w-4xl">
              Tenho experiência no desenvolvimento front-end com diversas
              tecnologias. Isso me permitiu compreender conceitos fortes e
              aplicá-los no aprendizado de novas tecnologias. Estou sempre
              aberto a novos conhecimentos, analisar problemas e apresentar
              soluções que vão além do básico.
            </Text>
            <Text className="text-lg max-w-4xl">
              Além do trabalho, sou membro do projeto Estartando Devs desde
              2019. Iniciei como aluno e, atualmente, atuo como mentor no
              desenvolvimento front-end, orientando e capacitando novos
              talentos. Este projeto é uma das minhas maiores fontes de orgulho,
              pois tenho a oportunidade de impactar positivamente a vida de
              outras pessoas e contribuir para o seu crescimento profissional,
              mesmo que de forma simples.
            </Text>
            <Text className="text-lg max-w-4xl">
              Fico à disposição para dúvidas e poder contribuir com soluções aos
              seus problemas.
            </Text>
            <div className="w-auto h-auto mt-10">
              <motion.button
                onClick={() =>
                  handleRedirect(
                    "https://calendly.com/jarilson-rk/30min?back=1"
                  )
                }
                className="relative flex w-80 h-14 cursor-pointer items-center justify-center rounded-md border-none p-2 animate-pulse"
                style={
                  {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    "--pulse-color": "#212222",
                    "--duration": "1.5s",
                  } as CSSProperties
                }
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.span
                  key="reaction"
                  initial={{ x: 0 }}
                  className="relative block font-semibold"
                  exit={{ x: 50, transition: { duration: 0.1 } }}
                >
                  Agendar um bate-papo
                </motion.span>
              </motion.button>
            </div>
          </div>

          <div
            className={cn(
              `mx-auto mt-16 max-h-[23rem] max-w-[23rem] order-1 w-screen h-screen relative rounded-full flex items-center justify-center lg:max-h-[34rem] lg:max-w-[34rem] lg:order-2 lg:mr-0`
            )}
          >
            <svg
              width="556"
              height="556"
              viewBox="0 0 556 556"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M555.375 277.938C555.375 431.168 432.591 555.375 281.14 555.375C129.69 555.375 6.90509 431.168 6.90509 277.938C6.90509 124.708 129.69 0.5 281.14 0.5C432.591 0.5 555.375 124.708 555.375 277.938Z"
                stroke={theme === "dark" ? "#fff" : "black"}
              />
              <ellipse
                cx="24.1841"
                cy="180.074"
                rx="24.1841"
                ry="24.466"
                fill={theme === "dark" ? "#fff" : "black"}
              />
            </svg>

            <Image
              src={images.avatar}
              className="absolute max-w-[90%] lg:max-w-[470px] rounded-[400px] opacity-[0.6]"
              alt={`Image avatar`}
            />

            <svg
              width="106"
              fill="none"
              height="105"
              className="absolute right-[-55px] bottom-[-20px] z-[2] max-[420px]:hidden"
              viewBox="0 0 106 105"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M105.5 52.2618C105.5 80.8254 82.613 103.971 54.3926 103.971C26.1721 103.971 3.2851 80.8254 3.2851 52.2618C3.2851 23.6982 26.1721 0.552734 54.3926 0.552734C82.613 0.552734 105.5 23.6982 105.5 52.2618Z"
                stroke={theme === "dark" ? "#fff" : "black"}
              />
              <ellipse
                cx="6.74536"
                cy="36.1726"
                rx="6.39874"
                ry="6.47333"
                fill={theme === "dark" ? "#fff" : "black"}
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col w-full h-auto lg:px-9 gap-10 ">
          <Title className="text-4xl">Skills & Expertise</Title>

          <div className="flex w-full h-auto">
            <div className="flex flex-wrap items-center w-screen gap-3 justify-start">
              <SlugIcon slugs={mocks.slugs} />
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[100dvw] w-full h-auto lg:px-9 gap-4">
          <Title className="text-4xl">Education</Title>

          <div className="flex justify-start items-start w-full h-auto">
            <div className="grid grid-cols-3 gap-3">
              {mocks.education.education.map((item) => (
                <figure
                  key={item.id}
                  className={cn(
                    "relative min-h-fit w-full min-w-[400px] cursor-default overflow-hidden rounded-2xl p-4",
                    // animation styles
                    "transition-all duration-200 ease-in-out hover:scale-[103%]",
                    theme === "dark"
                      ? "transform-gpu  dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                      : "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
                  )}
                >
                  <div className="flex flex-row items-center gap-3">
                    <div
                      className="flex min-w-10 min-h-10 size-10 items-center justify-center rounded-2xl"
                      style={{
                        backgroundColor: item.color,
                      }}
                    >
                      <span className="text-lg">
                        <Image
                          src={icons.mortarboardGif}
                          className="max-w-[28px] invert mix-blend-color-dodge"
                          alt={`Image mortarboard`}
                        />
                      </span>
                    </div>
                    <div className="flex flex-col overflow-hidden flex-1">
                      <figcaption
                        className={cn(
                          "flex flex-row items-center whitespace-pre text-lg font-medium  ",
                          theme === "dark" ? "dark:text-white" : "text-black/85"
                        )}
                      >
                        <span className="text-sm sm:text-lg text-ellipsis overflow-hidden flex-1">
                          {item.name}
                        </span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">
                          {item.time}
                        </span>
                      </figcaption>
                      <p
                        className={cn(
                          "text-sm font-normal",
                          theme === "dark"
                            ? "dark:text-white/60"
                            : "text-black/60"
                        )}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col max-w-[100dvw] w-full h-auto lg:px-9 gap-4">
          <Title className="text-4xl">Licenses & certificates</Title>

          <div className="grid grid-cols-3 gap-3">
            {mocks.education.certificates.map((item) => (
              <figure
                key={item.id}
                onClick={() => handleRedirect(item.link)}
                className={cn(
                  "relative min-h-fit w-full min-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
                  item.link ? "cursor-pointer" : "cursor-default",
                  // animation styles
                  "transition-all duration-200 ease-in-out hover:scale-[103%]",
                  theme === "dark"
                    ? "transform-gpu  dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
                    : "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
                )}
              >
                <div className="flex flex-row items-center gap-3">
                  <div
                    className="flex min-w-10 min-h-10 size-10 items-center justify-center rounded-2xl"
                    style={{
                      backgroundColor: item.color,
                    }}
                  >
                    <span className="text-lg">
                      <Image
                        src={icons.mortarboardGif}
                        className="max-w-[28px] invert mix-blend-color-dodge"
                        alt={`Image mortarboard`}
                      />
                    </span>
                  </div>
                  <div className="flex flex-col overflow-hidden flex-1">
                    <figcaption
                      className={cn(
                        "flex flex-row items-center whitespace-pre text-lg font-medium  ",
                        theme === "dark" ? "dark:text-white" : "text-black/85"
                      )}
                    >
                      <span className="text-sm sm:text-lg text-ellipsis overflow-hidden flex-1">
                        {item.name}
                      </span>
                      <span className="mx-1">·</span>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </figcaption>
                    <p
                      className={cn(
                        "text-sm font-normal",
                        theme === "dark"
                          ? "dark:text-white/60"
                          : "text-black/60"
                      )}
                    >
                      {item.issuing_organization}
                    </p>
                  </div>
                </div>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex flex-col max-w-[100dvw] w-full h-auto lg:px-9 gap-4">
          <Title className="text-4xl">Professional Experience</Title>

          <div className="flex justify-start items-start w-full h-auto">
            <Timeline data={dataTimeLine} />
          </div>
        </div>

        <div className="flex flex-col max-w-[100dvw] w-full h-auto lg:px-9 gap-4">
          <Title className="text-4xl">Freelance Experience</Title>
          <div className="flex justify-start items-start w-full h-auto">
            <Timeline data={dataFreelance} />
          </div>
        </div>

        <div className="flex flex-col max-w-[100dvw] w-full h-auto lg:px-9 gap-4">
          <Title className="text-4xl">Hackathons Experience</Title>
          <div className="flex justify-start items-start w-full h-auto">
            <Timeline data={dataHackathons} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
