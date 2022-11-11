import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import TechCell from './TechCell';

interface PropInterface {
  techRow: Array<TechNodeInterface> | null;
  techRowAbove: Array<TechNodeInterface> | null | undefined;
  techRowBelow: Array<TechNodeInterface> | null | undefined;
  yIndex: number;
}

const TechRow = ({ techRow, techRowAbove, techRowBelow, yIndex }: PropInterface) => {
  return (
    <tr className="flex flex-row">
      {techRow === null || techRow.length === 0 ? (
        <td className="h-0"></td>
      ) : (
        techRow.map((tech, xIndex) => {
          const aboveTech = techRowAbove?.[xIndex];
          const belowTech = techRowBelow?.[xIndex];
          const leftTech = techRow[xIndex - 1];
          const rightTech = techRow[xIndex + 1];
          if (tech === null) {
            return <td key={xIndex} className="w-[15.625rem]"></td>;
          }
          return <TechCell key={tech?.key} tech={tech} xIndex={xIndex} yIndex={yIndex} />;
        })
      )}
    </tr>
  );
};

const getUiGroupBorder = (
  aboveTech: TechNodeInterface | undefined,
  belowTech: TechNodeInterface | undefined,
  leftTech: TechNodeInterface | undefined,
  rightTech: TechNodeInterface | undefined,
  selfTech: TechNodeInterface | undefined
) => {
  //
};

const areArraysEqual = (a: Array<string>, b: Array<string>) => {
  //
};

export default TechRow;
