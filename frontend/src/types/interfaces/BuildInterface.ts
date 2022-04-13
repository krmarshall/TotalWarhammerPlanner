interface BuildInterface {
  game: string;
  faction: string;
  character: string;
  buildData: Array<Array<number>>;
  rank: number;
  selectedSkills: Array<string>;
  blockedSkills: Array<string>;
}

export default BuildInterface;
