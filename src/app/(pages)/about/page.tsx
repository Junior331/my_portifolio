"use client";

import Image from "next/image";
import { CSSProperties } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

import { cn } from "@/app/utils/utils";
import { images } from "@/app/assets/images";
import { mocks } from "@/app/services/mocks";
import { data as dataTimeLine } from "./utils";
import { Text, Title } from "@/app/components/elements";
import { Layout, Timeline } from "@/app/components/organism";
import { SlugIcon } from "@/app/components/elements/SlugIcon";

export default function About() {
  const { theme } = useTheme();

  return (
    <Layout>
      <div className="w-full h-auto flex-1 flex flex-col justify-between items-center pb-6">
        <div className="w-full h-full gap-5 grid grid-cols-1 lg:grid-cols-2 pb-5 place-items-end lg:pr-20 ">
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
                  Iniciar Conversa no WhatsApp
                </motion.span>
              </motion.button>
            </div>
          </div>

          <div
            className={cn(
              `mx-auto my-0 max-h-[23rem] max-w-[23rem] order-1 w-screen h-screen relative rounded-full flex items-center justify-center lg:max-h-[34rem] lg:max-w-[34rem] lg:order-2 lg:mr-0`
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
        <div className="flex flex-col w-full h-auto lg:px-9 gap-10 my-10">
          <Title className="text-4xl">Skills & Expertise</Title>

          <div className="flex w-full h-auto">
            <div className="flex flex-wrap items-center w-screen gap-3 justify-start">
              <SlugIcon slugs={mocks.slugs} />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[100dvw] w-full h-auto lg:px-9 gap-4">
          <Title className="text-4xl">Professional Experience</Title>
          <Text className="max-w-[550px] leading-6">
            Tenho me dedicado ao desenvolvimento de soluções criativas e
            impactantes ao longo dos últimos anos. Aqui está um resumo das
            minhas experiências e aprendizados no setor.
          </Text>

          <div className="flex justify-start items-start w-full h-auto">
            <Timeline data={dataTimeLine} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
