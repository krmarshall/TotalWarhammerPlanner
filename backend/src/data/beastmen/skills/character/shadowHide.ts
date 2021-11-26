import missileResistanceShared from '../../../z_shared/skills/missileResistanceShared';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const shadowHide: SkillInterface = {
  ...missileResistanceShared,
  name: 'Shadow Hide',
  ranks: {
    rank1: {
      ...missileResistanceShared.ranks.rank1,
      requiresLevel: 10,
    },
  },
};

export default shadowHide;
