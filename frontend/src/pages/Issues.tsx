import IssuesSlider from '../components/IssuesSlider';
import useBulkMediaQueries from '../hooks/useBulkMediaQueries';
import placeholderImage from '../imgs/other/0placeholder.webp';

const Issues = () => {
  const { isShortWidth } = useBulkMediaQueries();
  const marginThickness = isShortWidth ? ' mx-2' : ' mx-32';
  return (
    <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className={'flex flex-col place-content-center mt-4 select-text font-[Helvetica]' + marginThickness}>
        <div className="flex flex-row place-content-center">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Report an Issue</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">
          If you think you&apos;ve found a bug or problem the easiest way to message me is on{' '}
          <a
            href="https://www.reddit.com/message/compose?to=Fearhorn&subject=&message="
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            Reddit
          </a>
          . Some notes to follow before messaging:
        </p>
        <ul className="list-disc list-inside mt-8 text-gray-200 text-2xl">
          <li>If the base game updated recently expect mods to be broken and/or outdated.</li>
          <li>Ensure the problem isn&apos;t already mentioned in the Known Issues section.</li>
          <li>
            When sending a message please include the following details, or use this template:
            <div className="border border-gray-300 bg-gray-800 w-fit ml-8 p-2 pr-12 rounded-xl">
              Browser Used:
              <br /> Game/Mod:
              <br /> Faction and Character:
              <br /> Description:
              <br /> Steps to Reproduce (If Applicable):
            </div>
          </li>
          <li>
            If you are experiencing an issue using Safari or IE, try another browser such as Chrome or Firefox before
            reporting it.
          </li>
          <li>
            If it is related to a pink icon (
            <img src={placeholderImage} alt="placeholder image" width="59" height="59" className="inline w-6 h-6" />
            ), that is a placeholder icon. If this is somewhere in a tooltip it is probably related to a hidden skill
            effect. I&apos;ve decided to generally leave hidden or background effects in for more information, but might
            try to prune more empty entries at some point. Please do not report these unless you think it is a real
            error, such as a character portrait, or skill icon.
          </li>
        </ul>

        <div className="flex flex-row place-content-center mt-12">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 mb-2 text-gray-200 text-shadow">Known Issues</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>

        <ul className="list-disc list-inside text-gray-200 text-2xl">
          <li>
            Tooltips that cant find space to fit in the viewport without conflicting with the cursor aren&apos;t visible
          </li>
          <li>Tooltips that overflow the viewport (eg. SFO2 | Any Shadow Caster | The Withering) are cut off</li>
          <li>
            In some cases each skill effect only has the first 3 related abilities linked for tooltips (eg. Sisters of
            Twilight Dragon Breath&apos;s)
          </li>
          <IssuesSlider title="Warhammer 3" bg="bg-gray-600">
            <li>Daemon Prince Reinforcer skill has a placeholder skill icon</li>
            <li>Belakor has duplicate Lord of Torment and Whispers in the Darkness skills in his tree</li>
            <li>
              Some poorly scaled skill icons depending on file path, mostly affects a couple mods like Lege3 Amon Chakai
            </li>

            <IssuesSlider title="Mods" bg="bg-gray-700">
              <li>
                Mixu 3 has several missing skill icons, and Wychwethyl&apos;s melee line is out of order, these are bugs
                in the mod itself
              </li>
              <li>
                Legendary Characters 3 Bassiano Dutra has several placeholder skills with no title or description, these
                are due to misplaced locs in the mod
              </li>
              <li>
                Legendary Characters 3 Amon Chakai missing right arrow on Legions of Madness (second last blue line)
              </li>
              <li>
                Radious 3 Lord of the Admiralty Monster Hunter skill icon placeholder (and duplicate skill effect? seems
                like copying from broken base game skill?)
              </li>
            </IssuesSlider>
          </IssuesSlider>

          <IssuesSlider title="Warhammer 2" bg="bg-gray-600">
            <li>Several lords dont have their Faction Effects linked, this likely wont change</li>
            <IssuesSlider title="Mods" bg="bg-gray-700">
              <li>Radious 2 mounts missing skill titles, see Wood Seer</li>
              <li>Radious 2 boxed issues, see Fimir Noble</li>
            </IssuesSlider>
          </IssuesSlider>
        </ul>
      </div>
    </div>
  );
};

export default Issues;
