import { useEffect } from 'react';
import TechModSelector from '../components/Techs/TechModSelector';
import TechSelector from '../components/Techs/TechSelector';

const TechHome = () => {
  useEffect(() => {
    document.title = 'Total Warhammer Planner';
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
