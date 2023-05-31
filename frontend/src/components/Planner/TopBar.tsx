import { useNavigate, useParams } from 'react-router-dom';
import gameData from '../../data/gameData';
import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { createEmptyCharacterBuild } from '../../utils/sharedFunctions';
import { convertBuildToCode } from '../../utils/urlFunctions';
import { toast } from 'react-hot-toast';
import TooltipWrapper from '../TooltipWrapper';

import resetIcon from '../../imgs/other/icon_reset.webp';
import shareIcon from '../../imgs/other/icon_button_external_link.webp';
import backIcon from '../../imgs/other/icon_home.webp';
import leftMouse from '../../imgs/other/help_page_left_mouse.webp';
import rightMouse from '../../imgs/other/help_page_right_mouse.webp';
import scrollWheel from '../../imgs/other/help_page_middle_mouse.webp';
import shift from '../../imgs/other/help_page_camera_speed_controls.webp';

interface PropInterface {
  isMobile: boolean;
}

const TopBar = ({ isMobile }: PropInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild, characterData } = state;
  const { mod, faction, character } = useParams();

  const [effectiveRank, setEffectiveRank] = useState(1);

  const navigate = useNavigate();

  useEffect(() => {
    if (
      typeof characterBuild?.rank === 'number' &&
      typeof characterBuild?.startingSkillPoints === 'number' &&
      typeof characterBuild?.autoUnlockSkillPoints === 'number'
    ) {
      setEffectiveRank(
        characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
      );
    }
  }, [characterBuild?.rank, characterBuild?.startingSkillPoints, characterBuild?.autoUnlockSkillPoints]);

  const resetButtonHandler = () => {
    if (!characterData) {
      return;
    }
    const emptyCharacterBuild = createEmptyCharacterBuild(
      characterData,
      mod as string,
      faction as string,
      character as string
    );
    dispatch({ type: AppContextActions.changeCharacterBuild, payload: { characterBuild: emptyCharacterBuild } });
  };

  const shareButtonHandler = () => {
    if (!characterBuild || !characterData) {
      return;
    }

    const buildLink = convertBuildToCode(characterBuild, characterData);

    navigator.clipboard
      .writeText(buildLink)
      .then(() => {
        toast.success('Build copied to clipboard!', { id: 'success clipboard' });
      })
      .catch(() => {
        toast.error('Error copying build to the clipboard...', { id: 'error clipboard' });
      });
  };

  const lordName = gameData[mod as string].characters[faction as string]?.lords?.[character as string]?.name;
  const heroName = gameData[mod as string].characters[faction as string]?.heroes?.[character as string]?.name;
  const characterName = lordName === undefined ? heroName : lordName;

  const rankLimit = mod?.includes('2') ? 40 : 50;

  let headerClass = 'z-10 text-center text-4xl  mx-auto text-gray-200 text-shadow-border ';
  if (isMobile) {
    headerClass += ' mb-2';
  } else {
    headerClass += ' m-2';
  }

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

      <h1 className={headerClass}>{characterName}</h1>

      <div className="w-[30vw] flex place-content-end">
        <TooltipWrapper
          tooltip={
            <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 text-xl bg-gray-600">
              <h5 className="text-3xl text-center">Controls</h5>
              <div className="flex flex-row flex-nowrap mb-1">
                <img src={leftMouse} alt="left mouse" height="36" width="27" />
                <p className="my-auto">Select Skill</p>
              </div>
              <div className="flex flex-row flex-nowrap mb-1">
                <img src={rightMouse} alt="right mouse" height="36" width="27" />
                <p className="my-auto">Deselect Skill</p>
              </div>
              <div className="flex flex-row flex-nowrap mb-1">
                <img src={scrollWheel} alt="scroll wheel" height="36" width="27" />
                <p className="my-auto">Scroll Horizontally</p>
              </div>
              <div className="flex flex-row flex-nowrap">
                <img src={shift} alt="shift" height="32" width="86" />
                <p className="my-auto">+</p>
                <img src={scrollWheel} alt="scroll wheel" height="36" width="27" />
                <p className="my-auto">Scroll Vertically</p>
              </div>
            </div>
          }
        >
          <div className="my-auto mr-4 px-3 text-2xl text-gray-50 border rounded-full bg-gray-500 hover:bg-gray-400/80 drop-shadow-lg hover-scale">
            ?
          </div>
        </TooltipWrapper>

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
