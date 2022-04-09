import { useNavigate } from 'react-router-dom';
import headerImg from '../imgs/header.webp';

const Header = () => {
  const navigate = useNavigate();
  const navigateTo = (path: string) => {
    navigate(path);
  };
  const buttonClass = 'bg-slate-500 rounded-2xl py-1 px-5 my-auto shadow-md shadow-gray-900';
  return (
    <div className="flex flex-row flex-nowrap relative">
      <div className="h-[10vh] text-slate-100 text-4xl flex m-auto cursor-pointer" onClick={() => navigateTo('/')}>
        <h1 className="m-auto">Warhammer</h1>
        <img src={headerImg} alt="header diplomacy icon" />
        <h1 className="m-auto">Planner</h1>
      </div>
      <div className="absolute right-0 top-1/4 text-xl text-slate-50">
        <button className={buttonClass} onClick={() => navigateTo('/about')}>
          About
        </button>
        <button className={buttonClass + ' ml-4'} onClick={() => navigateTo('/issues')}>
          Issues
        </button>
      </div>
    </div>
  );
};

export default Header;
