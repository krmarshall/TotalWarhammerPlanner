import SkillInterface from './SkillInterfaces';

interface SkillLineInterface {
  [key: string]: SkillInterface;
}

interface CharacterInterface {
  skillTree: Array<SkillLineInterface>;
  items: Array<SkillInterface>;
}

export default CharacterInterface;
