import { projects } from "@/app/services/mocks/projects";
import { emptyProject } from "@/app/utils/emptys";

export const findProjectById = (
  id: number
): Promise<(typeof projects)[0]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = projects.find((project) => project.id === id);
      resolve(project || emptyProject);
    }, 300);
  });
};
