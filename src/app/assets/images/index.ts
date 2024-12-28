import devs from "./devs.svg";
import proz from "./proz.svg";
import visna from "./visna.svg";
import stacksBg from "./stacks_bg.svg";
import matchBet from "./match_bet.jpg";
import fallback from "./placeholder.svg";
import conectEdu from "./conect_edu.svg";
import placeholder from "./placeholder.svg";
import loveMonster from "./love_monster.png";
import marketplaceProject from "./marketplace_project.png";
import mainWebsiteLovemonster from "./main_website_lovemonster.png";
import zombieCollectionLovemonster from "./zombie_collection_lovemonster.png";



export const images = {
  devs,
  proz,
  visna,
  matchBet,
  fallback,
  stacksBg,
  conectEdu,
  placeholder,
  loveMonster,
  marketplaceProject,
  mainWebsiteLovemonster,
  zombieCollectionLovemonster,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
