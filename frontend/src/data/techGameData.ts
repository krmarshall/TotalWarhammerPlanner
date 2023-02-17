import { TechDataInterface } from '../types/interfaces/GameInterface';
import gameData from './gameData';
// import radious2Techs from './techs/radiou2Techs';
import radious3Techs from './techs/radious3Techs';
import sfo33Techs from './techs/sfo3Techs';
// import sfo2Techs from './techs/sfo2Techs';
import vanilla2Techs from './techs/vanilla2Techs';
import vanilla3Techs from './techs/vanilla3Techs';

const techGameData: { [key: string]: TechDataInterface } = {
  vanilla2: {
    text: gameData.vanilla2.text,
    image: gameData.vanilla2.image,
    updated: gameData.vanilla2.updated,
    category: gameData.vanilla2.category,
    techTrees: vanilla2Techs,
  },
  // radious2: {
  //   text: gameData.radious2.text,
  //   image: gameData.radious2.image,
  //   updated: gameData.radious2.updated,
  //   category: gameData.radious2.category,
  //   techTrees: radious2Techs,
  // },
  // sfo2: {
  //   text: gameData.sfo2.text,
  //   image: gameData.sfo2.image,
  //   updated: gameData.sfo2.updated,
  //   category: gameData.sfo2.category,
  //   techTrees: sfo2Techs,
  // },
  vanilla3: {
    text: gameData.vanilla3.text,
    image: gameData.vanilla3.image,
    updated: gameData.vanilla3.updated,
    category: gameData.vanilla3.category,
    techTrees: vanilla3Techs,
  },
  radious3: {
    text: gameData.radious3.text,
    image: gameData.radious3.image,
    updated: gameData.radious3.updated,
    category: gameData.radious3.category,
    techTrees: radious3Techs,
  },
  sfo3: {
    text: gameData.sfo3.text,
    image: gameData.sfo3.image,
    updated: gameData.sfo3.updated,
    category: gameData.sfo3.category,
    techTrees: sfo33Techs,
  },
};

export default techGameData;
