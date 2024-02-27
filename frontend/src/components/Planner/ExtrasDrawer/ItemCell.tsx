import { useContext } from 'react';
import { ItemInterface } from '../../../types/interfaces/CharacterInterface';
import { AppContext } from '../../../contexts/AppContext';
import BaseCell from '../BaseCell';

interface SkillCellPropsInterface {
  item: ItemInterface;
}

const ItemCell = ({ item }: SkillCellPropsInterface) => {
  const { state } = useContext(AppContext);
  const { selectedMod } = state;

  const srcList = [
    `/imgs/vanilla3/${item.ui_icon}.webp`,
    `/imgs/${selectedMod}/${item.ui_icon}.webp`,
    `/imgs/vanilla3/campaign_ui/skills/0_placeholder_skill.webp`,
  ];
  return <BaseCell item={item} thisSkillsCurrentPoints={0} previewSkillPoints={0} srcList={srcList} />;
};

export default ItemCell;
