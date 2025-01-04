import { projects } from "@/app/services/mocks/projects";

export const fetchProjects = (): Promise<typeof projects> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects);
    }, 300);
  });
};

