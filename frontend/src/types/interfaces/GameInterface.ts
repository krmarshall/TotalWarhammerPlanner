enum SpellLores {
  'runic' = 'runic',
  'mixed' = 'mixed',
  'wild' = 'wild',
  'beasts' = 'beasts',
  'shadows' = 'shadows',
  'life' = 'life',
  'light' = 'light',
  'fire' = 'fire',
  'death' = 'death',
  'metal' = 'metal',
  'bigWagh' = 'bigWagh',
  'lilWagh' = 'lilWagh',
  'heavens' = 'heavens',
  'vampires' = 'vampires',
  'nehekhara' = 'nehekhara',
  'deeps' = 'deeps',
  'stealth' = 'stealth',
  'high' = 'high',
  'wefHigh' = 'wefHigh',
  'skvPlague' = 'skvPlague',
  'ruin' = 'ruin',
  'dark' = 'dark',
  'ice' = 'ice',
  'tempest' = 'tempest',
  'yin' = 'yin',
  'yang' = 'yang',
  'tzeentch' = 'tzeentch',
  'nurgle' = 'nurgle',
  'slaanesh' = 'slaanesh',
  'greatMaw' = 'greatMaw',
}

interface GameInterface {
  [key: string]: {
    text: string;
    image: string;
    factions: { [key: string]: string };
    characters: { [key: string]: { [key: string]: { name: string; spellLore?: string } } };
    characterImages: { [key: string]: string };
    updated: string;
    category: string;
  };
}

export { SpellLores };
export type { GameInterface };
