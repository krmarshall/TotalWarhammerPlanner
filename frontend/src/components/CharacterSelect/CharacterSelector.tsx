import { Fragment, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import api from '../../api/api';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import gameData from '../../data/gameData';
import spellLoreIcons from '../../imgs/spellLoreIcons/spellLoreIcons';
import { createEmptyCharacterBuild } from '../../utils/sharedFunctions';
import CharacterCell from './CharacterCell';

const CharacterSelector = () => {
  const { state, dispatch } = useContext(AppContext);
  const { selectedMod, selectedFaction } = state;
  const navigate = useNavigate();

  const [gameCharacters, setGameCharacters] = useState(gameData[selectedMod as keyof typeof gameData]?.characters);

  // Grab all the lord and hero keys from the currently selected game characters
  const [lordKeys, setLordKeys] = useState<Array<string>>();
  const [heroKeys, setHeroKeys] = useState<Array<string>>();

  // Whenever the selected game changes refresh the characters
  useEffect(() => {
    setGameCharacters(gameData[selectedMod as keyof typeof gameData].characters);
  }, [selectedMod]);

  // Whenever the faction/characters change refresh the lord/hero keys
  useEffect(() => {
    if (checkFactionUndefined()) {
      dispatch({ type: AppContextActions.changeFaction, payload: { selectedFaction: 'bst_beastmen' } });
    } else {
      setLordKeys(Object.keys(gameCharacters[`${selectedFaction}_lords` as keyof typeof gameCharacters]));
      setHeroKeys(Object.keys(gameCharacters[`${selectedFaction}_heroes` as keyof typeof gameCharacters]));
    }
  }, [selectedFaction, gameCharacters]);

  const checkFactionUndefined = () => {
    return (
      gameCharacters[`${selectedFaction}_lords` as keyof typeof gameCharacters] === undefined ||
      gameCharacters[`${selectedFaction}_heroes` as keyof typeof gameCharacters] === undefined
    );
  };

  const handleCharacterSelect = (characterKey: string) => {
    const apiPromise = api.getCharacterSkillTree(selectedMod, selectedFaction, characterKey).then((response) => {
      dispatch({ type: AppContextActions.changeCharacterData, payload: { characterData: response } });
      const emptyCharacterBuild = createEmptyCharacterBuild(response, selectedMod, selectedFaction, characterKey);
      dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
      navigate(`/planner/${selectedMod}/${selectedFaction}/${characterKey}`);
    });
    toast.promise(
      apiPromise,
      {
        loading: 'Loading',
        success: 'Success',
        error: 'Could not fetch character',
      },
      { loading: { duration: 5000 } }
    );
  };

  return (
    <Fragment>
      {lordKeys !== undefined && lordKeys.length > 0 && (
        <div className="justify-self-center">
          <div className="flex flex-row place-content-center w-[80vw] mx-auto mt-2">
            <hr className="grow mt-[1.25rem] opacity-50" />
            <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Lords</h1>
            <hr className="grow mt-[1.25rem] opacity-50" />
          </div>
          <ul className="flex flex-row flex-wrap justify-center">
            <TransitionGroup component={null}>
              {lordKeys?.map((lordKey) => {
                if (checkFactionUndefined()) {
                  return;
                }
                const lord = gameCharacters[`${selectedFaction}_lords`][lordKey];
                const lordImage = gameData[selectedMod]?.characterImages[lordKey];

                let spellLore = undefined;
                if (lord?.spellLore !== undefined) {
                  spellLore = spellLoreIcons[lord.spellLore as keyof typeof spellLoreIcons];
                }
                return (
                  <CSSTransition
                    key={lordKey}
                    classNames={{
                      enterActive: 'animate__animated animate__faster animate__flipInX',
                      exitActive: 'hidden',
                    }}
                    timeout={500}
                  >
                    <CharacterCell
                      key={lordKey}
                      charKey={lordKey}
                      char={lord}
                      charImage={lordImage}
                      spellLore={spellLore}
                      handleCharacterSelect={handleCharacterSelect}
                    />
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </ul>
        </div>
      )}
      {heroKeys !== undefined && heroKeys.length > 0 && (
        <div className="justify-self-center">
          <div className="flex flex-row place-content-center w-[80vw] mx-auto mt-2">
            <hr className="grow mt-[1.25rem] opacity-50" />
            <h1 className="w-max text-center text-4xl mx-2 text-gray-200 text-shadow">Heroes</h1>
            <hr className="grow mt-[1.25rem] opacity-50" />
          </div>
          <ul className="flex flex-row flex-wrap justify-center mb-4">
            <TransitionGroup component={null}>
              {heroKeys?.map((heroKey) => {
                if (checkFactionUndefined()) {
                  return;
                }
                const hero = gameCharacters[`${selectedFaction}_heroes`][heroKey];
                const heroImage = gameData[selectedMod]?.characterImages[heroKey];
                let spellLore = undefined;
                if (hero?.spellLore !== undefined) {
                  spellLore = spellLoreIcons[hero.spellLore as keyof typeof spellLoreIcons];
                }
                return (
                  <CSSTransition
                    key={heroKey}
                    classNames={{
                      enterActive: 'animate__animated animate__faster animate__flipInX',
                      exitActive: 'hidden',
                    }}
                    timeout={500}
                  >
                    <CharacterCell
                      key={heroKey}
                      charKey={heroKey}
                      char={hero}
                      charImage={heroImage}
                      spellLore={spellLore}
                      handleCharacterSelect={handleCharacterSelect}
                    />
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default CharacterSelector;
