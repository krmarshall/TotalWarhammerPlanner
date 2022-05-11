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

    const newSelectable = skillIncreaseIsValid(characterBuild, characterData, skill, tempCurPoints, skillKey, false);
    setSelectable(newSelectable);
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

  const skillClickHandler = (event: MouseEvent) => {
    // 0 = LMB, 2 = RMB
    if (event.button === 0) {
      if (!skillIncreaseIsValid(characterBuild, characterData, skill, thisSkillsCurrentPoints, skillKey, true)) {
        return;
      }
      // If new skill add to characterBuild.selectedSkills and blockedSkills references if needed
      if (thisSkillsCurrentPoints === 0) {
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
      newCharacterBuild.buildData[yIndex][xIndex] += 1;
      newCharacterBuild.rank += 1;

      dispatch({
        type: AppContextActions.changeCharacterBuild,
        payload: { characterBuild: newCharacterBuild as BuildInterface },
      });
    } else if (event.button === 2) {
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

      // Check removing skill wont invalidate other skills.
      const testCharacterBuild = JSON.parse(JSON.stringify(characterBuild));
      testCharacterBuild.buildData[yIndex][xIndex] -= 1;

      // If skill was entirely removed delete from characterBuild.selectedSkills and blockedSkills references if needed
      if (testCharacterBuild.buildData[yIndex][xIndex] === 0) {
        const selectedSkillIndex = testCharacterBuild.selectedSkills.indexOf(skill.key);
        testCharacterBuild.selectedSkills.splice(selectedSkillIndex, 1);

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

      // Remove 2 from character rank to check rank requirements on other skills
      testCharacterBuild.rank -= 2;

      if (!isValidSkillTree(testCharacterBuild, state.characterData as CharacterInterface)) {
        toast.error('This skill has dependents.', { id: `${skillKey} dependencies` });
        return;
      }

      // Add back the extra rank we took off to verify the skill tree
      testCharacterBuild.rank += 1;
      // Remove Skill Point from build array
      const newCharacterBuild: BuildInterface = testCharacterBuild;

      dispatch({
        type: AppContextActions.changeCharacterBuild,
        payload: { characterBuild: newCharacterBuild as BuildInterface },
      });
    }
  };

  let divClassName = 'flex flex-row rounded-lg hover:shadow-lg';

  if (thisSkillsCurrentPoints > 0) {
    divClassName += ' bg-gray-600 hover:bg-gray-500';
  } else if (selectable) {
    divClassName += ' hover:bg-gray-600';
  } else {
    divClassName +=
      ' hover:bg-gray-600 opacity-40 hover:opacity-100 filter grayscale hover:filter-none hover:grayscale-0';
  }

  if (blocked) {
    divClassName += ' line-through';
  }

  let tdClassName = 'flex flex-row w-max h-auto my-1 border ';

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
      tdClassName += ' border-gray-400 border-l-0 rounded-r';
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
  let imgClassName = 'w-16 h-16 my-auto drop-shadow-lg';
  if (src?.includes('/battle_ui/ability_icons/')) {
    imgClassName += ' p-2.5';
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
      <div className={divClassName}>
        <TooltipWrapper tooltip={<SkillTooltip skill={skill} skillPoints={previewSkillPoints} blocked={blocked} />}>
          <div className="flex flex-row">
            <img src={src} className={imgClassName} draggable={false} alt="skillIcon" width="64" height="64" />

            <div className="flex flex-col justify-center m-auto">
              <h2 className="w-32 text-center text-xl text-gray-200 text-shadow">{skill.name}</h2>
            </div>
          </div>
        </TooltipWrapper>

        <div className="w-4 flex flex-col justify-center mx-1 text-sm text-gray-200">
          {skill?.levels?.map((rankKey, index) => {
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
          })}
        </div>
      </div>
    </td>
  );
};

export default SkillCell;
