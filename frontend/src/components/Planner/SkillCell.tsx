import { MouseEvent, useContext, useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { skillIncreaseIsValid, isValidSkillTree } from '../../utils/skillVerification';
import BuildInterface from '../../types/interfaces/BuildInterface';
import { CharacterInterface, SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillPointSelector from './SkillPointSelector';
import SkillTooltip from './SkillTooltip';
import TooltipWrapper from '../TooltipWrapper';
import ReactImage from '../ReactImage';

import autoSkillIcon from '../../imgs/other/skill_auto_unlock_rank.webp';
import blockedSkillOverlay from '../../imgs/other/skill_locked_rank.webp';
import { setFontSize, trimString } from '../../utils/sharedFunctions';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  skillKey: string;
  yIndex: number;
  xIndex: number;
  boxedType: string;
}

const SkillCell = ({ skill, skillKey, yIndex, xIndex, boxedType }: SkillCellPropsInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild, characterData } = state;
  const [selectable, setSelectable] = useState(false);
  const [previewSkillPoints, setPreviewSkillPoints] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [thisSkillsCurrentPoints, setThisSkillsCurrentPoints] = useState(
    characterBuild?.buildData?.[yIndex]?.[xIndex] as number,
  );
  const [ctrCounter, setCtrCounter] = useState(0);
  const [tooltipScrollable, setTooltipScrollable] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const cellRef = useRef<HTMLTableCellElement>(null);

  useEffect(() => {
    let tempCurPoints = thisSkillsCurrentPoints;
    if (characterBuild?.buildData?.[yIndex]?.[xIndex] !== undefined) {
      setThisSkillsCurrentPoints(characterBuild?.buildData?.[yIndex]?.[xIndex] as number);
      tempCurPoints = characterBuild?.buildData?.[yIndex]?.[xIndex] as number;
    } else {
      setThisSkillsCurrentPoints(0);
      tempCurPoints = 0;
    }

    if (skill.levels?.[0].auto_unlock_at_rank !== undefined) {
      setSelectable(false);
    } else {
      const newSelectable = skillIncreaseIsValid(characterBuild, characterData, skill, tempCurPoints, skillKey, false);
      setSelectable(newSelectable);
    }
  }, [characterBuild?.buildData]);

  useEffect(() => {
    if (skill?.levels?.[thisSkillsCurrentPoints]) {
      setPreviewSkillPoints(thisSkillsCurrentPoints);
    } else {
      setPreviewSkillPoints(thisSkillsCurrentPoints - 1);
    }
  }, [thisSkillsCurrentPoints]);

  useEffect(() => {
    if (characterBuild?.blockedSkills.includes(skill.key)) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, [characterBuild?.blockedSkills]);

  useEffect(() => {
    skill.levels?.forEach((skillLevel, index) => {
      if (skill.points_on_creation - 1 >= index) {
        // Ignore points on creation skills
      } else {
        if (
          characterBuild?.rank !== undefined &&
          characterBuild?.startingSkillPoints !== undefined &&
          characterBuild?.autoUnlockSkillPoints !== undefined &&
          skillLevel.auto_unlock_at_rank !== undefined
        ) {
          if (
            characterBuild.buildData[yIndex][xIndex] === index &&
            skillLevel.auto_unlock_at_rank <=
              characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
          ) {
            rankUpSkill(true);
          } else if (
            characterBuild.buildData[yIndex][xIndex] > index &&
            skillLevel.auto_unlock_at_rank >
              characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
          ) {
            rankDownSkill(true);
          }
        }
      }
    });
  }, [characterBuild?.rank]);

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

  const rankUpSkill = (autoRankSkill: boolean) => {
    if (!autoRankSkill) {
      if (!skillIncreaseIsValid(characterBuild, characterData, skill, thisSkillsCurrentPoints, skillKey, true)) {
        return;
      }
    }

    const newCharacterBuild = JSON.parse(JSON.stringify(characterBuild));
    // If new skill add to characterBuild.selectedSkills and blockedSkills references if needed
    if (thisSkillsCurrentPoints === 0) {
      newCharacterBuild?.selectedSkills.push(skill.character_skill_key);
      newCharacterBuild?.selectedSkills.push(skill.key);
      if (skill?.levels?.[0].blocks_skill_node_keys) {
        skill?.levels?.[0].blocks_skill_node_keys.forEach((blockedNode) => {
          newCharacterBuild?.blockedSkills.push(blockedNode);
        });
      }
    }
    // Add skill point to build array
    // Add 1 to character rank
    newCharacterBuild.buildData[yIndex][xIndex]++;
    newCharacterBuild.rank++;
    if (autoRankSkill) {
      newCharacterBuild.autoUnlockSkillPoints++;
    }

    dispatch({
      type: AppContextActions.changeCharacterBuild,
      payload: { characterBuild: newCharacterBuild as BuildInterface },
    });
  };

  const rankDownSkill = (autoRankSkill: boolean) => {
    // Check if skill has lower rank than already selected
    if (thisSkillsCurrentPoints === 0) {
      toast.error('Cannot remove unselected skill.', { id: `${skillKey} unselect` });
      return;
    }

    // Check skill doesn't start with more ranks than attempting
    if (thisSkillsCurrentPoints === skill.points_on_creation) {
      toast.error('Cannot remove starting skill points.', { id: `${skillKey} starting` });
      return;
    }

    const testCharacterBuild = JSON.parse(JSON.stringify(characterBuild));
    testCharacterBuild.buildData[yIndex][xIndex]--;
    if (autoRankSkill) {
      testCharacterBuild.autoUnlockSkillPoints--;
    }

    // If skill was entirely removed delete from characterBuild.selectedSkills and blockedSkills references if needed
    if (testCharacterBuild.buildData[yIndex][xIndex] === 0) {
      const selectedSkillKeyIndex = testCharacterBuild.selectedSkills.indexOf(skill.key);
      testCharacterBuild.selectedSkills.splice(selectedSkillKeyIndex, 1);
      const selectedCharSkillKeyIndex = testCharacterBuild.selectedSkills.indexOf(skill.character_skill_key);
      testCharacterBuild.selectedSkills.splice(selectedCharSkillKeyIndex, 1);

      let blocksSkill = false;
      const blockedSkillKeys: Array<string> = [];
      skill.levels?.forEach((level) => {
        if (level.blocks_skill_node_keys) {
          blocksSkill = true;
          blockedSkillKeys.push(...level.blocks_skill_node_keys);
        }
      });
      if (blocksSkill) {
        blockedSkillKeys.map((blockedSkill) => {
          const blockedSkillIndex = testCharacterBuild.blockedSkills.indexOf(blockedSkill);
          testCharacterBuild.blockedSkills.splice(blockedSkillIndex, 1);
        });
      }
    }

    if (!autoRankSkill) {
      // Remove 2 from character rank to check rank requirements on other skills
      testCharacterBuild.rank -= 2;

      if (!isValidSkillTree(testCharacterBuild, state.characterData as CharacterInterface)) {
        toast.error('This skill has dependents.', { id: `${skillKey} dependencies` });
        return;
      }

      // Add back the extra rank we took off to verify the skill tree
      testCharacterBuild.rank++;
    } else {
      testCharacterBuild.rank--;
    }

    dispatch({
      type: AppContextActions.changeCharacterBuild,
      payload: { characterBuild: testCharacterBuild as BuildInterface },
    });
  };

  const skillClickHandler = (event: MouseEvent) => {
    // 0 = LMB, 2 = RMB
    // Don't allow changing auto rank skills
    if (skill.levels?.[thisSkillsCurrentPoints]?.auto_unlock_at_rank !== undefined) {
      toast.error(
        `This skill is automatically leveled up/down at rank ${skill.levels?.[thisSkillsCurrentPoints]?.auto_unlock_at_rank}`,
        {
          id: `${skillKey} autorank`,
        },
      );
    } else if (skill.levels?.[thisSkillsCurrentPoints - 1]?.auto_unlock_at_rank !== undefined && event.button === 2) {
      toast.error(
        `This skill is automatically leveled up/down at rank ${skill.levels?.[thisSkillsCurrentPoints]?.auto_unlock_at_rank}`,
        {
          id: `${skillKey} autorank`,
        },
      );
      // Normal skill rank up
    } else if (event.button === 0) {
      rankUpSkill(false);
      // Normal skill rank down
    } else if (event.button === 2) {
      rankDownSkill(false);
    }
  };

  let divClassName = 'flex flex-row rounded-lg drop-shadow-lg hover-scale bg-no-repeat bg-cover';

  if (thisSkillsCurrentPoints > 0) {
    divClassName +=
      ' filter-none bg-[url(/imgs/other/skills_tab_frame_selected.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_selected_hover.webp)]';
  } else if (thisSkillsCurrentPoints === 0 && selectable) {
    divClassName +=
      ' filter-none bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]';
  } else if (thisSkillsCurrentPoints === 0 && !selectable) {
    divClassName +=
      ' bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)] brightness-[70%] filter grayscale hover:filter-none hover:grayscale-0';
  }

  let tdClassName = 'flex flex-row w-max h-auto my-1 border relative';

  if (!skill.right_arrow) {
    tdClassName += ' pr-2';
  }

  switch (boxedType) {
    case 'start': {
      tdClassName += ' border-gray-400 border-r-0 rounded-l';
      break;
    }
    case 'center': {
      tdClassName += ' border-gray-400 border-l-0 border-r-0';
      break;
    }
    case 'end': {
      tdClassName += ' border-gray-400 border-l-0 rounded-r pr-2';
      break;
    }
    case 'none': {
      tdClassName += ' border-transparent rounded';
      break;
    }
    default: {
      break;
    }
  }

  const fontSize = setFontSize(skill.localised_name);

  const findAbilityImage = (includePassives: boolean) => {
    if (skill.levels?.[0].effects === undefined) {
      return '';
    }
    for (let i = 0; i < skill.levels?.[0].effects?.length; i++) {
      const effect = skill.levels?.[0].effects[i];
      if (effect.related_abilities?.[0].unit_ability.icon_name) {
        // Passives seem to generally not overwrite skill icons, but use as possible fallback
        if (!includePassives && !effect.description.toLowerCase().includes('passive ability:')) {
          return effect.related_abilities?.[0].unit_ability.icon_name;
        } else if (includePassives) {
          return effect.related_abilities?.[0].unit_ability.icon_name;
        }
      }
    }
  };

  const srcList = [
    // `/imgs/${abilityImagePath}.webp`, // Effective placement from below, avoids 404s
    `/imgs/${skill.image_path}.webp`,
    // `/imgs/${abilityImagePathPassive}.webp`, // Effective placement from below, avoids 404s
    // `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`, // Effective placement from below, avoids 404s
  ];

  const abilityImagePath = findAbilityImage(false);
  const abilityImagePathPassive = findAbilityImage(true);

  if (abilityImagePath !== undefined) {
    srcList.unshift(`/imgs/${abilityImagePath}.webp`);
  }
  if (abilityImagePathPassive !== undefined) {
    srcList.push(`/imgs/${abilityImagePathPassive}.webp`);
  }
  srcList.push(`/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`);

  return (
    <td
      ref={cellRef}
      className={tdClassName}
      onMouseDown={(event: MouseEvent) => {
        skillClickHandler(event);
      }}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
    >
      {skill.levels?.[0]?.auto_unlock_at_rank !== undefined && skill.levels?.[0]?.auto_unlock_at_rank !== 0 && (
        <TooltipWrapper
          tooltip={
            <div className="w-max p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
              <p className="text-yellow-300 text-xl">
                This skill automatically unlocks at rank {skill.levels?.[0]?.auto_unlock_at_rank}
              </p>
            </div>
          }
        >
          <img
            className="w-6 h-6 absolute bottom-1 left-1 z-10 hover-scale-large"
            src={autoSkillIcon}
            draggable={false}
            alt="autoUnlockIcon"
            width="32"
            height="32"
          />
        </TooltipWrapper>
      )}
      <div className={divClassName}>
        <TooltipWrapper
          tooltip={
            <SkillTooltip
              skill={skill}
              skillPoints={previewSkillPoints}
              blocked={blocked}
              ctrCounter={ctrCounter}
              setCtrCounter={setCtrCounter}
              setTooltipScrollable={setTooltipScrollable}
              tooltipRef={tooltipRef}
            />
          }
        >
          <div className="flex flex-row">
            {blocked && (
              <img
                src={blockedSkillOverlay}
                className="w-auto absolute top-0 right-8 z-0"
                draggable={false}
                alt="blockedSkillOverlay"
                width="135"
                height="72"
              />
            )}
            <ReactImage
              srcList={srcList}
              className="w-[4.5rem] h-[4.5rem] my-auto drop-shadow-lg"
              alt="skillIcon"
              w="64"
              h="64"
            />

            <div className="flex flex-col justify-center">
              <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 break-words ${fontSize}`}>
                {trimString(skill.localised_name)}
              </h2>
            </div>
          </div>
        </TooltipWrapper>

        <div className="w-4 flex flex-col justify-center pl-0.5 text-sm text-gray-200">
          {skill?.levels?.map((rankKey, index) => {
            if (index < 3) {
              return (
                <SkillPointSelector
                  key={index}
                  index={index}
                  skill={skill}
                  skillPoints={index}
                  thisSkillsCurrentPoints={thisSkillsCurrentPoints}
                  selectable={selectable}
                  currentRank={
                    (characterBuild?.rank as number) -
                    (characterBuild?.startingSkillPoints as number) -
                    (characterBuild?.autoUnlockSkillPoints as number)
                  }
                  blocked={blocked}
                />
              );
            }
          })}
        </div>
      </div>
    </td>
  );
};

export default SkillCell;
