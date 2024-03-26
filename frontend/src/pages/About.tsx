import { useEffect } from 'react';
import useBulkMediaQueries from '../hooks/useBulkMediaQueries';

const About = () => {
  const { isShortWidth } = useBulkMediaQueries();
  const marginThickness = isShortWidth ? ' mx-2' : ' mx-32';

  useEffect(() => {
    document.title = 'Total Warhammer Planner - About';
  }, []);
  return (
    <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className={'flex flex-col place-content-center mt-4 select-text font-[Helvetica]' + marginThickness}>
        <div className="flex flex-row place-content-center">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">About</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          Total Warhammer Planner is a tool for exploring, building, and sharing character skill trees in Total
          Warhammer 2/3 and various mods.
          <br /> Want to figure out what all the various lords and heroes actually do without recruiting each of them?
          <br /> Check what various overhaul mods have done to your favorite units?
          <br /> Help someone new to Total Warhammer figure out how to build characters?
          <br /> Or maybe you are just a giant nerd like me and want to plan out what skills your going to have to skip.
          <br /> These are some of the things I wanted to address with this tool and hopefully you find it useful!
        </p>

        <div className="flex flex-row place-content-center mt-12">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Contact Me</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          You can message me on{' '}
          <a
            href="https://www.reddit.com/message/compose?to=Fearhorn&subject=&message="
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Reddit
          </a>{' '}
          or whitehelm on Discord for any questions or comments.
        </p>

        <div className="flex flex-row place-content-center mt-12">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">RPFM</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          Consider supporting Frodo, the developer of RPFM, without which this site and countless mods wouldn&apos;t be
          possible.
        </p>
        <a
          href="https://www.patreon.com/RPFM"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-2 px-2 flex flex-row border rounded-3xl bg-gray-500"
        >
          <svg viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m108.8135992 26.06720125c-26.468266 0-48.00213212 21.53066613-48.00213212 47.99733213 0 26.38653268 21.53386613 47.85426547 48.00213213 47.85426547 26.38639937 0 47.8530655-21.4677328 47.8530655-47.85426547 0-26.466666-21.46666613-47.99733213-47.85306547-47.99733213"
              fill="#f96753"
            />
            <path d="m23.333335 153.93333178v-127.86666388h23.46666576v127.8666639z" fill="#052a49" />
          </svg>
          <p className="text-gray-50 text-center pt-1">Frodo&apos;s Patreon</p>
        </a>

        <div className="flex flex-row place-content-center mt-12">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Ko-Fi</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          Development is extremely time consuming, if you find this tool useful and want to help cover server costs,
          keep this tool ad and tracking free, or just buy me a coffee by donating it is greatly appreciated.
        </p>

        <a href="https://ko-fi.com/D1D6EX4Y6" target="_blank" rel="noopener noreferrer" className="mx-auto mt-2">
          <img
            height="36"
            width="141"
            className="h-10"
            src="https://cdn.ko-fi.com/cdn/kofi3.png?v=3"
            alt="Buy Me a Coffee at ko-fi.com"
          />
        </a>

        <div className="flex flex-row place-content-center mt-12">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Potential Additions</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl mb-8">
          Some general items I would like to add/improve in the future, nothing is set in stone and some of these would
          take a lot of time, but I&apos;ve at least thought about them.
        </p>
        <ul className="list-disc list-inside mx-auto text-gray-200 text-2xl">
          <li>Character stats mount comparison</li>
          <li>Character stats skill integration</li>
          <li>Banner ancillary details</li>
          <li>Mobile UI</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
