import skillIcons from '../assets/img/skills/skillIcons';
import SkillInterface from '../types/interfaces/SkillInterfaces';
import SkillTooltip from './SkillTooltip';

interface SkillCellPropsInterface {
  item: SkillInterface;
}

const ItemCell = ({ item }: SkillCellPropsInterface) => {
  return (
    <div className="flex flex-row w-max h-full m-1 rounded-lg hover:bg-gray-600 select-none">
      <div className="flex flex-row has-tooltip">
        <img // @ts-expect-error 7053
          src={skillIcons[item.iconType][item.icon]}
          className="w-16 h-16"
          draggable={false}
          alt="itemIcon"
          width="64"
          height="64"
        />
        <div className="flex flex-col justify-center m-auto">
          <h2 className="w-32 text-center text-xl text-gray-200">{item.name}</h2>
        </div>
        <SkillTooltip skill={item} rankKey="rank1" blocked={false} />
      </div>
    </div>
  );
};

export default ItemCell;
