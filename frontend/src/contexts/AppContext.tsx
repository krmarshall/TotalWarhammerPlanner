import { createContext, ReactElement, useReducer } from 'react';
import BuildInterface from '../types/interfaces/BuildInterface';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';
import { TechSetInterface } from '../types/interfaces/TechInterface';

interface ContextStateInterface {
  selectedMod: string;
  selectedModTech: string;
  selectedFaction: string;
  characterData: CharacterInterface | null;
  characterBuild: BuildInterface | null;
  techData: TechSetInterface | null;
  localStorageBuildKeys: Array<string>;
  selectedCompGroups: Array<string>;
}

const initialState: ContextStateInterface = {
  selectedMod: 'vanilla3',
  selectedModTech: 'vanilla3',
  selectedFaction: 'bst_beastmen',
  characterData: null,
  characterBuild: null,
  techData: null,
  localStorageBuildKeys: [],
  selectedCompGroups: [],
};

interface ActionInterface {
  type: string;
  payload: {
    selectedMod?: string;
    selectedModTech?: string;
    selectedFaction?: string;
    characterData?: CharacterInterface | null;
    characterBuild?: BuildInterface | null;
    techData?: TechSetInterface | null;
    localStorageBuildKeys?: Array<string>;
    selectedCompGroups?: Array<string>;
  };
}

enum AppContextActions {
  changeGame = 'changeGame',
  changeMod = 'changeMod',
  changeModTech = 'changeModTech',
  changeFaction = 'changeFaction',
  changeCharacterData = 'changeCharacterData',
  changeCharacterBuild = 'changeCharacterBuild',
  changeTechData = 'changeTechData',
  changeLocalStorageBuildKeys = 'changeLocalStorageBuildKeys',
  changeModFaction = 'changeModFaction',
  changeSelectedCompGroups = 'changeSelectedCompGroups',
}

const reducer = (state: ContextStateInterface, action: ActionInterface) => {
  switch (action.type) {
    case AppContextActions.changeMod: {
      const newState = { ...state };
      if (action.payload.selectedMod === undefined) {
        return state;
      }
      newState.selectedMod = action.payload.selectedMod;
      newState.selectedCompGroups = [];
      return newState;
    }

    case AppContextActions.changeModTech: {
      const newState = { ...state };
      if (action.payload.selectedModTech === undefined) {
        return state;
      }
      newState.selectedModTech = action.payload.selectedModTech;
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

    case AppContextActions.changeModFaction: {
      const newState = { ...state };

      if (action.payload.selectedMod === undefined) {
        return state;
      }
      newState.selectedMod = action.payload.selectedMod;
      newState.selectedCompGroups = [];

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

    case AppContextActions.changeTechData: {
      const newState = { ...state };
      if (action.payload.techData === undefined) {
        return state;
      }
      newState.techData = action.payload.techData;
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

    case AppContextActions.changeSelectedCompGroups: {
      const newState = { ...state };
      if (action.payload.selectedCompGroups === undefined) {
        return state;
      }
      newState.selectedCompGroups = action.payload.selectedCompGroups;
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
