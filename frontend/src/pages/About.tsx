import patreonButton from '../imgs/other/patreonButton.webp';

const About = () => {
  return (
    <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="flex flex-col place-content-center mt-4 mx-64 select-text font-[Helvetica]">
        <div className="flex flex-row place-content-center">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">About</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          Total Warhammer Planner is a tool for exploring, building, and sharing character skill trees in Total
          Warhammer 2/3 and various mods.
          <br /> Want to figure what all the various lords and heroes actually do without recruiting each of them?
          <br /> Check what various overhaul mods have done to your favorite units?
          <br /> Help someone new to Total Warhammer figure out how to build characters?
          <br /> Or maybe your just a giant nerd like me and want to plan out what skills your going to have to skip.
          <br /> These are some of the things I wanted to address with this tool and hopefully you find it useful!
        </p>

        <div className="flex flex-row place-content-center mt-12">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Patreon</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          Development and maintenance are extremely time consuming, if you find this tool useful and want to help cover
          server costs, keep this tool ad and tracking free, or just buy me a coffee by donating it is greatly
          appreciated.
        </p>
        <a href="https://patreon.com/twplanner" target="_blank" rel="noopener noreferrer" className="mx-auto mt-2">
          <img src={patreonButton} alt="Become a Patron" className="w-auto h-12 rounded-xl" width="300" height="100" />
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
        <ul className="list-disc list-inside">
          <li className="text-gray-200 text-2xl">TW2 quest item levels</li>
          <li className="text-gray-200 text-2xl">Brettonia vow details</li>
          <li className="text-gray-200 text-2xl">More spell/ability info (damage, entities, ect)</li>
          <li className="text-gray-200 text-2xl">Mobile UI</li>
          <li className="text-gray-200 text-2xl">Character stats</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
