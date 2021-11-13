import SkillInterface from '../../../../types/interfaces/SkillInterfaces';

const furyOfTheHerd: SkillInterface = {
  name: 'Fury of the Herd',
  icon: '',
  ranks: {
    rank1: [
      {
        icon: 'meleeDefense',
        description:
          'Melee defence: +4 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
        goodEffect: true,
      },
    ],
    rank2: [
      {
        icon: 'leadership',
        description:
          'Leadership: +4 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
        goodEffect: true,
      },
      {
        icon: 'meleeDefense',
        description:
          'Melee defence: +6 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
        goodEffect: true,
      },
    ],
    rank3: [
      {
        icon: 'leadership',
        description:
          'Leadership: +8 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
        goodEffect: true,
      },
      {
        icon: 'meleeDefense',
        description:
          'Melee defence: +8 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
        goodEffect: true,
      },
    ],
  },

  requiresSkill: 'presenceOfMorrslieb',
};

export default furyOfTheHerd;
