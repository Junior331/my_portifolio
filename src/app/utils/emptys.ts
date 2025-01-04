import { ICloud } from "react-icon-cloud";

import { project } from "@/app/types";
import { mocks } from "@/app/services/mocks";
import { images } from "@/app/assets/images";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

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