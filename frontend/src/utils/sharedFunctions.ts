import BuildInterface from '../types/interfaces/BuildInterface';
import { AbilityInterface, CharacterInterface, SkillEffectInterface } from '../types/interfaces/CharacterInterface';

const createEmptyCharacterBuild = (
  character: CharacterInterface,
  gameKey: string,
  factionKey: string,
  characterKey: string
) => {
  const emptyBuildArray: Array<Array<number>> = [];
  let rank = 1;
  let startingSkillPoints = 0;
  const selectedSkills: Array<string> = [];
  character.skillTree.forEach((skillRow, yIndex) => {
    emptyBuildArray[yIndex] = [];
    skillRow.forEach((skill, xIndex) => {
      emptyBuildArray[yIndex][xIndex] = skill.points_on_creation;
      rank += skill.points_on_creation;
      startingSkillPoints += skill.points_on_creation;
      if (skill.points_on_creation > 0) {
        selectedSkills.push(skill.character_skill_key);
        selectedSkills.push(skill.key);
      }
    });
  });

  const emptyCharacterBuild: BuildInterface = {
    game: gameKey,
    faction: factionKey,
    character: characterKey,
    buildData: emptyBuildArray,
    rank,
    startingSkillPoints,
    autoUnlockSkillPoints: 0,
    selectedSkills,
    blockedSkills: [],
  };
  return emptyCharacterBuild;
};

// Skills can be quest items that dont cost a rank (use_quest_for_prefix), or start with skill points already assigned (points_on_creation)
const createCharacterBuildFromArray = (
  arrayBuild: Array<Array<number>>,
  characterData: CharacterInterface,
  game: string,
  faction: string,
  character: string
) => {
  let rank = 1;
  let startingSkillPoints = 0;
  let autoUnlockSkillPoints = 0;
  const selectedSkills: Array<string> = [];
  const blockedSkills: Array<string> = [];

  arrayBuild.forEach((row, y) => {
    row.forEach((skill, x) => {
      if (skill > 0) {
        rank += skill;

        selectedSkills.push(characterData.skillTree[y][x].character_skill_key);
        selectedSkills.push(characterData.skillTree[y][x].key);

        if (characterData.skillTree[y][x].points_on_creation > 0) {
          startingSkillPoints += characterData.skillTree[y][x].points_on_creation;
        }

        characterData.skillTree[y][x].levels?.forEach((level, index) => {
          if (index + 1 <= skill) {
            if (level.blocks_character_skill_key !== undefined) {
              blockedSkills.push(...level.blocks_character_skill_key);
            }
          }

          if (level.auto_unlock_at_rank !== undefined) {
            autoUnlockSkillPoints++;
          }
        });
      }
    });
  });
  const newCharacterBuild: BuildInterface = {
    game,
    faction,
    character,
    buildData: arrayBuild,
    rank,
    startingSkillPoints,
    autoUnlockSkillPoints,
    selectedSkills,
    blockedSkills,
  };
  return newCharacterBuild;
};

const trimString = (string: string, length = 75) => {
  let trimmedString = string;
  if (trimmedString.length > length) {
    trimmedString = trimmedString.substring(0, length);
    trimmedString += '...';
  }
  return trimmedString;
};

const getRelatedAbilities = (effectsArray: Array<SkillEffectInterface> | undefined) => {
  const relatedAbilities: Array<AbilityInterface> = [];
  const relatedAbilitiesKeys: Array<string> = [];

  effectsArray?.forEach((effect) => {
    if (effect.related_abilities) {
      effect.related_abilities.forEach((ability) => {
        let keyCheck = ability.unit_ability.key;
        if (keyCheck.endsWith('_upgraded')) {
          keyCheck = keyCheck.replace(/_upgraded$/, '');
        }
        if (!relatedAbilitiesKeys.includes(keyCheck)) {
          relatedAbilities.push(ability);
          relatedAbilitiesKeys.push(keyCheck);
        }
      });
    }
  });

  return relatedAbilities;
};

const setFontSize = (string: string) => {
  let fontSize;
  if (string.length > 52) {
    fontSize = 'text-xs';
  } else if (string.length > 37) {
    fontSize = 'text-sm';
  } else if (string.length > 27) {
    fontSize = 'text-base';
  } else {
    fontSize = 'text-xl';
  }

  return fontSize;
};

// Really verbose way of doing this, but tailwind needs the whole class present to generate it
const getBgUrl = (selectedFaction: string | undefined) => {
  let returnUrl = ' bg-[url(/imgs/other/bgs/default/bg.webp)]';
  switch (selectedFaction) {
    case 'brt_bretonnia':
      returnUrl = ' bg-[url(/imgs/other/bgs/brt_bretonnia/bg.webp)]';
      break;
    case 'bst_beastmen':
      returnUrl = ' bg-[url(/imgs/other/bgs/bst_beastmen/bg.webp)]';
      break;
    case 'chs_chaos':
      returnUrl = ' bg-[url(/imgs/other/bgs/chs_chaos/bg.webp)]';
      break;
    case 'cst_vampire_coast':
      returnUrl = ' bg-[url(/imgs/other/bgs/cst_vampire_coast/bg.webp)]';
      break;
    case 'cth_cathay':
      returnUrl = ' bg-[url(/imgs/other/bgs/cth_cathay/bg.webp)]';
      break;
    case 'dae_daemons':
      returnUrl = ' bg-[url(/imgs/other/bgs/dae_daemons/bg.webp)]';
      break;
    case 'def_dark_elves':
      returnUrl = ' bg-[url(/imgs/other/bgs/def_dark_elves/bg.webp)]';
      break;
    case 'grn_greenskins':
      returnUrl = ' bg-[url(/imgs/other/bgs/grn_greenskins/bg.webp)]';
      break;
    case 'kho_khorne':
      returnUrl = ' bg-[url(/imgs/other/bgs/kho_khorne/bg.webp)]';
      break;
    case 'ksl_kislev':
      returnUrl = ' bg-[url(/imgs/other/bgs/ksl_kislev/bg.webp)]';
      break;
    case 'lzd_lizardmen':
      returnUrl = ' bg-[url(/imgs/other/bgs/lzd_lizardmen/bg.webp)]';
      break;
    case 'nur_nurgle':
      returnUrl = ' bg-[url(/imgs/other/bgs/nur_nurgle/bg.webp)]';
      break;
    case 'ogr_ogre_kingdoms':
      returnUrl = ' bg-[url(/imgs/other/bgs/ogr_ogre_kingdoms/bg.webp)]';
      break;
    case 'skv_skaven':
      returnUrl = ' bg-[url(/imgs/other/bgs/skv_skaven/bg.webp)]';
      break;
    case 'sla_slaanesh':
      returnUrl = ' bg-[url(/imgs/other/bgs/sla_slaanesh/bg.webp)]';
      break;
    case 'tmb_tomb_kings':
      returnUrl = ' bg-[url(/imgs/other/bgs/tmb_tomb_kings/bg.webp)]';
      break;
    case 'tze_tzeentch':
      returnUrl = ' bg-[url(/imgs/other/bgs/tze_tzeentch/bg.webp)]';
      break;
    case 'vmp_vampire_counts':
      returnUrl = ' bg-[url(/imgs/other/bgs/vmp_vampire_counts/bg.webp)]';
      break;
    default:
      returnUrl = ' bg-[url(/imgs/other/bgs/default/bg.webp)]';
      break;
  }
  return returnUrl;
};

export {
  createEmptyCharacterBuild,
  createCharacterBuildFromArray,
  trimString,
  getRelatedAbilities,
  setFontSize,
  getBgUrl,
};
