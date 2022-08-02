import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import BackgroundSkillCell from './BackgroundSkillCell';

const BackgroundSkills = () => {
  const { state } = useContext(AppContext);
  const { characterData } = state;
  return (
    <div className="flex flex-col mx-4 min-w-[16.5rem] max-w-[30rem] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl m-2 text-gray-200 text-shadow">Background Skills</h2>
      <div className="flex flex-row flex-wrap w-full place-items-center overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        {characterData?.backgroundSkills.map((bgSkill) => {
          return <BackgroundSkillCell key={bgSkill.key} skill={bgSkill} />;
        })}
      </div>
    </div>
  );
};

export default BackgroundSkills;
