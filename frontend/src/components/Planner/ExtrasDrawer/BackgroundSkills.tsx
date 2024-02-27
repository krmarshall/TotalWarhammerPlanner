import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import BaseCell from '../BaseCell';

const BackgroundSkills = () => {
  const { state } = useContext(AppContext);
  const { characterData } = state;
  return (
    <div className="flex flex-col mx-1 mt-1.5 min-w-[14.5rem] max-w-[35rem] shadow-lg border border-gray-500 rounded">
      <h2 className="text-center text-3xl mt-1 text-gray-200 text-shadow">Background Skills</h2>
      <div className="flex flex-row flex-wrap w-full h-full pb-1 place-items-center overflow-x-hidden overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        {characterData?.backgroundSkills?.map((bgSkill) => {
          return (
            <BaseCell
              key={bgSkill.character_skill_key}
              skill={bgSkill}
              thisSkillsCurrentPoints={0}
              previewSkillPoints={0}
              srcList={[
                `/imgs/${bgSkill.image_path}.webp`,
                `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`,
              ]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BackgroundSkills;
