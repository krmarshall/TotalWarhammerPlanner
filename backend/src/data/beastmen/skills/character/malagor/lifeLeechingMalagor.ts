import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';
import lifeLeeching from '../../../../z_shared/spells/death/lifeLeeching';

const lifeLeechingMalagor: SkillInterface = {
  ...lifeLeeching,
  requiresSkill: 'magicalReserves',
};

export default lifeLeechingMalagor;
