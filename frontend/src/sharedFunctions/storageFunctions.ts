import { ActionInterface, AppContextActions, ContextStateInterface } from '../contexts/AppContext';
import StorageInterface from '../types/interfaces/StorageInterface';
import { createCharacterBuildFromArray } from './sharedFunctions';

const initializeBuildsFromStorage = (state: ContextStateInterface, dispatch: (action: ActionInterface) => void) => {
  const storageBuilds: StorageInterface = loadBuildsFromStorage(state);
  const newBuildKeys = Object.keys(storageBuilds);
  dispatch({ type: AppContextActions.changeLocalStorageBuildKeys, payload: { localStorageBuildKeys: newBuildKeys } });
};

const saveBuildToStorage = (
  state: ContextStateInterface,
  dispatch: (action: ActionInterface) => void,
  buildName: string
) => {
  const storageBuilds: StorageInterface = loadBuildsFromStorage(state);
  const newBuildKeys = [...state.localStorageBuildKeys];
  const saveBuildIndex = newBuildKeys.indexOf(buildName);
  if (saveBuildIndex === -1) {
    newBuildKeys.push(buildName);
  }
  if (!state.characterBuild) {
    return;
  }
  storageBuilds[buildName] = state.characterBuild.buildData;

  localStorage.setItem(
    `${state.characterBuild?.faction}${state.characterBuild?.character}`,
    JSON.stringify(storageBuilds)
  );
  dispatch({ type: AppContextActions.changeLocalStorageBuildKeys, payload: { localStorageBuildKeys: newBuildKeys } });
};

const deleteBuildFromStorage = (
  state: ContextStateInterface,
  dispatch: (action: ActionInterface) => void,
  buildName: string
) => {
  const storageBuilds: StorageInterface = loadBuildsFromStorage(state);
  const newBuildKeys = [...state.localStorageBuildKeys];
  const deleteBuildIndex = newBuildKeys.indexOf(buildName);
  if (deleteBuildIndex === -1) {
    return;
  }
  newBuildKeys.splice(deleteBuildIndex, 1);
  delete storageBuilds[buildName];

  localStorage.setItem(
    `${state.characterBuild?.faction}${state.characterBuild?.character}`,
    JSON.stringify(storageBuilds)
  );
  dispatch({ type: AppContextActions.changeLocalStorageBuildKeys, payload: { localStorageBuildKeys: newBuildKeys } });
};

const setActiveBuildFromStorage = (
  state: ContextStateInterface,
  dispatch: (action: ActionInterface) => void,
  buildName: string,
  faction: string,
  character: string
) => {
  const storageBuilds: StorageInterface = loadBuildsFromStorage(state);
  const loadBuild = storageBuilds[buildName];
  if (loadBuild === undefined || state.characterData === null) {
    return;
  }
  const newCharacterBuild = createCharacterBuildFromArray(loadBuild, state.characterData, faction, character);
  dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: newCharacterBuild } });
};

const loadBuildsFromStorage = (state: ContextStateInterface) => {
  const storageBuilds = localStorage.getItem(`${state.characterBuild?.faction}${state.characterBuild?.character}`);
  if (storageBuilds === null) {
    return {};
  } else {
    return JSON.parse(storageBuilds);
  }
};

export {
  loadBuildsFromStorage,
  saveBuildToStorage,
  deleteBuildFromStorage,
  setActiveBuildFromStorage,
  initializeBuildsFromStorage,
};
