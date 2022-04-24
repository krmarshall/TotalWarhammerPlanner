import { MouseEvent, useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { skillIncreaseIsValid, isValidSkillTree } from '../../utils/skillVerification';
import BuildInterface from '../../types/interfaces/BuildInterface';
import { CharacterInterface, SkillInterface } from '../../types/interfaces/CharacterInterface';
import SkillPointSelector from './SkillPointSelector';
import SkillTooltip from './SkillTooltip';
import { useImage } from 'react-image';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  skillKey: string;
  yIndex: number;
  xIndex: number;
  boxedType: string;
}

const SkillCell = ({ skill, skillKey, yIndex, xIndex, boxedType }: SkillCellPropsInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild, characterData, selectedGame } = state;
  const [selectable, setSelectable] = useState(false);
  const [previewSkillPoints, setPreviewSkillPoints] = useState(0);
  const [blocked, setBlocked] = useState(false);
  const [thisSkillsCurrentPoints, setThisSkillsCurrentPoints] = useState(
    characterBuild?.buildData?.[yIndex]?.[xIndex] as number
  );

  useEffect(() => {
    const newSelectable = skillIncreaseIsValid(
      characterBuild,
      characterData,
      skill,
      thisSkillsCurrentPoints,
      skillKey,
      false
    );
    setSelectable(newSelectable);
    if (characterBuild?.buildData?.[yIndex]?.[xIndex] !== undefined) {
      setThisSkillsCurrentPoints(characterBuild?.buildData?.[yIndex]?.[xIndex] as number);
    } else {
      setThisSkillsCurrentPoints(0);
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

  const skillClickHandler = (event: MouseEvent) => {
    console.log(`Y: ${yIndex}, X: ${xIndex}, Button: ${event.button}, Skill Rank: ${thisSkillsCurrentPoints}`);
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
        toast.error('This skill has dependencies.', { id: `${skillKey} dependencies` });
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

  let divClassName = 'flex flex-row rounded-lg';

  if (thisSkillsCurrentPoints > 0) {
    divClassName += ' bg-gray-600 hover:bg-gray-500';
  } else if (selectable) {
    divClassName += ' hover:bg-gray-600';
  } else {
    // Filter/Grayscale on the tooltip breaks position, and cant override parent filter/grayscale, so on hover remove parents filter/gscale, hacky but works
    divClassName +=
      ' hover:bg-gray-600 opacity-40 hover:opacity-100 filter grayscale hover:filter-none hover:grayscale-0';
  }

  if (blocked) {
    divClassName += ' line-through';
  }

  let tdClassName = 'flex flex-row w-max h-full my-1 border select-none';

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

  const imagePath = skill.image_path.replace('.png', '.webp');
  const { src } = useImage({
    srcList: [
      `/imgs/${selectedGame}/campaign_ui/skills/${imagePath}`,
      `/imgs/${selectedGame}/battle_ui/ability_icons/${imagePath}`,
    ],
  });
  let imgClassName = 'w-16 h-16';
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
        <div className="flex flex-row has-tooltip">
          <img src={src} className={imgClassName} draggable={false} alt="skillIcon" width="64" height="64" />

          <div className="flex flex-col justify-center m-auto">
            <h2 className="w-32 text-center text-xl text-gray-200">{skill.name}</h2>
          </div>
          <SkillTooltip skill={skill} skillPoints={previewSkillPoints} blocked={blocked} />
        </div>

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

      <div className="w-10 flex flex-col justify-center">
        {skill?.right_arrow && <p className="text-center text-4xl text-gray-200">→</p>}
      </div>
    </td>
  );
};

export default SkillCell;
