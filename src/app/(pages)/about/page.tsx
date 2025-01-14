"use client";

import Image from "next/image";
import { CSSProperties } from "react";
import { motion } from "framer-motion";

import { data } from "./utils";
import { cn } from "@/app/utils/utils";
import { icons } from "@/app/assets/icons";
import { images } from "@/app/assets/images";
import { mocks } from "@/app/services/mocks";
import { Text, Title } from "@/app/components/elements";
import { Layout, Timeline } from "@/app/components/organism";

export default function About() {
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
            <Image src={icons.circleLargeAvatar} alt={`Icon circle`} />
            <Image
              src={images.avatar}
              className="absolute max-w-[90%] lg:max-w-[470px] rounded-[400px] opacity-[0.6]"
              alt={`Image avatar`}
            />

            <Image
              alt={`Icon circle`}
              src={icons.circleSmallAvatar}
              className="absolute right-[-55px] bottom-[-20px] z-[2] max-[420px]:hidden"
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-auto lg:px-9 gap-10 mb-10">
          <Title className="text-4xl">Skills & Expertise</Title>

          <div className="flex w-full h-auto">
            <div className="flex flex-wrap items-center w-screen gap-3 justify-start">
              {[
                ...mocks.projects[0].stacks,
                ...mocks.projects[0].stacks,
                ...mocks.projects[0].stacks,
                ...mocks.projects[0].stacks,
              ].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className={cn(
                    `h-12 w-12 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`
                  )}
                >
                  <Image
                    src={item.url}
                    className="h-6 w-6"
                    alt={`Icons ${item.name}`}
                  />
                </div>
              ))}
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
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
