import devs from "./devs.svg";
import proz from "./proz.svg";
import visna from "./visna.svg";
import storm from "./storm.png";
import avatar from "./avatar.jpg";
import area51 from "./area_51.jpg";
import youpluv from "./youpluv.jpg";
import stacksBg from "./stacks_bg.svg";
import logoVale from "./logo_vale.png";
import matchBet from "./match_bet.jpg";
import turtle01 from "./turtle_01.jpg";
import turtle02 from "./turtle_02.jpg";
import turtle03 from "./turtle_03.jpg";
import turtle04 from "./turtle_04.jpg";
import fallback from "./placeholder.svg";
import conectEdu from "./conect_edu.svg";
import logoImpar from "./logo_impar.png";
import placeholder from "./placeholder.svg";
import loveMonster from "./love_monster.png";
import logoSicredi from "./logo_sicredi.png";
import logoInforce from "./logo_inforce.svg";
import logoPetrobras from "./logo_petrobras.png";
import marketplaceProject from "./marketplace_project.png";
import mainWebsiteLovemonster from "./main_website_lovemonster.png";
import zombieCollectionLovemonster from "./zombie_collection_lovemonster.png";


export const images = {
  devs,
  proz,
  visna,
  storm,
  avatar,
  area51,
  youpluv,
  logoVale,
  matchBet,
  fallback,
  stacksBg,
  turtle01,
  turtle02,
  turtle03,
  turtle04,
  conectEdu,
  logoImpar,
  logoSicredi,
  placeholder,
  loveMonster,
  logoInforce,
  logoPetrobras,
  marketplaceProject,
  mainWebsiteLovemonster,
  zombieCollectionLovemonster,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
