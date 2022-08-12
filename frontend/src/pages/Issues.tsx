const Issues = () => {
  return (
    <div className="h-[88vh] bg-gray-700 w-full border border-gray-500 rounded-md px-2 py-2 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-600">
      <div className="flex flex-col place-content-center mt-16 mx-64 select-text">
        <div className="flex flex-row place-content-center">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 text-gray-200 text-shadow">Known Issues</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <ul className="list-disc list-inside">
          <li className="text-gray-200 text-2xl">
            Tooltips that cant find space to fit in the viewport without conflicting with the cursor aren&apos;t
            visible.
          </li>
          <li className="text-gray-200 text-2xl">
            Tooltips that overflow the viewport (eg. SFO2 Norsca Fimir Lord The Withering) are just cut off for the time
            being, need to pass scroll event onto the tooltip?
          </li>
          <li className="text-gray-200 text-2xl">SFO2 Son of Bretonnia has a hidden skill in skilltree</li>
          <li className="text-gray-200 text-2xl">
            Radious 2 needs a look over for portraits, names, spellLores, general bugs.
          </li>
          <li className="text-gray-200 text-2xl">Radious 2 Wood Seer mounts missing skill titles</li>
          <li className="text-gray-200 text-2xl">Radious 2 boxed issues, see Fimir Noble</li>
          <li className="text-gray-200 text-2xl">
            Artefacts 3 item effects are getting linked to background skills leaving the quest item blank.
          </li>
        </ul>

        <div className="flex flex-row place-content-center mt-14">
          <hr className="grow mt-[1.6rem] opacity-50" />
          <h1 className="w-max text-center text-5xl mx-2 text-gray-200 text-shadow">Report an Issue</h1>
          <hr className="grow mt-[1.6rem] opacity-50" />
        </div>
        <p className="text-center text-gray-200 text-2xl">Halp</p>
      </div>
    </div>
  );
};

export default Issues;
