"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { project } from "@/app/types";
import { findProjectById } from "./services";
import { mocks } from "@/app/services/mocks";
import { emptyProject } from "@/app/utils/emptys";
import { Text, Title } from "@/app/components/elements";
import { Layout, Carousel } from "@/app/components/organism";
import { SlugIcon } from "@/app/components/elements/SlugIcon";
import { cn } from "@/app/utils/utils";

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const [dataProject, setDataProject] = useState<project>(emptyProject);
  const [imageActive, setImageActive] = useState(dataProject.images[0]);

  useEffect(() => {
    findProjectById(parseFloat(id as string)).then((project) => {
      setDataProject(project as project);
      setImageActive(project.images[0]);
    });
  }, [id]);

  return (
    <Layout>
      <div className="w-full gap-9 mt-5 h-auto flex flex-col justify-start items-start px-8">
        {Boolean(mocks.projects.length) && (
          <div className="flex w-full h-28 justify-center items-center text-black relative z-20">
            <Carousel projects={mocks.projects} />
          </div>
        )}

        <div className="w-full h-full gap-5 grid grid-cols-1 lg:grid-cols-2 pb-5">
          <div className="flex flex-col w-full h-full">
            <Title className="text-6xl mb-4">{dataProject.title}</Title>
            <Text className="text-xl uppercase text-foreground font-extralight">
              NOVEMBER 2024 - NOVEMBER 2024
            </Text>

            <Text className="my-8 text-2xl max-w-[790px]">
              {dataProject.description}
            </Text>

            <div className="flex flex-wrap items-center w-full gap-[10px] justify-start">
              <SlugIcon slugs={dataProject.slugs} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Image
              src={imageActive.url}
              alt={`Image project ${dataProject.title}`}
              className={cn(
                "w-full h-full max-w-[920px] border-[3px] rounded-2xl object-cover border-foreground",
                dataProject.images.length ? "max-h-[540px]" : "max-h-[660px]"
              )}
            />

            <div className="grid grid-cols-3 gap-4">
              {dataProject.images
                .filter(({ id }) => id !== imageActive.id)
                .map((item, index) => (
                  <Image
                    key={index}
                    src={item.url}
                    alt={`Imagem ${index + 1}`}
                    onClick={() => setImageActive(item)}
                    className={cn(
                      "w-full cursor-pointer h-full min-h-20 min-w-20 lg:max-w-[290px] lg:max-h-[150px] border-2 rounded-xl object-cover !border-black dark:border-white"
                    )}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
