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

import projectShop from "./project_shop.png";
import projectXgrow from "./project_xgrow.png";
import project_snowdex from "./project_snowdex.png";
import project_cupmind from "./project_cupmind.png";
import projectLocalize from "./project_localize.png";
import projectDogzverse from "./project_dogzverse.png";
import project_dashboard from "./project_dashboard.png";
import project_featoubeat from "./project_featoubeat.png";
import project_marketplace from "./project_marketplace.png";
import project_claim_token from "./project_claim_token.png";
import projeto_camisa_cria from "./projeto_camisa_cria.png";
import project_dashboard_nrg from "./project_dashboard_nrg.png";
import project_challenge_next from "./project_challenge_next.png";
import projectConvit3Digital from "./project_convit3_digital.png";
import projectCheckoutCarbon from "./project_checkout_carbon.png";
import project_dashboard_casino from "./project_dashboard_casino.png";
import project_dashboard_lovestaking from "./project_dashboard_lovestaking.png";

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
  projectShop,
  logoSicredi,
  placeholder,
  loveMonster,
  logoInforce,
  projectXgrow,
  logoPetrobras,
  projectLocalize,
  projectDogzverse,
  marketplaceProject,
  projectConvit3Digital,
  projectCheckoutCarbon,
  mainWebsiteLovemonster,
  zombieCollectionLovemonster,

  project_snowdex,
  project_cupmind,
  project_dashboard,
  project_featoubeat,
  project_marketplace,
  project_claim_token,
  projeto_camisa_cria,
  project_dashboard_nrg,
  project_challenge_next,
  project_dashboard_casino,
  project_dashboard_lovestaking,
};

type IImage = keyof typeof images;

export const getImage = (id: IImage) => {
  return images[id] ?? images.fallback;
};
