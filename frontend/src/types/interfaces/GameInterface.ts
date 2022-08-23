interface GameInterface {
  [key: string]: {
    text: string;
    image: string;
    factions: { [key: string]: string };
    characters: { [key: string]: { [key: string]: { name: string; spellLore?: string } } };
    characterImages: { [key: string]: string };
    updated: string;
  };
}

export default GameInterface;
