"use client";

import { mocks } from "@/app/services/mocks";
import { Button, Title } from "@/app/components/elements";
import { CloudStack, Layout } from "@/app/components/organism";
import { BlurIn, BoxReveal, NumberTicker } from "@/app/components/modules";

export default function Home() {
  return (
    <Layout>
      <div className="w-full h-auto flex-1 flex flex-col justify-between items-center pb-6">
        <div className="flex h-auto mt-10 items-center justify-between w-full max-[1000px]:flex-wrap max-[1000px]:px-6 ">
          <div className="flex flex-col gap-14 w-full ">
            <BoxReveal boxColor={"#262626"} duration={0.5}>
              <Title className="text-5xl leading-[55px] font-extrabold">
                Hi, I’m <br />
                JARILSON REIS
              </Title>
            </BoxReveal>

            <div className="flex flex-col gap-3 max-w-[760px] ">
              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Sou desenvolvedor Mobile e Web com 6 anos de experiência em
                  Tecnologia da Informação e 5 anos de atuação no mercado, com
                  foco em aplicações React, React Native e TypeScript. Procuro
                  trabalhar em projetos que impactem positivamente a vida das
                  pessoas por meio da tecnologia. Meu objetivo não é apenas
                  desenvolver código, mas entender profundamente o propósito do
                  produto e o público-alvo para agregar valor real ao projeto.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Atualmente, atuo como desenvolvedor front-end, contribuindo
                  para a experiência digital de milhares de novos usuários em
                  uma plataforma Web3. Sou especialista em criar componentes
                  reutilizáveis e integrados com Styled Components, aplicando
                  minhas habilidades em React, TypeScript e outras tecnologias
                  para oferecer soluções eficientes e de alta qualidade.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Fico à disposição para dúvidas e poder contribuir com soluções
                  aos seus problemas.
                </p>
              </BoxReveal>

              <div className="z-10 flex mt-16 items-center justify-start padding-button">
                <BoxReveal boxColor={"#262626"} duration={0.5}>
                  <Button
                    downloadStatus={false}
                    initialText={
                      <span className="group inline-flex items-center">
                        Baixe o meu curriculo
                        {/* <DownloadIcon className="ml-2 size-4 transition-transform duration-300" /> */}
                      </span>
                    }
                    changeText={
                      <span className="group inline-flex items-center">
                        {/* <CheckIcon className="mr-2 size-4" /> */}
                        Baixado
                      </span>
                    }
                    downloadFileUrl={"@/app/assets/Lorem-Ipsum.pdf"}
                  />
                </BoxReveal>
              </div>
            </div>
          </div>

          <div className="m-auto relative flex h-auto max-w-[530px] w-full flex-col items-center justify-center overflow-hidden background">
            <CloudStack iconSlugs={mocks.slugs} />
          </div>
        </div>
        <div className="flex max-[465px]:flex-col-reverse max-[1000px]:flex-wrap-reverse max-[608px]:gap-16 max-[608px]:mt-14 gap-8 place-items-end justify-between bottom-8 w-screen px-8">
          <div className="flex gap-8">
            <a
              className="inter capitalize text-base cursor-pointer"
              href="https://www.linkedin.com/in/jarilson-reis-b624a3172/"
              target="_blank"
            >
              <BlurIn
                word="Linkedin"
                className="inter capitalize text-base cursor-pointer"
              />
            </a>
            <a
              className="inter capitalize text-base cursor-pointer"
              href="https://github.com/Junior331"
              target="_blank"
            >
              <BlurIn
                word="Github"
                className="inter capitalize text-base cursor-pointer"
              />
            </a>
          </div>
          <div className="flex gap-12 max-[420px]:flex-wrap max-[465px]:flex-1 items-center justify-between flex-1 max-w-[780px]">
            <div className="w-auto flex items-center gap-3">
              <p className="flex items-center text-3xl font-bold ">
                + <NumberTicker value={6} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Anos de <br /> expêrincia
              </p>
            </div>
            <div className="w-auto flex items-center gap-3">
              <p className="flex items-center text-3xl font-bold ">
                + <NumberTicker value={14} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Tecnologias <br /> Dominadas
              </p>
            </div>
            <div className="w-auto flex items-center gap-3">
              <p className="flex items-center text-3xl font-bold ">
                + <NumberTicker value={2180} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Commits em <br /> Projetos
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
