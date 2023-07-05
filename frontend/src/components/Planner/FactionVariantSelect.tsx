import { useContext, useEffect } from 'react';
import { AltFactionNodeSetsInterface, CharacterInterface } from '../../types/interfaces/CharacterInterface';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { useParams } from 'react-router-dom';
import { createEmptyCharacterBuild } from '../../utils/sharedFunctions';
import { toast } from 'react-hot-toast';

const FactionVariantSelect = () => {
  const { state, dispatch } = useContext(AppContext);
  const { characterData, cleanCharacterData } = state;
  const { mod, faction, character } = useParams();

  useEffect(() => {
    if (characterData?.altFactionNodeSets !== undefined && cleanCharacterData === null) {
      dispatch({
        type: AppContextActions.changeCleanCharacterData,
        payload: { cleanCharacterData: JSON.parse(JSON.stringify(characterData)) },
      });
    }
  }, []);

  const altFactionChangeHandler = (factionKey: string) => {
    if (characterData === null) {
      return;
    }
    const emptyCharacterBuild = createEmptyCharacterBuild(
      characterData,
      mod as string,
      faction as string,
      character as string
    );
    const newCharacterData: CharacterInterface = JSON.parse(JSON.stringify(cleanCharacterData));
    if (factionKey === 'none') {
      dispatch({
        type: AppContextActions.changeSelectedAltFactionNodeSet,
        payload: {
          selectedAltFactionNodeSet: '',
          characterBuild: emptyCharacterBuild,
          characterData: newCharacterData,
        },
      });
    }
    const factionNodes = characterData.altFactionNodeSets?.[factionKey].nodes;
    if (factionNodes === undefined) {
      toast.error('Invalid Faction Key...', { id: 'error faction change key' });
      return;
    }

    const sortIndents = new Set<number>();
    factionNodes.forEach((node) => {
      const replaceIndex = newCharacterData.skillTree[node.indent].findIndex(
        (genericNode) => genericNode.tier === node.tier
      );
      if (replaceIndex === -1) {
        newCharacterData.skillTree[node.indent].push(node);
        sortIndents.add(node.indent);
      } else {
        newCharacterData.skillTree[node.indent][replaceIndex] = node;
      }
    });

    sortIndents.forEach((indent) => newCharacterData.skillTree[indent].sort((a, b) => a.tier - b.tier));

    dispatch({
      type: AppContextActions.changeSelectedAltFactionNodeSet,
      payload: {
        selectedAltFactionNodeSet: factionKey,
        characterBuild: emptyCharacterBuild,
        characterData: newCharacterData,
      },
    });
  };
  return (
    <div className="text-center">
      <h3 className="text-3xl text-gray-50">Faction Variants</h3>
      <select
        className="max-w-[12rem] my-auto h-8 px-1 bg-gray-500 rounded drop-shadow-lg font-CaslonAntique text-xl text-gray-50"
        onChange={(event) => {
          altFactionChangeHandler(event.target.value);
        }}
      >
        <option key="none" value="none" className="text-base font-CaslonAntique">
          Generic Faction
        </option>
        {Object.entries(characterData?.altFactionNodeSets as AltFactionNodeSetsInterface).map((entry) => {
          const factionKey = entry[0];
          const factionData = entry[1];
          return (
            <option key={factionKey} value={factionKey} className="text-base font-CaslonAntique">
              {factionData.factionName}
            </option>
          );
        })}
      </select>

      <hr className="grow mt-3.5 mb-2 opacity-50" />
    </div>
  );
};

export default FactionVariantSelect;
