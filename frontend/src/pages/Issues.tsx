import placeholderImage from '../imgs/other/0placeholder.webp';

const Issues = () => {
  return (
    <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="flex flex-col place-content-center mt-16 mx-64 select-text font-[Helvetica]">
        <div className="flex flex-row place-content-center">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Known Issues</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <ul className="list-disc list-inside">
          <li className="text-gray-200 text-2xl">
            Tooltips that cant find space to fit in the viewport without conflicting with the cursor aren&apos;t visible
          </li>
          <li className="text-gray-200 text-2xl">
            Tooltips that overflow the viewport (eg. SFO2 Norsca Fimir Lord The Withering) are just cut off for the time
            being
          </li>
          <li className="text-gray-200 text-2xl">
            Vanilla 3 Daemon Prince Reinforcer skill has a placeholder skill icon
          </li>
          <li className="text-gray-200 text-2xl">SFO2 Son of Bretonnia has a hidden skill in skilltree</li>
          <li className="text-gray-200 text-2xl">Radious 2/3 mounts missing skill titles, see Wood Seer</li>
          <li className="text-gray-200 text-2xl">Radious 2 boxed issues, see Fimir Noble</li>
          <li className="text-gray-200 text-2xl">Radious 3 Cathay Celestial Champion poorly scaled icon</li>
          <li className="text-gray-200 text-2xl">
            Radious 3 Lord of the Admiralty Monster Hunter skill icon placeholder (and duplicate skill effect? seems
            like copying from broken base game skill?)
          </li>
        </ul>

        <div className="flex flex-row place-content-center mt-14">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Report a Bug</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          If you think you&apos;ve found a bug the easiest way to message me is on{' '}
          <a
            href="https://www.reddit.com/user/Fearhorn/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Reddit
          </a>
          . Some notes to follow before messaging:
        </p>
        <ul className="list-disc list-inside mt-8">
          <li className="text-gray-200 text-2xl">
            Ensure the issue isn&apos;t in, or related to, something in the Known Issues section.
          </li>
          <li className="text-gray-200 text-2xl">
            If it is related to a pink icon (
            <img src={placeholderImage} alt="placeholder image" width="59" height="59" className="inline w-6 h-6" />
            ), that is a placeholder icon. If this is somewhere in a tooltip it is probably related to a hidden skill
            effect. I&apos;ve decided to generally leave hidden or background effects in for more information, but might
            try to prune more empty entries at some point. Please do not report these unless you think it is a real
            error, such as a character portrait, or skill icon.
          </li>
          <li className="text-gray-200 text-2xl">
            If you are experiencing an issue using Safari or IE, try another browser such as Chrome or Firefox before
            reporting it.
          </li>
          <li className="text-gray-200 text-2xl">
            When sending a message please include the following details: Browser Used, Related
            Game/Mod/Faction/Character, and steps to reproduce the bug if possible.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Issues;
