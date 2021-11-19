import { createContext, useReducer } from 'react';
import CharacterInterface from '../types/interfaces/CharacterInterface';

interface ContextStateInterface {
  selectedFaction: string;
  characterData: CharacterInterface | null;
}

const initialState: ContextStateInterface = {
  selectedFaction: 'beastmen',
  characterData: null,
};

interface ActionInterface {
  type: string;
  payload: string | CharacterInterface | null;
}

enum AppContextActions {
  changeFaction = 'changeFaction',
  changeCharacterData = 'changeCharacterData',
}

const reducer = (state: ContextStateInterface, action: ActionInterface) => {
  switch (action.type) {
    case AppContextActions.changeFaction: {
      const newState = { ...state };
      if (typeof action.payload === 'string') {
        newState.selectedFaction = action.payload;
        return newState;
      } else {
        return state;
      }
    }

    case AppContextActions.changeCharacterData: {
      const newState = { ...state };
      if (typeof action.payload !== 'string') {
        newState.characterData = action.payload;
        return newState;
      } else {
        return state;
      }
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
export type { ContextStateInterface };
