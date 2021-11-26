import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';
import bestialSurge from '../../../../z_shared/spells/wild/bestialSurge';

const bestialSurgeMalagor: SkillInterface = {
  ...bestialSurge,
  requiresSkill: 'magicalReserves',
};

export default bestialSurgeMalagor;
