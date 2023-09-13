import { useEffect, useRef, useState } from 'react';
import { FactionEffectInterface } from '../../types/interfaces/CharacterInterface';
import ReactImage from '../ReactImage';
import SkillEffect from './SkillEffect';
import TooltipWrapper from '../TooltipWrapper';
import {
  getRelatedAbilities,
  getRelatedAttributes,
  getRelatedContactPhases,
  setFontSize,
  trimString,
} from '../../utils/sharedFunctions';
import useBulkMediaQueries from '../../hooks/useBulkMediaQueries';
import TooltipAbilityCycler from '../TooltipAbiltyCycler';
import TooltipAbilityMap from '../TooltipAbilityMap';

interface PropInterface {
  factionEffect: FactionEffectInterface;
}

const FactionEffects = ({ factionEffect }: PropInterface) => {
  const { isMobileWidth, isMobileHeight } = useBulkMediaQueries();

  const isMobile = isMobileWidth || isMobileHeight ? true : false;

  const [ctrCounter, setCtrCounter] = useState(0);
  const [tooltipScrollable, setTooltipScrollable] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const cellRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const passScrollEvent = (event: WheelEvent) => {
      event.preventDefault();
      event.stopPropagation();
      if (tooltipRef.current !== null) {
        const tooltipScrollPosition = tooltipRef.current.scrollTop ?? 0;
        tooltipRef.current.scrollTo({
          top: tooltipScrollPosition + event.deltaY,
        });
      }
    };

    if (tooltipScrollable && cellRef.current !== null) {
      cellRef.current.addEventListener('wheel', passScrollEvent);
    }

    return () => {
      if (cellRef.current !== null) {
        cellRef.current.removeEventListener('wheel', passScrollEvent);
      }
    };
  }, [tooltipScrollable, tooltipRef?.current]);

  useEffect(() => {
    if (tooltipRef?.current !== null) {
      setTooltipScrollable(tooltipRef.current.scrollHeight > tooltipRef.current.clientHeight);
    } else {
      setTooltipScrollable(false);
    }
  }, [tooltipRef?.current, ctrCounter]);

  const relatedAbilities = getRelatedAbilities(factionEffect.effects);
  const relatedPhases = getRelatedContactPhases(relatedAbilities[ctrCounter], factionEffect.effects);
  const relatedAttributes = getRelatedAttributes(relatedAbilities[ctrCounter], factionEffect.effects);

  const fontSize = setFontSize(factionEffect.localised_title);

  const imagePath = factionEffect.ui_icon.replace('.png', '.webp');
  return (
    <div className="flex flex-col mx-1 mt-1.5 min-w-[14.5rem] max-w-[35rem] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl mt-1 text-gray-200 text-shadow">Faction Effects</h2>
      <div className="w-full pb-1 place-items-center overflow-x-hidden overflow-y-hidden">
        <TooltipWrapper
          tooltip={
            <span
              ref={tooltipRef}
              className="max-h-[98vh] text-center flex flex-row overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-700"
            >
              <div className="flex flex-col">
                <div className="h-fit min-w-[15vw] p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
                  <h3 className="text-gray-50 text-2xl">{factionEffect?.localised_title}</h3>
                  {factionEffect?.localised_description.trim() && !isMobile && (
                    <h4 className="text-gray-50 opacity-70 text-lg max-w-[30vw]">
                      &quot;{factionEffect?.localised_description.trim()}&quot;
                    </h4>
                  )}
                  <div>
                    {factionEffect.effects?.map((factionEffect, index) => {
                      return <SkillEffect key={index} skillEffect={factionEffect} />;
                    })}
                  </div>
                </div>
                {relatedAbilities.length > 1 && (
                  <TooltipAbilityCycler ctrCounter={ctrCounter} relatedAbilitiesLength={relatedAbilities.length} />
                )}
              </div>

              {(relatedAbilities.length !== 0 || relatedPhases.length !== 0 || relatedAttributes.length !== 0) && (
                <TooltipAbilityMap
                  relatedAbilities={relatedAbilities}
                  relatedPhases={relatedPhases}
                  relatedAttributes={relatedAttributes}
                  ctrCounter={ctrCounter}
                />
              )}
            </span>
          }
        >
          <div
            ref={cellRef}
            className="flex flex-row w-max m-auto rounded-lg drop-shadow-lg hover-scale bg-no-repeat bg-cover bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]"
          >
            <ReactImage
              srcList={[`/imgs/${imagePath}.webp`, `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`]}
              className="w-[4.5rem] h-[4.5rem] p-2 drop-shadow-lg my-auto"
              alt="itemIcon"
              w="64"
              h="64"
            />

            <div className="flex flex-col justify-center">
              <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 break-words ${fontSize}`}>
                {trimString(factionEffect.localised_title)}
              </h2>
            </div>
            <div className="invisible w-4 pl-0.5">spacer</div>
          </div>
        </TooltipWrapper>
      </div>
    </div>
  );
};

export default FactionEffects;
