import { Title } from "@/app/components/elements";
import { Layout } from "@/app/components/organism";

export default function Projects() {
  return (
    <Layout>
      <div className="w-screen h-auto flex-1 flex flex-col justify-between items-center pb-6">
        <Title className="text-5xl leading-[55px] font-extrabold">Projects</Title>
      </div>
    </Layout>
  );
};
