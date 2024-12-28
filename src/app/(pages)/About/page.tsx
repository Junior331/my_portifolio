import { Title } from "@/app/components/elements";
import { Layout } from "@/app/components/organism";

export const About = () => {
  return (
    <Layout>
      <div className="w-full h-auto flex flex-col justify-center items-start gap-4">
        <Title className="text-4xl">About</Title>
      </div>
    </Layout>
  );
};
