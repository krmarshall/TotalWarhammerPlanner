import magicResistanceShared from '../../../z_shared/skills/magicResistanceShared';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const uncannySenses: SkillInterface = {
  ...magicResistanceShared,
  name: 'Uncanny Senses',
  ranks: {
    rank1: {
      ...magicResistanceShared.ranks.rank1,
      requiresLevel: 10,
    },
  },
};

export default uncannySenses;
