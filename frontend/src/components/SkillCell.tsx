import { MouseEvent, useContext, useEffect, useState } from 'react';
import skillIcons from '../assets/img/skills/skillIcons';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { isValidSkillTree, skillIncreaseIsValid } from '../sharedFunctions/SkillVerification';
import BuildInterface from '../types/interfaces/BuildInterface';
import CharacterInterface from '../types/interfaces/CharacterInterface';
import SkillInterface from '../types/interfaces/SkillInterfaces';
import SkillPointSelector from './SkillPointSelector';
import SkillTooltip from './SkillTooltip';

interface SkillCellPropsInterface {
  skill: SkillInterface;
  skillKey: string;
  yIndex: number;
  xIndex: number;
  boxedType: string;
}

const SkillCell = ({ skill, skillKey, yIndex, xIndex, boxedType }: SkillCellPropsInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { characterBuild } = state;
  const [selectable, setSelectable] = useState(false);
  const [previewRankKey, setPreviewRankKey] = useState('rank1');
  const thisSkillsCurrentPoints = characterBuild?.buildData[yIndex][xIndex] as number;
  const rankKeys = Object.keys(skill.ranks);

  useEffect(() => {
    const newSelectable = skillIncreaseIsValid(
      characterBuild,
      skill,
      yIndex,
      xIndex,
      thisSkillsCurrentPoints,
      skillKey
    );
    setSelectable(newSelectable);
  }, [characterBuild?.buildData]);

  useEffect(() => {
    if (skill.ranks[`rank${thisSkillsCurrentPoints + 1}` as keyof typeof skill.ranks]) {
      setPreviewRankKey(`rank${thisSkillsCurrentPoints + 1}`);
    } else {
      setPreviewRankKey(`rank${thisSkillsCurrentPoints}`);
    }
  }, [thisSkillsCurrentPoints]);

  const skillClickHandler = (event: MouseEvent) => {
    console.log(`Y: ${yIndex}, X: ${xIndex}, Button: ${event.button}, Skill Rank: ${thisSkillsCurrentPoints}`);
    // 0 = LMB, 2 = RMB
    if (event.button === 0) {
      if (!skillIncreaseIsValid(characterBuild, skill, yIndex, xIndex, thisSkillsCurrentPoints, skillKey)) {
        return;
      }
      // If new skill add to characterBuild.selectedSkills and blockedSkills references if needed
      if (thisSkillsCurrentPoints === 0) {
        characterBuild?.selectedSkills.push(skillKey);
        if (skill.blocksSkills) {
          skill.blocksSkills.map((blockedSkill) => {
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
        console.log('Cannot remove unselected skill.');
        return;
      }
      // Check removing skill wont invalidate other skills.
      const testCharacterBuild = JSON.parse(JSON.stringify(characterBuild));
      testCharacterBuild.buildData[yIndex][xIndex] -= 1;

      // If skill was entirely removed delete from characterBuild.selectedSkills and blockedSkills references if needed
      if (testCharacterBuild.buildData[yIndex][xIndex] === 0) {
        const selectedSkillIndex = testCharacterBuild.selectedSkills.indexOf(skillKey);
        testCharacterBuild.selectedSkills.splice(selectedSkillIndex, 1);

        if (skill.blocksSkills) {
          skill.blocksSkills.map((blockedSkill) => {
            const blockedSkillIndex = testCharacterBuild.blockedSkills.indexOf(blockedSkill);
            testCharacterBuild.blockedSkills.splice(blockedSkillIndex, 1);
          });
        }
      }

      // Remove 2 from character rank to check rank requirements on other skills
      testCharacterBuild.rank -= 2;

      if (!isValidSkillTree(testCharacterBuild, state.characterData as CharacterInterface)) {
        console.log('This skill has dependencies.');
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

  let tdClassName = 'flex flex-row w-max h-full my-1 border hover:bg-gray-500 select-none';

  if (thisSkillsCurrentPoints > 0) {
    tdClassName += ' bg-gray-600';
  } else if (selectable) {
    tdClassName += ' ';
  } else {
    // Filter/Grayscale on the tooltip breaks position, and cant override parent filter/grayscale, so on hover remove parents filter/gscale, hacky but works
    tdClassName += ' filter grayscale hover:filter-none hover:grayscale-0';
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
      <div className="flex flex-row has-tooltip">
        <img // @ts-expect-error 7053
          src={skillIcons[skill.iconType][skill.icon]}
          className="w-16 h-16"
          draggable={false}
          alt="skillIcon"
          width="64"
          height="64"
        />
        <div className="flex flex-col justify-center m-auto">
          <h2 className="w-32 text-center text-xl text-gray-200">{skill.name}</h2>
        </div>
        <SkillTooltip skill={skill} rankKey={previewRankKey} />
      </div>

      <div className="w-4 flex flex-col justify-center mx-1 text-sm text-gray-200">
        {rankKeys.map((rankKey, index) => {
          return (
            <SkillPointSelector
              key={rankKey}
              index={index}
              skill={skill}
              rankKey={rankKey}
              thisSkillsCurrentPoints={thisSkillsCurrentPoints}
            />
          );
        })}
      </div>
      <div className="w-10 flex flex-col justify-center">
        {skill.rightArrow && <p className="text-center text-4xl text-gray-200">→</p>}
      </div>
    </td>
  );
};

export default SkillCell;
