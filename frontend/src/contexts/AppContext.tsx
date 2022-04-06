import { createContext, useReducer } from 'react';
import { CharacterInterface } from '../types/interfaces/CharacterInterface';

interface ContextStateInterface {
  selectedGame: string;
  selectedFaction: string;
  characterData: CharacterInterface | null;
}

const initialState: ContextStateInterface = {
  selectedGame: 'vanilla2',
  selectedFaction: 'beastmen',
  characterData: null,
};

interface ActionInterface {
  type: string;
  payload: {
    selectedGame?: string;
    selectedFaction?: string;
    characterData?: CharacterInterface | null;
  };
}

enum AppContextActions {
  changeGame = 'changeGame',
  changeFaction = 'changeFaction',
  changeCharacterData = 'changeCharacterData',
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

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext, AppContextActions };
export type { ContextStateInterface, ActionInterface };
