import { useContext } from 'react';
import { AppContext } from '../../contexts/AppContext';
import { UnitStatsInterface } from '../../types/interfaces/CharacterInterface';
// @ts-expect-error ts(7016)
import { Svg, Rect } from 'react-svg-path';

interface StatLinePropInterface {
  statName: string;
  statValue: number;
  imgPath: string;
}
const StatLine = ({ statName, imgPath, statValue }: StatLinePropInterface) => {
  const barWidth = 50;
  const exStatValue = 10;
  return (
    <div className="flex flex-row flex-nowrap border-b border-b-gray-500">
      <img
        src={`/imgs/vanilla3/skins/default/${imgPath}.webp`}
        alt={statName}
        width="22"
        height="22"
        className="my-auto mx-1"
      />
      <p>{statName}</p>
      <p className="ml-auto my-auto">{statValue}</p>
      <div className="my-auto mx-2">
        <Svg width={barWidth} height={10}>
          <Rect width={barWidth} height={10} stroke="#6b7280" fill="#00000000" />
          <Rect width={exStatValue} height={8} cx={6} stroke="#00000000" fill="#c29221" />
        </Svg>
      </div>
    </div>
  );
};

const UnitStats = () => {
  const { state } = useContext(AppContext);
  const { characterData } = state;
  const stats = characterData?.unitStats as UnitStatsInterface;
  return (
    <div className="w-1/6 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600 text-gray-50 text-lg">
      <h3 className="text-3xl text-center">Character Stats</h3>
      <StatLine statName="Armour" imgPath="icon_stat_armour" statValue={stats.armour} />
      <StatLine statName="Leadership" imgPath="icon_stat_morale" statValue={stats.morale} />
      <StatLine statName="Speed" imgPath="icon_stat_speed" statValue={stats.run_speed} />
      {stats.fly_speed !== undefined && stats.fly_speed !== 0 && (
        <StatLine statName="Fly Speed" imgPath="icon_stat_speed" statValue={stats.fly_speed} />
      )}
      <StatLine statName="Melee Attack" imgPath="icon_stat_attack" statValue={stats.melee_attack} />
      <StatLine statName="Melee Defence" imgPath="icon_stat_defence" statValue={stats.melee_defence} />
      <StatLine statName="Weapon Strength" imgPath="icon_stat_damage" statValue={stats.damage} />
      <StatLine statName="Charge Bonus" imgPath="icon_stat_charge_bonus" statValue={stats.charge_bonus} />
    </div>
  );
};

export default UnitStats;
