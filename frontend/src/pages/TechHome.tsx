import { useContext, useEffect } from 'react';
import TechModSelector from '../components/Techs/TechModSelector';
import TechSelector from '../components/Techs/TechSelector';
import { AppContext, AppContextActions } from '../contexts/AppContext';
import { toast } from 'react-hot-toast';

const TechHome = () => {
  const { state, dispatch } = useContext(AppContext);
  const { showedTechToast } = state;
  useEffect(() => {
    document.title = 'Total Warhammer Planner';
  }, []);

  let toastId: any;
  useEffect(() => {
    if (toastId === undefined && !showedTechToast) {
      toastId = toast.custom(
        <div className="p-3 bg-gray-600 border rounded-xl border-gray-500 text-gray-50 flex flex-row place-content-around">
          <h1 className="text-4xl mx-6 my-auto">ℹ</h1>
          <p className="text-3xl m-auto w-[40rem] text-center">
            Tech Trees are extremely unfinished and mostly a proof of concept, dont report any issues with them unless
            they are crashing the page. If you want to see them developed more, use them.
          </p>
          <button
            className="text-2xl bg-slate-500 rounded-2xl py-1 px-5 my-auto ml-4 shadow-md hover-scale"
            onClick={() => toast.remove(toastId)}
          >
            Dismiss
          </button>
        </div>,
        { position: 'bottom-center', duration: 20000 }
      );
      dispatch({ type: AppContextActions.changeShowedTechToast, payload: { showedTechToast: true } });
    }
  }, []);
  return (
    <div className="grow mt-1 bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="flex flex-col flex-nowrap place-content-center">
        <TechModSelector />
        <TechSelector />
      </div>
    </div>
  );
};

export default TechHome;
