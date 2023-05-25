import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import { getRelatedAbilities, getRelatedContactPhases } from '../../utils/sharedFunctions';
import SkillAbilityTooltip from '../Planner/SkillAbilityTooltip';
import SkillEffect from '../Planner/SkillEffect';

import ctrlImg from '../../imgs/other/ctrlKey.webp';
import lockImg from '../../imgs/other/icon_padlock.webp';
import SkillPhase from '../Planner/SkillPhase';

interface PropInterface {
  tech: TechNodeInterface | undefined;
  ctrCounter: number;
  setCtrCounter: React.Dispatch<React.SetStateAction<number>>;
}

const TechTooltip = ({ tech, ctrCounter, setCtrCounter }: PropInterface) => {
  const { state } = useContext(AppContext);
  const { techData } = state;

  const { isMobileWidth, isMobileHeight } = useBulkMediaQueries();

  const isMobile = isMobileWidth || isMobileHeight ? true : false;

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Control') {
        if (ctrCounter + 1 < relatedAbilities.length) {
          setCtrCounter(ctrCounter + 1);
        } else {
          setCtrCounter(0);
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [ctrCounter]);

  const relatedAbilities = getRelatedAbilities(tech?.technology.effects);
  const relatedPhases = getRelatedContactPhases(relatedAbilities[ctrCounter]);

  return (
    <span className="text-center flex flex-row">
      <div className="flex flex-col">
        <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
          {/* <img src={lockImg} alt="lock" width="26" height="27" className="-mb-6 h-6 w-6 fade-in-slow" /> */}
          <h3 className="text-gray-50 text-2xl">{tech?.technology.onscreen_name}</h3>
          {tech?.technology?.short_description?.trim() && !isMobile && (
            <h4 className="max-w-[20vw] mx-auto text-gray-50 opacity-70 text-lg">
              {tech?.technology?.short_description?.trim()}
            </h4>
          )}
          {tech?.technology?.required_buildings !== undefined && tech?.technology?.required_buildings?.length > 0 && (
            <p className="text-yellow-300 text-lg">
              Requires Building: {tech.technology.required_buildings.join(', ')}
            </p>
          )}
          {/* {skill?.required_num_parents !== 0 && (
            <p className="text-yellow-300 text-lg">
              Available after spending {skill?.required_num_parents} skill points in the previous group
            </p>
          )} */}
          {/* {skill?.parent_required && (
            <p className="text-yellow-300 text-lg">Available after unlocking &quot;{parentName?.trim()}&quot;</p>
          )} */}
          <div>
            {tech?.technology?.effects?.map((techEffect, index) => {
              return <SkillEffect key={index} skillEffect={techEffect} />;
            })}
          </div>
        </div>
        {relatedAbilities.length > 1 && (
          <div className="h-fit w-fit m-2 mx-auto p-2 rounded border border-gray-400 shadow-lg text-xl text-gray-50 bg-gray-600">
            <p>
              Showing ability {ctrCounter + 1}/{relatedAbilities.length}
            </p>
            <p>
              Press <img src={ctrlImg} alt="ctrl key" className="w-8 h-8 inline m-auto" width="80" height="80" /> to
              cycle the displayed ability
            </p>
          </div>
        )}
      </div>

      {(relatedAbilities.length !== 0 || relatedPhases.length !== 0) && (
        <div className="flex flex-col w-fit h-fit max-w-[30vw] ml-2">
          {relatedAbilities.map((ability, index) => {
            if (index !== ctrCounter) {
              return;
            }
            return <SkillAbilityTooltip key={index} ability={ability} />;
          })}
          {relatedPhases.map((phase, index) => {
            return <SkillPhase key={index} phase={phase} index={index} header={true} random={false} />;
          })}
        </div>
      )}
    </span>
  );
};

export default TechTooltip;
