import { MouseEvent, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { skillIncreaseIsValid, isValidSkillTree } from '../../utils/skillVerification';
import BuildInterface from '../../types/interfaces/BuildInterface';
import { CharacterInterface, SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillPointSelector from './SkillPointSelector';
import SkillTooltip from './SkillTooltip';
import { useImage } from 'react-image';
import TooltipWrapper from './TooltipWrapper';

import autoSkillIcon from '../../imgs/other/skill_auto_unlock_rank.webp';
import blockedSkillOverlay from '../../imgs/other/skill_locked_rank.webp';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  skillKey: string;
  yIndex: number;
  xIndex: number;
  boxedType: string;
}

const SkillCell = ({ skill, skillKey, yIndex, xIndex, boxedType }: SkillCellPropsInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild, characterData, selectedMod, selectedGame } = state;
  const [selectable, setSelectable] = useState(false);
  const [previewSkillPoints, setPreviewSkillPoints] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [thisSkillsCurrentPoints, setThisSkillsCurrentPoints] = useState(
    characterBuild?.buildData?.[yIndex]?.[xIndex] as number
  );

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
    if (characterBuild?.blockedSkills.includes(skillKey)) {
      setBlocked(true);
    } else {
      setBlocked(false);
    }
  }, [characterBuild?.blockedSkills]);

  useEffect(() => {
    // TS check values exist
    if (
      characterBuild?.rank !== undefined &&
      characterBuild?.startingSkillPoints !== undefined &&
      characterBuild?.autoUnlockSkillPoints !== undefined &&
      skill.levels?.[0].auto_unlock_at_rank !== undefined
    ) {
      // Auto rank up/down skill when at appropriate character rank.
      if (
        characterBuild.buildData[yIndex][xIndex] === 0 &&
        skill.levels?.[0].auto_unlock_at_rank <=
          characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
      ) {
        rankUpSkill(true);
      } else if (
        characterBuild.buildData[yIndex][xIndex] > 0 &&
        skill.levels?.[0].auto_unlock_at_rank >
          characterBuild?.rank - characterBuild?.startingSkillPoints - characterBuild?.autoUnlockSkillPoints
      ) {
        rankDownSkill(true);
      }
    }
  }, [characterBuild?.rank]);

  const rankUpSkill = (autoRankSkill: boolean) => {
    if (!autoRankSkill) {
      if (!skillIncreaseIsValid(characterBuild, characterData, skill, thisSkillsCurrentPoints, skillKey, true)) {
        return;
      }
    }
    // If new skill add to characterBuild.selectedSkills and blockedSkills references if needed
    if (thisSkillsCurrentPoints === 0) {
      characterBuild?.selectedSkills.push(skill.character_skill_key);
      characterBuild?.selectedSkills.push(skill.key);
      if (skill?.levels?.[0].blocks_character_skill_key) {
        skill?.levels?.[0].blocks_character_skill_key.forEach((blockedSkill) => {
          characterBuild?.blockedSkills.push(blockedSkill);
        });
      }
    }
    // Add skill point to build array
    // Add 1 to character rank
    const newCharacterBuild = JSON.parse(JSON.stringify(characterBuild));
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
        if (level.blocks_character_skill_key) {
          blocksSkill = true;
          blockedSkillKeys.push(...level.blocks_character_skill_key);
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
    if (skill.levels?.[0]?.auto_unlock_at_rank !== undefined) {
      toast.error(`This skill is automatically leveled up/down at rank ${skill.levels?.[0]?.auto_unlock_at_rank}`, {
        id: `${skillKey} autorank`,
      });
    } else if (event.button === 0) {
      rankUpSkill(false);
    } else if (event.button === 2) {
      rankDownSkill(false);
    }
  };

  let divClassName = 'flex flex-row rounded-lg drop-shadow-lg bg-no-repeat bg-cover';

  if (thisSkillsCurrentPoints > 0) {
    divClassName +=
      ' filter-none bg-[url(/imgs/other/skills_tab_frame_selected.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_selected_hover.webp)]';
  } else if (thisSkillsCurrentPoints === 0 && selectable) {
    divClassName +=
      ' filter-none bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)]';
  } else if (thisSkillsCurrentPoints === 0 && !selectable) {
    divClassName +=
      ' bg-[url(/imgs/other/skills_tab_frame.webp)] hover:bg-[url(/imgs/other/skills_tab_frame_hover.webp)] opacity-40 hover:opacity-100 filter grayscale hover:filter-none hover:grayscale-0';
  }

  let tdClassName = 'flex flex-row w-max h-auto my-1 border relative';

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
      tdClassName += ' border-gray-700 rounded';
      break;
    }
    default: {
      break;
    }
  }

  const fontSize = skill.name.length < 28 ? 'text-xl' : 'text-base';

  const findAbilityImage = () => {
    if (skill.levels?.[0].effects === undefined) {
      return '';
    }
    for (let i = 0; i < skill.levels?.[0].effects?.length; i++) {
      const effect = skill.levels?.[0].effects[i];
      if (effect.related_abilities?.[0].unit_ability.icon_name) {
        return effect.related_abilities?.[0].unit_ability.icon_name + '.webp';
      }
    }
  };

  const vanillaGamePath = selectedGame === '2' ? 'vanilla2' : 'vanilla3';
  const imagePath = skill.image_path.replace('.png', '.webp');
  const abilityImagePath = findAbilityImage();
  const { src } = useImage({
    srcList: [
      `/imgs/${selectedMod}/campaign_ui/skills/${imagePath}`,
      `/imgs/${vanillaGamePath}/campaign_ui/skills/${imagePath}`,
      // Some WH3 spells have incorrect icons on the character skill, but correct icons on the related ability
      `/imgs/${selectedMod}/battle_ui/ability_icons/${abilityImagePath}`,
      `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${abilityImagePath}`,
      // WH2 has pretty much all the skill icons in campaign_ui, WH3 has many of the spells/abilities under battle_ui
      `/imgs/${selectedMod}/battle_ui/ability_icons/${imagePath}`,
      `/imgs/${vanillaGamePath}/battle_ui/ability_icons/${imagePath}`,
      // Some SFO ability icons have _active in the imagePath, but not on the actual image name /shrug
      `/imgs/${selectedMod}/campaign_ui/skills/${imagePath.replace('_active', '')}`,
      `/imgs/${vanillaGamePath}/campaign_ui/skills/0_placeholder_skill.webp`,
    ],
  });
  let imgClassName = 'w-[4.5rem] h-[4.5rem] my-auto drop-shadow-lg';
  if (src?.includes('/battle_ui/ability_icons/')) {
    imgClassName += ' p-3';
  }
  return (
    <td
      className={tdClassName}
      onMouseDown={(event: MouseEvent) => {
        skillClickHandler(event);
      }}
      onContextMenu={(event) => {
        event.preventDefault();
      }}
    >
      {skill.levels?.[0]?.auto_unlock_at_rank && (
        <TooltipWrapper
          tooltip={
            <div className="w-max p-2 rounded border border-gray-400 shadow-lg text-gray-50 bg-gray-600">
              <p className="text-yellow-400 text-lg">
                This skill automatically unlocks at rank {skill.levels?.[0]?.auto_unlock_at_rank}
              </p>
            </div>
          }
        >
          <img
            className="w-6 h-6 absolute bottom-1 left-1 z-10"
            src={autoSkillIcon}
            draggable={false}
            alt="autoUnlockIcon"
            width="32"
            height="32"
          />
        </TooltipWrapper>
      )}
      <div className={divClassName}>
        <TooltipWrapper tooltip={<SkillTooltip skill={skill} skillPoints={previewSkillPoints} blocked={blocked} />}>
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
            <img src={src} className={imgClassName} draggable={false} alt="skillIcon" width="64" height="64" />

            <div className="flex flex-col justify-center">
              <h2 className={`w-[8.5rem] text-center text-gray-200 text-shadow z-10 ${fontSize}`}>{skill.name}</h2>
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
