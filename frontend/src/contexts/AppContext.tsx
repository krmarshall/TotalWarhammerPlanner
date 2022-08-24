import { createContext, ReactElement, useReducer } from 'react';
import BuildInterface from '../types/interfaces/BuildInterface';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';

interface ContextStateInterface {
  selectedGame: string;
  selectedMod: string;
  selectedFaction: string;
  characterData: CharacterInterface | null;
  characterBuild: BuildInterface | null;
  localStorageBuildKeys: Array<string>;
}

const initialState: ContextStateInterface = {
  selectedGame: '3',
  selectedMod: 'vanilla3',
  selectedFaction: 'wh_dlc03_bst_beastmen',
  characterData: null,
  characterBuild: null,
  localStorageBuildKeys: [],
};

interface ActionInterface {
  type: string;
  payload: {
    selectedGame?: string;
    selectedMod?: string;
    selectedFaction?: string;
    characterData?: CharacterInterface | null;
    characterBuild?: BuildInterface | null;
    localStorageBuildKeys?: Array<string>;
  };
}

enum AppContextActions {
  changeGame = 'changeGame',
  changeMod = 'changeMod',
  changeFaction = 'changeFaction',
  changeCharacterData = 'changeCharacterData',
  changeCharacterBuild = 'changeCharacterBuild',
  changeLocalStorageBuildKeys = 'changeLocalStorageBuildKeys',
}

const reducer = (state: ContextStateInterface, action: ActionInterface) => {
  switch (action.type) {
    case AppContextActions.changeGame: {
      const newState = { ...state };
      if (action.payload.selectedGame === undefined) {
        return state;
      }
      newState.selectedGame = action.payload.selectedGame;
      return newState;
    }

    case AppContextActions.changeMod: {
      const newState = { ...state };
      if (action.payload.selectedMod === undefined) {
        return state;
      }
      newState.selectedMod = action.payload.selectedMod;
      return newState;
    }

    case AppContextActions.changeFaction: {
      const newState = { ...state };
      if (action.payload.selectedFaction === undefined) {
        return state;
      }
      newState.selectedFaction = action.payload.selectedFaction;
      return newState;
    }

    case AppContextActions.changeCharacterData: {
      const newState = { ...state };
      if (action.payload.characterData === undefined) {
        return state;
      }
      newState.characterData = action.payload.characterData;
      return newState;
    }

    case AppContextActions.changeCharacterBuild: {
      const newState = { ...state };
      if (action.payload.characterBuild === undefined) {
        return state;
      }
      newState.characterBuild = action.payload.characterBuild;
      return newState;
    }

    case AppContextActions.changeLocalStorageBuildKeys: {
      const newState = { ...state };
      if (action.payload.localStorageBuildKeys === undefined) {
        return state;
      }
      newState.localStorageBuildKeys = action.payload.localStorageBuildKeys;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const AppContext = createContext<{ state: ContextStateInterface; dispatch: (action: ActionInterface) => void }>({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {},
});

interface InputProps {
  children: ReactElement;
}

const AppProvider: React.FC<InputProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext, AppContextActions };
export type { ContextStateInterface, ActionInterface };
