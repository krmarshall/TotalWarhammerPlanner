import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';

import resetIcon from '../../imgs/other/icon_reset.webp';
import shareIcon from '../../imgs/other/icon_button_external_link.webp';
import backIcon from '../../imgs/other/icon_home.webp';
import techGameData from '../../data/techGameData';

interface PropInterface {
  isMobile: boolean;
}

const TopBarTech = ({ isMobile }: PropInterface) => {
  const { state, dispatch } = useContext(AppContext);
  const { techData, selectedModTech } = state;
  const { mod, techTree } = useParams();

  const navigate = useNavigate();

  const resetButtonHandler = () => {
    // Todo
  };

  let headerClass = 'z-10 text-center text-4xl  mx-auto text-gray-200 text-shadow-border ';
  if (isMobile) {
    headerClass += ' mb-2';
  } else {
    headerClass += ' m-2';
  }
  return (
    <div className="h-[4.5rem] flex flex-row place-content-between">
      <div className="w-[30vw] flex place-content-start">
        <button
          className="flex flex-row place-content-center my-auto px-3 bg-gray-500 hover:bg-gray-400/80 border rounded-xl drop-shadow-lg hover-scale"
          onClick={() => navigate('/techHome')}
        >
          <img src={backIcon} alt="Back" width="45" height="45" className="my-auto w-8 h-8" draggable={false} />
          <p className="text-center text-gray-200 text-2xl px-0.5 ml-1">Home</p>
        </button>
        <p className="text-gray-200 text-2xl text-center my-auto ml-4">
          {isMobile ? techGameData[selectedModTech]?.text : `Selected Game: ${techGameData[selectedModTech]?.text}`}
        </p>
      </div>

      <h1 className={headerClass}>{techGameData[selectedModTech].techTrees[techTree as string].name}</h1>

      <div className="w-[30vw] flex place-content-end">
        <button
          className="flex flex-row place-content-center mr-4 px-2 my-auto bg-gray-500 hover:bg-gray-400/80 border rounded-xl drop-shadow-lg hover-scale"
          onClick={resetButtonHandler}
        >
          <img src={resetIcon} alt="reset" width="20" height="20" className="my-auto w-6 h-6" draggable={false} />
          <p className="text-center text-gray-200 text-2xl px-0.5">Reset</p>
        </button>
      </div>
    </div>
  );
};

export default TopBarTech;
