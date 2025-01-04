import cup from "./cup.svg";
import aws from "./aws.svg";
import game from "./game.svg";
import figma from "./figma.svg";
import react from "./react.svg";
import coffee from "./coffee.svg";
import devices from "./devices.svg";
import metamask from "./metamask.svg";
import medalStar from "./medal-star.svg";
import musicPlay from "./music-play.svg";
import typescript from "./typescript.svg";
import fallback from "../images/placeholder.svg";
import circleLargeAvatar from "./circle_large_avatar.svg";
import circleSmallAvatar from "./circle_small_avatar.svg";


export const icons = {
  aws,
  cup,
  game,
  react,
  figma,
  coffee,
  devices,
  fallback,
  metamask,
  musicPlay,
  medalStar,
  typescript,
  circleLargeAvatar,
  circleSmallAvatar,
};
type IIcons = keyof typeof icons;

export const getIcons = (id: IIcons) => {
  return icons[id] ?? icons.fallback;
};
