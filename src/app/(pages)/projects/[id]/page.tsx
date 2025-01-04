"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { project } from "@/app/types";
import { cn } from "@/app/utils/utils";
import { fetchProjects } from "../services";
import { findProjectById } from "./services";
import { emptyProject } from "@/app/utils/emptys";
import { Text, Title } from "@/app/components/elements";
import { Layout, Carousel } from "@/app/components/organism";

export default function Project() {
  const { id } = useParams<{ id: string }>();
  const [listProjects, setListProjects] = useState<project[]>([]);
  const [dataProject, setDataProject] = useState<project>(emptyProject);

  useEffect(() => {
    findProjectById(parseFloat(id as string)).then((project) => {
      setDataProject(project);
    });
  }, [id]);

  useEffect(() => {
    fetchProjects().then((allProjects) => {
      setListProjects(allProjects);
    });
  }, []);

  return (
    <Layout>
      <div className="w-full gap-9 mt-5 h-auto flex flex-col justify-start items-start px-8">
        {Boolean(listProjects.length) && (
          <div className="flex w-full h-28 justify-center items-center text-black relative z-20">
            <Carousel projects={listProjects} />
          </div>
        )}

        <div className="w-full h-full gap-5 grid grid-cols-1 lg:grid-cols-2 pb-5">
          <div className="flex flex-col w-full h-full">
            <Title className="text-6xl">{dataProject.title}</Title>
            <Text className="text-xl uppercase text-foreground font-extralight">
              NOVEMBER 2024 - NOVEMBER 2024
            </Text>

            <Text className="my-8 text-2xl max-w-[790px]">
              {dataProject.description}
            </Text>

            <div className="flex w-full h-auto">
              <div className="flex flex-wrap items-center w-screen gap-3">
                {dataProject.stacks.map((item) => (
                  <div
                    key={item.id}
                    className={cn(
                      `h-16 w-16 circle-3 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)] shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`
                    )}
                  >
                    <Image
                      src={item.url}
                      alt={`Icons ${item.name}`}
                      className="h-10 w-10 "
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Image
            src={dataProject.image}
            alt={`Image project ${dataProject.title} `}
            className="w-full h-full lg:max-w-[920px] lg:max-h-[660px] border-[3px] rounded-2xl object-cover border-foreground"
          />
        </div>
      </div>
    </Layout>
  );
}
