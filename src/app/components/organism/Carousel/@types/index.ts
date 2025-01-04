import { project } from "@/types";

export type Props = {
  projects: project[];
};

export type replicateProjectsProps = Props & {
  times: number;
};
