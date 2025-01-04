import { replicateProjectsProps } from "./@types";

export const replicateProjects = ({
  times,
  projects,
}: replicateProjectsProps) => {
  return Array(times)
    .fill(null)
    .flatMap((_, iteration) => {
      return projects.map((project) => {
        const newId = iteration * projects.length + project.id;
        return {
          ...project,
          id: newId,
          stacks: project.stacks.map((stack, index) => ({
            ...stack,
            id: index + 1,
          })),
        };
      });
    });
};