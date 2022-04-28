import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import BackgroundSkillCell from './BackgroundSkillCell';

const BackgroundSkills = () => {
  const { state } = useContext(AppContext);
  const { characterData } = state;
  return (
    <div className="flex flex-col w-[25vw] place-items-center shadow-lg border border-gray-500 rounded overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <h2 className="text-center text-3xl m-2 text-gray-200">Background Skills</h2>
      <div>
        {characterData?.backgroundSkills.map((bgSkill) => {
          return <BackgroundSkillCell key={bgSkill.character_skill_key} skill={bgSkill} />;
        })}
      </div>
    </div>
  );
};

export default BackgroundSkills;
