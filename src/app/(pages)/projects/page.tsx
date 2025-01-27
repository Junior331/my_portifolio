"use client";

import { mocks } from "@/app/services/mocks";
import { Card, Layout } from "@/app/components/organism";

export default function Projects() {
  return (
    <Layout>
      <div className="w-full h-auto flex-1 flex flex-col justify-between items-center pb-6">
        <Card projects={mocks.projects} />
      </div>
    </Layout>
  );
}
