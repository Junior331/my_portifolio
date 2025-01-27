import cup from "./cup.svg";
import yup from "./yup.jpg";
import game from "./game.svg";
import figma from "./figma.svg";
import azure from "./azure.png";
import react from "./react.svg";
import teams from "./teams.png";
import vscode from "./vscode.png";
import amazonaws from "./aws.svg";
import coffee from "./coffee.svg";
import devices from "./devices.svg";
import metamask from "./metamask.svg";
import avalanche from "./avalanche.png";
import medalStar from "./medal-star.svg";
import musicPlay from "./music-play.svg";
import sharepoint from "./sharepoint.png";
import typescript from "./typescript.svg";
import confluence from "./confluence.png";
import fallback from "../images/placeholder.svg";
import circleLargeAvatar from "./circle_large_avatar.svg";
import circleSmallAvatar from "./circle_small_avatar.svg";

import mortarboardGif from "./mortarboard.gif";
import mortarboard from "./mortarboard.png";

export const icons = {
  cup,
  yup,
  game,
  react,
  figma,
  teams,
  azure,
  coffee,
  vscode,
  devices,
  fallback,
  metamask,
  musicPlay,
  avalanche,
  medalStar,
  amazonaws,
  confluence,
  typescript,
  sharepoint,
  mortarboard,
  mortarboardGif,
  circleLargeAvatar,
  circleSmallAvatar,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
