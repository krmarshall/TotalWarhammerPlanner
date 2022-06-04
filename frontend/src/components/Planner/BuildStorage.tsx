import { useContext, useEffect, useState, MouseEvent } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import {
  deleteBuildFromStorage,
  initializeBuildsFromStorage,
  saveBuildToStorage,
  setActiveBuildFromStorage,
} from '../../utils/storageFunctions';

const BuildStorage = () => {
  const [buildNameInput, setBuildNameInput] = useState('');
  const { state, dispatch } = useContext(AppContext);
  const { mod, faction, character } = useParams();

  useEffect(() => {
    if (!state.characterBuild?.character) {
      return;
    }
    initializeBuildsFromStorage(state, dispatch);
  }, [state.characterBuild?.character]);

  const saveClickHandler = () => {
    saveBuildToStorage(state, dispatch, buildNameInput);
    setBuildNameInput('');
  };

  const deleteClickHandler = (buildName: string, event: MouseEvent) => {
    // Might not be necessary? Stop event from bubbling up to the setBuildHandler as well
    event.stopPropagation();
    deleteBuildFromStorage(state, dispatch, buildName);
  };

  const setBuildHandler = (buildName: string) => {
    setActiveBuildFromStorage(state, dispatch, buildName, mod as string, faction as string, character as string);
  };

  return (
    <div className="h-auto w-[25vw] flex flex-col place-content-between shadow-lg border border-gray-500 rounded ">
      <div className="flex flex-col justify-center">
        <h2 className="text-center text-3xl my-1 text-gray-200 text-shadow">Builds</h2>
      </div>
      <ul className="flex-grow pr-2 pb-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
        {state.localStorageBuildKeys.map((buildKey, index) => {
          return (
            <li
              key={index}
              className="bg-gray-600 hover:bg-gray-500 w-fit min-w-[10vw] max-w-[22vw] rounded p-0.5 pl-2 mx-auto my-1 flex flex-row place-content-between cursor-pointer"
              onClick={() => {
                setBuildHandler(buildKey);
              }}
            >
              <p className="overflow-hidden whitespace-nowrap text-ellipsis text-2xl mx-auto text-gray-200">
                {buildKey}
              </p>
              <p
                className="px-2 pt-0.5 text-xl text-red-500 rounded hover:bg-gray-700"
                onClick={(event) => {
                  deleteClickHandler(buildKey, event);
                }}
              >
                X
              </p>
            </li>
          );
        })}
      </ul>
      <div className="flex flex-row my-2 place-content-center">
        <input
          type="text"
          placeholder="Build Name"
          value={buildNameInput}
          onChange={(event) => {
            setBuildNameInput(event.target.value);
          }}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              saveClickHandler();
            }
          }}
          className="w-32 rounded m-1 px-1 text-xl text-center focus:outline-none placeholder-opacity-50 placeholder-black bg-gray-400"
        />
        <button
          className="text-center w-18 m-1 my-auto px-2 bg-green-800 hover:bg-green-600 text-gray-200 text-xl border rounded-xl"
          onClick={saveClickHandler}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BuildStorage;
