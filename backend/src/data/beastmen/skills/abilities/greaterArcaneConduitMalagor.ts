import greaterArcaneConduitShared from '../../../z_shared/skills/greaterArcaneConduitShared';
import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const greaterArcaneConduitMalagor: SkillInterface = {
  ...greaterArcaneConduitShared,
  name: 'Greater Arcane Conduit',
  requiresXPoints: 5,
  inLastYSkills: 5,
};

export default greaterArcaneConduitMalagor;
