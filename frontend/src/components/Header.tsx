import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import headerImg from '../imgs/header.webp';

const Header = () => {
  const isTabletOrMobileWidth = useMediaQuery({ maxWidth: 1023 });
  const isSmol = useMediaQuery({ maxWidth: 540 });

  let linksWidth;
  if (isSmol) {
    linksWidth = ' hidden';
  } else if (isTabletOrMobileWidth) {
    linksWidth = ' w-[27vw]';
  } else {
    linksWidth = ' w-[62vw]';
  }

  const buttonClass = 'bg-slate-500 rounded-2xl py-1 px-5 my-auto shadow-md shadow-gray-900 hover-scale';

  return (
    <div className="flex flex-row flex-nowrap h-[4.5rem]">
      <Link to={'/'} className="grow text-slate-100 text-4xl flex justify-start">
        <img
          src={headerImg}
          alt="header diplomacy icon"
          className="w-20 h-20 my-auto cursor-pointer drop-shadow-[0.1rem_0.1rem_0.5rem_rgba(0,0,0,0.7)]"
          draggable={false}
        />
        <h1 className="my-auto cursor-pointer text-shadow-md">
          Total Warhammer Planner
          <span className="text-base text-gray-400 align-super">WIP</span>
        </h1>
      </Link>

      <div className={'flex flex-row justify-end text-xl text-slate-50 my-auto' + linksWidth}>
        <Link className={buttonClass} to={'/about'}>
          About
        </Link>
        <Link className={buttonClass + ' ml-4'} to={'/issues'}>
          Issues
        </Link>
      </div>
    </div>
  );
};

export default Header;
