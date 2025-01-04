import { project } from "@/app/types";

export type Props = {
  projects: project[];
};

export type replicateProjectsProps = Props & {
  times: number;
};
