interface CharacterInterface {
  implemented: boolean;
  name: string;
  icon: string;
  spellLoreIcon?: string;
}

interface FactionInterface {
  implemented: boolean;
  name: string;
  icon: string;
  lords: {
    [key: string]: CharacterInterface;
  };
  heroes: {
    [key: string]: CharacterInterface;
  };
}

export type { FactionInterface, CharacterInterface };
