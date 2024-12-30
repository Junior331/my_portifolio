import { project } from "@/app/types";
import { mocks } from "@/app/services/mocks";
import { images } from "@/app/assets/images";

export const emptyProject: project = {
  id: 0,
  title: "Lorem ipsum",
  text: "Lorem ipsum",
  image: images.placeholder,
  stacks: mocks.projects[0].stacks,
  date: "NOVEMBER 2024 - NOVEMBER 2024",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
};