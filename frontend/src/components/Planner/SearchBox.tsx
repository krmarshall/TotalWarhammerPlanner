import { useContext, useEffect, useState } from 'react';
import { AppContext, AppContextActions } from '../../contexts/AppContext';
import { searchDataForKeyword } from '../../utils/searchFunctions';

const SearchBox = () => {
  const { state, dispatch } = useContext(AppContext);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const cleanedText = searchText.trim();
    const debounceInputTimeoutId = setTimeout(() => {
      if (state.characterData !== null) {
        if (cleanedText === '') {
          dispatch({
            type: AppContextActions.changeSearchString,
            payload: { searchString: null, highlightArray: null },
          });
        } else {
          const highlightArray = searchDataForKeyword(state.characterData, searchText);
          dispatch({
            type: AppContextActions.changeSearchString,
            payload: { searchString: cleanedText, highlightArray: highlightArray },
          });
        }
      }
    }, 500);
    return () => clearTimeout(debounceInputTimeoutId);
  }, [searchText]);

  return (
    <div className="absolute top-2 right-2 z-20 p-2 bg-slate-500 rounded-xl">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        className="px-1.5 w-32 text-xl text-center rounded focus:outline-none placeholder-opacity-60 placeholder-black bg-gray-200"
      ></input>
    </div>
  );
};

export default SearchBox;
