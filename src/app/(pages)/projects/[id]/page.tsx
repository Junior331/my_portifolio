"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { project } from "@/app/types";
import { fetchProjects } from "../services";
import { findProjectById } from "./services";
import { emptyProject } from "@/app/utils/emptys";
import { Text, Title } from "@/app/components/elements";
import { Layout, Carousel } from "@/app/components/organism";
import { SlugIcon } from "@/app/components/elements/SlugIcon";

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

          <Image
            src={dataProject.banner}
            alt={`Image project ${dataProject.title} `}
            className="w-full h-full lg:max-w-[920px] lg:max-h-[660px] border-[3px] rounded-2xl object-cover border-foreground"
          />
        </div>
      </div>
    </Layout>
  );
}
