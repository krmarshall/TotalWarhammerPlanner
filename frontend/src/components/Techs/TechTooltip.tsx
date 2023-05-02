import { useContext, useEffect } from 'react';
import { AppContext } from '../../contexts/AppContext';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import { getRelatedAbilities } from '../../utils/sharedFunctions';
import SkillAbilityTooltip from '../Planner/SkillAbilityTooltip';
import SkillEffect from '../Planner/SkillEffect';

import ctrlImg from '../../imgs/other/ctrlKey.webp';

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
  return (
    <span className="text-center flex flex-row">
      <div className="flex flex-col">
        <div className="h-fit p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
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

      {relatedAbilities.length !== 0 &&
        relatedAbilities.map((ability, index) => {
          if (index !== ctrCounter) {
            return;
          }
          return <SkillAbilityTooltip key={index} ability={ability} />;
        })}
    </span>
  );
};

export default TechTooltip;
