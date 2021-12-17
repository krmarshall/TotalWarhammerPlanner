import { toast } from 'react-hot-toast';
import BuildInterface from '../types/interfaces/BuildInterface';
import CharacterInterface from '../types/interfaces/CharacterInterface';
import SkillInterface, { SkillRankInterface } from '../types/interfaces/SkillInterfaces';
import { camelCaseToTitle } from './sharedFunctions';

const isRequiredLevel = (characterBuild: BuildInterface | null, skillCheckRank: SkillRankInterface | undefined) => {
  if (!skillCheckRank?.requiresLevel) {
    return true;
  }
  if (characterBuild?.rank) {
    if (characterBuild?.rank < skillCheckRank?.requiresLevel) {
      return false;
    } else {
      return true;
    }
  }
  return false;
};

const hasRequiredSkill = (skill: SkillInterface, characterBuild: BuildInterface | null) => {
  if (!skill.requiresSkill) {
    return true;
  }
  if (characterBuild?.selectedSkills) {
    if (characterBuild?.selectedSkills.includes(skill.requiresSkill)) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

const skillIsBlocked = (skillKey: string, characterBuild: BuildInterface | null) => {
  if (characterBuild?.blockedSkills.length === 0) {
    return false;
  }
  if (characterBuild?.blockedSkills) {
    if (characterBuild.blockedSkills.includes(skillKey)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

const missingRequiredPoints = (
  characterBuild: BuildInterface | null,
  yIndex: number,
  xIndex: number,
  skill: SkillInterface
) => {
  if (!skill.requiresXPoints) {
    return false;
  }
  if (characterBuild?.buildData && skill.inLastYSkills) {
    let totalPoints = 0;
    for (let i = skill.inLastYSkills; i > 0; i--) {
      totalPoints += characterBuild.buildData?.[yIndex]?.[xIndex - i];
    }
    if (totalPoints >= skill.requiresXPoints) {
      return false;
    } else {
      return true;
    }
  }
  return true;
};

const skillIsValid = (
  characterBuild: BuildInterface | null,
  skill: SkillInterface,
  yIndex: number,
  xIndex: number,
  thisSkillsCurrentPoints: number,
  skillKey: string
) => {
  // Check Required Level
  if (!isRequiredLevel(characterBuild, skill.ranks[`rank${thisSkillsCurrentPoints}` as keyof typeof skill.ranks])) {
    return false;
  }
  // Check Required Skills
  if (!hasRequiredSkill(skill, characterBuild)) {
    return false;
  }
  // Check Blocked skills
  if (skillIsBlocked(skillKey, characterBuild)) {
    return false;
  }
  // Check x points in last y skills
  if (missingRequiredPoints(characterBuild, yIndex, xIndex, skill)) {
    return false;
  }
  return true;
};

const skillIncreaseIsValid = (
  characterBuild: BuildInterface | null,
  skill: SkillInterface,
  yIndex: number,
  xIndex: number,
  thisSkillsCurrentPoints: number,
  skillKey: string,
  printError: boolean
) => {
  // Check if skill has higher rank than already selected
  if (!skill.ranks[`rank${thisSkillsCurrentPoints + 1}` as keyof typeof skill.ranks]) {
    if (printError) {
      toast.error('A higher skill rank does not exist.');
    }
    return false;
  }
  // Check Required Level
  if (!isRequiredLevel(characterBuild, skill.ranks[`rank${thisSkillsCurrentPoints + 1}` as keyof typeof skill.ranks])) {
    if (printError) {
      toast.error(
        `Requires rank ${skill.ranks[`rank${thisSkillsCurrentPoints + 1}` as keyof typeof skill.ranks]?.requiresLevel}`
      );
    }
    return false;
  }
  // Check Required Skills
  if (!hasRequiredSkill(skill, characterBuild)) {
    if (printError) {
      toast.error(`Requires skill ${camelCaseToTitle(skill.requiresSkill as string)}`);
    }
    return false;
  }
  // Check Blocked skills
  if (skillIsBlocked(skillKey, characterBuild)) {
    if (printError) {
      toast.error(`Skill is blocked by another skill.`);
    }
    return false;
  }
  // Check x points in last y skills
  if (missingRequiredPoints(characterBuild, yIndex, xIndex, skill)) {
    if (printError) {
      toast.error(`Requires ${skill?.requiresXPoints} points in the last ${skill?.inLastYSkills} skills.`);
    }
    return false;
  }
  return true;
};

// Something wonky with this when checking old saved builds that are now invalid?
const isValidSkillTree = (characterBuild: BuildInterface, characterData: CharacterInterface) => {
  const skillBuildArray = characterBuild?.buildData;
  // Should probably size this dynamically
  const skillKeyArray = [...Array(7)].map(() => Array(20).fill(''));
  const skillDataArray = characterData.skillTree.map((skillLine, yIndex) => {
    const skillKeys = Object.keys(skillLine);
    return skillKeys.map((skillKey, xIndex) => {
      const skill = skillLine[skillKey];
      skillKeyArray[yIndex][xIndex] = skillKey;
      return skill;
    });
  });

  let valid = true;
  for (let y = 0; y < skillBuildArray?.length && valid; y++) {
    if (skillBuildArray[y].length === 0) {
      continue;
    }
    for (let x = 0; x < skillBuildArray[y].length && valid; x++) {
      if (skillBuildArray[y][x] > 0) {
        if (!skillIsValid(characterBuild, skillDataArray[y][x], y, x, skillBuildArray[y][x], skillKeyArray[y][x])) {
          valid = false;
        }
      }
    }
  }
  return valid;
};

export { skillIsValid, skillIncreaseIsValid, isValidSkillTree };
