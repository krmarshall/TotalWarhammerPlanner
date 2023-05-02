import { TechDataInterface } from '../types/interfaces/GameInterface';
import gameData from './gameData';
import vanilla2Techs from './techs/vanilla2Techs';
import vanilla3Techs from './techs/vanilla3Techs';
import radious3Techs from './techs/radious3Techs';
import sfo33Techs from './techs/sfo3Techs';
import mixu3Techs from './techs/mixu3Techs';
import scm3Techs from './techs/scm3Techs';

const techGameData: { [key: string]: TechDataInterface } = {
  vanilla2: {
    text: gameData.vanilla2.text,
    image: gameData.vanilla2.image,
    updated: gameData.vanilla2.updated,
    category: gameData.vanilla2.category,
    techTrees: vanilla2Techs,
  },
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
  mixu3: {
    text: gameData.mixu3.text,
    image: gameData.mixu3.image,
    updated: gameData.mixu3.updated,
    category: gameData.mixu3.category,
    techTrees: mixu3Techs,
  },
  scm3: {
    text: gameData.scm3.text,
    image: gameData.scm3.image,
    updated: gameData.scm3.updated,
    category: gameData.scm3.category,
    techTrees: scm3Techs,
  },
};

export default techGameData;
