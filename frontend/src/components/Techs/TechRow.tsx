import { TechNodeInterface } from '../../types/interfaces/TechInterface';
import TechCell from './TechCell';

interface PropInterface {
  techRow: Array<TechNodeInterface> | null;
  yIndex: number;
}

const TechRow = ({ techRow, yIndex }: PropInterface) => {
  return (
    <tr className="flex flex-row">
      {techRow === null || techRow.length === 0 ? (
        <td className="h-0"></td>
      ) : (
        techRow.map((tech, xIndex) => {
          if (tech === null) {
            return <td key={xIndex} className="w-[15.625rem]"></td>;
          }
          return <TechCell key={tech?.key} tech={tech} xIndex={xIndex} yIndex={yIndex} />;
        })
      )}
    </tr>
  );
};

export default TechRow;
