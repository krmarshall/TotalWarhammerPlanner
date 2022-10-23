import { useNavigate, useParams } from 'react-router-dom';
import gameData from '../../data/gameData';
import { useContext } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { createEmptyCharacterBuild } from '../../utils/sharedFunctions';
import { convertBuildToCode } from '../../utils/urlFunctions';
import { toast } from 'react-hot-toast';

import resetIcon from '../../imgs/other/icon_reset.webp';
import shareIcon from '../../imgs/other/icon_button_external_link.webp';
import backIcon from '../../imgs/other/icon_home.webp';

interface PropInterface {
  effectiveRank: number;
  isMobile: boolean;
}

const TopBar = ({ effectiveRank, isMobile }: PropInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild } = state;
  const { mod, faction, character } = useParams();

  const navigate = useNavigate();

  const resetButtonHandler = () => {
    if (!state.characterData) {
      return;
    }
    const emptyCharacterBuild = createEmptyCharacterBuild(
      state.characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
  };

  const shareButtonHandler = () => {
    if (!characterBuild) {
      return;
    }
    const buildLink = convertBuildToCode(characterBuild);

    navigator.clipboard
      .writeText(buildLink)
      .then(() => {
        toast.success('Build copied to clipboard!', { id: 'success clipboard' });
      })
      .catch(() => {
        toast.error('Error copying build to the clipboard...', { id: 'error clipboard' });
      });
  };

  // @ts-expect-error ts(7053)
  const lordName = gameData[mod].characters[`${faction}_lords`]?.[character]?.name;
  // @ts-expect-error ts(7053)
  const heroName = gameData[mod].characters[`${faction}_heroes`]?.[character]?.name;
  const characterName = lordName === undefined ? heroName : lordName;

  const rankLimit = mod?.includes('2') ? 40 : 50;

  return (
    <div className="h-[4.5rem] flex flex-row place-content-between">
      <div className="w-[30vw] flex place-content-start">
        <button
          className="flex flex-row place-content-center my-auto px-3 bg-gray-500 hover:bg-gray-400/80 border rounded-xl drop-shadow-lg hover-scale"
          onClick={() => navigate('/')}
        >
          <img src={backIcon} alt="Back" width="45" height="45" className="my-auto w-8 h-8" draggable={false} />
          <p className="text-center text-gray-200 text-2xl px-0.5 ml-1">Home</p>
        </button>
        <p className="text-gray-200 text-2xl text-center my-auto ml-4">
          {isMobile ? gameData[state.selectedMod]?.text : `Selected Game: ${gameData[state.selectedMod]?.text}`}
        </p>
      </div>
      <h1 className="z-10 text-center text-4xl m-2 text-gray-200 text-shadow-border">{characterName}</h1>
      <div className="w-[30vw] flex place-content-end">
        {!isMobile && (
          <button
            className="flex flex-row place-content-center mr-4 my-auto px-2 bg-blue-600 hover:bg-blue-500 border rounded-xl drop-shadow-lg hover-scale"
            onClick={shareButtonHandler}
          >
            <img src={shareIcon} alt="Share" width="20" height="20" className="my-auto w-6 h-6" draggable={false} />
            <p className="text-center text-gray-200 text-2xl px-0.5 ml-1">Share</p>
          </button>
        )}

        <button
          className="flex flex-row place-content-center mr-4 px-2 my-auto bg-gray-500 hover:bg-gray-400/80 border rounded-xl drop-shadow-lg hover-scale"
          onClick={resetButtonHandler}
        >
          <img src={resetIcon} alt="reset" width="20" height="20" className="my-auto w-6 h-6" draggable={false} />
          <p className="text-center text-gray-200 text-2xl px-0.5">Reset</p>
        </button>
        {effectiveRank <= rankLimit ? (
          <p className="w-18 mr-2 text-center my-auto text-gray-200 text-2xl text-shadow">Rank: {effectiveRank}</p>
        ) : (
          <p className="w-18 mr-2 text-center my-auto text-red-500 text-2xl text-shadow">Rank: {effectiveRank}</p>
        )}
      </div>
    </div>
  );
};

export default TopBar;
