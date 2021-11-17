import SkillInterface from '@projectInterfaces/SkillInterfaces';

const furyOfTheHerd: SkillInterface = {
  name: 'Fury of the Herd',
  icon: '',
  iconType: '',
  ranks: {
    rank1: {
      skillEffects: [
        {
          icon: 'meleeDefense',
          iconType: '',
          description:
            'Melee defence: +4 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank2: {
      skillEffects: [
        {
          icon: 'leadership',
          iconType: '',
          description:
            'Leadership: +4 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
        {
          icon: 'meleeDefense',
          iconType: '',
          description:
            'Melee defence: +6 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
      ],
    },
    rank3: {
      skillEffects: [
        {
          icon: 'leadership',
          iconType: '',
          description:
            'Leadership: +8 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
        {
          icon: 'meleeDefense',
          iconType: '',
          description:
            'Melee defence: +8 for Ungor Spearmen Herd, Ungor Herd, Gor Herd, and Bestigor Herd units \n(Lords army)',
          goodEffect: true,
        },
      ],
    },
  },

  requiresSkill: 'presenceOfMorrslieb',
};

export default furyOfTheHerd;
