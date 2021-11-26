import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';
import wildHeart from '../../../../z_shared/spells/beasts/wildHeart';

const wildHeartMalagor: SkillInterface = {
  ...wildHeart,
  requiresSkill: 'magicalReserves',
};

export default wildHeartMalagor;
