import SkillInterface from '../../../../../types/interfaces/SkillInterfaces';
import smokeAndMirrors from '../../../../z_shared/spells/shadows/smokeAndMirrors';

const smokeAndMirrorsMalagor: SkillInterface = {
  ...smokeAndMirrors,
  requiresSkill: 'magicalReserves',
  rightArrow: true,
};

export default smokeAndMirrorsMalagor;
