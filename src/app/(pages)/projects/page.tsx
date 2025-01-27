"use client";

import { useEffect,useState } from "react";

import { project } from "@/app/types";
import { fetchProjects } from "./services";
import { emptyProject } from "@/app/utils/emptys";
import { Card, Layout } from "@/app/components/organism";

export default function Projects() {
  const [listProjects, setListProjects] = useState<project[]>([emptyProject]);

  useEffect(() => {
    fetchProjects().then((allProjects) => {
      setListProjects(allProjects as project[]);
    });
  }, []);

  return (
    <Layout>
      <div className="w-full h-auto flex-1 flex flex-col justify-between items-center pb-6">
        {Boolean(listProjects[0].id) && <Card projects={listProjects || []} />}
      </div>
    </Layout>
  );
}
