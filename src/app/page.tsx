/* eslint-disable react/no-unescaped-entities */
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
                  I am a Mobile and Web Developer with 6 years of experience in
                  Information Technology and 5 years in the market, focusing on
                  React, React Native, and TypeScript applications. I strive to
                  work on projects that positively impact people's lives through
                  technology. My goal is not just to write code but to deeply
                  understand the product's purpose and target audience to bring
                  real value to the project.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  Currently, I work as a front-end developer, contributing to
                  the digital experience of thousands of new users on a Web3
                  platform. I specialize in creating reusable components
                  integrated with Styled Components, leveraging my skills in
                  React, TypeScript, and other technologies to deliver efficient
                  and high-quality solutions.
                </p>
              </BoxReveal>

              <BoxReveal boxColor={"#262626"} duration={0.5}>
                <p className="inter capitalize text-lg font-extralight">
                  I am available to address any questions and contribute
                  solutions to your challenges.
                </p>
              </BoxReveal>

              <div className="z-10 flex mt-16 items-center justify-start padding-button w-full max-w-80">
                <BoxReveal width="100%" boxColor={"#262626"} duration={0.5}>
                  <Button
                    downloadStatus={false}
                    initialText={
                      <span className="group inline-flex items-center">
                        Download my resume
                        {/* <DownloadIcon className="ml-2 size-4 transition-transform duration-300" /> */}
                      </span>
                    }
                    changeText={
                      <span className="group inline-flex items-center">
                        {/* <CheckIcon className="mr-2 size-4" /> */}
                        Downloaded
                      </span>
                    }
                    downloadFileUrl="/jarilson-cv.pdf" // Atualize para o caminho correto
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
          <div className="flex gap-12 max-[450px]:flex-wrap items-center justify-between flex-1 max-w-[780px]">
            <div className="w-auto flex items-center gap-3">
              <p className="flex items-center text-3xl font-bold ">
                + <NumberTicker value={6} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Years of <br /> experience
              </p>
            </div>
            <div className="w-auto flex items-center gap-3">
              <p className="flex items-center text-3xl font-bold ">
                + <NumberTicker value={14} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Technologies <br /> Mastered
              </p>
            </div>
            <div className="w-auto flex items-center gap-3">
              <p className="flex items-center text-3xl font-bold ">
                + <NumberTicker value={2180} />
              </p>
              <p className="inter text-lg max-[465px]:text-base">
                Commits in <br /> Projects
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
